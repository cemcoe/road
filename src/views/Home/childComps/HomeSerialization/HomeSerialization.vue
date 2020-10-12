<template>
  <div>
    <div class="items">
      <div class="item" v-for="notebook in notebooks" :key="notebook._id">
        <div class="icon">
          <img src="https://cemcoe.com/m.png" alt="icon" />
        </div>
        <div class="meta">
          {{ notebook.title }}
        </div>
        <div class="author">
          {{ notebook.author.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getNoteBookList } from "network/notebook.js";

export default {
  data() {
    return {
      notebooks: [],
    };
  },
  async created() {
    // 获取连载列表
    const res = await getNoteBookList(1, 10);
    this.notebooks = res.data.notebook;
    console.log(res);
  },
};
</script>

<style scoped>
.items {
  display: grid;
  grid-template-columns: repeat(3, 30%);
  gap: 6px;
  justify-content: center;
}
.item {
  background-color: rgb(238, 235, 243);
  box-shadow: 0 0 4px rgb(224, 220, 220);
  border-radius: 4px;
}

.item .icon {
  padding-top: 6px;
  padding-bottom: 6px;
  height: 120px;
  display: flex;
  justify-content: center;
}
.icon img {
  width: 80%;
  background-color: #fff;
  border: 1px solid #000;
}

.item .meta {
  font-size: 16px;
  padding: 6px;
}

.item .author {
  padding: 6px;
  font-size: 12px;
  color: rgba(34, 33, 33, 0.5);
}
</style>