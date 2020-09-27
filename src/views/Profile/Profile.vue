<template>
  <div>
    <profile-header></profile-header>
    <div class="user">
      <div class="profile" v-if="user._id">
        <img :src="user.avatar" alt="avatar" />
        {{ user.name }}
      </div>
      <div v-else>
        <router-link :to="'/login/'">登录</router-link>
      </div>
      <hr />
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
      <button v-if="user._id" @click="signout">退出登录</button>
      <div v-if="user._id">
        <router-link :to="'/reset/' + user._id">更新用户信息</router-link>
      </div>
    </div>

    <div class="product">
      <div>简述砖</div>
      <div>简书会员</div>
      <div>天天抽奖</div>
      <div>排行榜</div>
    </div>

    <div>
      <li>简书公告1</li>
      <li>简书公告2</li>
    </div>
    <hr />

    <div class="li-item">
      <div>我的钱包</div>
      <div>简书活动</div>
      <div>每日任务</div>
      <div>我的小岛</div>
      <div>浏览历史</div>
      <div>开启夜间模式</div>
      <div>设置</div>
      <div>
        <router-link to="/about">关于</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import ProfileHeader from "./childComps/ProfileHeader/ProfileHeader";
import { mapState } from "vuex";
export default {
  name: "Profile",
  components: {
    ProfileHeader,
  },
  data() {
    return {};
  },
  methods: {
    signout() {
      this.$store.commit("del_token");
      this.$store.commit("del_user");
      this.user = {};
      this.$toast.show("退出登录成功", 2000);
    },
  },
  computed: {
    ...mapState(["user"]),
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

.product {
  width: 90%;
  margin: 0 auto;
  display: flex;
  background-color: rgb(231, 231, 238);
}

.product div {
  flex: 1;
  text-align: center;
  padding: 20px;
}

.li-item {
  width: 90%;
  margin: 0 auto;
}

.li-item div {
  padding: 10px;
  background-color: rgb(227, 227, 238);
  margin-bottom: 4px;
}
</style>