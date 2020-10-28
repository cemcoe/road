<template>
  <div class="container">
    <input type="text" :placeholder="placeholder" />
  </div>
</template>

<script>
export default {
  props: {
    placeholder: {},
  },
};
</script>

<style scoped>
.container {
  /* background-color: #000; */
  display: flex;
  align-items: center;
  justify-content: center;
}
input {
  width: 90%;
  border: 0px;
  border-radius: 20px;
  padding: 6px;
  outline-style: none;
  text-align: center;
  background-color: rgb(243, 237, 237);
}

input:focus {
  border-color: #66afe9;
  outline: 0;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgba(102, 175, 233, 0.6);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgba(102, 175, 233, 0.6);
}
</style>