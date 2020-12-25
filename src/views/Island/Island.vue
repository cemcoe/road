<template>
  <div class="container">
    展示帖子列表，开发中。。。

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

      <router-link class="island" :to="'/island/' + post.island._id">{{
        post.island.name
      }}</router-link>
    </div>
  </div>
</template>

<script>
import { getIslandPostList } from "network/island";
export default {
  name: "Island",
  data() {
    return {
      islandPostList: [],
    };
  },
  created() {
    // 发起网络请求
    getIslandPostList().then(
      (res) => (this.islandPostList = res.data.islandPost)
    );
  },
};
</script>

<style scoped>
.container {
  background-color: rgb(243, 239, 239);
  font-size: 12px;
}
.post {
  margin-bottom: 10px;
  background-color: #fff;
  padding: 10px;
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

.island {
  font-size: 10px;
}
</style>