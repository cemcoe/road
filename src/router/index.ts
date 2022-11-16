import { createRouter, createWebHistory } from "vue-router";
import { tabbarRoutes } from "./tabbarRoutes";
import { MainRoutes } from "./mainRoutes";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...tabbarRoutes, ...MainRoutes],
});

export default router;
