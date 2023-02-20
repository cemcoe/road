import { createRouter, createWebHistory } from "vue-router";
import { tabbarRoutes } from "./tabbarRoutes";
import { MainRoutes } from "./mainRoutes";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...tabbarRoutes, ...MainRoutes],
});

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem("token");
  const isAuthenticated = Boolean(token);
  if (to.meta.isNeedLogin && !isAuthenticated) {
    // 记录一下地址，登录成功返回
    localStorage.setItem("toPath", to.path);
    next({ path: "/login" });
  } else next();
});

export default router;
