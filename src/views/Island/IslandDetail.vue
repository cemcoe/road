<template>
  <div>{{ island.name }} === {{ island.abstract }}</div>
</template>

<script>
import { getIslandDetail } from "network/island";
export default {
  data() {
    return {
      island: {},
    };
  },
  created() {
    getIslandDetail(this.$route.params.islandId).then((res) => {
      console.log(res);
      this.island = res.data.island;
    });
  },
};
</script>

<style>
</style>