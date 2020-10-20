<template>
  <div class="container">
    <div class="content">
      <div class="left">添加关注</div>
    <div class="center">开始阅读</div>
    <div class="right">写想法</div>

    </div>
    
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.container {
  height: 49px;
  
}

.content {
  position: fixed;
  display: flex;
  bottom: 0;
  left: 0;
  right: 0;
  box-shadow: 0 0 4px #000;
  height: 49px;
  align-items: center;

}

.content div {
  flex: 1;
  text-align: center;
  
}

</style>