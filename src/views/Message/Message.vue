<template>
  <div>
    <div class="info">
      <div>简信</div>
    </div>

    <div class="room-list">
      <div v-for="room in rooms" :key="room._id" class="room">
        <router-link :to="'/room/' + room.rid">
          <div class="left sender-avatar">
            <img v-lazy="$store.state.imgBaseUrl + room.sender.avatar" alt="" />
          </div>

          <div class="center">
            <div class="sender-name">
              {{ room.sender.name }}
            </div>
            <div class="new-message">{{ room.latestMessage.content }}</div>
          </div>

          <div class="right">
            {{ room.latestMessage.createdAt }}
          </div>
        </router-link>
      </div>
    </div>

    <div>
      <button @click="getNotificationPermission">获取通知权限</button>
      <button @click="notifyMe">通知</button>
    </div>

    <div class="pannel">短轮询时间间隔：{{ timeInterval }}ms</div>
  </div>
</template>

<script>
import { listRooms } from "network/user";

export default {
  name: "Message",
  data() {
    return {
      rooms: [],
      timeInterval: 6000, // 轮询时间间隔
    };
  },
  created() {
    this.$toast.show("占位,欸,还没写呢");
    this.getUserRooms();

    // 定时轮询
    setInterval(() => {
      console.log("轮询中。。。" + new Date());

      this.getUserRooms();
    }, this.timeInterval);
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
        obj.latestMessage = room.latestMessage;
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
.room-list {
  background-color: rgb(245, 238, 238);
}
.room {
  background-color: #fff;
  margin-top: 6px;
  padding: 10px;
}

.room a {
  display: flex;
  padding: 4px;
}

.room img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}

.room .left {
  width: 40px;
  height: 40px;
  padding-right: 12px;
}
.room .center {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.room .center .new-message {
  font-size: 12px;
  color: #000;
}
.room .right {
  width: 100px;
  overflow: hidden;
  font-size: 12px;
}
</style>