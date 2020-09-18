<template>
  <div class="home">
    <div id="nav">
      <home-header></home-header>
      <div class="tab">
        <div class="tab-item">
          <router-link :to="'/home'+'/activity'" replace>活动</router-link>
        </div>
        <div class="tab-item">
          <router-link :to="'/home'+'/recommend'" replace>推荐</router-link>
        </div>
        <div class="tab-item">
          <router-link :to="'/home'+'/topic'" replace>专题</router-link>
        </div>
        <div class="tab-item">
          <router-link :to="'/home'+'/serialization'" replace>连载</router-link>
        </div>
      </div>

      <router-view></router-view>

      <div class="write">
        <router-link to="/write">写文章</router-link>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeHeader from "./childComps/HomeHeader/HomeHeader";

export default {
  name: "Home",
  components: {
    HomeHeader,
  },
  data() {
    return {};
  },
  computed: {
    userInfo() {
      return this.$store.state.userInfo;
    },
  },
};
</script>

<style scoped>
.tab {
  display: flex;
  padding-bottom: 8px;
  border-bottom: 1px solid rgb(177, 159, 159);
}
.tab-item {
  flex: 1;
  text-align: center;
}

.router-link-exact-active {
  padding-bottom: 6px;
  border-bottom: 4px solid #f40;
  color: #000;
}

.write {
  position: fixed;
  width: 50px;
  height: 50px;
  right: 50px;
  bottom: 70px;
  border-radius: 50%;
  background-color: #f44;
  color: aliceblue;
  line-height: 50px;
  padding: 10px;
  box-shadow: 0 0 4px #000;
}
.write a {
  color: aliceblue;
  width: 100%;
  height: 100%;
  display: block;
}
</style>
