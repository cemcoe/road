const tabbarRoutes = [
  {
    path: "/",
    component: () => import("@/views/home/home.vue"),
    meta: {
      text: "首页",
      image: "tabbar/home.svg",
      imageActive: "tabbar/home_active.svg",
    },
  },
  {
    path: "/following",
    component: () => import("@/views/following/following.vue"),
    meta: {
      text: "关注",
      image: "tabbar/following.svg",
      imageActive: "tabbar/following_active.svg",
    },
  },
  // {
  //   path: "/island",
  //   component: () => import("@/views/island/island.vue"),
  //   meta: {
  //     text: "小岛",
  //     image: "tabbar/island.svg",
  //     imageActive: "tabbar/island_active.svg",
  //   },
  // },
  // {
  //   path: "/message",
  //   component: () => import("@/views/message/message.vue"),
  //   meta: {
  //     text: "消息",
  //     image: "tabbar/message.svg",
  //     imageActive: "tabbar/message_active.svg",
  //   },
  // },
  {
    path: "/profile",
    component: () => import("@/views/profile/profile.vue"),
    meta: {
      text: "我的",
      image: "tabbar/profile.svg",
      imageActive: "tabbar/profile_active.svg",
    },
  },
];

export { tabbarRoutes };
