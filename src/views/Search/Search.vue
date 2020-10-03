<template>
  <div>
    <search-header @readySearch="readySearch"></search-header>
    <hr />
    <div class="key">你要搜索的关键词 {{ key }}</div>
    <hr />
    <div class="search-result" v-if="searchResult.length">
      搜索结果 {{ searchResult }}
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

import { mapState } from "vuex";
export default {
  data() {
    return {
      // searchResult: "",
      key: "",
    };
  },
  components: {
    SearchHeader,
  },

  methods: {
    readySearch(key) {
      console.log("父组件接受到搜索请求：", key);
      // 触发mutations清空上次搜索结果
      this.$store.commit("receive_search_result", "");
      console.log('上次搜索结果已经被清除')

      this.key = key;
      
      // 触发网络请求
      this.$store.dispatch("reqSearchResult", key).then((res) => {
        // console.log('thenthentheeeeeeeeeeee', res)
        if (res === 404) {
          this.$toast.show("没有找到相关数据，换一个关键词试一试吧");
        }
      });
    },
  },

  computed: {
    ...mapState(["searchResult"]),
  },
};
</script>

<style scoped>
</style>