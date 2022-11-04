<script setup>
const emits = defineEmits(["goBack", "preview", "publish", "update"]);

const props = defineProps({
  isNewPost: {
    type: Boolean,
    default: true,
  },
  wordcount: {
    type: Number,
  },
});

const goBack = () => {
  emits("goBack");
};

const preview = () => {
  console.log("preview click");
  emits("preview");
};

const publish = () => {
  console.log("publish click");
  emits("publish");
};

const update = () => {
  console.log("update click");
  emits("update");
};
</script>

<template>
  <div class="container">
    <header>
      <div class="left">
        <button class="item" @click="goBack">
          <van-icon name="arrow-left" />
        </button>
        <span class="item">{{ wordcount }}字</span>
      </div>
      <div class="right">
        <button class="item" @click="preview">预览</button>
        <button class="item preview" v-if="isNewPost" @click="publish">
          发布
        </button>
        <button class="item" v-else @click="update">更新</button>
      </div>
    </header>
  </div>
</template>

<style scoped>
button {
  border: none;
  margin: 0;
  padding: 0;
  width: auto;
  overflow: visible;

  background: transparent;

  /* inherit font & color from ancestor */
  color: inherit;
  font: inherit;

  /* Normalize `line-height`. Cannot be changed from `normal` in Firefox 4+. */
  line-height: normal;

  /* Corrects font smoothing for webkit */
  -webkit-font-smoothing: inherit;
  -moz-osx-font-smoothing: inherit;
}

.container {
  height: 44px;
}
header {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 44px;
}

header .item {
  padding: 6px;
}

.preview {
  color: rgb(225, 19, 19);
}
</style>
