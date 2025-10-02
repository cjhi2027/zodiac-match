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
import { zodiacAnimals, type ZodiacAnimal } from "@/lib/zodiac";
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
  return zodiacAnimals;
});

const handleSelect = (animal: ZodiacAnimal) => {
  console.log(`${animal.name} selected`);
  props.onSelect(animal);
};

// 자동 스크롤 관련
const animalGridRef = ref<HTMLElement | null>(null);
let autoScrollInterval: number | null = null;
let userScrollTimeout: number | null = null;
let isScrollingRight = ref(true); // true: 쥐→돼지, false: 돼지→쥐
const scrollSpeed = 0.3; // 아주 느린 속도 (픽셀/프레임)

// 모바일 체크
const isMobile = () => {
  return window.innerWidth < 768;
};

// 자동 스크롤 시작
const startAutoScroll = () => {
  if (!isMobile() || !animalGridRef.value) return;
  
  autoScrollInterval = window.setInterval(() => {
    if (!animalGridRef.value) return;
    
    const container = animalGridRef.value;
    const maxScroll = container.scrollWidth - container.clientWidth;
    
    // 스크롤 방향에 따라 이동
    if (isScrollingRight.value) {
      container.scrollLeft += scrollSpeed;
      
      // 끝에 도달하면 방향 전환
      if (container.scrollLeft >= maxScroll - 1) {
        isScrollingRight.value = false;
      }
    } else {
      container.scrollLeft -= scrollSpeed;
      
      // 시작점에 도달하면 방향 전환
      if (container.scrollLeft <= 1) {
        isScrollingRight.value = true;
      }
    }
  }, 16); // 약 60fps
};

// 자동 스크롤 정지
const stopAutoScroll = () => {
  if (autoScrollInterval) {
    clearInterval(autoScrollInterval);
    autoScrollInterval = null;
  }
};

// 사용자 스크롤 감지
const handleUserScroll = () => {
  if (!isMobile()) return;
  
  // 자동 스크롤 즉시 정지
  stopAutoScroll();
  
  // 기존 타이머 취소
  if (userScrollTimeout) {
    clearTimeout(userScrollTimeout);
  }
  
  // 1초 후 현재 위치에서 자동 스크롤 재개
  userScrollTimeout = window.setTimeout(() => {
    startAutoScroll();
  }, 1000);
};

// 컴포넌트 마운트 시
onMounted(() => {
  if (!isMobile() || !animalGridRef.value) return;
  
  // 스크롤 이벤트 리스너 추가
  animalGridRef.value.addEventListener('scroll', handleUserScroll);
  
  // 1.5초 대기 후 자동 스크롤 시작
  setTimeout(() => {
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
