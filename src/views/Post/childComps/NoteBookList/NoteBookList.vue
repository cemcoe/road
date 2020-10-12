<template>
  <div>
    <div class="notebooks">
      <div v-if="notebooks.length !== 0">
        <div class="notebook" v-for="notebook in notebooks" :key="notebook._id">
          <span>{{ notebook.title }}</span>
          <button @click="add(notebook._id)">加入</button>
        </div>
      </div>

      <div v-else class="no-data">你还没有连载呢</div>
    </div>
  </div>
</template>

<script>
import { getAuthorNoteBooks } from "network/user.js";
import { addPostToNoteBook } from "network/notebook.js";
export default {
  data() {
    return {
      notebooks: [],
    };
  },
  async created() {
    // 获取登录用户连载列表
    const res = await getAuthorNoteBooks(this.$store.state.user._id);
    this.notebooks = res.data.notebooks;
    // console.log(res, "44444444444");
  },
  methods: {
    async add(notebookid) {
      // console.log(notebookid);
      // 发网络请求
      const nid = notebookid;
      const pid = this.$route.params.id;
      console.log(nid, pid);

      const res = await addPostToNoteBook(nid, pid);
      if (res.status === 204) {
        this.$toast.show("添加成功");
      } else if (res.status === 401) {
        this.$toast.show("该文章已经在该连载中，无需重复添加");
      }
      console.log(res, "将文章添加到连载中");
    },
  },
};
</script>

<style scoped>
.notebooks {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #fff;
  z-index: 30000;
}
</style>