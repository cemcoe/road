<template>
  <div>
    <div class="follow">
      <div class="following" v-for="user in followingUsers" :key="user._id">
        <div class="item">
          <div class="left">
            <router-link :to="'/u/' + user._id">
              <img v-lazy="imgBaseUrl + user.avatar" alt="avatar" />
            </router-link>
          </div>

          <div class="center">
            <span>
              <router-link :to="'/u/' + user._id">
                {{ user.name }}
              </router-link>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import CemButton from "components/common/Button/Button";

export default {
  components: {
    CemButton,
  },
  computed: {
    ...mapState(["followingUsers", "imgBaseUrl"]),
  },
};
</script>

<style scoped>

.follow {
  display: flex;
  
  overflow-y: hidden;
  

}
.item {
  display: flex;
  font-size: 12px;
  align-items: center;
  flex-direction: column;
  padding: 6px;
  border-bottom: 1px solid rgb(207, 198, 207);
}
.left {
  flex: 0 0 70px;
}


img {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  padding: 2px;
  border: 4px solid rgb(204, 46, 46);
}
</style>