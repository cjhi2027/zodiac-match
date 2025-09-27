<template>
  <div class="animal-grid">
    <div
      v-for="animal in zodiacAnimals"
      :key="animal.id"
      class="animal-item"
      :class="{ selected: selectedZodiac?.id === animal.id }"
      @click="handleSelect(animal)"
      :data-testid="`button-zodiac-${animal.id}`"
    >
      <img :src="animal.image" :alt="animal.name" class="animal-icon" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { zodiacAnimals, type ZodiacAnimal } from "@/lib/zodiac";

interface Props {
  selectedZodiac?: ZodiacAnimal;
  onSelect: (zodiac: ZodiacAnimal) => void;
  title: string;
}

const props = defineProps<Props>();

const handleSelect = (animal: ZodiacAnimal) => {
  console.log(`${animal.name} selected`);
  props.onSelect(animal);
};
</script>
