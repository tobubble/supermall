<template>
  <nav-bar class="nav_bar">
    <img src="~assets/img/common/back.svg" alt slot="nav_bar_left" @click="goBack" />
    <span
      slot="nav_bar_middle"
      v-for="(item, index) in options"
      :key="index"
      :class="{highColor: index === currentIndex}"
      @click="changeIndex(index)"
    >{{item}}</span>
  </nav-bar>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";

export default {
  // 拿到 iid 的方法
  /*
      1. 创建 data 保存将要的 iid
      2. 使用 created 函数来通过路由获取 iid ，将请求的 iid 赋值给 data 中的 iid
    */
  components: {
    NavBar,
  },
  data() {
    return {
      iid: null,
      options: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0,
    };
  },
  created() {
    this.iid = this.$route.query.iid;
  },
  methods: {
    changeIndex(index) {
      this.currentIndex = index;
      this.$emit("titleClick", index)
    },
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style lang='less' scoped>
.nav_bar {
  img {
    vertical-align: middle;
  }

  span {
    font-size: 14px;
    flex: 1;
  }

  .highColor {
    color: deeppink;
  }
}
</style>