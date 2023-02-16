<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { storeToRefs } from "pinia";
import useInsertText from "./useInsertText.js";
import { usePostStore } from "@/stores/post";
import EditorHeader from "./EditorHeader.vue";
import EditorPannel from "./EditorPannel.vue";
import MarkedPreview from "../MarkedPreview/MarkedPreview.vue";

const router = useRouter();

const postStore = usePostStore();
postStore.init();
const { postDetail } = storeToRefs(postStore);

defineEmits(["routeLeave"]);

const isPreview = ref(false);

const preview = () => {
  isPreview.value = true;
};

const goBack = () => {
  // 如果在预览状态下点击，则切换为编辑状态
  // 如果是编辑状态，则路由切换

  if (isPreview.value) {
    isPreview.value = false;
    return;
  }
  console.log("go");

  router.back();
};

const insert = (value: string) => {
  console.log("insert", value);
  const dom = document.querySelector("#post");
  useInsertText(dom, value);
};

// 创建新文章
const publish = () => {
  postStore.createPostAction();
};

const inputFocus = () => {
  console.log("iuput focus");
};

const textareaFocus = () => {
  console.log("testarea focus");
};

function textareaBlur() {
  console.log(postDetail);
  postStore.updatePostAction();
}
</script>

<template>
  <EditorHeader
    @goBack="goBack"
    @preview="preview"
    :wordcount="postStore.getPostWordcount"
    @publish="publish"
  />

  <div class="editor" v-show="!isPreview">
    <div class="content">
      <input
        v-model="postDetail.title"
        type="text"
        id="title"
        placeholder="请输入标题"
        @focus="inputFocus"
        maxlength="30"
      />
      <!-- TODO: 这个行数要动态调整 -->
      <textarea
        v-model="postDetail.content"
        name="post"
        id="post"
        placeholder="请输入正文"
        rows="600"
        @focus="textareaFocus"
        @blur="textareaBlur"
      ></textarea>
    </div>

    <EditorPannel @insert="insert" />
  </div>
  <MarkedPreview v-show="isPreview" :markdownString="postDetail.content" />
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

.editor {
  background-color: #fff;
}

.content {
  margin-bottom: 49px;
  /* height: calc(100vh - 44px - 50px); */
  /* overflow-y: scroll; */
  padding: 10px;
  box-sizing: border-box;
  line-height: 40px;
}

.content #title {
  outline: 0 none;
  border: none !important;
  font-size: 24px;
  line-height: 30px;
  /* background-color: #ccc; */
  width: 100%;
}

::-webkit-input-placeholder {
  color: #ccc;
}

.content #post {
  outline: 0 none;
  border: none !important;
  width: 100%;
  resize: none;
  line-height: 30px;
  letter-spacing: 4px;

  overflow-y: hidden;
}

.preview {
  margin-top: 44px;
}
</style>
