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
        <div v-if="compatibilityDetail" class="witty-description">
          {{ showMessage ? $t(compatibilityDetail.wittyKey) : "" }}
        </div>
        
        <!-- 부연설명 -->
        <div v-if="compatibilityDetail" class="elaboration-description">
          {{ showMessage ? $t(compatibilityDetail.elaborationKey) : "" }}
        </div>
      </div>

      <!-- 버튼 영역 -->
      <div class="button-area" :class="{ 'fade-in': showButton }">
        <!-- 상세설명 보기 버튼 -->
        <button
          v-if="compatibilityDetail"
          @click="onViewDetail"
          class="detail-btn"
          :disabled="!showButton"
        >
          📋 {{ $t("compatibilityDetail.viewDetail") }}
        </button>
        
        <!-- 뒤로가기 버튼 -->
        <button
          @click="onBack"
          class="back-btn"
          :disabled="!showButton"
        >
          ← {{ $t("ui.checkAgain") }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  getCompatibilityDetail,
  getCompatibilityScore,
  type ZodiacAnimal,
} from "@/lib/zodiac";
import { computed, onMounted, ref } from "vue";
import { useI18n } from "vue-i18n";

interface Props {
  myZodiac: ZodiacAnimal;
  partnerZodiac: ZodiacAnimal;
  onBack: () => void;
  onViewDetail?: (myZodiac: ZodiacAnimal, partnerZodiac: ZodiacAnimal) => void;
}

const props = defineProps<Props>();
const { t } = useI18n();

// 궁합 점수 계산
const score = computed(() => {
  return getCompatibilityScore(props.myZodiac, props.partnerZodiac);
});

// 애니메이션용 점수
const animatedScore = ref(0);

// 궁합 상세 정보
const compatibilityDetail = computed(() => {
  return getCompatibilityDetail(props.myZodiac, props.partnerZodiac);
});

// 점수에 따른 색상 (동적)
const getScoreColorClass = (currentScore: number) => {
  if (currentScore >= 90) return "blue";
  if (currentScore >= 80) return "green";
  if (currentScore >= 70) return "yellow";
  if (currentScore >= 60) return "yellow";
  return "red";
};

// 애니메이션 상태
const showMessage = ref(false);
const showButton = ref(false);

// 점수 카운트 애니메이션
const animateScore = () => {
  const targetScore = score.value;
  const duration = 2000; // 2초
  const steps = 60; // 60프레임
  const stepTime = duration / steps;
  const increment = targetScore / steps;

  let currentStep = 0;

  const timer = setInterval(() => {
    currentStep++;
    animatedScore.value = Math.min(
      Math.floor(increment * currentStep),
      targetScore
    );

    if (currentStep >= steps) {
      clearInterval(timer);
      animatedScore.value = targetScore;

      // 점수 애니메이션 완료 후 0.5초 뒤 메시지 표시
      setTimeout(() => {
        showMessage.value = true;

        // 메시지 표시 후 버튼 표시
        setTimeout(() => {
          showButton.value = true;
        }, 500);
      }, 500); // 0.5초로 변경
    }
  }, stepTime);
};

// 상세설명 보기 핸들러
const onViewDetail = () => {
  if (props.onViewDetail) {
    props.onViewDetail(props.myZodiac, props.partnerZodiac);
  }
};

// 컴포넌트 마운트 시 애니메이션 시작
onMounted(() => {
  setTimeout(() => {
    animateScore();
  }, 500); // 0.5초 후 시작
});
</script>
