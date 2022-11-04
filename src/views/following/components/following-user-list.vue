<script setup>
const props = defineProps({
  userList: {
    type: Array,
    default: [],
  },
});
</script>

<template>
  <div class="following">
    <div class="item" v-for="user in userList" :key="user._id">
      <div class="left">
        <router-link :to="'/u/' + user._id">
          <img
            :src="'https://jian.cemcoe.com/jianshu_api' + user.avatar"
            alt="avatar"
          />
        </router-link>
      </div>

      <div class="center">
        <span>
          <router-link :to="'/u/' + user._id">
            {{ user.name }}
          </router-link>
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.following {
  display: flex;

  overflow-y: hidden;
  min-width: 100vw;
}
.item {
  display: flex;
  font-size: 12px;
  align-items: center;
  flex-direction: column;
  padding: 6px;
}
.left {
  flex: 0 0 70px;
}

img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  padding: 2px;
  border: 2px solid rgb(223, 77, 77);
}
</style>
