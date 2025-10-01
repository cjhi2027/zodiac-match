<template>
  <div>
    <!-- 고정 헤더 -->
    <div class="fixed-header">
      <div class="header-content-wrapper">
        <button class="header-btn" @click="goHome" :title="$t('ui.goHome')">⌂</button>
        <div class="header-title">{{ $t("headerTitle") }}</div>
        <select class="header-language-selector" v-model="locale" @change="changeLanguage">
          <option value="ko">{{ $t("ui.korean") }}</option>
          <option value="en">{{ $t("ui.english") }}</option>
        </select>
      </div>
    </div>

    <div class="detail-container content-with-header" data-testid="container-compatibility-detail">
      <!-- 상세 결과 제목 -->
      <div class="page-title">{{ $t(`zodiac.${myZodiac.id}`) }} × {{ $t(`zodiac.${partnerZodiac.id}`) }} {{ $t("compatibilityDetail.title") }}</div>

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

    <!-- 공유하기 영역 -->
    <div class="share-area">
      <div class="share-title">{{ $t("compatibilityDetail.shareTitle") }}</div>
      
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
          <span class="copy-link-text">{{ locale === 'ko' ? '복사하기' : 'Copy' }}</span>
        </button>
      </div>
    </div>

    </div>

    <!-- 토스트 메시지 -->
    <div v-if="toastMessage" class="toast-message">
      {{ toastMessage }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { getCompatibilityDetail, type ZodiacAnimal } from "@/lib/zodiac";
import { computed, ref, onMounted } from "vue";
import { useI18n } from "vue-i18n";

// Kakao SDK 타입 정의
declare global {
  interface Window {
    Kakao?: {
      Link: {
        sendDefault: (params: {
          objectType: string;
          text: string;
          link: {
            mobileWebUrl: string;
            webUrl: string;
          };
        }) => void;
      };
    };
  }
}

interface Props {
  myZodiac: ZodiacAnimal;
  partnerZodiac: ZodiacAnimal;
  onBack: () => void;
}

interface ShareOption {
  id: string;
  icon: string;
  name: string;
}

const props = defineProps<Props>();
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

// 궁합 상세 정보
const compatibilityDetail = computed(() => {
  return getCompatibilityDetail(props.myZodiac, props.partnerZodiac);
});

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

// 현재 페이지 URL (detail을 result로 변경)
const currentUrl = computed(() => {
  return window.location.href.replace('/zodiac/detail', '/zodiac/result');
});

// 공유 메시지 생성
const shareMessage = computed(() => {
  const myZodiacName = t(`zodiac.${props.myZodiac.id}`);
  const partnerZodiacName = t(`zodiac.${props.partnerZodiac.id}`);
  
  if (locale.value === 'ko') {
    return `${myZodiacName} × ${partnerZodiacName} 우리의 궁합 결과를 확인해보세요! 💕\n\n${currentUrl.value}`;
  } else {
    return `Check out our compatibility result between ${myZodiacName} and ${partnerZodiacName}! 💕\n\n${currentUrl.value}`;
  }
});

// 공유 기능
const share = (platform: string) => {
  const url = currentUrl.value;
  const message = shareMessage.value;

  switch (platform) {
    case 'kakao':
      // 카카오톡 공유 - 클립보드에 복사 후 토스트 메시지
      copyToClipboard(message);
      showToast(locale.value === 'ko' 
        ? '카카오톡에 붙여넣기 할 수 있도록 복사되었습니다!' 
        : 'Copied to clipboard for KakaoTalk!');
      break;

    case 'facebook':
      window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank', 'width=600,height=400');
      break;

    case 'instagram':
      // 인스타그램은 직접 URL 공유가 제한적이므로 클립보드에 복사
      copyToClipboard(message);
      showToast(locale.value === 'ko' ? '인스타그램에 붙여넣기 할 수 있도록 복사되었습니다!' : 'Copied to clipboard for Instagram!');
      break;

    case 'twitter':
      window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(message)}`, '_blank', 'width=600,height=400');
      break;

    case 'linkedin':
      window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank', 'width=600,height=400');
      break;

    case 'line':
      window.open(`https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(url)}`, '_blank', 'width=600,height=400');
      break;

    case 'more':
      // 더보기 메뉴 (추후 확장)
      showMoreOptions();
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

// 더보기 옵션 (추후 확장용)
const showMoreOptions = () => {
  const additionalOptions = locale.value === 'ko' 
    ? ['카카오톡', '트위터', '링크드인', '텔레그램']
    : ['KakaoTalk', 'LinkedIn', 'Telegram', 'WhatsApp'];
  
  const optionsText = additionalOptions.join(', ');
  alert(locale.value === 'ko' 
    ? `추후 지원 예정: ${optionsText}` 
    : `Coming soon: ${optionsText}`);
};

// 홈으로 이동
const goHome = () => {
  window.location.href = "/";
};

// 언어 변경
const changeLanguage = () => {
  // localStorage에 언어 설정 저장
  localStorage.setItem('zodiac-locale', locale.value);
};

// 컴포넌트 마운트 시 저장된 언어 설정 불러오기
onMounted(() => {
  const savedLocale = localStorage.getItem('zodiac-locale');
  if (savedLocale && (savedLocale === 'ko' || savedLocale === 'en')) {
    locale.value = savedLocale as 'ko' | 'en';
  }
});
</script>
