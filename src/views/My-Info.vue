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

    <div class="my-info-container content-with-header">
      <!-- 페이지 제목 -->
      <div class="page-title">{{ $t("ui.myInfo") }}</div>

    <!-- 내 정보 선택 카드 -->
    <div class="info-card">
      <!-- 카드 헤더 -->
      <div class="card-header">
        <h2 class="card-title">{{ $t("ui.myInfo") }}</h2>
        <button @click="showBirthYearModal = true" class="dont-know-zodiac-btn">
          {{ locale === 'ko' ? '띠를 몰라요' : "Don't know my zodiac" }}
        </button>
      </div>

      <!-- 띠 선택 (항상 표시) -->
      <div class="selection-content">
        <ZodiacSelector
          :selected-zodiac="selectedZodiac"
          :on-select="setSelectedZodiac"
          title=""
        />
      </div>

      <!-- 띠 캐릭터 카드 (항상 표시) -->
      <div class="zodiac-character-section">
        <div class="character-card-wrapper" :class="{ flipping: isFlipping }">
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
        <div class="witty-description">
          {{ $t(selectedZodiac.wittyKey) }}
        </div>
        
        <!-- 부연 설명 -->
        <div class="elaboration-description">
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
          <ZodiacBirthYear
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
        @click="goToPartnerInfo" 
        class="nav-btn next-btn"
        :disabled="!hasSelection"
        :class="{ disabled: !hasSelection }"
      >
        {{ $t("ui.selectPartnerInfoBtn") }}
      </button>
    </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useI18n } from "vue-i18n";
import { getZodiacByYear, zodiacAnimals, type ZodiacAnimal } from "@/lib/zodiac";
import ZodiacSelector from "@/components/Zodiac-Selector.vue";
import ZodiacBirthYear from "@/components/Zodiac-BirthYear.vue";

const router = useRouter();
const { t, locale } = useI18n();

// 상태 관리
const selectedZodiac = ref<ZodiacAnimal | undefined>();
const displayedZodiac = ref<ZodiacAnimal | undefined>();
const selectedBirthYear = ref("");
const showBirthYearModal = ref(false);
const isFlipping = ref(false);
const showDescription = ref(false);
const showButton = ref(false);
const animateDescription = ref(false);

// 선택 완료 여부
const hasSelection = computed(() => {
  return !!selectedZodiac.value;
});

// 띠 선택 (카드 뒤집기 효과)
const setSelectedZodiac = (zodiac: ZodiacAnimal) => {
  selectedZodiac.value = zodiac;
  
  // 기존 설명과 버튼 즉시 숨김
  showDescription.value = false;
  showButton.value = false;
  animateDescription.value = false;
  
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
  
  // 1.1초 후 (카드 완료 + 0.5초) 버튼 표시 (설명은 유지)
  setTimeout(() => {
    showButton.value = true;
  }, 1100);
};

// 생년 선택 처리
const handleBirthYearSelect = (year: string) => {
  selectedBirthYear.value = year;
  
  // 생년으로 띠 계산하여 자동 선택
  if (year && parseInt(year)) {
    const zodiac = getZodiacByYear(parseInt(year));
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

// 상대방 정보 선택으로 이동
const goToPartnerInfo = () => {
  if (selectedZodiac.value) {
    // 선택된 내 정보를 URL 파라미터로 전달
    const params = new URLSearchParams({
      my: selectedZodiac.value.id,
      myYear: selectedBirthYear.value || ""
    });
    router.push(`/zodiac/partner-info?${params.toString()}`);
  }
};


// 컴포넌트 마운트 시 초기화
onMounted(() => {
  // 저장된 언어 설정 불러오기
  const savedLocale = localStorage.getItem('zodiac-locale');
  if (savedLocale && (savedLocale === 'ko' || savedLocale === 'en')) {
    locale.value = savedLocale as 'ko' | 'en';
  }
  
  // URL 파라미터에서 기존 선택 정보 복원
  const urlParams = new URLSearchParams(window.location.search);
  const myZodiacId = urlParams.get("my");
  const myYearParam = urlParams.get("myYear");
  
  if (myZodiacId) {
    const zodiacData = zodiacAnimals.find(z => z.id === myZodiacId);
    if (zodiacData) {
      selectedZodiac.value = zodiacData;
      displayedZodiac.value = zodiacData; // 초기 로드 시 애니메이션 없이 표시
      showDescription.value = true; // 초기 로드 시 설명 표시
      showButton.value = true; // 초기 로드 시 버튼 표시
      if (myYearParam) {
        selectedBirthYear.value = myYearParam;
      }
    }
  }
});
</script>
