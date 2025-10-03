<template>
  <div class="about-page">
    <div class="container">
      <h1 class="page-title">{{ $t("about.title") }}</h1>
      
      <div class="content-section">
        <h2>{{ $t("about.whatIs") }}</h2>
        <p>{{ $t("about.description") }}</p>
      </div>

      <div class="content-section">
        <h2>{{ $t("about.features") }}</h2>
        <ul class="feature-list">
          <li>{{ $t("about.feature1") }}</li>
          <li>{{ $t("about.feature2") }}</li>
          <li>{{ $t("about.feature3") }}</li>
          <li>{{ $t("about.feature4") }}</li>
        </ul>
      </div>

      <div class="content-section">
        <h2>{{ $t("about.purpose") }}</h2>
        <p>{{ $t("about.purposeDescription") }}</p>
      </div>

      <div class="content-section">
        <h2>{{ $t("about.future") }}</h2>
        <p>{{ $t("about.futureDescription") }}</p>
      </div>

      <div class="content-section">
        <h2>{{ $t("about.contact") }}</h2>
        <p>{{ $t("about.contactDescription") }}</p>
        <p class="contact-email">
          <a href="mailto:support@loveindex.com">{{ $t("about.email") }}</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';

// About 페이지 컴포넌트
onMounted(() => {
  // 페이지 진입 시 body에 body-home 클래스 추가
  document.body.classList.add('body-home');
});

onUnmounted(() => {
  // 페이지 떠날 때 body-home 클래스 제거
  document.body.classList.remove('body-home');
});
</script>

