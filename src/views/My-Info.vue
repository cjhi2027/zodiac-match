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

      <!-- 선택된 띠 캐릭터 이미지 -->
      <div v-if="selectedZodiac" class="zodiac-character-section">
        <img :src="selectedZodiac.characterImage" :alt="$t(`zodiac.${selectedZodiac.id}`)" class="feature-zodiac-image" />
      </div>

      <!-- 선택된 띠 특징 설명 -->
      <div v-if="selectedZodiac" class="zodiac-description-section">
        <p class="feature-text">{{ $t(selectedZodiac.featureKey) }}</p>
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
    <div class="navigation-buttons">
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
const selectedBirthYear = ref("");
const showBirthYearModal = ref(false);

// 선택 완료 여부
const hasSelection = computed(() => {
  return !!selectedZodiac.value;
});

// 띠 선택
const setSelectedZodiac = (zodiac: ZodiacAnimal) => {
  selectedZodiac.value = zodiac;
};

// 생년 선택 처리
const handleBirthYearSelect = (year: string) => {
  selectedBirthYear.value = year;
  
  // 생년으로 띠 계산하여 자동 선택
  if (year && parseInt(year)) {
    const zodiac = getZodiacByYear(parseInt(year));
    if (zodiac) {
      selectedZodiac.value = zodiac;
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
      if (myYearParam) {
        selectedBirthYear.value = myYearParam;
      }
    }
  }
});
</script>
