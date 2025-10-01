<script setup lang="ts">
import { RouterView, useRouter } from "vue-router";
import { ref, watch } from "vue";

const router = useRouter();
const transitionName = ref('');

// 슬라이드 효과를 적용할 화면들만 정의
const slideRoutes = ['zodiacMyInfo', 'zodiacPartnerInfo', 'zodiacResult'];

// 라우트 레벨 정의 (순서)
const routeLevels: { [key: string]: number } = {
  'zodiacMyInfo': 1,
  'zodiacPartnerInfo': 2,
  'zodiacResult': 3
};

// 라우트 변경 감지하여 전환 방향 결정
watch(() => router.currentRoute.value, (to, from) => {
  const toName = to.name as string;
  const fromName = from.name as string;
  
  // 두 화면 모두 슬라이드 효과 대상인 경우만 애니메이션 적용
  if (slideRoutes.includes(toName) && slideRoutes.includes(fromName)) {
    const toLevel = routeLevels[toName] || 0;
    const fromLevel = routeLevels[fromName] || 0;
    
    // 앞으로 가면 왼쪽으로 슬라이드 (오른쪽에서 들어옴)
    // 뒤로 가면 오른쪽으로 슬라이드 (왼쪽에서 들어옴)
    transitionName.value = toLevel > fromLevel ? 'slide-left' : 'slide-right';
  } else {
    // 그 외의 경우 전환 효과 없음
    transitionName.value = '';
  }
});
</script>

<template>
  <div id="app" class="min-h-screen bg-background">
    <RouterView v-slot="{ Component }">
      <Transition :name="transitionName" mode="out-in">
        <component :is="Component" />
      </Transition>
    </RouterView>
  </div>
</template>

<style scoped></style>
