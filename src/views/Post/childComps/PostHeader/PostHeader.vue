<template>
  <div class="container">
    <nav-bar>
      <div slot="left" @click="$router.back()">
        <cem-icon name="back"></cem-icon>
      </div>
      <div slot="right">
        <div class="more" @click="more"><cem-icon name="more"></cem-icon></div>
        <div class="menu" v-show="isShowMenu">
          <!-- v-if="$store.getters.isAuthor()" -->
          <!-- 文章所有者 -->
          <ul v-if="$store.getters.isAuthor()">
            <li @click="unable">收藏</li>
            <li @click="unable">分享</li>
            <li class="enable" @click="editPost">编辑</li>
            <li class="enable" @click="addPostToNoteBook">收入连载</li>
            <li @click="unable">删除</li>
          </ul>
          <!-- 看别人的文章 -->
          <ul v-else>
            <li>收藏</li>
            <li>分享</li>
            <li>收入专题</li>
            <li>显示模式</li>
            <li>举报</li>
          </ul>
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import CemIcon from "components/common/icon/Icon";
export default {
  name: "PostHeader",
  data() {
    return {
      isShowMenu: false, // 是否展示菜单
    };
  },
  components: {
    NavBar,
    CemIcon,
  },
  methods: {
    more() {
      this.isShowMenu = !this.isShowMenu;
    },
    editPost() {
      console.log("编辑文章");
      console.log(this.$store.state.post);
      this.$router.replace("/writer/" + this.$store.state.post._id);
    },
    addPostToNoteBook() {
      // 向父组件传递数据
      this.$emit("addPostToNoteBook");
      this.isShowMenu = false;
    },
    unable() {
      this.$toast.show("还没写呢，点点编辑试一试");
    },
  },
};
</script>

<style scoped>
.container {
  box-shadow: 0 0 4px #000;
}

.menu {
  position: fixed;
  right: 0;
  top: 44px;
  background-color: rgb(226, 217, 217);
  z-index: 1504;
  min-width: 80px;
}
.menu li {
  line-height: 30px;
  padding: 6px;
  text-align: left;
}

.enable {
  /* 可以使用 */
  background-color: rgb(245, 235, 235);
}
</style>
