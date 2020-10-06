<template>
  <div class="box">
    <div class="container">
      <div class="left">
        <input type="text" v-model="content" placeholder="说点什么吧啊" />
      </div>
      <div class="right">
        <span @click="commentSubmit">评论 </span>
        <span>点赞</span>
        <span>分享</span>
      </div>
    </div>
  </div>
</template>

<script>
import { createPostComment } from "network/comment";
export default {
  props: {
    postId: {},
  },
  data() {
    return {
      content: "",
    };
  },
  methods: {
    async commentSubmit() {
      // console.log(this.content);

      const result = await createPostComment(this.postId, this.content);
      console.log(result);
      if (result.status === 200) {
        this.$toast.show("评论创建成功，为你更新评论列表");
        // 重新请求评论数据，并更新state
        this.$store.dispatch("getPostComments", this.postId);
        // this.$store.commit('receive_post_comments', result.data.commit)
      } else {
        this.$toast.show("评论失败了耶");
      }
    },
  },
};
</script>

<style scoped>
.box {
  height: 50px;
}
.container {
  height: 44px;
  /* background-color: rgb(224, 208, 208); */
  position: fixed;
  /* 文章预览zindex1500 */
  z-index: 1501;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  background-color: rgb(243, 236, 236);
  box-shadow: 0 0 6px #000;
  align-items: center;
}
.container .right {
  flex: 0 0 180px;
  display: flex;
  justify-content: space-around;
}
.container .left {
  flex: 1;
}

input {
  border: 0px;
  border-radius: 20px;
  margin-left: 10px;
  box-sizing: border-box;
  padding: 6px;
  outline-style: none;
  width: 90%;

  background-color: rgb(243, 237, 237);
  /* border: 1px solid #ccc; */
}

input:focus {
  background-color: #fff;
}
</style>