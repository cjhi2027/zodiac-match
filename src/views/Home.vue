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
    />
  </div>
</template>

<script setup lang="ts">
import CompatibilityResult from "@/components/CompatibilityResult.vue";
import HomePage from "@/components/HomePage.vue";
import { type ZodiacAnimal } from "@/lib/zodiac";
import { ref } from "vue";

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
</script>

<style scoped>
/* 추가 스타일이 필요한 경우 여기에 작성 */
</style>
