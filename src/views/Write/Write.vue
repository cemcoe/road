<template>
  <div>
    <input type="text" class="title" v-model="title">
    <input type="text" class="content" v-model="content" size="100">
    <button @click="btnClick">提交</button>
  </div>
</template>

<script>
import { createPost } from "network/write";
export default {
  data() {
    return {
      title: '这里输入标题',
      content: "这里输入内容",
    }
  },
  methods: {
    btnClick() {
      // 将文章传到后端
      createPost(this.title, this.content).then(
        console.log('文章创建成功')
      )

    }

  }

}
</script>

<style scoped>
input {
  width: 60%;
}
.content {
  height: 300px;
}

</style>