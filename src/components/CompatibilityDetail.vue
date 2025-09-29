<template>
  <div class="detail-container" data-testid="container-compatibility-detail">
    <!-- 헤더 -->
    <div class="detail-header">
      <h1 class="detail-title">💖 {{ $t(`zodiac.${myZodiac.id}`) }} × {{ $t(`zodiac.${partnerZodiac.id}`) }} {{ $t("compatibilityDetail.title") }} 💖</h1>
    </div>

    <!-- 상세 설명 카드 -->
    <div class="detail-card">
      <!-- 기본 설명 -->
      <div class="detail-section">
        <h2 class="section-title">📋 {{ $t("compatibilityDetail.basicDescription") }}</h2>
        <div class="section-content">
          {{ compatibilityDetail ? $t(compatibilityDetail.detailed.basicKey) : "" }}
        </div>
      </div>

      <!-- 주의할 점 -->
      <div class="detail-section">
        <h2 class="section-title">⚠️ {{ $t("compatibilityDetail.cautionPoints") }}</h2>
        <div class="section-content">
          {{ compatibilityDetail ? $t(compatibilityDetail.detailed.cautionKey) : "" }}
        </div>
      </div>

      <!-- 추천 데이트 -->
      <div class="detail-section">
        <h2 class="section-title">💕 {{ $t("compatibilityDetail.dateRecommendation") }}</h2>
        <div class="section-content">
          {{ compatibilityDetail ? $t(compatibilityDetail.detailed.dateRecommendationKey) : "" }}
        </div>
      </div>
    </div>

    <!-- 버튼 영역 -->
    <div class="button-area">
      <button @click="onBack" class="back-btn">
        ← {{ $t("compatibilityDetail.backToResult") }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getCompatibilityDetail, type ZodiacAnimal } from "@/lib/zodiac";
import { computed } from "vue";
import { useI18n } from "vue-i18n";

interface Props {
  myZodiac: ZodiacAnimal;
  partnerZodiac: ZodiacAnimal;
  onBack: () => void;
}

const props = defineProps<Props>();
const { t } = useI18n();

// 궁합 상세 정보
const compatibilityDetail = computed(() => {
  return getCompatibilityDetail(props.myZodiac, props.partnerZodiac);
});
</script>

<style scoped>
/* 상세설명 컨테이너 */
.detail-container {
  max-width: 50rem; /* 800px = 50rem */
  margin: 0 auto;
  padding: 1.25rem;
  background-color: #faf7f0;
  min-height: 100vh;
}

/* 상세설명 헤더 */
.detail-header {
  text-align: center;
  margin-bottom: 2.5rem;
}

/* 상세설명 타이틀 */
.detail-title {
  font-size: 1.8rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 0.625rem;
}

/* 상세설명 카드 */
.detail-card {
  background: white;
  border-radius: 0.75rem; /* 12px = 0.75rem */
  padding: 2rem;
  box-shadow: 0 0.125rem 0.5rem rgba(0, 0, 0, 0.1); /* 2px 8px = 0.125rem 0.5rem */
  border: 1px solid #e0e0e0;
  margin-bottom: 2rem;
}

/* 섹션 */
.detail-section {
  margin-bottom: 2rem;
}

.detail-section:last-child {
  margin-bottom: 0;
}

/* 섹션 제목 */
.section-title {
  font-size: 1.3rem;
  font-weight: bold;
  color: #e91e63;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #e91e63;
}

/* 섹션 내용 */
.section-content {
  font-size: 1rem;
  color: #333;
  line-height: 1.7;
  text-align: justify;
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 0.5rem; /* 8px = 0.5rem */
  border: 1px solid #e9ecef;
}

/* 버튼 영역 */
.button-area {
  text-align: center;
}

/* 뒤로가기 버튼 */
.back-btn {
  background: #e91e63;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: 500;
  border-radius: 0.5rem; /* 8px = 0.5rem */
  cursor: pointer;
  transition: background 0.2s;
}

/* 뒤로가기 버튼 호버 */
.back-btn:hover {
  background: #c2185b;
}

/* 모바일 반응형 */
@media (max-width: 768px) {
  .detail-container {
    padding: 1rem;
  }

  .detail-title {
    font-size: 1.5rem;
  }

  .detail-card {
    padding: 1.5rem;
  }

  .section-title {
    font-size: 1.2rem;
  }

  .section-content {
    font-size: 0.95rem;
    padding: 0.75rem;
  }
}
</style>
