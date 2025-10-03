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
          <p>{{ $t("footer.contact") }}: support@loveindex.com</p>
        </div>
        <div class="footer-copyright">
          <p>&copy; 2025 LoveIndex. {{ $t("footer.rights") }}</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.site-footer {
  background-color: #f8f9fa;
  border-top: 1px solid #e9ecef;
  padding: 2rem 1rem;
  margin-top: auto;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
}

.footer-links {
  margin-bottom: 1rem;
}

.footer-links a {
  color: #e91e63;
  text-decoration: none;
  margin: 0 1rem;
  font-weight: 500;
  transition: color 0.3s ease;
}

.footer-links a:hover {
  color: #c2185b;
  text-decoration: underline;
}

.footer-contact {
  margin-bottom: 1rem;
}

.footer-contact p {
  color: #666;
  font-size: 0.9rem;
}

.footer-copyright p {
  color: #999;
  font-size: 0.8rem;
  margin: 0;
}

@media (max-width: 768px) {
  .site-footer {
    padding: 1.5rem 1rem;
  }
  
  .footer-links a {
    display: block;
    margin: 0.5rem 0;
  }
  
  .footer-contact p {
    font-size: 0.8rem;
  }
  
  .footer-copyright p {
    font-size: 0.7rem;
  }
}
</style>
