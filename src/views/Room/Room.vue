<template>
  <div>
    <div class="nav">
      <button @click="$router.back()">返回</button>
      <span> {{ sender.name }}</span>
    </div>

    <p>roomId: {{ this.$route.params.id }} || {{ messages.length }}</p>
    <p>轮询时间间隔：{{ timeInterval }}ms</p>

    <hr />

    <div class="meta">
      sender:{{ sender.name }}
      <hr />

      receiver: {{ $store.state.user.name }}
      <hr />
    </div>

    <div class="messages">
      <div
        v-for="message in messages"
        :key="message._id"
        class="message"
        :class="{ on: isLoginUser(message.creator._id) }"
      >
        <div class="user">
          <img v-lazy="baseImgUrl + message.creator.avatar" alt="" />
        </div>
        <div class="content">{{ message.content }}</div>
      </div>
    </div>

    <hr />

    <div class="tabbar">
      <input type="text" v-model="message" placeholder="在这里输入内容" />
      <button @click="createMessage">发送</button>
    </div>
  </div>
</template>

<script>
import {
  getRoomDetail,
  getRoomMessage,
  createRoomMessage,
} from "network/rooms";

export default {
  data() {
    return {
      messages: [],
      message: "",
      sender: {}, // 左侧用户
      baseImgUrl: this.$store.state.imgBaseUrl,
      timeInterval: 6000, // 轮询时间间隔
    };
  },
  created() {
    this.getMessage();
    this.getDetail();

    // 定时轮询
    setInterval(() => {
      console.log("轮询中。。。" + new Date());

      this.getMessage();
    }, this.timeInterval);
  },
  methods: {
    async getMessage() {
      const res = await getRoomMessage(this.$route.params.id);
      console.log(res);
      this.messages = res.data.messages;
    },

    async createMessage() {
      const res = await createRoomMessage(this.$route.params.id, this.message);
      console.log(res);
      // 清空输入框
      this.message = "";
      this.getMessage();
    },

    async getDetail() {
      const res = await getRoomDetail(this.$route.params.id);
      // console.log(res, "11111111111111111");
      const members = res.data.room.members;
      // console.log(members)
      const uid = this.$store.state.user._id;

      const sender = members.filter((member) => member._id !== uid)[0];
      this.sender = sender;

      // this.detail.sender = res.data.room.members.filter(member => member._id !== this.$store.state.user._id)
      // console.log(this.detail)
    },

    isLoginUser(uid) {
      return uid === this.$store.state.user._id;
    },
  },
};
</script>

<style scoped>
.messages {
  margin-bottom: 100px;
}
.messages div {
  margin: 6px;
}

.message {
  display: flex;
}

.message .user {
  width: 30px;
  height: 30px;
}

.message .content {
  background-color: rgb(233, 222, 222);
  padding: 10px;
}

.message .user img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}

/* 登录用户发送信息内容在左侧，头像在右侧 */
.on {
  flex-direction: row-reverse;
}

.on .content {
  background-color: rgb(221, 220, 226);
}

.tabbar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 49px;
  display: flex;
}
input {
  flex: 1;
  background-color: rgb(224, 211, 211);
  padding: 10px;
}

.tabbar button {
  border: none;
  outline: none;
  padding: 10px 20px;
  background-color: #000;
  color: aliceblue;
}
</style>