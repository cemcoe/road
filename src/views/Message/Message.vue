<template>
  <div>
    message

    <button @click="create">创建聊天室</button>

    <ul>
      <li v-for="room in rooms" :key="room._id">
        <router-link :to="'/room/' + room._id"> {{ room._id }}</router-link>
      </li>
    </ul>

    <div>
      <button @click="getNotificationPermission">获取通知权限</button>
      <button @click="notifyMe">通知</button>
    </div>
  </div>
</template>

<script>
import { createRoom } from "network/rooms";
import { listRooms } from "network/user";

export default {
  name: "Message",
  data() {
    return {
      rooms: [],
    };
  },
  created() {
    this.$toast.show("占位,欸,还没写呢");
    this.getUserRooms();
  },
  methods: {
    async create() {
      // 获取登录用户id
      const creator = this.$store.state.user._id;
      const res = await createRoom([creator]);
      console.log(res);
    },

    async getUserRooms() {
      const res = await listRooms(this.$store.state.user._id);
      console.log(res, "--------------");
      this.rooms = res.data.rooms;
    },

    getNotificationPermission() {
      let promise = Notification.requestPermission();
    },

    notifyMe() {
      // 先检查浏览器是否支持
      if (!("Notification" in window)) {
        alert("This browser does not support desktop notification");
      }

      // 检查用户是否同意接受通知
      else if (Notification.permission === "granted") {
        // If it's okay let's create a notification
        var notification = new Notification("Hi there!");
      }

      // 否则我们需要向用户获取权限
      else if (Notification.permission !== "denied") {
        Notification.requestPermission().then(function (permission) {
          // 如果用户接受权限，我们就可以发起一条消息
          if (permission === "granted") {
            var notification = new Notification("Hi there!");
          }
        });
      }

      // 最后，如果执行到这里，说明用户已经拒绝对相关通知进行授权
      // 出于尊重，我们不应该再打扰他们了
    },
  },
};
</script>

<style>
</style>