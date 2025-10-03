<template>
  <div class="terms-page">
    <div class="container">
      <h1 class="page-title">{{ $t("terms.title") }}</h1>
      
      <div class="content-section">
        <p class="intro">{{ $t("terms.intro") }}</p>
        <p class="last-updated">{{ $t("terms.lastUpdated") }}</p>
      </div>

      <div class="content-section">
        <h2>{{ $t("terms.service.title") }}</h2>
        <p>{{ $t("terms.service.description") }}</p>
        <p>{{ $t("terms.service.nature") }}</p>
        <p>{{ $t("terms.service.disclaimer") }}</p>
      </div>

      <div class="content-section">
        <h2>{{ $t("terms.acceptance.title") }}</h2>
        <p>{{ $t("terms.acceptance.description") }}</p>
        <p>{{ $t("terms.acceptance.conditions") }}</p>
      </div>

      <div class="content-section">
        <h2>{{ $t("terms.user.title") }}</h2>
        <p>{{ $t("terms.user.description") }}</p>
        <ul>
          <li>{{ $t("terms.user.item1") }}</li>
          <li>{{ $t("terms.user.item2") }}</li>
          <li>{{ $t("terms.user.item3") }}</li>
          <li>{{ $t("terms.user.item4") }}</li>
        </ul>
      </div>

      <div class="content-section">
        <h2>{{ $t("terms.content.title") }}</h2>
        <p>{{ $t("terms.content.description") }}</p>
        <p>{{ $t("terms.content.accuracy") }}</p>
        <p>{{ $t("terms.content.liability") }}</p>
      </div>

      <div class="content-section">
        <h2>{{ $t("terms.advertising.title") }}</h2>
        <p>{{ $t("terms.advertising.description") }}</p>
        <p>{{ $t("terms.advertising.consent") }}</p>
      </div>

      <div class="content-section">
        <h2>{{ $t("terms.privacy.title") }}</h2>
        <p>{{ $t("terms.privacy.description") }}</p>
        <p>{{ $t("terms.privacy.policy") }}</p>
      </div>

      <div class="content-section">
        <h2>{{ $t("terms.liability.title") }}</h2>
        <p>{{ $t("terms.liability.description") }}</p>
        <p>{{ $t("terms.liability.limitation") }}</p>
      </div>

      <div class="content-section">
        <h2>{{ $t("terms.modification.title") }}</h2>
        <p>{{ $t("terms.modification.description") }}</p>
        <p>{{ $t("terms.modification.notice") }}</p>
      </div>

      <div class="content-section">
        <h2>{{ $t("terms.contact.title") }}</h2>
        <p>{{ $t("terms.contact.description") }}</p>
        <p class="contact-email">
          <a href="mailto:support@loveindex.com">{{ $t("terms.contact.email") }}</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';

// Terms of Service 페이지 컴포넌트
onMounted(() => {
  // 페이지 진입 시 body에 body-home 클래스 추가
  document.body.classList.add('body-home');
});

onUnmounted(() => {
  // 페이지 떠날 때 body-home 클래스 제거
  document.body.classList.remove('body-home');
});
</script>

