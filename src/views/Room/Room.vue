<template>
  <div>
    roomId: {{ this.$route.params.id }} || {{ messages.length }}

    <ul>
      <li v-for="message in messages">{{ message }}</li>
    </ul>
  </div>
</template>

<script>
import { getRoomDetail } from "network/rooms";
export default {
  data() {
    return {
      messages: [],
    };
  },
  created() {
    this.getMessage();
  },
  methods: {
    async getMessage() {
      const res = await getRoomDetail(this.$route.params.id);
      console.log(res);
      this.messages = res.data.messages;
    },
  },
};
</script>

<style scoped>
</style>