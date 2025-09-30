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

