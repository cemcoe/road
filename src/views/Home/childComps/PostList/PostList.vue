<template>
  <div class="container">
    <div v-for="item in postList" :key="item._id" class="post">
      <div class="post-item">
        <div class="title">
        <router-link :to="'/p/' + item._id">
        {{item.title}}
        </router-link>
      </div>
      <div class="abstract">{{item.content}}</div>
      <div class="meta">
        <!-- <a :href="'/u/' + item.author._id">{{item.author.name}}</a> -->
        <router-link :to="'/u/' + item.author._id" class="nickname">{{item.author.name}}</router-link>
        <span class="creat-date">{{item.createdAt}}</span>
      </div>
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
  /* 测试 */
  margin-top: 20px;
  margin-bottom: 80px;
}



.post-item {
  padding: 12px 8px;
  box-sizing: content-box;
  margin-bottom: 12px;
  background-color: rgb(248, 245, 245);

}
.title {
  font-weight: 700;
}
.abstract {
  font-size: 16px;
  color: rgb(97, 101, 105);
  height: 60px;
  overflow: hidden;
  padding-top: 12px;
  padding-bottom: 12px;
}
.meta {
  font-size: 14px;
}

.meta .nickname, .creat-date {
  color: #b4b4b4;
  padding-right: 12px;
};

</style>