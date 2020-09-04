<template>
  <div class="recommend">
    <div class="HotRecommend">热门推荐</div>
    <good-list :cGoods="recommend"></good-list>
  </div>
</template>

<script>
import GoodList from "./recommend/GoodList";

export default {
  props: {
    recommend: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {
    GoodList,
  }
};
</script>

<style lang='less' scoped>
.recommend {
  .HotRecommend {
    padding: 0 15px;
    line-height: 50px;
    color: #333;
  }
}
</style>