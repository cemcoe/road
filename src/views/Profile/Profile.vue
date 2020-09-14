<template>
  <div>
    <!-- <div v-if="!user._id">查无此人用户id从vuex中拿登录id{{this.$store.state.user._id}}</div> -->
    
    <div>
      <!-- {{user._id}} -->
      {{user.name}}
      {{user.gender}}
      关注：
      粉丝：
      <button @click="signout">退出登录</button>
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
import { getUserInfo } from "network/user";
export default {
  name: "Profile",
  data() {
    return {
      // _id: this.$store.state.user._id || null,
      // 用户信息
      user: {},
    };
  },
  // 有id向服务器发请求
  // 拿到路由传来的参数
  created() {
    // // this._id = this.$route.params.id;
    // console.log(this._id)
    if(this.$store.state.user._id) {
      getUserInfo(this.$store.state.user._id).then((res) => {
      // 错误处理
      if (res.status === 404) {
        console.log("查无此人");
      }
      if (res.status === 200) {
        console.log(res);
        this.user = res.data.user;
      }
    });

    }
    
  },

  methods: {
    signout() {
      this.$store.commit("del_token")
      this.$store.commit("del_user")
      this.user = {}
      this.$toast.show('退出登录成功' , 2000)

    }
  },

};
</script>

<style>
</style>