<template>
  <div class="privacy-page">
    <div class="container">
      <h1 class="page-title">개인정보 처리방침</h1>
      
      <div class="content-section">
        <p class="intro">Love Index(이하 "본 사이트")는 사용자의 개인정보를 존중하며, 안전하게 보호하기 위해 최선을 다하고 있습니다.</p>
        <p class="last-updated">최종 업데이트: 2025년 1월 3일</p>
      </div>

      <div class="content-section">
        <h2>1. 수집하는 정보</h2>
        <p>본 사이트는 사용자가 직접 입력하는 정보에 한해서만 사용합니다.</p>
        <ul>
          <li>띠, 별자리, 혈액형, MBTI 등 궁합 분석을 위한 기본 정보</li>
          <li>브라우저 쿠키 및 세션 데이터</li>
          <li>Google Analytics를 통한 익명화된 사용 통계</li>
        </ul>
      </div>

      <div class="content-section">
        <h2>2. 정보 사용 목적</h2>
        <p>수집된 정보는 다음 목적으로만 사용됩니다.</p>
        <ul>
          <li>궁합 분석 결과 제공</li>
          <li>서비스 개선 및 사용자 경험 향상</li>
          <li>광고 제공 및 서비스 운영</li>
        </ul>
      </div>

      <div class="content-section">
        <h2>3. 쿠키 및 로그 데이터</h2>
        <p>본 사이트는 Google Analytics, Google AdSense 등 제3자 서비스를 사용할 수 있으며, 이 과정에서 쿠키와 로그 데이터가 수집될 수 있습니다.</p>
        <p>이는 서비스 개선과 광고 제공을 위한 목적으로만 사용됩니다.</p>
      </div>

      <div class="content-section">
        <h2>4. 개인정보 제3자 제공</h2>
        <p>본 사이트는 법률상 요구되는 경우를 제외하고, 개인정보를 제3자에게 판매, 공유, 임대하지 않습니다.</p>
        <p>단, Google AdSense 등 광고 서비스 제공을 위해 익명화된 데이터가 사용될 수 있습니다.</p>
      </div>

      <div class="content-section">
        <h2>5. 보안</h2>
        <p>사용자의 개인정보 보호를 위해 적절한 보안 조치를 적용하고 있습니다. 모든 데이터 전송은 HTTPS를 통해 암호화됩니다.</p>
      </div>

      <div class="content-section">
        <h2>6. 사용자 권리</h2>
        <p>사용자는 자신의 개인정보에 대해 다음 권리를 가집니다.</p>
        <ul>
          <li>개인정보 처리 현황에 대한 열람 요구</li>
          <li>개인정보 처리 정지 요구</li>
          <li>개인정보 삭제 요구</li>
        </ul>
      </div>

      <div class="content-section">
        <h2>7. 정책 변경</h2>
        <p>본 개인정보 처리방침은 필요에 따라 변경될 수 있으며, 변경 시 사이트에 공지 후 즉시 효력이 발생합니다.</p>
      </div>

      <div class="content-section">
        <h2>8. 문의</h2>
        <p>개인정보와 관련한 문의는 아래 연락처를 통해 가능합니다.</p>
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

// Privacy Policy 페이지 컴포넌트
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

