<template>
  <div class="terms-page">
    <div class="container">
      <h1 class="page-title">이용약관</h1>
      
      <div class="content-section">
        <p class="intro">본 약관은 Love Index 웹사이트(이하 "본 사이트")의 이용에 관한 조건과 절차를 규정합니다.</p>
        <p class="last-updated">최종 업데이트: 2025년 1월 3일</p>
      </div>

      <div class="content-section">
        <h2>1. 서비스 성격</h2>
        <p>본 사이트는 궁합 및 성격 테스트를 재미로 제공하는 엔터테인먼트 서비스입니다.</p>
        <p>제공되는 콘텐츠는 과학적 사실을 기반으로 하지 않으며, 참고용으로만 사용되어야 합니다.</p>
        <p>법적·의학적·재정적 조언으로 해석될 수 없으며, 중요한 인생 결정의 근거로 사용해서는 안 됩니다.</p>
      </div>

      <div class="content-section">
        <h2>2. 약관 동의</h2>
        <p>본 사이트를 이용함으로써 본 약관에 동의한 것으로 간주됩니다.</p>
        <p>본 약관에 동의하지 않을 경우 서비스 이용을 중단해주세요.</p>
      </div>

      <div class="content-section">
        <h2>3. 사용자의 책임</h2>
        <p>사용자는 본 사이트를 합법적이고 건전한 목적으로만 이용해야 합니다.</p>
        <ul>
          <li>서비스 이용으로 인해 발생하는 모든 결과에 대해 스스로 책임을 집니다</li>
          <li>타인의 권리를 침해하거나 불법적인 행위를 하지 않습니다</li>
          <li>서비스의 정상적인 운영을 방해하는 행위를 하지 않습니다</li>
          <li>본 약관을 준수하며 서비스를 이용합니다</li>
        </ul>
      </div>

      <div class="content-section">
        <h2>4. 콘텐츠 및 정보</h2>
        <p>본 사이트에서 제공되는 모든 정보와 콘텐츠는 참고용입니다.</p>
        <p>정보의 정확성이나 완전성을 보장하지 않으며, 언제든 변경될 수 있습니다.</p>
        <p>제공되는 정보로 인한 손해에 대해 책임을 지지 않습니다.</p>
      </div>

      <div class="content-section">
        <h2>5. 광고 및 제휴</h2>
        <p>본 사이트는 Google AdSense 및 제휴 광고를 게재할 수 있습니다.</p>
        <p>사용자는 사이트 이용 시 광고가 노출될 수 있음을 동의합니다.</p>
      </div>

      <div class="content-section">
        <h2>6. 개인정보 보호</h2>
        <p>개인정보의 수집, 사용, 보호에 대해서는 별도의 개인정보 처리방침을 따릅니다.</p>
        <p>개인정보 처리방침은 본 약관과 함께 적용됩니다.</p>
      </div>

      <div class="content-section">
        <h2>7. 면책 조항</h2>
        <p>본 사이트에서 제공되는 정보는 참고용이며, 서비스 이용으로 인한 손해에 대해 책임을 지지 않습니다.</p>
        <p>간접적, 부수적, 특별한 손해에 대해서는 일체 책임을 지지 않습니다.</p>
      </div>

      <div class="content-section">
        <h2>8. 약관 변경</h2>
        <p>본 사이트는 필요 시 본 약관을 수정할 수 있습니다.</p>
        <p>변경 시 사이트에 공지 후 즉시 효력이 발생합니다.</p>
      </div>

      <div class="content-section">
        <h2>9. 문의</h2>
        <p>본 약관에 대한 문의는 아래 연락처로 가능합니다.</p>
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

// Terms of Service 페이지 컴포넌트
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

