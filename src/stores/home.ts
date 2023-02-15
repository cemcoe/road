import { ref } from "vue";
import { defineStore } from "pinia";
import { getHomePostList } from "@/service/modules/home";
import type { IPost } from "@/types";

export const useHomeStore = defineStore("home", () => {
  const postList = ref<IPost[]>([]);
  const page = ref(1);
  const per_page = ref(10);
  const isLoading = ref(false);
  const isGetAllData = ref(false);

  async function getHomePostListAction() {
    if ((isLoading.value && isGetAllData.value) || isGetAllData.value) {
      return {};
    }

    isLoading.value = true;

    const res = await getHomePostList(page.value, per_page.value);

    isLoading.value = false;
    const { status, data } = res;
    if (status === 200 && !isGetAllData.value) {
      if (data.postList.length === 0) {
        isGetAllData.value = true;
        return {};
      }
      postList.value.push(...data.postList);
      page.value++;
    }
  }

  return {
    postList,
    isLoading,
    isGetAllData,
    getHomePostListAction,
  };
});
