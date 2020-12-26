<template>
  <div>
    <header>
      <button @click="$router.back()">返回</button>
    </header>
    <div class="island-info">{{ island.name }} === {{ island.abstract }}</div>

    <div class="create">
      <form>
        <label for="content">帖子</label>
        <input id="content" v-model="islandPost" type="text" />
      </form>
      <button @click="createNewIslandPost">创建新帖子</button>
    </div>

    <div class="container">
      <!-- todo: 将帖子列表抽成组件 -->
      <div class="post" v-for="post in islandPostList" :key="post._id">
        <router-link class="author" :to="'/u/' + post.author._id">
          <img
            class="avatar"
            v-lazy="$store.state.imgBaseUrl + post.author.avatar"
            alt="author"
          />
          <span class="info">
            <span class="name">{{ post.author.name }}</span>
            <span class="date"> {{ post.createdAt }}</span>
          </span>
        </router-link>

        <div class="content">
          {{ post.content }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getIslandDetail, getCurrentIslandPostList } from "network/island";
import { createIslandPost } from "network/islandPost";

export default {
  data() {
    return {
      island: {},
      islandPost: "",
      islandPostList: [],
    };
  },
  created() {
    getIslandDetail(this.$route.params.islandId).then((res) => {
      console.log(res);
      this.island = res.data.island;
    });
    this.getIslandPostList();
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
    async getIslandPostList() {
      const res = await getCurrentIslandPostList(this.$route.params.islandId);
      console.log(res);
      this.islandPostList = res.data.islandPost;
    },
  },
};
</script>

<style scoped>
input {
  border: 1px solid #000;
}

.container {
  background-color: rgb(243, 239, 239);
  font-size: 12px;
}

.post {
  margin-bottom: 10px;
  background-color: #fff;
  padding: 10px;
  font-size: 12px;
}

.author img {
  width: 30px;
  height: 30px;
}

.author {
  display: flex;
}

.info {
  padding-left: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.content {
  padding-top: 10px;
  padding-bottom: 10px;
}
</style>