<template>
  <div class="toast" v-show="isShow">
    <div>{{message}}</div>
  </div>
</template>

<script>
export default {
  name: "Toast",
  data() {
    return {
      message: "",
      isShow: false,
    };
  },
  methods: {
    // 这里在函数中传递参数的时候添加 = 'xxx' 表示的是传递一个默认值
    show(message, duration = 2000) {
      console.log('hello')
      this.message = message;
      this.isShow = true;

      setTimeout(() => {
        this.isShow = false;
        this.message = "";
      }, duration);
    },
  },
};
</script>

<style lang='less' scoped>
.toast {
  position: fixed;
  z-index: 999;

  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  color: #fff;
  background: rgba(0, 0, 0, 0.7);

  padding: 6px 10px;
  // border: ;
  border-radius: 10%;
}
</style>