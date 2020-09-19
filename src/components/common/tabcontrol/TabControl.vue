<template>
  <div class="tab">
    <div class="tab-item" v-for="item in tabObj" :key="item.id">
      <!-- <tab-control-item class="tab-item" :item="item"></tab-control-item> -->
      <router-link :to="item.url" replace>{{item.title}}</router-link>
    </div>
  </div>
</template>

<script>
// import TabControlItem from "./TabControlItem";
// 传来一个对象数组，渲染tabcontrol

export default {
  props: {
    tabObj: {},
  },
  components: {
    // TabControlItem,
  },
};
</script>

<style scoped>
.tab {
  display: flex;
  /* background-color: #000; */
  padding: 8px;
}
.tab-item {
  flex: 1;
  text-align: center;
}

.router-link-exact-active {
  padding-bottom: 6px;
  border-bottom: 4px solid #f40;
  color: #000;
}
</style>