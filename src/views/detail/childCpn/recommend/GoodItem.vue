<template>
  <div class="goodItem" @click="goDetail">
    <img :src="cGoodsList.image" @load="imgOnLoad" />
    <div class="box">
      <p class="goodAlt">{{cGoodsList.title}}</p>
      <div class="goodPrice">
        <span class="price">{{"￥" + cGoodsList.price}}</span>
        <span class="cfav">{{cGoodsList.cfav}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cGoodsList: Object,
  },
  methods: {
    imgOnLoad() {
      this.$bus.$emit('cImgOnLoad')
    },
    goDetail() {
      console.log('heeeeeee')
      this.$router.push({
        path: '/detail',
        // 记住 query 中传递的是一个 对象
        query: {
          iid: this.cGoodsList.shop_id
        }
      })
    },
  }
};
</script>

<style lang="less" scoped>
.goodItem {
  font-size: 12px;
  width: 45%;
  padding-bottom: 15%;
  position: relative;

  img {
    width: 100%;
  }

  .goodAlt {
    color: rgb(102, 102, 102);
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin-top: 2%;
  }

  .goodPrice {
    // width: 100%;
    margin-top: 2%;
    display: flex;
    color: rgb(102, 102, 102);
    line-height: 20px;

    .price {
      color: deeppink;
      margin-left: 15%;
      margin-right: 10%;
    }

    .cfav::before {
      content: "";
      display: inline-block;
      vertical-align: middle;
      width: 15px;
      height: 15px;
      background-image: url("~assets/img/detail/detail_bottom.png");
      background-size: 15px;
    }
  }
  
  .box{
    width: 100%;
    position: absolute;
    bottom: 2%;
  }
}
</style>