<script setup lang="ts">
// import type { IPost } from "@/types";
// https://vuejs.org/guide/typescript/composition-api.html#typing-component-props
import { computed } from "vue";

// TODO: 什么？你说我为什么不把类型抽出去？
// 不支持呀
// https://vuejs.org/guide/typescript/composition-api.html#typing-component-props
interface IPost {
  id: number;
  title: string;
  wordcount: number;
  author: IAuthor;
  content?: string;
  abstract: string;
  commentcount: number;
  viewcount: number;
  imgsLink: string[];
  status: number;
  created_at: string;
  updated_at: string;
}

interface IAuthor {
  gender: string;
  bio: string;
  avatar: string;
  id: number;
  name: string;
  created_at: string;
  updated_at: string;
}

// -------------------------------

const props = defineProps<IPost>();

const postUrl = computed(() => "/p/" + props.id);
const authorUrl = computed(() => "/u/" + props.author.id);
const createDate = computed(() => props.created_at);
const imgsLinkLength = computed(() => props.imgsLink.length);
</script>

<template>
  <div class="post-item">
    <div class="title">
      <span>{{ title }}</span>
    </div>

    <section class="abstract">
      <!-- 文章中没有图片 -->
      <div class="no-pic" v-if="imgsLinkLength === 0">
        <div class="content">
          <div class="text">{{ abstract }}</div>
        </div>
      </div>

      <!-- 文章中有1张或2张图片 -->
      <div
        class="one-pic"
        v-if="imgsLink.length === 1 || imgsLink.length === 2"
      >
        <div class="content">
          <div class="text">
            {{ abstract }}
          </div>
          <img :src="imgsLink[0]" alt="imgs" />
          <!-- 文章中有{{imgs.length}}张图片 -->
        </div>
      </div>

      <!-- 文章中的图片超过三张 -->

      <div class="more-pic" v-if="imgsLinkLength >= 3">
        <div class="content">
          <img
            v-for="img in imgsLink.slice(0, 3)"
            :src="img"
            alt="img"
            :key="img"
          />
        </div>
      </div>
    </section>

    <div class="meta">
      <span>{{ author.name }}</span>
      <span>{{ createDate }}</span>
      <span>{{ viewcount }} 阅读</span>
      <span>{{ commentcount }} 评论</span>
      <span>0赞</span>
    </div>
  </div>
</template>

<style scoped>
.post-item {
  padding: 12px 10px;
  margin: 10px;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 4px 4px 6px #e4e1e1;
}

/* title */
.title {
  font-size: 16px;
  line-height: 24px;
  color: #000000;
  font-weight: 700;
}

/* abstract */
.abstract {
  padding-top: 10px;
  padding-bottom: 10px;
}

.one-pic .content {
  display: flex;
  justify-content: space-between;
}

.one-pic img {
  width: 32%;
  border-radius: 6px;
}

.more-pic .content {
  display: flex;
  justify-content: space-between;
}
.more-pic .content img {
  width: 32%;
  border-radius: 6px;
}

/* meta */
.meta span {
  color: #c7c4c4;
  padding-right: 12px;
  font-size: 12px;
}

.abstract .text {
  font-size: 14px;
  color: rgb(97, 101, 105);
  /* margin-top: 12px;
  margin-bottom: 12px; */
  line-height: 28px;
  /* 多行文本截断 */
  display: -webkit-box;
  overflow: hidden;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
</style>
