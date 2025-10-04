// PrimeVue 테마는 기본값 사용
import { createPinia } from "pinia";
import "primeicons/primeicons.css";
import PrimeVue from "primevue/config";
import { createApp } from "vue";
import i18n from "./i18n";

import App from "./App.vue";
import "./main.css";
import router from "./router";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(i18n);

// PrimeVue 기본 설정
app.use(PrimeVue);

app.mount("#app");