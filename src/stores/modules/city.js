import { defineStore } from "pinia";
import { getCityAll } from "@/service";

export const useCityStore = defineStore("city", {
  state: () => {
    return {
      allCities: {},
      currentCity: {},
    };
  },
  actions: {
    async fetchAllCityAction() {
      const res = await getCityAll();
      this.allCities = res.data;
    },
  },
});
