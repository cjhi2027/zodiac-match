<template>
  <div class="matching-container" data-testid="container-homepage">
    <!-- 헤더 -->
    <div class="header">
      <div class="header-content">
        <div class="header-text">
          <h1 class="title" data-testid="text-main-title">
            💖 {{ $t("app.title") }} 💖
          </h1>
          <p class="subtitle">{{ $t("app.subtitle") }}</p>
        </div>
        <div class="header-controls">
          <LanguageSelector />
        </div>
      </div>
    </div>

    <div class="content-wrapper">
      <!-- 내 정보 섹션 -->
      <div class="info-section" data-testid="card-my-info">
        <h2 class="section-title">{{ $t("ui.myInfo") }}</h2>

        <div class="gender-selector">
          <button
            class="gender-btn"
            :class="{ active: myActiveIndex === 0 }"
            @click="handleMyTabChange(0)"
          >
            {{ $t("ui.zodiacSelect") }}
          </button>
          <button
            class="gender-btn-outline"
            :class="{ active: myActiveIndex === 1 }"
            @click="handleMyTabChange(1)"
          >
            {{ $t("ui.birthYearSelect") }}
          </button>
        </div>

        <div v-if="myActiveIndex === 0">
          <ZodiacSelector
            :selected-zodiac="myZodiac"
            :on-select="setMyZodiac"
            title=""
          />
        </div>
        <div v-else>
          <BirthYearSelector
            :value="myBirthYear"
            :on-change="setMyBirthYear"
            title=""
          />
          <!-- 내 생년 띠 표시 -->
          <div class="selected-zodiac-display">
            <img
              :src="getMyFinalZodiac()?.image || '/attached_assets/animal/animal_unknown.png'"
              :alt="getMyFinalZodiac()?.name || 'Unknown'"
              class="selected-zodiac-image"
            />
            <h3 class="selected-zodiac-name">
              {{
                getMyFinalZodiac()?.id
                  ? $t(`zodiac.${getMyFinalZodiac()?.id}`)
                  : ""
              }}{{ $t("ui.zodiacSuffix") }}
            </h3>
          </div>
        </div>

        <!-- 내 띠 특징 문구 (info-section 안, 아래 선 기준) -->
        <div
          class="zodiac-feature-text"
          :class="{
            'has-content': myActiveIndex === 0 ? myZodiac : getMyFinalZodiac(),
          }"
        >
          {{
            myActiveIndex === 0
              ? myZodiac
                ? $t(myZodiac.featureKey)
                : ""
              : getMyFinalZodiac()
              ? $t(getMyFinalZodiac()?.featureKey || "")
              : ""
          }}
        </div>
      </div>

      <!-- 상대방 정보 섹션 -->
      <div class="info-section" data-testid="card-partner-info">
        <h2 class="section-title">{{ $t("ui.partnerInfo") }}</h2>

        <div class="gender-selector">
          <button
            class="gender-btn"
            :class="{ active: partnerActiveIndex === 0 }"
            @click="handlePartnerTabChange(0)"
          >
            {{ $t("ui.zodiacSelect") }}
          </button>
          <button
            class="gender-btn-outline"
            :class="{ active: partnerActiveIndex === 1 }"
            @click="handlePartnerTabChange(1)"
          >
            {{ $t("ui.birthYearSelect") }}
          </button>
        </div>

        <div v-if="partnerActiveIndex === 0">
          <ZodiacSelector
            :selected-zodiac="partnerZodiac"
            :on-select="setPartnerZodiac"
            title=""
          />
        </div>
        <div v-else>
          <BirthYearSelector
            :value="partnerBirthYear"
            :on-change="setPartnerBirthYear"
            title=""
          />
          <!-- 상대방 생년 띠 표시 -->
          <div class="selected-zodiac-display">
            <img
              :src="getPartnerFinalZodiac()?.image || '/attached_assets/animal/animal_unknown.png'"
              :alt="getPartnerFinalZodiac()?.name || 'Unknown'"
              class="selected-zodiac-image"
            />
            <h3 class="selected-zodiac-name">
              {{
                getPartnerFinalZodiac()?.id
                  ? $t(`zodiac.${getPartnerFinalZodiac()?.id}`)
                  : ""
              }}{{ $t("ui.zodiacSuffix") }}
            </h3>
          </div>
        </div>

        <!-- 상대방 띠 특징 문구 (info-section 안, 아래 선 기준) -->
        <div
          class="zodiac-feature-text"
          :class="{
            'has-content':
              partnerActiveIndex === 0
                ? partnerZodiac
                : getPartnerFinalZodiac(),
          }"
        >
          {{
            partnerActiveIndex === 0
              ? partnerZodiac
                ? $t(partnerZodiac.featureKey)
                : ""
              : getPartnerFinalZodiac()
              ? $t(getPartnerFinalZodiac()?.featureKey || "")
              : ""
          }}
        </div>
      </div>
    </div>

    <!-- 궁합 확인 버튼 -->
    <div class="button-section">
      <button
        class="compatibility-btn"
        @click="handleCheckCompatibility"
        :disabled="!canCheckCompatibility"
        data-testid="button-check-compatibility"
      >
        📋 {{ $t("ui.checkCompatibility") }}
      </button>
      <p v-if="!canCheckCompatibility" class="info-text">
        {{ $t("ui.inputRequired") }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getZodiacByYear, type ZodiacAnimal } from "@/lib/zodiac";
