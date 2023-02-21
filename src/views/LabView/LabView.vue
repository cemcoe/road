<script setup lang="ts">
import "@google/model-viewer";
const glbUrl = new URL("./first.glb", import.meta.url).href;
</script>

<template>
  <div class="lab">
    <model-viewer
      style="width: 100vw; height: 100vh"
      :src="glbUrl"
      camera-controls
      shadow-intensity="0"
    >
    </model-viewer>
  </div>
</template>

<style scoped>
.lab {
  background: rgb(220, 219, 221);
}
</style>
