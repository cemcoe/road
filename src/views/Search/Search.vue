<template>
  <div>
    <search-header @readySearch="readySearch"></search-header>
    <div class="search-result">你要搜索的关键词 {{ searchResult }}</div>
  </div>
</template>

<script>
import SearchHeader from "./childComps/SearchHeader/SearchHeader";
export default {
  data() {
    return {
      searchResult: "",
    };
  },
  components: {
    SearchHeader,
  },
  methods: {
    readySearch(key) {
      console.log("父组件接受到搜索请求：", key);
      this.searchResult = key;
    },
  },
};
</script>

<style scoped>
</style>