<template>
  <div>
    <!-- 고정 헤더 -->
    <div class="fixed-header">
      <div class="header-content-wrapper">
        <button class="header-btn" @click="goHome" :title="$t('ui.goHome')">⌂</button>
        <div class="header-title">{{ $t("headerTitle") }}</div>
        <select class="header-language-selector" v-model="locale" @change="changeLanguage">
          <option value="ko">{{ $t("ui.korean") }}</option>
          <option value="en">{{ $t("ui.english") }}</option>
        </select>
      </div>
    </div>

    <div class="partner-info-container content-with-header">
      <!-- 페이지 제목 -->
      <div class="page-title">{{ $t("ui.partnerInfo") }}</div>

    <!-- 내 정보 요약 (클릭 가능) -->
    <div class="my-info-summary clickable" @click="goToMyInfo">
      <div class="summary-title">{{ $t("ui.myInfo") }}</div>
      <div class="summary-content">
        <img
          :src="myZodiac?.image"
          :alt="$t(`zodiac.${myZodiac?.id}`)"
          class="summary-image"
        />
        <span class="summary-name">{{ $t(`zodiac.${myZodiac?.id}`) }}{{ $t("ui.zodiacSuffix") }}</span>
        <span class="summary-edit-hint">{{ $t("ui.clickToEdit") }}</span>
      </div>
    </div>

    <!-- 상대방 정보 선택 카드 -->
    <div class="info-card">
      <!-- 카드 헤더 -->
      <div class="card-header">
        <h2 class="card-title">{{ $t("ui.partnerInfo") }}</h2>
        <button @click="showBirthYearModal = true" class="dont-know-zodiac-btn">
          {{ locale === 'ko' ? '띠를 몰라요' : "Don't know zodiac" }}
        </button>
      </div>

      <!-- 띠 선택 (항상 표시) -->
      <div class="selection-content">
        <AnimalSelector
          :selected-zodiac="selectedZodiac"
          :on-select="setSelectedZodiac"
          title=""
        />
      </div>

      <!-- 띠 캐릭터 카드 (항상 표시) -->
      <div class="zodiac-character-section">
        <div class="character-card-wrapper" :class="{ 'flipping-first': isFlipping && isFirstSelection, 'flipping': isFlipping && !isFirstSelection, 'card-unselected': !displayedZodiac, 'card-back-entering': !displayedZodiac && isInitialLoad }">
          <div class="character-card">
            <!-- 카드 앞면 (동물 이미지 + 이름) -->
            <div class="card-front" v-if="displayedZodiac">
              <div class="card-inner">
                <img 
                  :src="displayedZodiac.characterImage" 
                  :alt="$t(`zodiac.${displayedZodiac.id}`)" 
                  class="feature-zodiac-image" 
                />
                <!-- 동물 이름 -->
                <div class="zodiac-name">
                  {{ $t(`zodiac.${displayedZodiac.id}`) }}
                </div>
              </div>
            </div>
            
            <!-- 카드 뒷면 (물음표) -->
            <div class="card-back" v-else>
              <div class="card-inner">
                <div class="card-pattern"></div>
                <div class="card-question">?</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 선택된 띠 특징 설명 -->
      <div v-if="selectedZodiac" v-show="showDescription" class="zodiac-description-section" :class="{ 'fade-in': animateDescription }">
        <!-- 핵심 문장 -->
        <div class="brief-description">
          {{ $t(selectedZodiac.wittyKey) }}
        </div>
        
        <!-- 부연 설명 -->
        <div class="detail-description">
          {{ $t(selectedZodiac.elaborationKey) }}
        </div>
      </div>
    </div>

    <!-- 생년 선택 모달 -->
    <div v-if="showBirthYearModal" class="modal-overlay" @click="showBirthYearModal = false">
      <div class="modal-content birth-year-modal" @click.stop>
        <div class="modal-header">
          <h3>{{ locale === 'ko' ? '생년 선택' : 'Select Birth Year' }}</h3>
          <button @click="showBirthYearModal = false" class="close-btn">×</button>
        </div>
        <div class="modal-body">
          <AnimalBirthYear
            :value="selectedBirthYear"
            :on-change="handleBirthYearSelect"
            title=""
          />
        </div>
      </div>
    </div>

    <!-- 네비게이션 버튼 -->
    <div v-if="showButton" class="navigation-buttons slide-up">
      <button 
        @click="checkCompatibility" 
        class="nav-btn bottom-btn"
        :disabled="!hasSelection"
        :class="{ disabled: !hasSelection }"
      >
        {{ $t("ui.checkCompatibilityBtn") }}
      </button>
    </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useI18n } from "vue-i18n";
import { getAnimalByYear, animalData, type ZodiacAnimal } from "@/lib/animal";
import AnimalSelector from "@/components/Animal-Selector.vue";
import AnimalBirthYear from "@/components/Animal-BirthYear.vue";

const router = useRouter();
const { t, locale } = useI18n();

// 상태 관리
const selectedZodiac = ref<ZodiacAnimal | undefined>();
const displayedZodiac = ref<ZodiacAnimal | undefined>();
const selectedBirthYear = ref("");
const showBirthYearModal = ref(false);
const isFlipping = ref(false);
const isFirstSelection = ref(true); // 첫 선택 여부 추적
const showDescription = ref(false);
const showButton = ref(false);
const animateDescription = ref(false);
const isInitialLoad = ref(true); // 초기 로드 여부 (카드 등장 애니메이션용)

