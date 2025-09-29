import Home from "@/views/Home.vue";
import Detail from "@/views/Detail.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/detail",
      name: "detail",
      component: Detail,
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    // 페이지 전환 시 항상 최상단으로 스크롤
    return { top: 0 }
  }
});

export default router;
