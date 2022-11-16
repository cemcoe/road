<script setup lang="ts">
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { storeToRefs } from "pinia";
import { usePostStore } from "@/stores/post";
import PostAuthor from "./components/PostAuthor.vue";
import MarkedPreView from "@/components/MarkedPreview/MarkedPreview.vue";

const router = useRouter();
const route = useRoute();

const postId = route?.params?.postId;

const postStore = usePostStore();
postStore.fetchPostDetail(postId);

const { postDetail } = storeToRefs(postStore);

// TODO: 清除数据
// onUnmounted(() => {
//   postStore.postDetail = {};
// });

const onClickLeft = () => history.back();

const show = ref(false);
const showPopup = () => {
  show.value = true;
};

const edit = () => {
  router.replace("/editor/" + postId);
};
</script>

<template>
  <div class="post">
    <van-nav-bar
      title="文章"
      left-arrow
      fixed
      @click-left="onClickLeft"
      @click-right="showPopup"
    >
      <template #right>
        <van-icon size="20" name="more-o" />
      </template>
    </van-nav-bar>

    <div class="post" v-if="postDetail?.title">
      <div class="title">
        <h2>{{ postDetail?.title }}</h2>
      </div>
      <PostAuthor :author="postDetail?.author"></PostAuthor>

      <MarkedPreView :markdownString="postDetail?.content" />
    </div>

    <van-popup
      v-model:show="show"
      position="bottom"
      round
      :style="{ height: '30%', padding: '10px' }"
    >
      <van-cell-group>
        <van-cell @click="edit" title="编辑" is-link />
        <van-cell title="Cell title" is-link value="Content" />
        <van-cell
          title="Cell title"
          is-link
          arrow-direction="down"
          value="Content"
        />
      </van-cell-group>
    </van-popup>
  </div>
</template>

<style scoped>
.post {
  --van-nav-bar-icon-color: #000;
  margin-top: var(--van-nav-bar-height);
}
.title {
  padding: 10px;
  font-size: 20px;
  font-weight: 700;
}
</style>
