<template>
  <div>
    <div class="items" v-if="notebooks.length">
      <div class="item" v-for="notebook in notebooks" :key="notebook._id">
        <div class="icon" @click="gotoNDetail(notebook._id)">
          <img v-lazy="notebook.icon" alt="icon" />
        </div>
        <div class="meta" @click="gotoNDetail(notebook._id)">
          {{ notebook.title }}
        </div>
        <div class="author" @click="gotoUDetail(notebook.author._id)">
          {{ notebook.author.name }}
        </div>
      </div>
    </div>
    <div class="loading" v-else>
      <loading></loading>
    </div>
  </div>
</template>

<script>
import { getNoteBookList } from "network/notebook.js";
import Loading from "components/common/loading/Loading";

export default {
  data() {
    return {
      notebooks: [],
    };
  },
  components: {
    Loading,
  },
  async created() {
    // 获取连载列表
    const res = await getNoteBookList(1, 10);
    this.notebooks = res.data.notebook;
    console.log(res);
  },
  methods: {
    gotoNDetail(nid) {
      console.log(nid);
      const detailUrl = `/nb/${nid}`;
      this.$router.push(detailUrl);
    },
    gotoUDetail(uid) {
      console.log(uid);
      const detailUrl = `/u/${uid}`;
      this.$router.push(detailUrl);
    },
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
  /* background-color: rgb(238, 235, 243); */
  /* box-shadow: 0 0 4px rgb(224, 220, 220); */
  border-radius: 4px;
}

.item .icon {
  padding-top: 6px;
  padding-bottom: 6px;
  /* height: 120px; */
  display: flex;
  justify-content: center;
}
.icon img {
 width: auto;
	height: auto;
	max-width: 100%;
	max-height: 100%;
  background-color: #fff;
  /* border: 1px solid #000; */
  border-radius: 6px;
}

.item .meta {
  font-size: 16px;
  padding: 6px;
  height: 40px;
}

.item .author {
  padding-left: 6px;
  font-size: 12px;
  color: rgba(34, 33, 33, 0.5);
}
</style>