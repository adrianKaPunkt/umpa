import { createApp } from "vue";
import "@/index.css";
import { createPinia } from "pinia";
import VueDayjs from "vue3-dayjs-plugin";

import App from "./App.vue";
import router from "./router";

//import "./assets/main.css";

const app = createApp(App);
app.use(VueDayjs);
app.use(createPinia());
app.use(router);

app.mount("#app");
