<template>
  <div class="info">
    <div class="meta">
      <div class="icon left">
        <img v-lazy="notebook.icon" alt="" />
      </div>
      <div class="text right">
        <span class="title">
          {{ notebook.title }}
        </span>
        <span>
          {{ notebook.author.name }}
        </span>
      </div>
    </div>
    <div class="abstract">
      {{ notebook.abstract }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    notebook: {},
  },
};
</script>

<style scoped>
.meta {
  display: flex;
  background-color: rgb(235, 225, 225);
  padding: 10px;
}
.meta .left {
  width: 30vw;
  max-width: 100px;
  margin-right: 10px;
}

.meta .icon img {
  width: 100%;
  height: 100%;
  border-radius: 4px;
  
}

.meta .right {
  display: flex;
  flex-direction: column;
  font-size: 18px;
}

.abstract {
  padding: 18px;
  background-color: #fff;
  margin-bottom: 10px;
}
</style>