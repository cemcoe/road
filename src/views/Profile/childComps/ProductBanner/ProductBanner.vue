<template>
  <div class="container">
    <div class="money">总资产：858</div>
    <hr>

    <div class="product">
      <div>简书砖</div>
      <div>简书会员</div>
      <div>天天抽奖</div>
      <div>排行榜</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
  width: 90%;
  margin: 10px auto;
  box-shadow: 0px 0px 10px rgb(223, 217, 217);
  padding: 16px;
  border-radius: 6px;
}
.product {
  padding-top: 10px;
  display: grid;
  grid-template-rows: 60px;
  grid-template-columns: repeat(4, 25%);
  text-align: center;
}
</style>