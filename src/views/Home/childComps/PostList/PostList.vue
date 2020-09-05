<template>
  <div class="container">
    <div v-for="item in postList" :key="item._id" class="post">
      <div class="title">
        <a :href="'/p/' + item._id">
        {{item.title}}
        </a>
      </div>
      <div class="content">{{item.content}}</div>
      <div class="info">
        <a :href="'/u/' + item.author._id">{{item.author.name}}</a>
      </div>
    </div>
    <button @click="loadmore">加载更多</button>

  </div>
</template>

<script>

export default {
  props: {
    postList: {},
  },
  data() {
    return {

    }
    
  },
  component: {
    
  },
  methods: {
    loadmore() {
      // 当前加载的页数
      this.$emit('loadmore')
    }
  }
};
</script>

<style scoped>
.container {
  margin-top: 80px;
}
.post {
  height: 120px;
  margin-bottom: 20px;
  overflow: hidden;
}
.title {
  font-weight: 700;
}
.content {
  font-size: 16px;
  color: rgb(97, 101, 105);
  height: 60px;
  overflow: hidden;
}
</style>