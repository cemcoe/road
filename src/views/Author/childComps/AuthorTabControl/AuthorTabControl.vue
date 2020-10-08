<template>
  <div class="tab-control">
    <tab-control :tabObj="tabObj"></tab-control>
  </div>
</template>

<script>
import TabControl from "components/common/tabcontrol/TabControl";
export default {
  props: {
    id: {},
  },
  components: {
    TabControl,
  },
  data() {
    return {
      // 控制条item
      tabObj: [],
    };
  },
  created() {
    let id = this.$route.params.id;
    this.tabObj = [
      // { id: 1, url: "/u/:id/posts" + "/activity", title: "动态" },
      { id: 2, url: "/u/" + id + "/posts", title: "文章" },
      // { id: 3, url: "/home" + "/topic", title: "帖子" },
      { id: 4, url: "/u/" + id + "/more", title: "更多" },
    ];
  },
};
</script>

<style scoped>
.tab-control {
  position: -webkit-sticky;
  position: sticky;
  top: 0px;
  background-color: #fff;
  padding: 4px;
}
</style>