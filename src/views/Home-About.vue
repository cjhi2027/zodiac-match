<template>
  <div class="about-page">
    <div class="container">
      <h1 class="page-title">About Page Test</h1>
      <p>This is a simple test page.</p>
    </div>
  </div>
  
  <!-- 돌아가기 버튼 -->
  <div class="navigation-buttons">
    <button @click="goBack" class="nav-btn bottom-btn slide-up">
      돌아가기
    </button>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

// 돌아가기 함수
const goBack = () => {
  router.back();
};
</script>

