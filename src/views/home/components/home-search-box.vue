<script setup>
import { useRouter } from "vue-router";
import { useCityStore } from "@/stores/modules/city";
import { useHomeStore } from "@/stores/modules/home";
import { storeToRefs } from "pinia";
const router = useRouter();

const cityStore = useCityStore();

const { currentCity } = storeToRefs(cityStore);

const cityClick = () => {
  router.push("/city");
};

const positionClick = () => {
  navigator.geolocation.getCurrentPosition(
    (res) => {
      const { latitude, longitude } = res.coords;
      console.log(latitude, longitude);
    },
    (error) => {
      console.log(error);
    }
  );
};

const homeStore = useHomeStore();
homeStore.fetchHotSuggests();

const { hotSuggests } = storeToRefs(homeStore);

const searchBtnClick = () => {
  router.push({
    path: "/search",
    query: {
      id: 111,
    },
  });
};
</script>

<template>
  <div class="search-box">
    <div class="location">
      <div class="city" @click="cityClick">
        {{ currentCity.cityName ? currentCity.cityName : "上海" }}
      </div>
      <div class="position" @click="positionClick">
        <span class="text">我的位置</span>
        <img src="@/assets/img/home/icon_location.png" alt="" />
      </div>
    </div>
    <div>关键字/位置/民宿名</div>
    <div class="hot-suggests">
      <div class="item" v-for="item in hotSuggests">
        {{ item.tagText.text }}
      </div>
    </div>

    <!-- 搜索按钮 -->
    <div class="section">
      <button class="btn" @click="searchBtnClick">开始搜索</button>
    </div>
  </div>
</template>

<style scoped>
.location {
  display: flex;
  align-items: center;
  padding: 10px;
  font-size: 12px;
}

.location .city {
  flex: 1;
}

.location .position {
  display: flex;
  align-items: center;
  width: 74px;
}

.location .position img {
  margin-left: 6px;
  width: 20px;
}

.hot-suggests {
  margin: 0 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.hot-suggests .item {
  background-color: rgb(227, 223, 223);
  padding: 4px;
  border-radius: 5px;
  margin-top: 4px;
  font-size: 12px;
}
</style>
