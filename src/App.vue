<script setup lang="ts">
import { RouterView, useRoute } from "vue-router";
import { computed } from "vue";

const route = useRoute();

// 푸터를 표시할 라우트들 (메인홈과 상세페이지만)
const showFooter = computed(() => {
  const routeName = route.name as string;
  return routeName === 'mainHome' || routeName === 'zodiacDetail';
});
</script>

<template>
  <div id="app" class="min-h-screen bg-background">
    <RouterView />
    <footer v-if="showFooter" class="site-footer">
      <div class="footer-content">
        <div class="footer-links">
          <router-link to="/about">{{ $t("footer.about") }}</router-link>
          <router-link to="/privacy">{{ $t("footer.privacy") }}</router-link>
          <router-link to="/terms">{{ $t("footer.terms") }}</router-link>
        </div>
               <div class="footer-contact">
                 <p>{{ $t("footer.contact") }}: <a href="mailto:support@loveindex.com">support@loveindex.com</a></p>
               </div>
        <div class="footer-copyright">
          <p>&copy; 2025 LoveIndex. {{ $t("footer.rights") }}</p>
        </div>
      </div>
    </footer>
  </div>
</template>

