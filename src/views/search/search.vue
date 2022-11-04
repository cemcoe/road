<script setup>
import { useRoute } from "vue-router";
const route = useRoute();

const { id } = route.query;
</script>

<template>
  <div class="search">
    <h2>search{{ id }}</h2>
  </div>
</template>

<style scoped></style>
