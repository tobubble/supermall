<template>
  <div class="goodList">
    <good-item v-for="(item, index) in cGoods" :cGoodsList="item" :key="index"></good-item>
  </div>
</template>

<script>
import GoodItem from './GoodItem'

  export default {
    props: {
      cGoods: Array
    },
    components: {
      GoodItem
    }
  }
</script>

<style lang="less" scoped>
  .goodList{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
</style>