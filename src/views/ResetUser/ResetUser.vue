<template>
  <div>
    <div>
      <h2>更新用户信息</h2>
      用户简介
      <input type="text" v-model="newUserBio" />
      {{ this.$store.state.user.bio }}
      <button @click="updateUserBio">更新</button>
    </div>
    <hr />

    <div>
      <h2>更新用户头像</h2>
      <h1>原头像</h1>
      <img :src="this.$store.state.user.avatar" alt="" />
      <upload @uploadImgEnd="uploadImgEnd"></upload>
      <button @click="updateUserAvatar">更新</button>
    </div>

    <hr />
  </div>
</template>

<script>
import { update } from "network/user";
import Upload from "components/common/upload/Upload";
export default {
  data() {
    return {
      newUserBio: "",
      newAvatar: "",
    };
  },
  components: {
    Upload,
  },
  methods: {
    // 更新用户简介
    updateUserBio() {
      // console.log(this.newUserBio);
      let obj = {
        bio: this.newUserBio,
      };
      update(this.$store.state.user._id, obj).then((res) => {
        // console.log(res);
        // vuex 信息同步更新
        this.$store.commit("setUser", res.data.user);
        this.$toast.show("更新用户简介信息成功");
      });
    },

    // 图片上传成功
    uploadImgEnd(url) {
      console.log("从upload中拿到的图片地址", url);
      this.newAvatar = url;
      // console.log(this.newAvatar, "/////////////////////////");
      // let obj = {
      //   avatar: url,
      // };
      // update(this.$store.state.user._id, obj).then((res) => {
      //   console.log(res);
      // });
    },

    // 更新用户头像信息
    updateUserAvatar() {
      let obj = {
        avatar: this.newAvatar,
      };
      update(this.$store.state.user._id, obj).then((res) => {
        // console.log(res, "//////////////////////");
        // vuex 信息同步更新
        this.$store.commit("setUser", res.data.user);

        // this.$store.commit("set_token", res.data.token);
        //   // 将token信息保存到vuex和localStorage
        //   this.$store.commit("setUser", res.data.user);
      });
      this.$toast.show("更新用户头像信息成功");
    },
  },
};
</script>

<style>
</style>