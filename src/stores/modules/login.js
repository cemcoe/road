import { defineStore } from "pinia";
import {
  login,
  listfollowingUser,
  listfollower,
  followingUser,
  unfollowingUser,
} from "@/service/modules/user";

const useLoginStore = defineStore("login", {
  state: () => {
    return {
      loginInfo: {
        name: "test",
        password: "cemcoe",
      },
      token: localStorage.getItem("token") || "",
      userInfo: localStorage.getItem("userInfo")
        ? JSON.parse(localStorage.getItem("userInfo"))
        : {},
      following: [], // 用户关注列表，这个功能要写个接口
      followers: [],
      followingUserPost: [],
    };
  },

  actions: {
    async loginAction() {
      const res = await login(this.loginInfo);
      const { token, user } = res.data;
      const { avatar } = user;
      user.avatar = "https://jian.cemcoe.com/jianshu_api" + avatar;
      localStorage.setItem("token", token);
      localStorage.setItem("userInfo", JSON.stringify(user));
      this.token = token;
      this.userInfo = user;
    },
    async logoutAction() {
      localStorage.clear("token");
      localStorage.clear("userInfo");
    },
    async getFollowingPostsAction() {
      const uid = this.userInfo._id;

      if (uid) {
        const res = await listfollowingUser(this.userInfo._id, "posts");
        this.followingUserPost = res.data.postList;
      }
    },
    async getFollowingAction() {
      const uid = this.userInfo._id;
      if (uid) {
        const res = await listfollowingUser(this.userInfo._id);
        const following = res.data.following;
        this.following = following;
      }
    },
    async getFollowersAction() {
      const uid = this.userInfo._id;
      if (uid) {
        const res = await listfollower(this.userInfo._id);
        this.followers = res.data.followers;
      }
    },
    // 登录用户关注用户
    async followUserAction(id) {
      // 关注当前用户
      const res = await followingUser(id);
      if (res.status === 401) {
        console.log("关注失败，刷新页面");
        return;
      }
      console.log("关注成功，为您刷新数据");
      // 更新关注列表
      this.getFollowingAction();
    },
    async unfollowUserAction(id) {
      const res = await unfollowingUser(id);
      if (res.status === 401) {
        console.log("取消关注失败，刷新页面");
        return;
      }
      console.log("取消关注成功，为您刷新数据");

      this.getFollowingAction();
    },
  },

  getters: {
    isLogin({ token }) {
      return !!token;
    },
    isFollowing({ following }) {
      // 这个功能写个接口比较合适
      return (uid) => following.map((u) => u._id).includes(uid);
    },
    getFollowingCount({ following }) {
      return following.length;
    },
    getFollowersCount({ followers }) {
      return followers.length;
    },
  },
});

export default useLoginStore;
