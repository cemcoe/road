<script setup lang="ts">
// import type { IPost } from "@/types";
// https://vuejs.org/guide/typescript/composition-api.html#typing-component-props
import { computed } from "vue";
import { utcFormat } from "@/utils/fotmat";

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
    <div class="title" @click="$router.push(postUrl)">
      <span>{{ title }}</span>
    </div>

    <section class="abstract" @click="$router.push(postUrl)">
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
        </div>
        <div class="img-container"><img :src="imgsLink[0]" alt="imgs" /></div>
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
      <span @click="$router.push(authorUrl)">{{ author.name }}</span>
      <span>{{ utcFormat(createDate) }}</span>
    </div>
  </div>
</template>

<style scoped>
.post-item {
  padding: 12px 10px;
  margin: 10px;
  border-radius: 4px;
  background-color: #fff;
  box-shadow: 4px 4px 6px #f2f1f1;
}

.post-item:hover {
  box-shadow: 4px 4px 6px #dcd9d9;
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
  /* height: 180px; */
  /* background-color: #ccc; */
}

.one-pic {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.one-pic .content {
  flex: 1;
}

.one-pic .img-container {
  width: 33%;
  margin-left: 10px;

  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}

.one-pic .img-container img {
  width: 100%;
  border-radius: 4px;
}

.more-pic .content {
  display: flex;
  justify-content: space-around;
}
.more-pic .content img {
  width: 33%;
}

/* meta */
.meta span {
  color: #807d7d;
  padding-right: 12px;
  font-size: 14px;
}

.abstract .text {
  font-size: 14px;
  color: rgb(97, 101, 105);
  line-height: 28px;
  display: -webkit-box;
  overflow: hidden;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;

  text-overflow: ellipsis;

  text-align: justify;
}
</style>
