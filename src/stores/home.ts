import { ref } from "vue";
import { defineStore } from "pinia";
import { getHomePostList } from "@/service/modules/home";
import type { IPost } from "@/types";

export const useHomeStore = defineStore("home", () => {
  const postList = ref<IPost[]>([]);

  function getHomePostListAction(page = 1, per_page = 10) {
    getHomePostList(page, per_page).then((res) => {
      const { status, data } = res;
      if (status === 200) {
        postList.value = data.post;
      }
    });
  }

  return {
    postList,
    getHomePostListAction,
  };
});
