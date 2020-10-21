<template>
  <div class="container">
    <nav-bar>
      <div slot="left">cemcoe</div>
      <div slot="center">
        <router-link to="/search">
          <input class="search" type="text" placeholder="搜索感兴趣的内容" />
        </router-link>
      </div>
      <div slot="right">
        <div v-if="user.name">
          <router-link :to="user_detail_link" class="user-info">
            <img :src="user.avatar" alt="avator" />
          </router-link>
        </div>
        <div v-else>
          <router-link :to="'/login'" replace class="login"
            >登录|注册</router-link
          >
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
export default {
  name: "HomeHeader",
  methods: {
    // goto_profile() {
    //   this.$router.push("/u/" + this.$store.state.user._id);
    // },
  },
  created() {
    console.log(this.$store.state.user);
  },
  components: {
    NavBar,
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
    user_detail_link() {
      return "/u/" + this.$store.state.user._id;
    },
  },
};
</script>

<style scoped>
input {
  border: 0px;
  border-radius: 20px;
  padding: 6px;
  outline-style: none;
  text-align: center;
  background-color: rgb(243, 237, 237);
  /* border: 1px solid #ccc; */
}

input:focus {
  border-color: #66afe9;
  outline: 0;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgba(102, 175, 233, 0.6);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgba(102, 175, 233, 0.6);
}
.login {
  font-size: 14px;
}
img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
</style>