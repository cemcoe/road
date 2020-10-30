<template>
  <div class="box">
    <div class="container">
      <div class="left">
        <input
          v-if="$store.state.user"
          type="text"
          v-model="content"
          placeholder="说点什么吧啊"
        />
        <input
          v-else
          type="text"
          v-model="content"
          placeholder="您还没有登录，无法评论"
          disabled
        />
      </div>
      <div class="right">
        <div @click="commentSubmit" class="item">
          <cem-icon name="comment"></cem-icon>
          <span>评论</span>
        </div>
        <div class="item">
          <cem-icon name="like"></cem-icon>
          <span>喜欢</span>
        </div>
        <div class="item">
          <cem-icon name="share"></cem-icon>
          <span>分享</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { createPostComment } from "network/comment";
import CemIcon from "components/common/icon/Icon";
export default {
  props: {
    postId: {},
  },
  data() {
    return {
      content: "",
    };
  },
  components: {
    CemIcon,
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
  background-color: rgb(255, 255, 255);
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
  padding: 6px 16px;
  font-size: 14px;

  outline-style: none;
  width: 90%;
  background-color: rgb(240, 231, 231);
}

.right span {
  font-size: 12px;
}

.right .item {
  text-align: center;
}
</style>