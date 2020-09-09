<template>
  <div>
    文章详情页
    {{$route.params.id}}
    <div class="title">标题：{{post.title}}</div>
    <div class="author">作者：{{post.author}}</div>
    <div class="content">内容：{{post.content}}</div>
  </div>
</template>

<script>
import { getPostDetail } from "network/post";
export default {
  data() {
    return {
      post: {
        author: {},
        // 要拿到作者的名字
        // {{post.author.name}}
        // 使用{{}}双花括号在html页面进行数据绑定时，从一个对象中获取，超过两个.就报错，
        // 因为获取服务器是异步的，所以 vue 先绑定数据。
        // 绑定数据时，你的post赋值为空对象的话，而post里面的author属性便为 undefined，所以报"cannot read property 'name' of undefined"。
        // 所以在初始化时，author 属性赋值为空对象就行了。
      },
    };
  },
  created() {
    getPostDetail(this.$route.params.id).then((res) => {
      this.post = res;
    });
  },
};
</script>

<style scoped>
.author {
  margin: 40px auto;

}
</style>