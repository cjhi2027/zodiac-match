<template>
  <div class="about-page">
    <div class="container">
      <h1 class="page-title">{{ t("about.title") }}</h1>
      
      <div class="content-section">
        <h2>{{ t("about.whatIs") }}</h2>
        <p>{{ t("about.description") }}</p>
      </div>

      <div class="content-section">
        <h2>{{ t("about.features") }}</h2>
        <ul class="feature-list">
          <li>{{ t("about.feature1") }}</li>
          <li>{{ t("about.feature2") }}</li>
          <li>{{ t("about.feature3") }}</li>
          <li>{{ t("about.feature4") }}</li>
        </ul>
      </div>

      <div class="content-section">
        <h2>{{ t("about.purpose") }}</h2>
        <p>{{ t("about.purposeDescription") }}</p>
      </div>

      <div class="content-section">
        <h2>{{ t("about.future") }}</h2>
        <p>{{ t("about.futureDescription") }}</p>
      </div>

      <div class="content-section">
        <h2>{{ t("about.contact") }}</h2>
        <p>{{ t("about.contactDescription") }}</p>
        <p class="contact-email">
          <a href="mailto:syhi5093@gmail.com">{{ t("about.email") }}</a>
        </p>
      </div>
    </div>
  </div>
  
  <!-- 돌아가기 버튼 - 페이지 컨테이너 밖으로 이동 -->
  <div v-if="showButton" class="navigation-buttons">
    <button @click="goBack" class="nav-btn bottom-btn slide-up">
      돌아가기
    </button>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';

const { t } = useI18n();
const router = useRouter();
const showButton = ref(false);

// About 페이지 컴포넌트
onMounted(() => {
  // 페이지 진입 시 body에 body-home 클래스 추가
  document.body.classList.add('body-home');
  
  // 1초 후 버튼 표시
  setTimeout(() => {
    showButton.value = true;
  }, 1000);
});

onUnmounted(() => {
  // 페이지 떠날 때 body-home 클래스 제거
  document.body.classList.remove('body-home');
});

// 돌아가기 함수
const goBack = () => {
  router.back();
};
</script>

