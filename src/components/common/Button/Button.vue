<template>
  <div>
    <!-- 
    type
    <button type="primary">Primary</button>
    <button type="info">Info</button>
    <button type="default">Default</button>
    <button type="danger">Danger</button>
    <button type="warning">Warning</button> 

    shape
    round
    square
    
    event
    click
    -->

    <button @click="btnClick" :class="[{ round, square }, type]">
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: "default",
      validator: function (value) {
        // 这个值必须匹配下列字符串中的一个
        return ["primary", "info", "default", "danger", "warning"].includes(
          value
        );
      },
    },
    round: {
      type: Boolean,
    },
    square: {
      type: Boolean,
    },
  },
  methods: {
    btnClick() {
      // console.log('button click')
      this.$emit("click");
      // 和原生名相同
    },
  },
};
</script>

<style scoped>
button {
  border: none;
  outline: none;
  padding: 6px;
  border-radius: 4px;
}

.default {
  background-color: #fff;
}

.primary {
  background-color: rgb(38, 148, 38);
  color: #fff;
}

.info {
  background-color: rgb(99, 53, 226);
  color: #fff;
}

.danger {
  background-color: rgb(255, 0, 0);
  color: #fff;
}
.warning {
}

/* shape */
.square {
  border-radius: 0px;
}
.round {
  border-radius: 10px;
}
</style>