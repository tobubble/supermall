<template>
  <div class="tabbar_item" @click="itemClick">
    <!-- <img src="../../assets/img/home.svg" alt=""> -->
    <div v-if="!isActive">
      <slot name="item_img"></slot>
    </div>
    <div v-else>
      <slot name="item_activeImg"></slot>
    </div>
    <div :style="isColor">
      <slot name="item_text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    isActive() {
      let linkExp = new RegExp(this.link + "$");
      return linkExp.test(this.$route.path);
    },
    isColor() {
      return this.isActive ? { color: this.activeColor } : {};
    },
  },
  props: {
    link: String,
    activeColor: {
      type: String,
      default: "deeppink",
    },
  },
  methods: {
    itemClick() {
      // push 方法使用网上解决办法不报错，使用 replace 报错
      this.$router.push(this.link);
    },
  },
};
</script>

<style>
.tabbar_item {
  text-align: center;
  flex: 1;
  padding-top: 3px;
  font-size: 14px;
  color: rgb(65, 64, 64);
}
.tabbar_item img {
  width: 24px;
  vertical-align: middle;
}
</style>