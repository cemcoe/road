<template>
  <div>
    {{$route.params.id}}

  </div>
</template>

<script>
import {getUserInfo} from 'network/profile.js'
export default {
  // 有id向服务器发请求
  // 拿到路由传来的参数
  created() {
    getUserInfo(this.$route.params.id).then(res => [
      console.log(res)
    ])
  }
}
</script>

<style>

</style>