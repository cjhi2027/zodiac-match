<template>
  <div class="about-page">
    <div class="container">
      <h1 class="page-title">Love Index 소개</h1>
      
      <div class="content-section">
        <h2>Love Index란?</h2>
        <p>Love Index는 별자리, 띠, 혈액형, MBTI 등 다양한 요소를 활용해 연인과의 궁합을 확인할 수 있는 무료 웹서비스입니다.</p>
      </div>

      <div class="content-section">
        <h2>주요 기능</h2>
        <ul class="feature-list">
          <li>띠, 혈액형, 별자리, MBTI 등 궁합 분석</li>
          <li>상세한 궁합 설명 및 조언</li>
          <li>데이트 추천 및 선물 아이디어</li>
          <li>다국어 지원 (한국어, 영어)</li>
        </ul>
      </div>

      <div class="content-section">
        <h2>서비스 목적</h2>
        <p>Love Index는 연인들이 서로를 더 잘 이해하고, 재미있는 대화의 소재를 제공하며, 관계를 더욱 돈독하게 만드는 것을 목표로 합니다.</p>
      </div>

      <div class="content-section">
        <h2>향후 계획</h2>
        <p>더 많은 궁합 요소와 분석 방법을 추가하여 사용자들에게 더욱 풍부한 경험을 제공할 예정입니다.</p>
      </div>

      <div class="content-section">
        <h2>문의하기</h2>
        <p>서비스에 대한 문의사항이나 제안사항이 있으시면 언제든지 연락주세요.</p>
        <p class="contact-email">
          <a href="mailto:syhi5093@gmail.com">syhi5093@gmail.com</a>
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
import { useRouter } from 'vue-router';

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

