import { createRouter, createWebHistory } from "vue-router";
import { tabbarRoutes } from "./tabbar-routes";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: "/",
    //   redirect: "/home",
    // },
    ...tabbarRoutes,
    {
      path: "/p/:postId",
      component: () => import("@/views/post/post.vue"),
      meta: {
        hideTabBar: true,
      },
    },
    {
      path: "/u/:userId",
      component: () => import("@/views/user/user.vue"),
      meta: {
        hideTabBar: true,
      },
    },
    {
      path: "/search",
      component: () => import("@/views/search/search.vue"),
      meta: {
        hideTabBar: true,
      },
    },
    {
      path: "/login",
      component: () => import("@/views/login/login.vue"),
      meta: {
        hideTabBar: true,
      },
    },
    {
      path: "/editor",
      component: () => import("@/views/editor/editor.vue"),
      meta: {
        hideTabBar: true,
      },
    },
    {
      path: "/editor/:postId",
      component: () => import("@/views/editor/editor.vue"),
      meta: {
        hideTabBar: true,
      },
    },
    {
      path: "/u/:uid/followers",
      component: () => import("@/views/user-followers/user-followers.vue"),
      meta: {
        hideTabBar: true,
      },
    },
    {
      path: "/u/:uid/following",
      component: () => import("@/views/user-following/user-following.vue"),
      meta: {
        hideTabBar: true,
      },
    },
  ],
});

export default router;
