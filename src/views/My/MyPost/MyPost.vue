<template>
  <div>
    <div class="nav">
      <nav-bar>
        <div slot="left" @click="$router.back()">
          <cem-icon name="back"></cem-icon>
        </div>
        <div class="info" slot="center">我的文章</div>
      </nav-bar>
    </div>
    <div class="tabcontrol"></div>

    <div class="content">
      mypost // 获取用户公开文章， // 获取用户私密文章，条件展示
    </div>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import CemIcon from "components/common/icon/Icon";

export default {
  components: {
    NavBar,
    CemIcon,
  },
};
</script>

<style>
</style>