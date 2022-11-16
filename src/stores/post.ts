import { ref } from "vue";
import { defineStore } from "pinia";
import { getPostDetail } from "@/service/modules/post";
import type { IPost } from "@/types";

export const usePostStore = defineStore("post", () => {
  const postDetail = ref<IPost>();

  async function fetchPostDetail(postId: any) {
    getPostDetail(postId).then((res) => {
      const { status, data } = res;
      if (status === 200) {
        postDetail.value = data.post;
        postDetail.value.author.avatar =
          "https://jian.cemcoe.com/jianshu_api" + data.post.author.avatar;
      }
    });
  }

  return {
    postDetail,
    fetchPostDetail,
  };
});
