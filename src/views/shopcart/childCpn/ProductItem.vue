<template>
  <div class="productItemBar">
    <div class="productItem" v-for="(item, index) in $store.state.cartList" :key="item.iid">
      <div class="item">
        <div class="check" :class="{check2: item.isChecked}" @click="CheckClick(item)">
          <img src="~assets/img/cart/tick.svg" @load="imgLoad" alt />
        </div>
        <div class="itemImg">
          <img :src="$store.state.cartList[index].image" alt />
        </div>
        <div class="itemdesc">
          <div class="desc">{{$store.state.cartList[index].title}}</div>
          <div class="desc2">{{$store.state.cartList[index].desc}}</div>
          <div class="price_count">
            <div class="price">{{$store.state.cartList[index].price | showPrice}}</div>
            <div class="count">{{$store.state.cartList[index].count | showCount}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    console.log(this.$store.state.cartList);
  },
  filters: {
    showCount(res) {
      return "x" + res;
    },
    showPrice(res) {
      return "￥" + res;
    },
  },
  data() {
    return {
      isCheck: true,
    };
  },
  methods: {
    CheckClick(item) {
      let flag = false;
      item.isChecked = !item.isChecked;
      for (let item2 of this.$store.state.cartList) {
        if (item2.isChecked === false) {
          flag = true;
        }
      }
      if(flag) {
        this.$bus.$emit('notAllChecked')
      }else {
        this.$bus.$emit('allChecked')
      }
    },
    imgLoad() {
      this.$emit("imgLoad");
    },
  },
};
</script>

<style lang='less' scoped>
.productItem {
  height: 120px;
  padding: 10px;
  // display: flex;

  .item {
    position: relative;
    height: 100%;
    display: flex;

    .check {
      border: 1px solid #666;
      width: 16px;
      height: 16px;
      border-radius: 50%;
      transform: translateY(-50%);
      position: absolute;
      top: 50%;

      img {
        width: 16px;
        height: 16px;
      }
    }

    .check2 {
      background: deeppink;
      border-color: white;
    }

    .itemImg {
      flex: 2;
      height: 100%;
      background: #bfa;
      margin-left: 20px;

      img {
        width: 100%;
        height: 100%;
      }
    }

    .itemdesc {
      flex: 4;
      height: 100%;
      position: relative;

      .desc,
      .desc2 {
        width: 168px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: 13px;
      }

      .desc {
        color: #333;
      }

      .desc2 {
        color: #666;
        margin-top: 20px;
      }

      .price_count {
        box-sizing: border-box;
        padding: 0 10px;
        width: 100%;
        display: flex;
        position: absolute;
        bottom: 10px;
        // align-items: center;
        justify-content: space-between;
      }

      .price {
        color: @background-tink;
      }
    }
  }
}

.productItem:not(:last-child) {
  border-bottom: 1px solid #666;
}
</style>