// 내 정보 (URL 파라미터에서 가져옴)
const myZodiac = ref<ZodiacAnimal | null>(null);
const myYear = ref<string>("");

// 선택 완료 여부
const hasSelection = computed(() => {
  return !!selectedZodiac.value;
});

// 컴포넌트 마운트 시 내 정보 로드
onMounted(() => {
  // 저장된 언어 설정 불러오기
  const savedLocale = localStorage.getItem('zodiac-locale');
  if (savedLocale && (savedLocale === 'ko' || savedLocale === 'en')) {
    locale.value = savedLocale as 'ko' | 'en';
  }
  
  const urlParams = new URLSearchParams(window.location.search);
  const myZodiacId = urlParams.get("my");
  myYear.value = urlParams.get("myYear") || "";
  
  if (myZodiacId) {
    const zodiacData = animalData.find(z => z.id === myZodiacId);
    if (zodiacData) {
      myZodiac.value = zodiacData;
    } else {
      // 잘못된 내 정보인 경우 내 정보 선택으로 이동
      router.push("/animal/info-my");
    }
  } else {
    // 내 정보가 없는 경우 내 정보 선택으로 이동
    router.push("/animal/info-my");
  }
  
  // URL 파라미터에서 상대방 정보 복원
  const partnerZodiacId = urlParams.get("partner");
  if (partnerZodiacId) {
    const partnerData = animalData.find(z => z.id === partnerZodiacId);
    if (partnerData) {
      selectedZodiac.value = partnerData;
      displayedZodiac.value = partnerData; // 초기 로드 시 애니메이션 없이 표시
      isFirstSelection.value = false; // 이미 선택된 상태
      showDescription.value = true; // 초기 로드 시 설명 표시
      showButton.value = true; // 초기 로드 시 버튼 표시
      isInitialLoad.value = false; // 이미 선택된 경우 초기 애니메이션 스킵
    }
  }
  
  // 초기 카드 등장 애니메이션 완료 후 (0.3초 대기 + 1초 애니메이션 + 0.3초 물음표)
  setTimeout(() => {
    isInitialLoad.value = false;
  }, 1300);
});

// 띠 선택 (카드 뒤집기 효과)
const setSelectedZodiac = (zodiac: ZodiacAnimal) => {
  selectedZodiac.value = zodiac;
  
  // 기존 설명과 버튼 즉시 숨김
  showDescription.value = false;
  showButton.value = false;
  animateDescription.value = false;
  
  // 첫 선택인지 확인 (displayedZodiac가 없으면 첫 선택)
  const wasFirstSelection = !displayedZodiac.value;
  if (wasFirstSelection) {
    isFirstSelection.value = true;
  } else {
    isFirstSelection.value = false;
  }
  
  // 카드 뒤집기 애니메이션 시작
  isFlipping.value = true;
  
  // 0.3초 후 (90도 회전 시점) 이미지 변경
  setTimeout(() => {
    displayedZodiac.value = zodiac;
  }, 300);
  
  // 0.6초 후 카드 뒤집기 완료, 설명 표시
  setTimeout(() => {
    isFlipping.value = false;
    showDescription.value = true;
    animateDescription.value = true;
    
    // 애니메이션 완료 후 클래스 제거 (0.5초 후)
    setTimeout(() => {
      animateDescription.value = false;
    }, 500);
  }, 600);
  
  // 1.1초 후 (카드 완료 0.6초 + 애니메이션 0.5초) 버튼 슬라이드 업
  setTimeout(() => {
    showButton.value = true;
  }, 1100);
};

// 생년 선택 처리
const handleBirthYearSelect = (year: string) => {
  selectedBirthYear.value = year;
  
  // 생년으로 띠 계산하여 자동 선택
  if (year && parseInt(year)) {
    const zodiac = getAnimalByYear(parseInt(year));
    if (zodiac) {
      // 카드 뒤집기 효과와 함께 선택
      setSelectedZodiac(zodiac);
      // 모달 닫기
      showBirthYearModal.value = false;
    }
  }
};

// 홈으로 이동
const goHome = () => {
  router.push("/");
};

// 언어 변경
const changeLanguage = () => {
  // localStorage에 언어 설정 저장
  localStorage.setItem('zodiac-locale', locale.value);
};

// 궁합 확인
const checkCompatibility = () => {
  if (myZodiac.value && selectedZodiac.value) {
    // 궁합 결과로 이동 (Zodiac-Result.vue)
    const params = new URLSearchParams({
      my: myZodiac.value.id,
      partner: selectedZodiac.value.id
    });
    router.push(`/animal/result-brief?${params.toString()}`);
  }
};

// 내 정보 선택으로 이동
const goToMyInfo = () => {
  if (myZodiac.value) {
    const params = new URLSearchParams({
      my: myZodiac.value.id,
      myYear: myYear.value || ""
    });
    router.push(`/animal/info-my?${params.toString()}`);
  } else {
    router.push("/animal/info-my");
  }
};


</script>
