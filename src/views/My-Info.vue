<template>
  <div>
    <!-- 고정 헤더 -->
    <div class="fixed-header">
      <button class="header-btn" @click="goHome" title="{{ $t('ui.goHome') }}">⌂</button>
      <div class="header-title">{{ $t("headerTitle") }}</div>
      <select class="header-language-selector" v-model="locale" @change="changeLanguage">
        <option value="ko">{{ $t("ui.korean") }}</option>
        <option value="en">{{ $t("ui.english") }}</option>
      </select>
    </div>

    <div class="my-info-container content-with-header">
      <!-- 페이지 제목 -->
      <div class="page-title">{{ $t("ui.myInfo") }}</div>

    <!-- 내 정보 선택 카드 -->
    <div class="info-card">
      <!-- 카드 헤더 -->
      <div class="card-header">
        <h2 class="card-title">{{ $t("ui.myInfo") }}</h2>
        <p class="card-subtitle">{{ $t("ui.selectMyInfoDesc") }}</p>
      </div>

      <!-- 선택 방식 탭 -->
      <div class="selection-tabs">
        <button
          class="tab-btn"
          :class="{ active: activeTab === 'zodiac' }"
          @click="setActiveTab('zodiac')"
        >
          {{ $t("ui.zodiacSelect") }}
        </button>
        <button
          class="tab-btn"
          :class="{ active: activeTab === 'year' }"
          @click="setActiveTab('year')"
        >
          {{ $t("ui.birthYearSelect") }}
        </button>
      </div>

      <!-- 띠 선택 -->
      <div v-if="activeTab === 'zodiac'" class="selection-content">
        <ZodiacSelector
          :selected-zodiac="selectedZodiac"
          :on-select="setSelectedZodiac"
          title=""
        />
      </div>

      <!-- 생년 선택 -->
      <div v-else class="selection-content">
        <ZodiacBirthYear
          :value="selectedBirthYear"
          :on-change="setSelectedBirthYear"
          title=""
        />
        <!-- 선택된 띠 표시 -->
        <div v-if="finalZodiac" class="selected-display">
          <img
            :src="finalZodiac.image"
            :alt="$t(`zodiac.${finalZodiac.id}`)"
            class="selected-image"
          />
          <h3 class="selected-name">
            {{ $t(`zodiac.${finalZodiac.id}`) }}{{ $t("ui.zodiacSuffix") }}
          </h3>
          <p class="selected-feature">{{ $t(finalZodiac.featureKey) }}</p>
        </div>
      </div>

      <!-- 선택된 띠 특징 (띠 선택 탭에서) -->
      <div v-if="activeTab === 'zodiac' && selectedZodiac" class="selected-feature-section">
        <p class="feature-text">{{ $t(selectedZodiac.featureKey) }}</p>
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
import LanguageSelector from "@/components/LanguageSelector.vue";
import ZodiacSelector from "@/components/Zodiac-Selector.vue";
import ZodiacBirthYear from "@/components/Zodiac-BirthYear.vue";

const router = useRouter();
const { t, locale } = useI18n();

// 컴포넌트 마운트 시 저장된 언어 설정 불러오기
onMounted(() => {
  const savedLocale = localStorage.getItem('zodiac-locale');
  if (savedLocale && (savedLocale === 'ko' || savedLocale === 'en')) {
    locale.value = savedLocale as 'ko' | 'en';
  }
});

// 상태 관리
const activeTab = ref<"zodiac" | "year">("zodiac");
const selectedZodiac = ref<ZodiacAnimal | undefined>();
const selectedBirthYear = ref("");

// 최종 선택된 띠 계산
const finalZodiac = computed(() => {
  if (activeTab.value === "zodiac") return selectedZodiac.value;
  if (activeTab.value === "year" && selectedBirthYear.value && parseInt(selectedBirthYear.value)) {
    return getZodiacByYear(parseInt(selectedBirthYear.value));
  }
  return undefined;
});

// 선택 완료 여부
const hasSelection = computed(() => {
  return !!finalZodiac.value;
});

// 탭 변경
const setActiveTab = (tab: "zodiac" | "year") => {
  activeTab.value = tab;
  // 탭 변경 시 다른 입력 방식의 값 초기화
  if (tab === "zodiac") {
    selectedBirthYear.value = "";
  } else {
    selectedZodiac.value = undefined;
  }
};

// 띠 선택
const setSelectedZodiac = (zodiac: ZodiacAnimal) => {
  selectedZodiac.value = zodiac;
};

// 생년 선택
const setSelectedBirthYear = (year: string) => {
  selectedBirthYear.value = year;
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
  if (finalZodiac.value) {
    // 선택된 내 정보를 URL 파라미터로 전달
    const params = new URLSearchParams({
      my: finalZodiac.value.id,
      myTab: activeTab.value,
      myYear: selectedBirthYear.value
    });
    router.push(`/zodiac/partner-info?${params.toString()}`);
  }
};

// 띠 ID로 띠 정보 찾기
const findZodiacById = (id: string): ZodiacAnimal | null => {
  return zodiacAnimals.find(z => z.id === id) || null;
};

// 컴포넌트 마운트 시 URL 파라미터에서 기존 선택 정보 복원
onMounted(() => {
  const urlParams = new URLSearchParams(window.location.search);
  const myZodiacId = urlParams.get("my");
  const myTabParam = urlParams.get("myTab");
  const myYearParam = urlParams.get("myYear");
  
  if (myZodiacId) {
    const zodiacData = findZodiacById(myZodiacId);
    if (zodiacData) {
      if (myTabParam === "zodiac") {
        activeTab.value = "zodiac";
        selectedZodiac.value = zodiacData;
      } else if (myTabParam === "year" && myYearParam) {
        activeTab.value = "year";
        selectedBirthYear.value = myYearParam;
      }
    }
  }
});
</script>
