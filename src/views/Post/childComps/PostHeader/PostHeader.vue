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
            <li class="enable" @click="delPost">删除</li>
            <li class="enable" v-if="postStatus === 1" @click="privatePost">
              转为私密
            </li>
            <li class="enable" v-if="postStatus === -1" @click="publicPost">
              转为公开
            </li>
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
    <div class="overlay" v-show="isShowMenu" @click="more"></div>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import CemIcon from "components/common/icon/Icon";

import { gotoTrash, gotoPrivate, gotoPublic } from "network/post";
export default {
  name: "PostHeader",
  props: {
    postStatus: {},
  },
  data() {
    return {
      isShowMenu: false, // 是否展示菜单遮罩
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
    delPost() {
      console.log(this.$route.params.id);
      // 发送更新文章请求
      gotoTrash(this.$route.params.id).then((res) => {
        if (res.status === 200) {
          this.$toast.show("该篇文章已经移到了你的垃圾箱，为你跳到首页");
          // 跳到首页
          setTimeout(() => {
            this.$router.replace(`/`);
          }, 1000);
        }
      });
    },

    privatePost() {
      // 发送更新文章请求
      gotoPrivate(this.$route.params.id).then((res) => {
        if (res.status === 200) {
          this.$toast.show("该篇文章已经移到了你的私密文件夹，为你跳到首页");
          // 跳到首页
          setTimeout(() => {
            this.$router.replace(`/`);
          }, 1000);
        }
      });
    },

    publicPost() {
      // 发送更新文章请求
      gotoPublic(this.$route.params.id).then((res) => {
        if (res.status === 200) {
          this.$toast.show("该篇文章已经移到了你的公开文件夹，为你跳到首页");
          // 跳到首页
          setTimeout(() => {
            this.$router.replace(`/`);
          }, 1000);
        }
      });
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
  /* box-shadow: 0 0 4px #000; */
  box-shadow: 0 0 4px rgb(216, 211, 211);
}

.menu {
  position: fixed;
  right: 0;
  top: 44px;
  background-color: rgb(226, 217, 217);
  z-index: 3504;
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

.overlay {
  position: fixed;
  top: 44px;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 2999;
  background-color: #000;
  opacity: 0.8;
}
</style>
