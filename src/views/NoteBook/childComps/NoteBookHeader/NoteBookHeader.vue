<template>
  <div class="container">
    <nav-bar>
      <div slot="left" @click="$router.back()">
        <cem-icon name="back"></cem-icon>
      </div>
      <div slot="right">
        <cem-icon name="share"></cem-icon>
        

      </div>
    </nav-bar>

  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import CemIcon from "components/common/icon/Icon";
export default {
  name: "NoteBookHeader",
  data() {
    return {
      
      
    };
  },
  components: {
    NavBar,
    CemIcon,
  },
  methods: {
    
  },
};
</script>

<style scoped>

</style>
