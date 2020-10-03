<template>
  <div class="container">
    <nav-bar>
      <div slot="left" @click="$router.back()">返回</div>
      <div slot="center">
        <router-link to="/search">
          <input
            class="search"
            type="text"
            placeholder="搜索文章专题用户文集"
            v-model="key"
          />
        </router-link>
      </div>
      <div slot="right">
        <button @click="readySearch">
          搜索
        </button>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
export default {
  name: "SearchHeader",
  data() {
    return {
      key: '', // 搜索词
    }
  },
  methods: {
    readySearch() {
      console.log('子组件准备搜索: ', this.key)
      this.$emit('readySearch', this.key)
    }

  },
  created() {

  },
  components: {
    NavBar,
  },
  computed: {},
};
</script>

<style scoped>
input {
  border: 0px;
  border-radius: 20px;
  padding: 6px;
  outline-style: none;
  background-color: rgb(243, 237, 237);
}

input:focus {
  border-color: #66afe9;
  outline: 0;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgba(102, 175, 233, 0.6);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgba(102, 175, 233, 0.6);
}

</style>