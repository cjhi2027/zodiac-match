<template>
  <div class="result-container" data-testid="container-compatibility-result">
    <!-- 헤더 -->
    <div class="result-header">
      <h1 class="result-title">💖 {{ $t("ui.resultTitle") }} 💖</h1>
    </div>

    <!-- 결과 카드 -->
    <div class="result-card">
      <!-- 선택된 띠들 -->
      <div class="result-content">
        <div class="result-animal">
          <img :src="myZodiac.image" :alt="$t(`zodiac.${myZodiac.id}`)" />
          <h3>{{ $t(`zodiac.${myZodiac.id}`) }}</h3>
        </div>

        <div class="result-score">
          <div class="score-icon">💖</div>
          <div class="score-number" :class="getScoreColorClass(animatedScore)">
            {{ animatedScore }}{{ $t("ui.yearSuffix") }}
          </div>
        </div>

        <div class="result-animal">
          <img
            :src="partnerZodiac.image"
            :alt="$t(`zodiac.${partnerZodiac.id}`)"
          />
          <h3>{{ $t(`zodiac.${partnerZodiac.id}`) }}</h3>
        </div>
      </div>

      <!-- 점수 바 -->
      <div class="result-progress">
        <div
          class="result-progress-bar"
          :class="getScoreColorClass(animatedScore)"
          :style="{ width: `${animatedScore}%` }"
        ></div>
      </div>

      <!-- 궁합 설명 -->
      <div
        class="result-description"
        :class="{
          'fade-in': showMessage,
          'has-content': showMessage,
        }"
      >
        <!-- 재치있고 간단한 설명 -->
        <div
          v-if="compatibilityDetail?.wittyKey"
          class="witty-description"
          :class="{ 'fade-in': showMessage }"
        >
          {{ $t(compatibilityDetail.wittyKey) }}
        </div>

        <!-- 부연설명 -->
        <div
          v-if="compatibilityDetail?.elaborationKey"
          class="elaboration-description"
          :class="{ 'fade-in': showMessage }"
        >
          {{ $t(compatibilityDetail.elaborationKey) }}
        </div>
      </div>

      <!-- 버튼들 -->
      <div class="result-buttons">
        <button @click="onBack" class="back-btn">
          ← {{ $t("ui.checkAgain") }}
        </button>
        <button
          v-if="compatibilityDetail?.detailed"
          @click="() => onViewDetail(myZodiac, partnerZodiac)"
          class="detail-btn"
        >
          {{ $t("compatibilityDetail.viewDetail") }}
        </button>
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
const { t } = useI18n();

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
const showMessage = ref(false);

// 점수 색상 클래스
const getScoreColorClass = (score: number) => {
  if (score >= 80) return "score-very-good";
  if (score >= 60) return "score-good";
  if (score >= 40) return "score-fair";
  return "score-poor";
};

// 컴포넌트 마운트 시 애니메이션 시작
onMounted(() => {
  // 점수 애니메이션
  const duration = 1500; // 1.5초
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
      // 점수 애니메이션 완료 후 메시지 표시
      setTimeout(() => {
        showMessage.value = true;
      }, 200);
    }
  }, stepDuration);
});
</script>
