<template>
  <div>
    <profile-header></profile-header>
    <div class="user">
      <div class="profile">
        <img :src="user.avatar" alt="avatar" />
        {{user.name}}
      </div>
      <hr>
      <div class="mine">
        <ul>
          <li>我的文章</li>
          <li>我的贴子</li>
          <li>赞和收藏</li>
          <li>我的书架</li>
        </ul>
      </div>
    </div>

    <div>
      <button @click="signout">退出登录</button>
      <hr />
      <!-- <div>
        <router-link to="/upload">上传图片</router-link>
      </div>-->
      <div>
        <router-link :to="'/reset/'+user._id">更新用户信息</router-link>
      </div>
      <div>
        <router-link to="/about">关于</router-link>
      </div>
    </div>
    <hr />

    <div>
      <li>我的文章</li>
      <li>我的帖子</li>
      <li>赞和收藏</li>
      <li>我的书架</li>
    </div>
    <hr />

    <div>
      <li>简述砖</li>
      <li>简书会员</li>
      <li>天天抽奖</li>
      <li>排行榜</li>
    </div>
    <hr />

    <div>
      <li>简书公告1</li>
      <li>简书公告2</li>
    </div>
    <hr />

    <div>
      <li>我的钱包</li>
      <li>简书活动</li>
      <li>每日任务</li>
    </div>
  </div>
</template>

<script>
// import { getUserInfo } from "network/user";
import ProfileHeader from "./childComps/ProfileHeader/ProfileHeader";
export default {
  name: "Profile",
  components: {
    ProfileHeader,
  },
  data() {
    return {
      // _id: this.$store.state.user._id || null,
      // 用户信息
      user: this.$store.state.user
    };
  },
  // 有id向服务器发请求
  // 拿到路由传来的参数
  created() {
    // // this._id = this.$route.params.id;
    // console.log(this._id)
    // if (this.$store.state.user._id) {
    //   getUserInfo(this.$store.state.user._id).then((res) => {
    //     // 错误处理
    //     if (res.status === 404) {
    //       console.log("查无此人");
    //     }
    //     if (res.status === 200) {
    //       console.log(res);
    //       this.user = res.data.user;
    //     }
    //   });
    // }
  },

  methods: {
    signout() {
      this.$store.commit("del_token");
      this.$store.commit("del_user");
      this.user = {};
      this.$toast.show("退出登录成功", 2000);
    },
  },
};
</script>

<style scoped>
.user {
  width: 90%;

  margin: 10px auto;
  background-color: rgb(247, 241, 241);
  border-radius: 10px;
}

.mine ul {
  display: flex;
  justify-content: center;
}

.mine ul li {
  flex: 1;
  /* background-color: #000; */
  height: 100px;
  text-align: center;
  line-height: 100px;
}

img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
</style>