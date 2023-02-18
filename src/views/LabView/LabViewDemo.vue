<script setup lang="ts">
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

function initCamera() {
  // 1. 买个 PerspectiveCamera 透视相机
  const camera = new THREE.PerspectiveCamera(
    70, // fov — 摄像机视锥体垂直视野角度
    window.innerWidth / window.innerHeight, // aspect — 摄像机视锥体长宽比 通常是使用画布的宽/画布的高
    0.01, // near — 摄像机视锥体近端面
    10 // far — 摄像机视锥体远端面
  );

  // 1.2 三脚架摆放相机位置，position属性继承自 Object3D
  // 表示对象局部位置的Vector3。默认值为(0, 0, 0)。
  camera.position.z = 1;
  // TODO: 相机位置的切换
  // TODO: threejs 坐标系统

  return camera;
}

const camera = initCamera();

// 2. 场景
const scene = new THREE.Scene();

// 3. 物体与材质
// TODO: 加载外部模型
const geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2);
const material = new THREE.MeshNormalMaterial();

// 4. 材质应用到物体并添加到场景
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// 添加辅助坐标轴
const axesHelper = new THREE.AxesHelper(5);
scene.add(axesHelper);

// 5. 将渲染的内容插入到DOM上
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setAnimationLoop(animation);
document.body.appendChild(renderer.domElement);

// 添加轨道控制器，OrbitControls
const controls = new OrbitControls(camera, renderer.domElement);

function animation(time: any) {
  mesh.rotation.x = time / 2000;
  mesh.rotation.y = time / 1000;
  // camera.position.z = time / 1000;
  // 6. 渲染
  renderer.render(scene, camera);
  controls.update();
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
