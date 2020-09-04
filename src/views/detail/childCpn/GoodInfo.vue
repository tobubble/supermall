<template>
  <div class="shopInfo" v-if="Object.keys(goods).length !== 0">
    <div class="goodsTitle">{{goods.title}}</div>
    <div class="goodsPriceBar">
      <div class="newPrice">{{goods.newPrice}}</div>
      <div class="oldPrice">{{goods.oldPrice}}</div>
      <div class="discount">{{goods.discount}}</div>
    </div>
    <div class="goodsOther">
      <span>{{goods.columns[0]}}</span>
      <span>{{goods.columns[1]}}</span>
      <span>{{goods.services[3].name}}</span>
    </div>
    <div class="goodsServices">
      <div v-for="(item, index) in goods.services" :key="index" v-show="index != 3">
        <img :src="item.icon" alt="">
        <span>{{item.name}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goods: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style lang='less' scoped>
.goodsTitle {
  // background: #bfa;
  margin: 10px 0;
  padding: 0px 5px;
  // text-indent: 1em; // 首行缩进
  color: rgb(34, 34, 34);
}

.goodsPriceBar {
  display: flex;
  padding: 0px 5px;
  // margin-left: 5px;

  .newPrice {
    font-size: 22px;
    color: deeppink;
  }

  .oldPrice {
    transform: translateY(8px);
    margin-left: 5px;
    font-size: 13px;
    color: gray;
    height: 14px;
    text-decoration: line-through;
    // vertical-align: bottom;
    line-height: 14px;
  }

  .discount {
    font-size: 13px;
    margin-left: 5px;
    background-color: deeppink;
    color: white;
    line-height: 18px;
    padding: 0px 4px;
    // border-top-left-radius: 10%;
    border-radius: 8px;
    box-sizing: border-box;
    height: 18px;
  }
}

.goodsOther {
  padding: 0 5px;
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: gray;
}

.goodsServices{
  display: flex;
  padding-top: 20px;
  font-size: 12px;
  justify-content: space-between;
  color: rgb(30, 30, 30);
  padding-bottom: 20px;
  border-bottom: 3px solid rgb(240,240,240);

  img{
    width: 13px;
    vertical-align: middle;
  }
}
</style>