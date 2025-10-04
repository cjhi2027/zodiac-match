<template>
  <div class="main-home">
    <!-- 헤더 -->
    <div class="main-header">
      <div class="language-selector-container">
        <LanguageSelector />
      </div>
      <div class="main-title">{{ $t("mainHome.title") }}</div>
      <div class="main-subtitle">{{ $t("mainHome.subtitle") }}</div>
    </div>

    <!-- 메뉴 카드들 -->
    <div class="menu-cards">
      <!-- 12간지로 보기 -->
      <div class="menu-card active" @click="goToZodiac">
        <div class="menu-content">
          <div class="menu-icon">🐭</div>
          <div class="menu-text">
            <div class="menu-title">{{ $t("mainHome.zodiac.title") }}</div>
            <div class="menu-subtitle">{{ $t("mainHome.zodiac.subtitle") }}</div>
          </div>
        </div>
      </div>

      <!-- 별자리로 보기 (준비중) -->
      <div class="menu-card disabled">
        <div class="menu-content">
          <div class="menu-icon">⭐</div>
          <div class="menu-text">
            <div class="menu-title">{{ $t("mainHome.constellation.title") }}</div>
            <div class="menu-subtitle">{{ $t("mainHome.constellation.subtitle") }}</div>
          </div>
        </div>
        <div class="coming-soon">{{ $t("mainHome.comingSoon") }}</div>
      </div>

      <!-- 혈액형으로 보기 (준비중) -->
      <div class="menu-card disabled">
        <div class="menu-content">
          <div class="menu-icon">🩸</div>
          <div class="menu-text">
            <div class="menu-title">{{ $t("mainHome.bloodType.title") }}</div>
            <div class="menu-subtitle">{{ $t("mainHome.bloodType.subtitle") }}</div>
          </div>
        </div>
        <div class="coming-soon">{{ $t("mainHome.comingSoon") }}</div>
      </div>

      <!-- MBTI로 보기 (준비중) -->
      <div class="menu-card disabled">
        <div class="menu-content">
          <div class="menu-icon">🔤</div>
          <div class="menu-text">
            <div class="menu-title">{{ $t("mainHome.mbti.title") }}</div>
            <div class="menu-subtitle">{{ $t("mainHome.mbti.subtitle") }}</div>
          </div>
        </div>
        <div class="coming-soon">{{ $t("mainHome.comingSoon") }}</div>
      </div>
    </div>

    <!-- 공유하기 영역 -->
    <div class="share-area">
      <div class="share-title">{{ locale === 'ko' ? '공유하기' : 'Share' }}</div>
      
      <!-- 공유 버튼들 -->
      <div class="share-buttons-row">
        <!-- SNS 아이콘들 -->
        <button 
          v-for="option in shareOptions" 
          :key="option.id"
          @click="share(option.id)"
          class="share-btn"
          :title="option.name"
        >
          <img :src="option.icon" :alt="option.name" class="share-icon-img" />
        </button>
        
        <!-- 링크복사 버튼 -->
        <button @click="share('copy')" class="copy-link-btn">
          <span class="copy-link-icon">🔗</span>
          <span class="copy-link-text">{{ locale === 'ko' ? '복사' : 'Copy' }}</span>
        </button>
      </div>
    </div>


    <!-- 토스트 메시지 -->
    <div v-if="toastMessage" class="toast-message">
      {{ toastMessage }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from "vue";
import { useRouter } from "vue-router";
import { useI18n } from "vue-i18n";
import LanguageSelector from "@/components/LanguageSelector.vue";

interface ShareOption {
  id: string;
  icon: string;
  name: string;
}

const router = useRouter();
const { t, locale } = useI18n();

// 토스트 메시지
const toastMessage = ref('');
let toastTimeout: number | null = null;

// 토스트 메시지 표시 함수
const showToast = (message: string) => {
  toastMessage.value = message;
  
  // 이전 타이머가 있으면 취소
  if (toastTimeout) {
    clearTimeout(toastTimeout);
  }
  
  // 3초 후 자동으로 사라짐
  toastTimeout = window.setTimeout(() => {
    toastMessage.value = '';
  }, 3000);
};

// 메인 홈 전용 body 스타일 적용
onMounted(() => {
  document.body.classList.add('body-home');
  
  // 저장된 언어 설정 불러오기
  const savedLocale = localStorage.getItem('zodiac-locale');
  if (savedLocale && (savedLocale === 'ko' || savedLocale === 'en')) {
    locale.value = savedLocale as 'ko' | 'en';
  }
});

onUnmounted(() => {
  document.body.classList.remove('body-home');
});

// 12간지 내 정보 선택으로 이동
const goToZodiac = () => {
  router.push("/animal/info-my");
};


// 언어별 공유 옵션
const shareOptions = computed<ShareOption[]>(() => {
  if (locale.value === 'ko') {
    return [
      { id: 'kakao', icon: '/sns-icons/kakao.svg', name: '카카오톡' },
      { id: 'instagram', icon: '/sns-icons/instagram.svg', name: '인스타그램' },
      { id: 'facebook', icon: '/sns-icons/facebook.svg', name: '페이스북' },
      { id: 'line', icon: '/sns-icons/line.svg', name: '라인' }
    ];
  } else {
    return [
      { id: 'instagram', icon: '/sns-icons/instagram.svg', name: 'Instagram' },
      { id: 'facebook', icon: '/sns-icons/facebook.svg', name: 'Facebook' },
      { id: 'twitter', icon: '/sns-icons/twitter.svg', name: 'X (Twitter)' },
      { id: 'line', icon: '/sns-icons/line.svg', name: 'LINE' }
    ];
  }
});

// 현재 페이지 URL
const currentUrl = computed(() => {
  return window.location.origin;
});

// 공유 메시지 생성
const shareMessage = computed(() => {
  if (locale.value === 'ko') {
    return `12간지 띠 궁합을 확인해보세요! 💕\n\n${currentUrl.value}`;
  } else {
    return `Check out the Zodiac Compatibility! 💕\n\n${currentUrl.value}`;
  }
});

// 공유 기능
const share = (platform: string) => {
  const url = currentUrl.value;
  const message = shareMessage.value;

  switch (platform) {
    case 'kakao':
      copyToClipboard(message);
      showToast(locale.value === 'ko' 
        ? '카카오톡에 붙여넣기 할 수 있도록 복사되었습니다!' 
        : 'Copied to clipboard for KakaoTalk!');
      break;

    case 'facebook':
      window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank', 'width=600,height=400');
      break;

    case 'instagram':
      copyToClipboard(message);
      showToast(locale.value === 'ko' ? '인스타그램에 붙여넣기 할 수 있도록 복사되었습니다!' : 'Copied to clipboard for Instagram!');
      break;

    case 'twitter':
      window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(message)}`, '_blank', 'width=600,height=400');
      break;

    case 'line':
      window.open(`https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(url)}`, '_blank', 'width=600,height=400');
      break;

    case 'copy':
      copyToClipboard(url);
      // 브라우저 자체 토스트가 표시되므로 우리 토스트는 생략
      // showToast(locale.value === 'ko' ? '복사 완료!' : 'Copied!');
      break;
  }
};

// 클립보드에 복사
const copyToClipboard = (text: string) => {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text);
  } else {
    // 구형 브라우저 지원
    const textArea = document.createElement('textarea');
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
  }
};
</script>
