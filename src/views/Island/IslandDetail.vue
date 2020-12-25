<template>
  <div>
    <div class="island-info">{{ island.name }} === {{ island.abstract }}</div>

    <div class="create">
      <form>
        <label for="content">帖子</label>
        <input id="content" v-model="islandPost" type="text" />
      </form>
      <button @click="createNewIslandPost">创建新帖子</button>
    </div>
  </div>
</template>

<script>
import { getIslandDetail } from "network/island";
import { createIslandPost } from "network/islandPost";

export default {
  data() {
    return {
      island: {},
      islandPost: "",
    };
  },
  created() {
    getIslandDetail(this.$route.params.islandId).then((res) => {
      console.log(res);
      this.island = res.data.island;
    });
  },
  methods: {
    async createNewIslandPost() {
      const islandPost = {
        content: this.islandPost,
      };
      const res = await createIslandPost(
        this.$route.params.islandId,
        islandPost
      );
      if (res.status === 200) {
        this.$toast.show("帖子创建成功");
        this.islandPost = "";
      }
    },
  },
};
</script>

<style scoped>
input {
  border: 1px solid #000;
}
</style>