<template>
  <div class="shopInfo">
    <div class="shopLogo">
      <img :src="shop.logo" alt />
      <span>{{shop.name}}</span>
    </div>
    <div class="shopMiddle">
      <div class="shopSell">
        <div class="goodSell">
          <div class="count">{{shop.sells | showSell}}</div>
          <div class="allSell">总销量</div>
        </div>
        <div class="goodsCount">
          <div class="cGoodsCount">{{shop.goodsCount}}</div>
          <div class="allGoods">全部宝贝</div>
        </div>
      </div>
      <div class="line"></div>
      <div class="shopDesc">
        <div class="goodsEvaluation" v-for="(item, index) in shop.score" :key="index">
          <div class="descRight">{{item.name}}</div>
          <div class="priceFit" :class="{priceFit2:item.isBetter}">{{item.score}}</div>
          <div class="isBetter" v-show="!item.isBetter">低</div>
          <div class="isBetter" v-show="item.isBetter" :class="{isBetter2:item.isBetter}">高</div>
        </div>
      </div>
    </div>

    <div class="enterShop">
      <div class="go">进店逛逛</div>
    </div>

    <div class="goodsDesc">
      <div class="startDot"></div>
      <div class="startLine"></div>
      <p class="desc">{{shop.desc}}</p>
      <!-- <div class="endLine"></div> -->
      <div class="endDot"></div>
      <div class="endLine"></div>
    </div>

    <div class="wearStyle">穿着效果</div>
  </div>
</template>

<script>
export default {
  props: {
    shop: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  filters: {
    showSell(value) {
      const a = value/10000
      return a.toFixed(2) + '万'
    }
  }
};
</script>

<style lang='less' scoped>
.shopInfo {
  padding: 0 5px 25px 15px;

  .shopLogo {
    img {
      width: 45px;
      vertical-align: middle;
    }

    span {
      line-height: 48px;
      margin-left: 10px;
    }
  }
}

.shopMiddle {
  margin-top: 10px;
  // background: #bfa;
  display: flex;
  text-align: center;

  .shopSell {
    width: 49%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    .count,
    .cGoodsCount {
      margin-bottom: 10px;
      font-size: 18px;
      color: #333;
    }

    .allSell,
    .allGoods {
      color: #333;
      font-size: 12px;
    }
  }

  .line {
    width: 1px;
    height: 43px;
    background: deeppink;
    margin-top: 17px;
  }

  .shopDesc {
    width: 49%;
    display: flex;
    height: 78px;
    flex-direction: column;
    justify-content: space-evenly;

    .goodsEvaluation {
      display: flex;
      font-size: 13px;
      justify-content: space-evenly;
      text-align: start;

      .priceFit {
        width: 27px;
        color: #5ea732;
      }

      .priceFit2 {
        color: #f13e3a;
      }

      .descRight {
        width: 53px;
        color: #333;
      }

      .isBetter {
        width: 14px;
        color: #fff;
        background: #5ea732;
      }

      .isBetter2 {
        background: #f13e3a;
      }
    }
  }
}

  .goodsDesc{
    margin-top: 20px;

    .desc{
      padding: 15px 0;
      font-size: 14px;
      color: #666;
    }

    .startDot,.endDot{
      width: 5px;
      height: 5px;
      background: #333;
    }

    .startLine,.endLine{
      width: 90px;
      height: 1px;
      background: #a3a3a5;
    }

    .endLine,.endDot{
      float: right;
    }
    .endDot{
      transform: translateY(-4px);
    }
  }

  .wearStyle{
    margin: 10px 0 10px 15px;
    color: #333;
    font-size: 15px;
  }

  .enterShop{
    display: flex;
    justify-content: space-around;
    padding: 15px 0 15px;
    border-bottom: 5px solid #f2f5f8;

    .go{
      width: 150px;
      background: #f2f5f8;
      // height: 30px;
      text-align: center;
      line-height: 30px;
    }
  }
</style>