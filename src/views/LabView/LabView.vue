<script setup lang="ts">
import * as THREE from "three";

// 1. 相机
const camera = new THREE.PerspectiveCamera(
  70,
  window.innerWidth / window.innerHeight,
  0.01,
  10
);
camera.position.z = 1;

// 2. 场景
const scene = new THREE.Scene();

// 3. 物体与材质
// TODO: 加载外部模型
const geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2);
const material = new THREE.MeshNormalMaterial();

// 4. 材质应用到物体并添加到场景
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// 5. 将渲染的内容插入到DOM上
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setAnimationLoop(animation);
document.body.appendChild(renderer.domElement);

// 6. 动画
function animation(time: any) {
  mesh.rotation.x = time / 2000;
  mesh.rotation.y = time / 1000;

  renderer.render(scene, camera);
}
</script>

<template>
  <div class="lab">
    <h2>lab</h2>
  </div>
</template>

<style scoped>
.lab {
  background-color: antiquewhite;
}
</style>
