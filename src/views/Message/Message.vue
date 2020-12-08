<template>
  <div>
    message

    <div class="room-list">
      <div v-for="room in rooms" :key="room._id" class="room">
        <router-link :to="'/room/' + room.rid">
          <div class="sender-avatar">
            <img v-lazy="$store.state.imgBaseUrl + room.sender.avatar" alt="" />
          </div>
          <div class="center">
            <div class="sender-name">
              {{ room.sender.name }}
            </div>
            <div class="new-message">最新消息数据占位</div>
          </div>
        </router-link>
      </div>
    </div>

    <div>
      <button @click="getNotificationPermission">获取通知权限</button>
      <button @click="notifyMe">通知</button>
    </div>
  </div>
</template>

<script>
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
    async getUserRooms() {
      const res = await listRooms(this.$store.state.user._id);
      console.log(res, "--------------");
      const rooms = res.data.rooms;

      // 格式化rooms列表

      const uid = this.$store.state.user._id;
      // members中没有的就是对方
      const result = rooms.map((room) => {
        const obj = {};
        const sender = room.members.filter((member) => member._id !== uid)[0];
        obj.sender = sender;
        obj.rid = room._id;
        return obj;
      });

      this.rooms = result;

      console.log(result);
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

<style scoped>
.room {
  height: 60px;
  border-bottom: 1px solid #000;
}

.room a {
  display: flex;
}

.room .sender-avatar {
  width: 60px;
  margin-right: 6px;
}

.room a img {
  width: 100%;
}

.center {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
}
</style>