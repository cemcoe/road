import { defineStore } from "pinia";
import {
  getUserInfo,
  getUserPosts,
  followingUser,
  listfollowingUser,
  listfollower,
} from "@/service/modules/user";

export const useUserStore = defineStore("userStore", {
  state: () => {
    return {
      currentUserInfo: {},
      postList: [],
      following: [],
      followers: [],
    };
  },
  actions: {
    async getUserInfoAction(userId) {
      const res = await getUserInfo(userId);
      this.currentUserInfo = res.data.user;
      const { avatar } = this.currentUserInfo;
      this.currentUserInfo.avatar =
        "https://jian.cemcoe.com/jianshu_api" + avatar;
    },
    async getUserPostsAction(userId) {
      const res = await getUserPosts(userId);
      this.postList = res.data;
    },
    async followUserAction() {
      const res = await followingUser(this.currentUserInfo._id);
      console.log(res);
    },
    async getFollowingAction(uid) {
      const res = await listfollowingUser(uid);
      this.following = res.data.following;
    },
    async getFollowersAction(uid) {
      const res = await listfollower(uid);
      this.followers = res.data.followers;
    },
  },
  getters: {
    getFollowingCount({ following }) {
      return following.length;
    },
    getFollowersCount({ followers }) {
      return followers.length;
    },
  },
});
