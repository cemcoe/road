import { ref } from "vue";
import { defineStore } from "pinia";
import { getHomePostList } from "@/service/modules/home";
import type { IPost } from "@/types";

export const useHomeStore = defineStore("home", () => {
  const postList = ref<IPost[]>([]);
  const page = ref(1);
  const per_page = ref(10);

  async function getHomePostListAction() {
    getHomePostList(page.value, per_page.value).then((res) => {
      const { status, data } = res;
      if (status === 200) {
        postList.value.push(...data.postList);
        page.value++;
      }
    });
  }

  return {
    postList,
    getHomePostListAction,
  };
});
