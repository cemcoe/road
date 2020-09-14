<template>
  <div class="container">
    <div class="nav-bar">
      <div class="left">
        <slot name="left"></slot>
      </div>
      <div class="center">
        <slot name="center"></slot>
      </div>
      <div class="right">
        <slot name="right"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style scoped>
.container {
  height: 44px;
}
.nav-bar {
  position: fixed;
  display: flex;
  width: 100%;
  height: 44px;
  text-align: center;
  align-items: center;
  background-color: #fff;
  box-shadow: 0 1px 1px rgba(100, 100, 100, 0.1);
}

.left,
.right {
  width: 80px;
}

.center {
  flex: 1;
}
</style>
