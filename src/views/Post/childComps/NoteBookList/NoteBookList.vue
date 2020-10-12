<template>
  <div>
    <div class="notebooks">
      <div class="notebook" v-for="notebook in notebooks" :key="notebook._id">
        <span>{{ notebook.title }}</span>
        <button>加入</button>
      </div>
    </div>
  </div>
</template>

<script>
import { getAuthorNoteBooks } from "network/user.js";
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