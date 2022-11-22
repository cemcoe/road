import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "normalize.css";
import "./assets/index.css";

import buildInfo from "./buildInfo.json";

console.log(
  JSON.stringify({
    mode: import.meta.env.MODE,
    ...buildInfo,
  })
);

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
