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

    <div class="result-container content-with-header" data-testid="container-compatibility-result">
      <!-- 결과 제목 -->
      <div class="page-title">💖 {{ $t("ui.resultTitle") }} 💖</div>

    <!-- 결과 카드 -->
    <div class="result-card">
      <!-- 선택된 띠들 -->
      <div class="result-content">
        <div class="result-animal">
          <img :src="myZodiac.image" :alt="$t(`zodiac.${myZodiac.id}`)" />
          <h3>{{ $t(`zodiac.${myZodiac.id}`) }}</h3>
        </div>

        <div class="result-animal">
          <img
            :src="partnerZodiac.image"
            :alt="$t(`zodiac.${partnerZodiac.id}`)"
          />
          <h3>{{ $t(`zodiac.${partnerZodiac.id}`) }}</h3>
        </div>
      </div>

      <!-- 점수 표시 -->
      <div class="score-display">
        <div class="score-icon">💖</div>
        <div class="score-number" :class="getScoreColorClass(animatedScore)">
          {{ animatedScore }}
        </div>
      </div>

      <!-- 점수 바 -->
      <div class="result-progress">
        <div
          class="result-progress-bar animating"
          :class="getScoreColorClass(animatedScore)"
          :style="{ width: `${animatedScore}%` }"
        ></div>
      </div>

      <!-- 궁합 설명 -->
      <div
        class="result-description"
        :class="{
          'fade-in': true,
          'visible': showWitty,
          'has-content': showWitty,
        }"
      >
        <!-- 재치있고 간단한 설명 -->
        <div
          v-if="compatibilityDetail?.wittyKey"
          class="witty-description fade-in"
          :class="{ 'visible': showWitty }"
        >
          {{ $t(compatibilityDetail.wittyKey) }}
        </div>

        <!-- 부연설명 -->
        <div
          v-if="compatibilityDetail?.elaborationKey"
          class="elaboration-description fade-in"
          :class="{ 'visible': showElaboration }"
        >
          {{ $t(compatibilityDetail.elaborationKey) }}
        </div>
      </div>

      <!-- 버튼들 -->
      <div class="navigation-buttons">
        <button
          v-if="compatibilityDetail?.detailed"
          @click="() => onViewDetail(myZodiac, partnerZodiac)"
          class="nav-btn result-btn fade-in"
          :class="{ 'visible': showButton }"
          :disabled="!showButton"
        >
          {{ $t("compatibilityDetail.viewDetail") }}
        </button>
      </div>
    </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getCompatibilityDetail, getCompatibilityScore, type ZodiacAnimal } from "@/lib/zodiac";
import { computed, onMounted, ref } from "vue";
import { useI18n } from "vue-i18n";

interface Props {
  myZodiac: ZodiacAnimal;
  partnerZodiac: ZodiacAnimal;
  onBack: () => void;
  onViewDetail: (my: ZodiacAnimal, partner: ZodiacAnimal) => void;
}

const props = defineProps<Props>();
const { t, locale } = useI18n();

// 궁합 점수 계산
const compatibilityScore = computed(() => {
  return getCompatibilityScore(props.myZodiac, props.partnerZodiac);
});

// 궁합 상세 정보
const compatibilityDetail = computed(() => {
  return getCompatibilityDetail(props.myZodiac, props.partnerZodiac);
});

// 애니메이션을 위한 점수
const animatedScore = ref(0);
const showWitty = ref(false);
const showElaboration = ref(false);
const showButton = ref(false);

// 점수 색상 클래스
const getScoreColorClass = (score: number) => {
  if (score >= 80) return "score-very-good";
  if (score >= 60) return "score-good";
  if (score >= 40) return "score-fair";
  return "score-poor";
};

// 컴포넌트 마운트 시 애니메이션 시작
onMounted(() => {
  console.log('애니메이션 시작!', { targetScore: compatibilityScore.value });
  
  // 초기값 설정
  animatedScore.value = 0;
  
  // 약간의 지연 후 애니메이션 시작 (DOM 렌더링 완료 대기)
  setTimeout(() => {
    // 점수 애니메이션
    const duration = 2000; // 2초
    const steps = 60;
    const stepDuration = duration / steps;
    const targetScore = compatibilityScore.value;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      animatedScore.value = Math.round((targetScore * currentStep) / steps);
      
      if (currentStep >= steps) {
        clearInterval(timer);
        animatedScore.value = targetScore;
        console.log('점수 애니메이션 완료!', animatedScore.value);
        
        // 순차적 등장 애니메이션
        // 1. 점수 애니메이션 완료 후 0.5초 뒤 witty 표시
        setTimeout(() => {
          showWitty.value = true;
          console.log('Witty 표시!', showWitty.value);
        }, 500);
        
        // 2. witty 표시 후 0.5초 뒤 요약문 표시
        setTimeout(() => {
          showElaboration.value = true;
          console.log('Elaboration 표시!', showElaboration.value);
        }, 1000);
        
        // 3. 요약문 표시 후 0.5초 뒤 버튼 활성화
        setTimeout(() => {
          showButton.value = true;
          console.log('버튼 활성화!', showButton.value);
        }, 1500);
      }
    }, stepDuration);
  }, 100); // 100ms 지연
});

// 홈으로 이동
const goHome = () => {
  window.location.href = "/";
};

// 언어 변경
const changeLanguage = () => {
  // locale은 자동으로 반응형으로 업데이트됩니다
};
</script>
