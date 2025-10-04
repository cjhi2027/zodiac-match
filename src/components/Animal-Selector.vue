<template>
  <div class="animal-grid" ref="animalGridRef">
    <div
      v-for="(animal, index) in displayAnimals"
      :key="`${animal.id}-${index}`"
      class="animal-item"
      :class="{ selected: selectedZodiac?.id === animal.id }"
      @click="handleSelect(animal)"
      :data-testid="`button-zodiac-${animal.id}`"
    >
      <img :src="animal.image" :alt="$t(`zodiac.${animal.id}`)" class="animal-icon" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { animalData, type ZodiacAnimal } from "@/lib/animal";
import { computed, ref, onMounted, onUnmounted } from "vue";
import { useI18n } from "vue-i18n";

interface Props {
  selectedZodiac?: ZodiacAnimal;
  onSelect: (zodiac: ZodiacAnimal) => void;
  title: string;
}

const props = defineProps<Props>();
const { t } = useI18n();

// 모바일에서 스크롤을 위한 동물 배열 (반복 없음)
const displayAnimals = computed(() => {
  return animalData;
});

const handleSelect = (animal: ZodiacAnimal) => {
  console.log(`${animal.name} selected`);
  props.onSelect(animal);
  
  // 동물 선택 시 자동 스크롤 정지 및 2초 후 재개
  if (isMobile()) {
    stopAutoScroll();
    
    // 기존 타이머 취소
    if (userScrollTimeout) {
      clearTimeout(userScrollTimeout);
    }
    
    // 2초 후 현재 위치에서 자동 스크롤 재개
    userScrollTimeout = window.setTimeout(() => {
      if (animalGridRef.value) {
        lastScrollLeft = animalGridRef.value.scrollLeft;
        scrollAccumulator = 0;
        startAutoScroll();
      }
    }, 2000);
  }
};

// 자동 스크롤 관련
const animalGridRef = ref<HTMLElement | null>(null);
let autoScrollInterval: number | null = null;
let userScrollTimeout: number | null = null;
let isScrollingRight = ref(true); // true: 쥐→돼지, false: 돼지→쥐
const scrollSpeed = 0.15; // 부드러운 속도 (픽셀/프레임)
let lastScrollLeft = 0; // 마지막 스크롤 위치
let isAutoScrolling = false; // 자동 스크롤 중 플래그
let scrollAccumulator = 0; // 소수점 누적 (0.1, 0.2 같은 작은 값 지원)

// 모바일 체크
const isMobile = () => {
  return window.innerWidth < 768;
};

// 자동 스크롤 애니메이션 (requestAnimationFrame으로 부드럽게)
const animateScroll = () => {
  if (!animalGridRef.value) return;
  
  isAutoScrolling = true; // 자동 스크롤 중임을 표시
  
  const container = animalGridRef.value;
  const maxScroll = container.scrollWidth - container.clientWidth;
  
  // 스크롤 방향에 따라 누적
  if (isScrollingRight.value) {
    scrollAccumulator += scrollSpeed;
  } else {
    scrollAccumulator -= scrollSpeed;
  }
  
  // 누적된 값의 정수 부분만 적용 (소수점은 다음 프레임으로)
  const scrollDelta = Math.floor(Math.abs(scrollAccumulator));
  
  if (scrollDelta >= 1) {
    if (isScrollingRight.value) {
      container.scrollLeft += scrollDelta;
      scrollAccumulator -= scrollDelta; // 적용한 만큼 빼기
      
      // 끝에 도달하면 방향 전환
      if (container.scrollLeft >= maxScroll - 1) {
        isScrollingRight.value = false;
        scrollAccumulator = 0; // 누적값 초기화
      }
    } else {
      container.scrollLeft -= scrollDelta;
      scrollAccumulator += scrollDelta; // 적용한 만큼 빼기
      
      // 시작점에 도달하면 방향 전환
      if (container.scrollLeft <= 1) {
        isScrollingRight.value = true;
        scrollAccumulator = 0; // 누적값 초기화
      }
    }
  }
  
  lastScrollLeft = container.scrollLeft; // 현재 위치 저장
  
  // 다음 프레임 요청 (부드러운 애니메이션)
  autoScrollInterval = requestAnimationFrame(animateScroll);
};

// 자동 스크롤 시작
const startAutoScroll = () => {
  if (!isMobile() || !animalGridRef.value) return;
  
  // 이미 실행 중이면 중복 시작 방지
  if (autoScrollInterval) return;
  
  autoScrollInterval = requestAnimationFrame(animateScroll);
};

// 자동 스크롤 정지
const stopAutoScroll = () => {
  if (autoScrollInterval) {
    cancelAnimationFrame(autoScrollInterval);
    autoScrollInterval = null;
  }
  isAutoScrolling = false;
  scrollAccumulator = 0; // 누적값 초기화
};

// 사용자 스크롤 감지
const handleUserScroll = () => {
  if (!isMobile() || !animalGridRef.value) return;
  
  const currentScrollLeft = animalGridRef.value.scrollLeft;
  
  // 자동 스크롤 중에 발생한 이벤트는 무시
  if (isAutoScrolling && Math.abs(currentScrollLeft - lastScrollLeft) < scrollSpeed * 2) {
    return;
  }
  
  // 실제 사용자 스크롤일 때만 자동 스크롤 정지
  stopAutoScroll();
  
  // 기존 타이머 취소
  if (userScrollTimeout) {
    clearTimeout(userScrollTimeout);
  }
  
  // 2초 후 현재 위치에서 자동 스크롤 재개
  userScrollTimeout = window.setTimeout(() => {
    lastScrollLeft = animalGridRef.value?.scrollLeft || 0;
    scrollAccumulator = 0; // 누적값 초기화
    startAutoScroll();
  }, 2000);
};

// 컴포넌트 마운트 시
onMounted(() => {
  if (!isMobile() || !animalGridRef.value) return;
  
  // 스크롤 이벤트 리스너 추가
  animalGridRef.value.addEventListener('scroll', handleUserScroll);
  
  // 1.5초 대기 후 자동 스크롤 시작
  setTimeout(() => {
    if (animalGridRef.value) {
      lastScrollLeft = animalGridRef.value.scrollLeft; // 초기 위치 저장
    }
    scrollAccumulator = 0; // 누적값 초기화
    startAutoScroll();
  }, 1500);
});

// 컴포넌트 언마운트 시 정리
onUnmounted(() => {
  stopAutoScroll();
  
  if (userScrollTimeout) {
    clearTimeout(userScrollTimeout);
  }
  
  if (animalGridRef.value) {
    animalGridRef.value.removeEventListener('scroll', handleUserScroll);
  }
});
</script>
