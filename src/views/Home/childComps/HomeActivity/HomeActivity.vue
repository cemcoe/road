<template>
  <div class="activities">
    <div
      class="activity"
      v-for="activity in activities"
      :key="activity._id"
      @click="activityClick(activity.detailUrl)"
    >
      <!-- {{ activity }} -->
      <div class="img"><img v-lazy="activity.bannerImg" alt="" /></div>
      <div class="meta">
        <div class="title">{{ activity.title }}</div>
        <div class="time">活动时间：{{ activity.time }}</div>
        <div class="award">总奖池：{{ activity.award }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { getActivityList } from "network/activity";
export default {
  data() {
    return {
      activities: {},
    };
  },
  async created() {
    // 获取活动列表
    const res = await getActivityList();
    console.log(res);
    this.activities = res.data.activities;
  },
  methods: {
    activityClick(url) {
      this.$router.push({ path: url });
    },
  },
};
</script>

<style scoped>
.activity {
  width: 96%;
  margin: 0 auto;
  /* background-color: rgb(224, 213, 213); */
  border-radius: 6px;
  margin-bottom: 10px;
  margin-top: 10px;
  box-shadow: 1px 1px 4px rgb(182, 178, 178);
}
.activity img {
  width: 100%;
  height: 30vw;
  border-radius: 6px;
}

.meta div {
  padding: 6px 12px;
  font-size: 14px;
}

.meta div.title {
  font-size: 16px;
  font-weight: 700;
}
.meta div.time,
.meta div.award {
  color: rgb(93, 96, 97);
}
</style>