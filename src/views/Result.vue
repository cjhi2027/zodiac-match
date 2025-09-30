<template>
  <div>
    <ZodiacResult
      v-if="myZodiac && partnerZodiac"
      :my-zodiac="myZodiac"
      :partner-zodiac="partnerZodiac"
      @back="handleBack"
      @view-detail="handleViewDetail"
    />
  </div>
</template>

<script setup lang="ts">
import ZodiacResult from "@/components/Zodiac-Result.vue";
import { getZodiacByYear, zodiacAnimals, type ZodiacAnimal } from "@/lib/zodiac";
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

// 띠 정보 상태
const myZodiac = ref<ZodiacAnimal | null>(null);
const partnerZodiac = ref<ZodiacAnimal | null>(null);

// 뒤로가기 처리 (상대방 정보 선택으로)
const handleBack = () => {
  if (myZodiac.value) {
    const params = new URLSearchParams({
      my: myZodiac.value.id,
      myTab: "zodiac", // 기본값
      myYear: ""
    });
    router.push(`/zodiac/partner-info?${params.toString()}`);
  } else {
    router.push("/zodiac/partner-info");
  }
};

// 상세 보기 처리
const handleViewDetail = (my: ZodiacAnimal, partner: ZodiacAnimal) => {
  const params = new URLSearchParams({
    my: my.id,
    partner: partner.id
  });
  router.push(`/zodiac/detail?${params.toString()}`);
};

// 띠 ID로 띠 정보 찾기
const findZodiacById = (id: string): ZodiacAnimal | null => {
  return zodiacAnimals.find(z => z.id === id) || null;
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
