import { createRouter, createWebHistory } from "vue-router";
import { tabbarRoutes } from "./tabbarRoutes";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...tabbarRoutes],
});

export default router;
