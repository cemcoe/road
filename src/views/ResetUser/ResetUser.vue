<template>
  <div>
    <div>
      <h2>更新用户信息</h2>用户简介
      <input type="text" v-model="newUserBio" />
      <button @click="updateUserBio">更新</button>
    </div>
    <hr />

    <div>
      <h2>更新用户头像</h2>
      <upload @uploadImgEnd="uploadImgEnd"></upload>
      <button>更新</button>
    </div>

    <hr />
  </div>
</template>

<script>
import { update } from "network/user";
import Upload from "../Upload/Upload";
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
    updateUserBio() {
      console.log(this.newUserBio);
      let obj = {
        bio: this.newUserBio,
      };
      update(this.$store.state.user._id, obj).then((res) => {
        console.log(res);
      });
    },
    uploadImgEnd(url) {
      console.log("从upload中拿到的图片地址", url);
      let obj = {
        avatar: url,
      };
      update(this.$store.state.user._id, obj).then((res) => {
        console.log(res);
      });
    },
  },
};
</script>

<style>
</style>