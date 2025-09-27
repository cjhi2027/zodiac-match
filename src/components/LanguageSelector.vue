<template>
  <div class="language-selector">
    <select
      v-model="selectedLanguage"
      @change="handleLanguageChange"
      class="language-select"
    >
      <option value="ko">{{ $t("ui.korean") }}</option>
      <option value="en">{{ $t("ui.english") }}</option>
    </select>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { useI18n } from "vue-i18n";

const { locale } = useI18n();
const selectedLanguage = ref(locale.value);

const handleLanguageChange = (event: Event) => {
  const target = event.target as HTMLSelectElement;
  locale.value = target.value;
};

// 언어 변경 시 selectedLanguage 동기화
watch(locale, newLocale => {
  selectedLanguage.value = newLocale;
});
</script>

<style scoped>
.language-selector {
  display: flex;
  align-items: center;
  gap: 8px;
}

.language-select {
  padding: 8px 12px;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  background: white;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.2s;
  outline: none;
  appearance: none;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6,9 12,15 18,9'%3e%3c/polyline%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 8px center;
  background-size: 12px;
  padding-right: 28px;
  min-width: 100px;
}

.language-select:focus {
  border-color: #e91e63;
  box-shadow: 0 0 0 2px rgba(233, 30, 99, 0.2);
}

.language-select:hover {
  border-color: #e91e63;
}
</style>
