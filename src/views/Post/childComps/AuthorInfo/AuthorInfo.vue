<template>
  <div class="container">
    <!-- {{authorInfo}} -->
    <div class="author-info">
      <div class="info-item avatar">
        <img :src="authorInfo.avatar" alt="avatar" />
      </div>
      <div class="info-item username">{{authorInfo.name}}</div>
    </div>

    <div class="follow">
      <button @click="follow">+关注</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    authorInfo: {},
  },
  methods: {
    follow() {
      this.$toast.show("还没写内");
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  align-items: center;
}

.author-info,
.follow {
  flex: 1;
}

.author-info {
  margin-left: 10px;
  display: flex;
  align-items: center;
}
img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  /* padding-right: 10px; */
}
.username {
  padding-left: 10px;
}

.follow {
  display: flex;
  justify-content: flex-end;
}

.follow button {
  background-color: green;
  margin-right: 10px;
  width: 60px;
  text-align: center;
  color: aliceblue;
}
</style>