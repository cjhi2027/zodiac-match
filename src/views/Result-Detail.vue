<template>
  <div>
    <AnimalResultDetail
      v-if="myZodiac && partnerZodiac"
      :my-zodiac="myZodiac"
      :partner-zodiac="partnerZodiac"
      @back="handleBack"
    />
  </div>
</template>

<script setup lang="ts">
import AnimalResultDetail from "@/components/Animal-Result-Detail.vue";
import { getAnimalByYear, animalData, type ZodiacAnimal } from "@/lib/animal";
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

// 띠 정보 상태
const myZodiac = ref<ZodiacAnimal | null>(null);
const partnerZodiac = ref<ZodiacAnimal | null>(null);

// 뒤로가기 처리 (전체 홈으로)
const handleBack = () => {
  router.push("/");
};

// 띠 ID로 띠 정보 찾기
const findZodiacById = (id: string): ZodiacAnimal | null => {
  return animalData.find(z => z.id === id) || null;
};

// 컴포넌트 마운트 시 URL 파라미터에서 띠 정보 가져오기
onMounted(() => {
  const urlParams = new URLSearchParams(window.location.search);
  const myZodiacId = urlParams.get("my");
  const partnerZodiacId = urlParams.get("partner");
  
  if (myZodiacId && partnerZodiacId) {
    const myZodiacData = findZodiacById(myZodiacId);
    const partnerZodiacData = findZodiacById(partnerZodiacId);
    
    if (myZodiacData && partnerZodiacData) {
      myZodiac.value = myZodiacData;
      partnerZodiac.value = partnerZodiacData;
    } else {
      // 잘못된 띠 ID인 경우 홈으로 리다이렉트
      router.push("/");
    }
  } else {
    // 파라미터가 없는 경우 홈으로 리다이렉트
    router.push("/");
  }
});
</script>

<style scoped>
/* 추가 스타일이 필요한 경우 여기에 작성 */
</style>