import { computed, ref } from "vue";
import { useI18n } from "vue-i18n";
import BirthYearSelector from "./BirthYearSelector.vue";
import LanguageSelector from "./LanguageSelector.vue";
import ZodiacSelector from "./ZodiacSelector.vue";

interface Props {
  onCheckCompatibility: (
    myZodiac: ZodiacAnimal,
    partnerZodiac: ZodiacAnimal
  ) => void;
}

const props = defineProps<Props>();
const { t } = useI18n();

// 내 정보
const myZodiac = ref<ZodiacAnimal | undefined>();
const myBirthYear = ref("");
const myActiveIndex = ref(0);

// 상대방 정보
const partnerZodiac = ref<ZodiacAnimal | undefined>();
const partnerBirthYear = ref("");
const partnerActiveIndex = ref(0);

// 내 최종 띠 계산
const getMyFinalZodiac = (): ZodiacAnimal | undefined => {
  if (myActiveIndex.value === 0) return myZodiac.value;
  if (
    myActiveIndex.value === 1 &&
    myBirthYear.value &&
    parseInt(myBirthYear.value)
  ) {
    return getZodiacByYear(parseInt(myBirthYear.value));
  }
  return undefined;
};

// 상대방 최종 띠 계산
const getPartnerFinalZodiac = (): ZodiacAnimal | undefined => {
  if (partnerActiveIndex.value === 0) return partnerZodiac.value;
  if (
    partnerActiveIndex.value === 1 &&
    partnerBirthYear.value &&
    parseInt(partnerBirthYear.value)
  ) {
    return getZodiacByYear(parseInt(partnerBirthYear.value));
  }
  return undefined;
};

// 궁합 확인 가능 여부
const canCheckCompatibility = computed(() => {
  const myFinal = getMyFinalZodiac();
  const partnerFinal = getPartnerFinalZodiac();
  return !!(myFinal && partnerFinal);
});

// 궁합 확인 처리
const handleCheckCompatibility = () => {
  const myFinal = getMyFinalZodiac();
  const partnerFinal = getPartnerFinalZodiac();

  if (myFinal && partnerFinal) {
    console.log(
      "Checking compatibility:",
      myFinal.name,
      "vs",
      partnerFinal.name
    );
    props.onCheckCompatibility(myFinal, partnerFinal);
  }
};

// 탭 변경 처리
const handleMyTabChange = (newIndex: number) => {
  myActiveIndex.value = newIndex;
  // 탭 변경 시 다른 입력 방식의 값 초기화
  if (newIndex === 0) {
    myBirthYear.value = "";
  } else {
    myZodiac.value = undefined;
  }
};

const handlePartnerTabChange = (newIndex: number) => {
  partnerActiveIndex.value = newIndex;
  // 탭 변경 시 다른 입력 방식의 값 초기화
  if (newIndex === 0) {
    partnerBirthYear.value = "";
  } else {
    partnerZodiac.value = undefined;
  }
};

// 상태 설정 함수들
const setMyZodiac = (zodiac: ZodiacAnimal) => {
  myZodiac.value = zodiac;
};

const setPartnerZodiac = (zodiac: ZodiacAnimal) => {
  partnerZodiac.value = zodiac;
};

const setMyBirthYear = (year: string) => {
  myBirthYear.value = year;
};

const setPartnerBirthYear = (year: string) => {
  partnerBirthYear.value = year;
};
</script>
