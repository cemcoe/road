import { defineStore } from "pinia";
import { getUserInfo, getUserPosts } from "@/service/modules/user";

export const useUserStore = defineStore("userStore", {
  state: () => {
    return {
      currentUserInfo: {
        name: "",
        bio: "",
        avatar: "",
      },
      postList: [],
    };
  },
  actions: {
    async getUserInfoAction(userId: any) {
      const res = await getUserInfo(userId);
      this.currentUserInfo = res.data.user;
      const { avatar } = this.currentUserInfo;
      this.currentUserInfo.avatar =
        "https://jian.cemcoe.com/jianshu_api" + avatar;
    },
    async getUserPostsAction(userId: any) {
      const res = await getUserPosts(userId);
      this.postList = res.data;
    },
  },
});
