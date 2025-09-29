<template>
  <div class="w-full">
    <select
      v-model="selectedYear"
      class="birth-year-select"
      @change="handleChange"
    >
      <option value="" disabled>{{ $t("ui.selectBirthYear") }}</option>
      <option v-for="year in yearOptions" :key="year" :value="year">
        {{ year }}{{ $t("ui.yearSuffix") }}
      </option>
    </select>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

interface Props {
  value: string;
  onChange: (value: string) => void;
  title: string;
}

const props = defineProps<Props>();

// 연도 옵션 생성 (1940년 ~ 2020년)
const yearOptions = computed(() => {
  const years = [];
  for (let year = 2020; year >= 1940; year--) {
    years.push(year);
  }
  return years;
});

const selectedYear = ref(props.value || "");

const handleChange = (event: Event) => {
  const target = event.target as HTMLSelectElement;
  props.onChange(target.value);
};

// props.value가 변경되면 selectedYear도 업데이트
watch(
  () => props.value,
  newValue => {
    selectedYear.value = newValue;
  }
);
</script>

<style scoped>
/* 전역 스타일은 main.css에서 관리 */
</style>
