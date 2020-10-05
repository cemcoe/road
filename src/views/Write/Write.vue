<template>
  <div>
    <write v-if="!$route.params.id"></write>
    <edit v-else></edit>
  </div>
</template>

<script>
import Write from "./childComps/Write/Write";
import Edit from "./childComps/Edit/Edit";
export default {
  data() {
    return {};
  },
  components: {
    Write,
    Edit,
  },
};
</script>

<style scoped>
</style>