<template>
  <div class="notebook">
    <note-book-header></note-book-header>

    <note-book-info :notebook="notebook"></note-book-info>

    <div class="post-list">
      <h2>目录</h2>
      <span class="length">共{{ postList.length }}篇</span>
      <div class="postList">
        <!-- {{ postList }} -->
        <div class="post" v-for="(post, index) in postList" :key="post._id">
          <router-link :to="'/p/' + post._id">
            <span class="index">{{ index + 1 }}</span>
            <span class="title">
              {{ post.title }}
            </span>
          </router-link>
        </div>
      </div>
    </div>

    <note-book-tab-bar></note-book-tab-bar>
  </div>
</template>

<script>
import { getNoteBookDetail } from "network/notebook.js";
import NoteBookHeader from "./childComps/NoteBookHeader/NoteBookHeader";
import NoteBookTabBar from "./childComps/NoteBookTabBar/NoteBookTabBar";
import NoteBookInfo from "./childComps/NoteBookInfo/NoteBookInfo";

export default {
  data() {
    return {
      // notebook: {},
      postList: [],
      notebook: {
        title: "",
        icon: "",
        abstract: "",
        author: {},
      },
    };
  },
  components: {
    NoteBookHeader,
    NoteBookTabBar,
    NoteBookInfo,
  },
  async created() {
    // 获取连载相关信息
    const res = await getNoteBookDetail(this.$route.params.id);
    const notebook = res.data.notebook;
    console.log(notebook);
    // this.notebook = notebook;
    this.notebook.title = notebook.title;
    this.notebook.icon = notebook.icon;
    this.notebook.abstract = notebook.abstract;
    this.notebook.author = notebook.author;

    // console.log(this.notebook);

    // { "abstract": "连载简介", "icon": "https://cdn.pixabay.com/photo/2020/04/13/10/48/coffee-5037800_960_720.jpg", "postList": [], "_id": "5f8e8b5830089a2ac8643650", "title": "在简书仿简书", "author": { "gender": "male", "bio": "企图混进05的阵营", "avatar": "/uploads/upload_6e61795682aece42a1661fc444629334.png", "_id": "5f6836ac7ce71b1a82ac3b75", "name": "cemcoe", "createdAt": "2020-09-21T05:14:20.386Z", "updatedAt": "2020-10-10T03:39:38.828Z" }, "createdAt": "2020-10-20T07:01:44.905Z", "updatedAt": "2020-10-20T07:01:44.905Z" }
    this.postList = notebook.postList;
  },
};
</script>

<style scoped>
.notebook {
  background-color: rgb(241, 234, 234);
}

.post-list .post {
  background-color: #fff;
  padding: 10px;
  margin-bottom: 2px;
}

.post-list .post .title {
  color: #000;
  padding: 2px;
  line-height: 20px;

}

</style>