<template>
  <div>
    <div class="follow">
      <div class="follow-item" v-for="user in followingUsers" :key="user._id">
        <router-link :to="'/u/' + user._id">
          <div class="item">
            <div class="left">
              <img :src="imgBaseUrl + user.avatar" alt="avatar" />
            </div>

            <div class="center">
              <span>{{ user.name }}</span>
              <span>{{user.bio}}</span>
            </div>

            <div class="right">进入</div>
          </div>

          <!-- ///////////////
          <span>{{user.gender}}</span>
          //////////////
          <span>{{user.bio}}</span> -->
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["followingUsers", "imgBaseUrl"]),
  },
};
</script>

<style scoped>

.item {
  display: flex;
  font-size: 12px;
  align-items: center;
  padding: 6px;
  border-bottom: 1px solid rgb(207, 198, 207);

}
.left, .right {
  flex: 0 0 60px;
}
.center {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 50px;
}

.right {
  text-align: center;
}



img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
</style>