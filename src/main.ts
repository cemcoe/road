import { createApp } from "vue";
import { createPinia } from "pinia";

import * as Sentry from "@sentry/vue";
import { BrowserTracing } from "@sentry/tracing";

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

Sentry.init({
  app,
  dsn: import.meta.env.VITE_SentryDSN,
  integrations: [
    new BrowserTracing({
      routingInstrumentation: Sentry.vueRouterInstrumentation(router),
      tracePropagationTargets: ["localhost", "road.cemcoe.com", /^\//],
    }),
  ],
  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

app.use(createPinia());
app.use(router);

app.mount("#app");
