<template>
  <div>
    <!-- 고정 헤더 -->
    <div class="fixed-header">
      <button class="header-btn" @click="goHome" title="{{ $t('ui.goHome') }}">⌂</button>
      <div class="header-title">12간지 띠 궁합</div>
      <select class="header-language-selector" v-model="locale" @change="changeLanguage">
        <option value="ko">{{ $t("ui.korean") }}</option>
        <option value="en">{{ $t("ui.english") }}</option>
      </select>
    </div>

    <div class="partner-info-container content-with-header">
      <!-- 페이지 제목 -->
      <div class="page-title">{{ $t("ui.partnerInfo") }}</div>

    <!-- 내 정보 요약 (클릭 가능) -->
    <div class="my-info-summary clickable" @click="goToMyInfo">
      <div class="summary-title">내 정보</div>
      <div class="summary-content">
        <img
          :src="myZodiac?.image"
          :alt="$t(`zodiac.${myZodiac?.id}`)"
          class="summary-image"
        />
        <span class="summary-name">{{ $t(`zodiac.${myZodiac?.id}`) }}{{ $t("ui.zodiacSuffix") }}</span>
        <span class="summary-edit-hint">변경</span>
      </div>
    </div>

    <!-- 상대방 정보 선택 카드 -->
    <div class="info-card">
      <!-- 카드 헤더 -->
      <div class="card-header">
        <h2 class="card-title">상대방 정보</h2>
        <p class="card-subtitle">{{ $t("ui.selectPartnerInfoDesc") }}</p>
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
        @click="checkCompatibility" 
        class="nav-btn result-btn"
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
import { getZodiacByYear, zodiacAnimals, type ZodiacAnimal } from "@/lib/zodiac";
import LanguageSelector from "@/components/LanguageSelector.vue";
import ZodiacSelector from "@/components/Zodiac-Selector.vue";
import ZodiacBirthYear from "@/components/Zodiac-BirthYear.vue";

const router = useRouter();
const { t, locale } = useI18n();

// 상태 관리
const activeTab = ref<"zodiac" | "year">("zodiac");
const selectedZodiac = ref<ZodiacAnimal | undefined>();
const selectedBirthYear = ref("");

// 내 정보 (URL 파라미터에서 가져옴)
const myZodiac = ref<ZodiacAnimal | null>(null);
const myTab = ref<string>("");
const myYear = ref<string>("");

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

// 컴포넌트 마운트 시 내 정보 로드
onMounted(() => {
  const urlParams = new URLSearchParams(window.location.search);
  const myZodiacId = urlParams.get("my");
  myTab.value = urlParams.get("myTab") || "";
  myYear.value = urlParams.get("myYear") || "";
  
  if (myZodiacId) {
    const zodiacData = zodiacAnimals.find(z => z.id === myZodiacId);
    if (zodiacData) {
      myZodiac.value = zodiacData;
    } else {
      // 잘못된 내 정보인 경우 내 정보 선택으로 이동
      router.push("/zodiac/my-info");
    }
  } else {
    // 내 정보가 없는 경우 내 정보 선택으로 이동
    router.push("/zodiac/my-info");
  }
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
  // locale은 자동으로 반응형으로 업데이트됩니다
};

// 내 정보 선택으로 이동 (내 정보도 함께 전달)
const goToMyInfo = () => {
  if (myZodiac.value) {
    const params = new URLSearchParams({
      my: myZodiac.value.id,
      myTab: myTab.value,
      myYear: myYear.value
    });
    router.push(`/zodiac/my-info?${params.toString()}`);
  } else {
    router.push("/zodiac/my-info");
  }
};


// 궁합 확인
const checkCompatibility = () => {
  if (myZodiac.value && finalZodiac.value) {
    // 궁합 결과로 이동 (Zodiac-Result.vue)
    const params = new URLSearchParams({
      my: myZodiac.value.id,
      partner: finalZodiac.value.id
    });
    router.push(`/zodiac/result?${params.toString()}`);
  }
};
</script>
