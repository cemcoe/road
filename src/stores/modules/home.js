import { defineStore } from "pinia";
import { getHomePostList } from "@/service/modules/home";

export const useHomeStore = defineStore("homeStore", {
  state: () => {
    return {
      recommendPostList: [],
      page: 1,
      per_page: 10,
    };
  },
  actions: {
    async fetchHomePostList() {
      const res = await getHomePostList(this.page, this.per_page);
      this.recommendPostList.push(...res.data.post);
      this.page++;
    },
  },
});
