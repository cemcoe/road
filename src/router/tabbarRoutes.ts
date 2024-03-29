const tabbarRoutes = [
  {
    path: "/",
    component: () => import("@/views/HomeView/HomeView.vue"),
    meta: {
      text: "首页",
      iconName: "home",
      // image: "tabbar/home.svg",
      // imageActive: "tabbar/home_active.svg",
    },
  },
  {
    path: "/editor",
    component: () => import("@/views/EditorView/EditorView.vue"),
    meta: {
      text: "编写",
      iconName: "edit",
      iconType: "vant",
      isNeedLogin: true,
      // image: "tabbar/home.svg",
      // imageActive: "tabbar/home_active.svg",
    },
  },
  {
    path: "/discover",
    component: () => import("@/views/DiscoverView/DiscoverView.vue"),
    meta: {
      text: "探索",
      iconName: "flower-o",
      iconType: "vant",
    },
  },
  // {
  //   path: "/following",
  //   component: () => import("@/views/FollowingView/FollowingView.vue"),
  //   meta: {
  //     text: "关注",
  //     image: "tabbar/following.svg",
  //     imageActive: "tabbar/following_active.svg",
  //   },
  // },
  {
    path: "/profile",
    component: () => import("@/views/ProfileView/ProfileView.vue"),
    meta: {
      text: "我的",
      iconName: "profile",
      // image: "tabbar/profile.svg",
      // imageActive: "tabbar/profile_active.svg",
    },
  },
];

export { tabbarRoutes };
