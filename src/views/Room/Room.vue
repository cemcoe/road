<template>
  <div>
    roomId: {{ this.$route.params.id }} || {{ messages.length }}
    <hr />

    <div class="meta">
      sender:{{ sender.name }}
      <hr />

      receiver: {{ $store.state.user.name }}
      <hr />
    </div>

    <ul>
      <li v-for="message in messages">
        {{ message.content }}
        {{ message.creator.name }}
      </li>
    </ul>

    <hr />

    <div>
      <input type="text" v-model="message" />
      <button @click="createMessage">创建测试新消息</button>
    </div>
    <div><button @click="getMessage">更新消息列表</button></div>
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
    };
  },
  created() {
    this.getMessage();
    this.getDetail();
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
  },
};
</script>

<style scoped>
li {
  margin: 10px;
}

input {
  background-color: rgb(235, 224, 224);
}
</style>