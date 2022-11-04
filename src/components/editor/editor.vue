<script setup>
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import { storeToRefs } from "pinia";
import useInsertText from "./useInsertText.js";
import { usePostStore } from "@/stores/modules/post";
import EditorHeader from "./editor-header.vue";
import EditorPannel from "./editor-pannel.vue";
import MarkedPreview from "../marked-preview/marked-preview.vue";

const router = useRouter();
const route = useRoute();

const postId = route?.params?.postId;

const postStore = usePostStore();
if (postId) {
  // 编辑模式，请求原数据
  postStore.fetchPostDetail(postId);
}

const emits = defineEmits(["routeLeave"]);

const { postDetail } = storeToRefs(postStore);

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

const insert = (value) => {
  console.log("insert", value);
  const dom = document.querySelector("#post");
  useInsertText(dom, value);
};

// 创建新文章
const publish = () => {
  postStore.createPostAction();
};

// 更新文档
const update = () => {
  postStore.updatePostAction(postId).then(() => {
    router.back();
  });
};

const inputFocus = () => {
  console.log("iuput focus");
};

const textareaFocus = () => {
  console.log("testarea focus");
};
</script>

<template>
  <EditorHeader
    @goBack="goBack"
    @preview="preview"
    :wordcount="postStore.getPostWordcount"
    @publish="publish"
    @update="update"
    :isNewPost="!postId"
  />

  <div class="editor" v-show="!isPreview">
    <div class="content">
      <input
        v-model="postDetail.title"
        type="text"
        id="title"
        placeholder="请输入标题"
        @focus="inputFocus"
      />
      <!-- TODO: 这个行数要动态调整 -->
      <textarea
        v-model="postDetail.content"
        name="post"
        id="post"
        placeholder="请输入正文"
        rows="600"
        @focus="textareaFocus"
      ></textarea>
    </div>

    <EditorPannel @insert="insert" />
  </div>
  <MarkedPreview :markdownString="postDetail.content" />
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
  height: calc(100vh - 44px - 50px);
  overflow-y: scroll;
  padding: 10px;
  box-sizing: border-box;
  line-height: 40px;
}

.content #title {
  outline: 0 none;
  border: none !important;
  font-size: 20px;
}

::-webkit-input-placeholder {
  color: #ccc;
}

.content #post {
  outline: 0 none;
  border: none !important;
  width: 100%;
  resize: none;

  overflow-y: hidden;
}

.preview {
  margin-top: 44px;
}
</style>
