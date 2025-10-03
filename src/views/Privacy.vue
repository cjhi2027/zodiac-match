<template>
  <div class="privacy-page">
    <div class="container">
      <h1 class="page-title">{{ $t("privacy.title") }}</h1>
      
      <div class="content-section">
        <p class="intro">{{ $t("privacy.intro") }}</p>
        <p class="last-updated">{{ $t("privacy.lastUpdated") }}</p>
      </div>

      <div class="content-section">
        <h2>{{ $t("privacy.collection.title") }}</h2>
        <p>{{ $t("privacy.collection.description") }}</p>
        <ul>
          <li>{{ $t("privacy.collection.item1") }}</li>
          <li>{{ $t("privacy.collection.item2") }}</li>
          <li>{{ $t("privacy.collection.item3") }}</li>
        </ul>
      </div>

      <div class="content-section">
        <h2>{{ $t("privacy.usage.title") }}</h2>
        <p>{{ $t("privacy.usage.description") }}</p>
        <ul>
          <li>{{ $t("privacy.usage.item1") }}</li>
          <li>{{ $t("privacy.usage.item2") }}</li>
          <li>{{ $t("privacy.usage.item3") }}</li>
        </ul>
      </div>

      <div class="content-section">
        <h2>{{ $t("privacy.cookies.title") }}</h2>
        <p>{{ $t("privacy.cookies.description") }}</p>
        <p>{{ $t("privacy.cookies.thirdParty") }}</p>
      </div>

      <div class="content-section">
        <h2>{{ $t("privacy.sharing.title") }}</h2>
        <p>{{ $t("privacy.sharing.description") }}</p>
        <p>{{ $t("privacy.sharing.exceptions") }}</p>
      </div>

      <div class="content-section">
        <h2>{{ $t("privacy.security.title") }}</h2>
        <p>{{ $t("privacy.security.description") }}</p>
      </div>

      <div class="content-section">
        <h2>{{ $t("privacy.rights.title") }}</h2>
        <p>{{ $t("privacy.rights.description") }}</p>
        <ul>
          <li>{{ $t("privacy.rights.item1") }}</li>
          <li>{{ $t("privacy.rights.item2") }}</li>
          <li>{{ $t("privacy.rights.item3") }}</li>
        </ul>
      </div>

      <div class="content-section">
        <h2>{{ $t("privacy.changes.title") }}</h2>
        <p>{{ $t("privacy.changes.description") }}</p>
      </div>

      <div class="content-section">
        <h2>{{ $t("privacy.contact.title") }}</h2>
        <p>{{ $t("privacy.contact.description") }}</p>
        <p class="contact-email">
          <a href="mailto:support@loveindex.com">{{ $t("privacy.contact.email") }}</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';

// Privacy Policy 페이지 컴포넌트
onMounted(() => {
  // 페이지 진입 시 body에 body-home 클래스 추가
  document.body.classList.add('body-home');
});

onUnmounted(() => {
  // 페이지 떠날 때 body-home 클래스 제거
  document.body.classList.remove('body-home');
});
</script>

