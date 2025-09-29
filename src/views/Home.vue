<template>
  <div>
    <HomePage
      v-if="currentView === 'home'"
      @check-compatibility="handleCheckCompatibility"
    />
    <CompatibilityResult
      v-else-if="currentView === 'result' && myZodiac && partnerZodiac"
      :my-zodiac="myZodiac"
      :partner-zodiac="partnerZodiac"
      @back="handleBack"
      @view-detail="handleViewDetail"
    />
  </div>
</template>

<script setup lang="ts">
import CompatibilityResult from "@/components/CompatibilityResult.vue";
import HomePage from "@/components/HomePage.vue";
import { type ZodiacAnimal } from "@/lib/zodiac";
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const currentView = ref<"home" | "result">("home");
const myZodiac = ref<ZodiacAnimal | null>(null);
const partnerZodiac = ref<ZodiacAnimal | null>(null);

const handleCheckCompatibility = (my: ZodiacAnimal, partner: ZodiacAnimal) => {
  myZodiac.value = my;
  partnerZodiac.value = partner;
  currentView.value = "result";
};

const handleBack = () => {
  currentView.value = "home";
};

const handleViewDetail = (my: ZodiacAnimal, partner: ZodiacAnimal) => {
  // URL 파라미터로 띠 정보 전달
  const params = new URLSearchParams({
    my: my.id,
    partner: partner.id,
  });
  router.push(`/detail?${params.toString()}`);
};
</script>

<style scoped>
/* 추가 스타일이 필요한 경우 여기에 작성 */
</style>
