<template>
  <div class="animal-grid">
    <div
      v-for="(animal, index) in displayAnimals"
      :key="`${animal.id}-${index}`"
      class="animal-item"
      :class="{ selected: selectedZodiac?.id === animal.id }"
      @click="handleSelect(animal)"
      :data-testid="`button-zodiac-${animal.id}`"
    >
      <img :src="animal.image" :alt="$t(`zodiac.${animal.id}`)" class="animal-icon" />
      <div class="animal-name">{{ $t(`zodiac.${animal.id}`) }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { zodiacAnimals, type ZodiacAnimal } from "@/lib/zodiac";
import { computed } from "vue";
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
</script>
