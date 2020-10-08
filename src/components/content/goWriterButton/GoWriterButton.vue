<template>
  <!-- TODO：将write按钮抽离成一个content组件 -->
  <div class="write">
    <router-link to="/writer">写</router-link>
  </div>
</template>

<script>
export default {};
</script>


<style scoped>
.write {
  position: fixed;
  width: 40px;
  height: 40px;
  right: 50px;
  bottom: 80px;
  border-radius: 50%;
  background-color: rgb(236, 221, 221);
  line-height: 40px;
  text-align: center;
  padding: 10px;
  box-shadow: 0 0 4px rgb(238, 234, 234);
}
.write a {
  width: 100%;
  height: 100%;
  display: block;
}
</style>
