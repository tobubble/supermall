<template>
  <div class="goodsParams" v-if="Object.keys(goodsParam).length !== 0">
    <div v-for="(items, index) in goodsParam.sizes[0]" :key="index" class="rule">
      <span class="items1">{{items[0]}}</span>
      <span class="items2">{{items[1]}}</span>
      <span class="items3">{{items[2]}}</span>
      <span class="items4">{{items[3]}}</span>
    </div>
    <div v-for="(items, index) in goodsParam.info" :key="index+4" class="info">
      <span class="span1">{{items.key}}</span>
      <span class="span2">{{items.value}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      goodsParam: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  } 
</script>

<style lang='less' scoped>
  .goodsParams{
    padding: 20px 15px;
    border-top: 5px solid #666;

    .rule,.info {
      line-height: 42px;
      border-bottom: 1px solid silver;
      display: flex;
      color: #666;
      font-size: 14px;
    }

    .items1 {
      flex-grow: 6;
    }
    .items2 {
      flex-grow: 3;
    }
    .items3 {
      flex-grow: 2;
    }
    .items4 {
      flex-grow: 4;
    }

    .span1{
      flex: 3;
    }

    .span2{
      flex: 7;
      color: deeppink;
    }
  }
</style>