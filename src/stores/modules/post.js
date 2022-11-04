import { defineStore } from "pinia";
import { getPostDetail, createPost, updatePost } from "@/service/modules/post";

export const usePostStore = defineStore("postStore", {
  state: () => {
    return {
      postDetail: {
        title: "",
        content: "",
        status: 1,
        wordcount: 0,

        previewContent: "",
      },
    };
  },
  actions: {
    async fetchPostDetail(postId) {
      const res = await getPostDetail(postId);
      this.postDetail = res.data.post;
      this.postDetail.author.avatar =
        "https://jian.cemcoe.com/jianshu_api" + res.data.post.author.avatar;
    },

    async createPostAction() {
      const res = await createPost(this.postDetail);
      console.log(res);
    },

    async updatePostAction(id) {
      const res = await updatePost(id, this.postDetail);
      console.log(res);
    },
  },
  getters: {
    getPostWordcount({ postDetail }) {
      return postDetail?.content?.length;
    },
  },
});
