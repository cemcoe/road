<script setup lang="ts">
import { ref, onBeforeUnmount } from "vue";
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

onBeforeUnmount(() => postStore.initPostDetail());
</script>

<template>
  <div class="post">
    <van-nav-bar
      title="文章"
      left-arrow
      fixed
      placeholder
      @click-left="onClickLeft"
      @click-right="showPopup"
      class="phone"
    >
      <template #right>
        <van-icon size="20" name="ellipsis" />
      </template>
    </van-nav-bar>

    <div class="post main" v-if="postDetail?.title">
      <div class="title">
        <h2>{{ postDetail?.title }}</h2>
      </div>
      <PostAuthor :author="postDetail?.author"></PostAuthor>

      <MarkedPreView :markdownString="postDetail?.content" />
    </div>
    <van-skeleton v-else title :row="8" />

    <van-popup
      v-model:show="show"
      position="bottom"
      round
      closeable
      close-icon="close"
      :style="{
        // height: '30%',
        padding: '20px 10px',
        background: 'rgb(250, 247, 247)',
      }"
    >
      <van-space direction="vertical" fill>
        <van-space direction="vertical" fill>
          <h3 style="margin-left: 10px">{{ postDetail?.title }}</h3>
          <p
            style="
              margin-left: 10px;
              margin-bottom: 16px;
              font: 14px;
              opacity: 0.5;
            "
          >
            作者信息：{{ postDetail?.author?.name }}
          </p>
        </van-space>

        <van-grid :gutter="10" :border="false" clickable>
          <van-grid-item icon="share" text="分享" />
          <van-grid-item icon="comment" text="发私信" />
          <van-grid-item icon="service" text="举报" />
          <van-grid-item icon="lock" text="拉黑" />
        </van-grid>

        <van-cell-group>
          <van-cell
            title="文章状态"
            :value="postDetail.status === 0 ? '私密' : '公开'"
          />
          <van-cell title="编辑" @click="edit" />
        </van-cell-group>
      </van-space>
    </van-popup>
  </div>
</template>

<style scoped>
.post {
  --van-nav-bar-icon-color: #000;
}
.title {
  padding: 10px;
  font-size: 20px;
  font-weight: 700;
}

.post :deep(.van-grid-item .van-grid-item__content) {
  border-radius: 10px;
}
</style>
