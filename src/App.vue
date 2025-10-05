<script setup lang="ts">
import { RouterView, useRoute } from "vue-router";
import { computed } from "vue";
import { useI18n } from "vue-i18n";

const route = useRoute();
const { t } = useI18n();

// 푸터를 표시할 라우트들 (메인홈, 상세페이지, 정적 페이지들)
const showFooter = computed(() => {
  const routeName = route.name as string;
  return routeName === 'home' || 
         routeName === 'animalResultDetail' ||
         routeName === 'about' ||
         routeName === 'privacy' ||
         routeName === 'terms';
});
</script>

<template>
  <div id="app" class="min-h-screen bg-background">
    <RouterView />
    <footer v-if="showFooter" class="site-footer">
      <div class="footer-content">
        <div class="footer-links">
          <router-link to="/about">{{ t("footer.about") }}</router-link>
          <router-link to="/privacy">{{ t("footer.privacy") }}</router-link>
          <router-link to="/terms">{{ t("footer.terms") }}</router-link>
        </div>
               <div class="footer-contact">
                 <p>{{ t("footer.contact") }}: <a href="mailto:syhi5093@gmail.com">syhi5093@gmail.com</a></p>
               </div>
        <div class="footer-copyright">
          <p>&copy; 2025 LoveIndex. {{ t("footer.rights") }}</p>
        </div>
      </div>
    </footer>
  </div>
</template>

