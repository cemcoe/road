<template>
  <div>
    <search-header @readySearch="readySearch"></search-header>
    <div class="hot-key">
      <h3>热搜词</h3>
      <ul>
        <li v-for="key in hotKeys" @click="hotKeyClick(key)" :key="key">
          {{ key }}
        </li>
      </ul>
    </div>
    <hr />
    <div class="key">
      你要搜索的关键词 {{ key }}，为你找到{{ searchResult.length }}条数据
    </div>
    <hr />
    <div class="search-result" v-if="searchResult.length">
      <!-- 搜索结果 {{ searchResult }} -->
      <post-list :postList="searchResult"></post-list>
    </div>
    <div class="no-result" v-else>没有找到相关内容</div>
    <hr />
    <div class="info">
      目前仅支持关键词搜索文章，仅包含文章标题和文章内容，网站数据较少，推荐使用常见单字进行搜索。
    </div>
  </div>
</template>

<script>
import SearchHeader from "./childComps/SearchHeader/SearchHeader";
import PostList from "components/content/postList/PostList";

import { mapState } from "vuex";

export default {
  data() {
    return {
      hotKeys: ["你", "我", "他", "机器人", "震惊", "相信", "不要", "网友"],
      key: "",
    };
  },
  components: {
    SearchHeader,
    PostList,
  },

  methods: {
    readySearch(key) {
      console.log("父组件接受到搜索请求：", key);
      // 触发mutations清空上次搜索结果
      this.$store.commit("receive_search_result", "");
      console.log("上次搜索结果已经被清除");

      this.key = key;

      // 触发网络请求
      this.$store.dispatch("reqSearchResult", key).then((res) => {
        // console.log('thenthentheeeeeeeeeeee', res)
        if (res === 404) {
          this.$toast.show("没有找到相关数据，换一个关键词试一试吧");
        }
      });
    },

    hotKeyClick(key) {
      console.log("你点击了搜索词", key);
      // 更改data中的key，并发起网络请求
      this.key = key;
      // TODO
      // 更改子组件搜索框中的文字

      this.readySearch(key);
    },
  },

  computed: {
    ...mapState(["searchResult"]),
  },
};
</script>

<style scoped>
.hot-key ul {
  display: flex;
  flex-wrap: wrap;
}
.hot-key ul li {
  background-color: #ddd;
  margin: 6px;
  padding: 6px 10px;
  border-radius: 6px;
}
</style>