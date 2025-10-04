import Home from "@/views/Home.vue";
import HomePage from "@/components/HomePage.vue";
import InfoMy from "@/views/Info-My.vue";
import InfoPartner from "@/views/Info-Partner.vue";
import ResultBrief from "@/views/Result-Brief.vue";
import ResultDetail from "@/views/Result-Detail.vue";
import HomeAbout from "@/views/Home-About.vue";
import HomePrivacy from "@/views/Home-Privacy.vue";
import HomeTerms from "@/views/Home-Terms.vue";
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
      path: "/animal",
      name: "animalHome",
      component: HomePage,
    },
    {
      path: "/animal/info-my",
      name: "animalInfoMy",
      component: InfoMy,
    },
    {
      path: "/animal/info-partner",
      name: "animalInfoPartner",
      component: InfoPartner,
    },
    {
      path: "/animal/result-brief",
      name: "animalResultBrief",
      component: ResultBrief,
    },
    {
      path: "/animal/result-detail",
      name: "animalResultDetail",
      component: ResultDetail,
    },
    {
      path: "/about",
      name: "about",
      component: HomeAbout,
    },
    {
      path: "/privacy",
      name: "privacy",
      component: HomePrivacy,
    },
    {
      path: "/terms",
      name: "terms",
      component: HomeTerms,
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    // 페이지 전환 시 항상 최상단으로 스크롤
    return { top: 0 }
  }
});

export default router;
