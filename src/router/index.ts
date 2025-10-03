import MainHome from "@/views/MainHome.vue";
import ZodiacHome from "@/views/Zodiac-Home.vue";
import MyInfo from "@/views/My-Info.vue";
import PartnerInfo from "@/views/Partner-Info.vue";
import Result from "@/views/Result.vue";
import Detail from "@/views/Detail.vue";
import About from "@/views/About.vue";
import Privacy from "@/views/Privacy.vue";
import Terms from "@/views/Terms.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "mainHome",
      component: MainHome,
    },
    {
      path: "/zodiac",
      name: "zodiacHome",
      component: ZodiacHome,
    },
    {
      path: "/zodiac/my-info",
      name: "zodiacMyInfo",
      component: MyInfo,
    },
    {
      path: "/zodiac/partner-info",
      name: "zodiacPartnerInfo",
      component: PartnerInfo,
    },
    {
      path: "/zodiac/result",
      name: "zodiacResult",
      component: Result,
    },
    {
      path: "/zodiac/detail",
      name: "zodiacDetail",
      component: Detail,
    },
    {
      path: "/about",
      name: "about",
      component: About,
    },
    {
      path: "/privacy",
      name: "privacy",
      component: Privacy,
    },
    {
      path: "/terms",
      name: "terms",
      component: Terms,
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    // 페이지 전환 시 항상 최상단으로 스크롤
    return { top: 0 }
  }
});

export default router;
