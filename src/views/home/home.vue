<script setup>
import { watch, ref, onActivated } from "vue";
import { useRouter } from "vue-router";
import { storeToRefs } from "pinia";
import { useHomeStore } from "@/stores/modules/home";
import { useScroll } from "@/hooks/useScroll";
import HomeNavBar from "./components/home-nav-bar.vue";
import PostList from "@/components/post-list/post-list.vue";

const router = useRouter();

const homeScroll = ref(null);

const homeStore = useHomeStore();
homeStore.fetchHomePostList();

const { recommendPostList } = storeToRefs(homeStore);

const { isReachBottom, scrollTop } = useScroll(homeScroll);

watch(isReachBottom, () => {
  // console.log(isReachBottom.value);
  if (isReachBottom.value) {
    homeStore.fetchHomePostList().then(() => {
      isReachBottom.value = false;
    });
  }
});

watch(scrollTop, () => {
  if (scrollTop.value > 60) {
    console.log("doing");
  }
});

const clickGoEditorBtn = () => {
  router.push("/editor");
};

onActivated(() => {
  homeScroll.value.scrollTo({
    top: scrollTop.value,
  });
});
</script>

<script>
export default {
  name: "home",
};
</script>

<template>
  <div class="home">
    <HomeNavBar></HomeNavBar>
    <div class="home-scroll" ref="homeScroll">
      <div
        class="banner"
        @click="goInfo($router.push('/p/636313b09bc97a88804b814c'))"
      >
        <img src="@/assets/img/home/banner.png" alt="" />
      </div>
      <div class="post-list-container">
        <PostList :postList="recommendPostList"></PostList>
      </div>
    </div>

    <div class="go-editor" @click="clickGoEditorBtn">
      <van-icon name="edit" color="#f40" size="26" />
    </div>
  </div>
</template>

<style scoped>
.banner img {
  width: 100%;
}

.home-scroll {
  height: calc(100vh - 46px - 50px);
  overflow-y: auto;
}

.go-editor {
  position: fixed;
  width: 40px;
  height: 40px;
  right: 50px;
  bottom: 100px;
  border-radius: 50%;
  /* background-color: rgb(236, 221, 221); */
  background-color: #fff;
  line-height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  /* box-shadow: 0 0 40px rgb(8, 8, 8); */
  box-shadow: 4px 4px 6px rgb(228, 225, 225);
}
</style>
