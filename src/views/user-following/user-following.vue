<script setup>
import { useUserStore } from "@/stores/modules/user";
import { useRoute } from "vue-router";
import UserList from "@/components/user-list/user-list.vue";
import { storeToRefs } from "pinia";

const route = useRoute();
const uid = route?.params?.uid;

const userStore = useUserStore();
userStore.getFollowingAction(uid);

const { following } = storeToRefs(userStore);
</script>

<template>
  <div class="following">
    <UserList :userList="following"></UserList>
  </div>
</template>

<style scoped></style>
