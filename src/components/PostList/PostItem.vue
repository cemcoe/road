<script setup lang="ts">
// import type { IPost } from "@/types";
// https://vuejs.org/guide/typescript/composition-api.html#typing-component-props
import { computed } from "vue";

// TODO: 什么？你说我为什么不把类型抽出去？
// 不支持呀
// https://vuejs.org/guide/typescript/composition-api.html#typing-component-props
interface IPost {
  commentcount: number;
  viewcount: number;
  imgsLink: string[];
  status: number;
  _id: string;
  title: string;
  wordcount: number;
  author: IAuthor;
  abstract: string;
  createdAt: string;
  updatedAt: string;
}

interface IAuthor {
  gender: string;
  bio: string;
  avatar: string;
  following_count: number;
  follower_count: number;
  private_post_count: number;
  _id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
}

// -------------------------------

const props = defineProps<IPost>();

const postUrl = computed(() => "/p/" + props._id);
const authorUrl = computed(() => "/u/" + props.author._id);
const createDate = computed(() => props.createdAt);
const imgsLinkLength = computed(() => props.imgsLink.length);
</script>

<template>
  <div class="post-item">
    <router-link :to="postUrl">
      <div class="title">
        <span>{{ title }}</span>
      </div>
    </router-link>

    <section class="abstract">
      <!-- 文章中没有图片 -->
      <div class="no-pic" v-if="imgsLinkLength === 0">
        <router-link :to="postUrl">
          <div class="content">
            <div class="text">{{ abstract }}</div>
          </div>
        </router-link>
      </div>

      <!-- 文章中有1张或2张图片 -->
      <div
        class="one-pic"
        v-if="imgsLink.length === 1 || imgsLink.length === 2"
      >
        <router-link :to="postUrl">
          <div class="content">
            <div class="text">
              {{ abstract }}
            </div>
            <img :src="imgsLink[0]" alt="imgs" />
            <!-- 文章中有{{imgs.length}}张图片 -->
          </div>
        </router-link>
      </div>

      <!-- 文章中的图片超过三张 -->

      <div class="more-pic" v-if="imgsLinkLength >= 3">
        <router-link :to="postUrl">
          <div class="content">
            <img
              v-for="img in imgsLink.slice(0, 3)"
              :src="img"
              alt="img"
              :key="img"
            />
          </div>
        </router-link>
      </div>
    </section>

    <div class="meta">
      <span>
        <router-link :to="authorUrl" class="nickname font10px">{{
          author.name
        }}</router-link>
      </span>

      <span class="creat-date font10px">{{ createDate }}</span>
      <span class="font10px">{{ viewcount }} 阅读</span>
      <span class="font10px">{{ commentcount }} 评论</span>
      <span class="font10px">0赞</span>
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
.title span {
  font-size: 16px;
  line-height: 24px;
  color: #000000;
}

.abstract {
  padding-top: 10px;
  padding-bottom: 10px;
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

.one-pic .content {
  display: flex;
  justify-content: space-between;
}

.one-pic .text {
  padding-right: 10px;
}

.one-pic img {
  width: 33%;
  /* padding-left: 10px; */
  border-radius: 6px;
}

.more-pic .content {
  display: flex;
  justify-content: space-between;
}
.more-pic .content img {
  width: 33%;
  border-radius: 6px;
}
.meta {
  color: #c7c4c4;
  padding-right: 12px;
  /* font-size: 12px; */
}

/* // 10px小字体 */
.font10px {
  display: inline-block;
  font-size: 12px;
  transform: scale(0.83, 0.83);
  *font-size: 10px;
}

.meta span {
  padding-right: 12px;
}
</style>
