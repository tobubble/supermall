<template>
  <div id="productCounter">
    <div class="check">
      <div class="imgBar" :class="{checked: isChecked}" @click="checkClick">
        <img src="~assets/img/cart/tick.svg" alt />
      </div>
      <span>全选</span>
    </div>
    <div class="priceAll">
      <span>合计</span>
      <div class="price">{{showAllPrice | showAllprice2}}</div>
    </div>
    <div class="buy">去计算({{count}})</div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  filters: {
    showAllprice2(res) {
      return "￥" + res.toFixed(2);
    }
  },
  props: {
    count: Number,
  },
  computed: {
    ...mapGetters(["showAllPrice"]),
  },
  data() {
    return {
      isChecked: true,
    };
  },
  methods: {
    checkClick() {
      let flag = false;
      // console.log(this.$store.state.cartList)
      for (let item of this.$store.state.cartList) {
        if (item.isChecked === false) {
          // 只要有人没选中，flage 就变
          flag = true;
          // return true
          break 
        }
      }
      if (!flag) {
        // 都是全选状态，遍历购物车改为全部不选中
        this.$store.commit('unselected')
        // 并且自身也不选中
        this.isChecked = false;
      } else if(flag) {
        // 有人是不是选中转发太
        // 将购物车所有非选中状态改为选中，并且自身选中
        this.$store.commit('selected')
        this.isChecked = true;
      }
    },
  },
  mounted() {
    this.$bus.$on("notAllChecked", () => {
      this.isChecked = false;
    });
    this.$bus.$on("allChecked", () => {
      this.isChecked = true;
    });
  },
};
</script>

<style lang='less' scoped>
#productCounter {
  width: 100%;
  height: 30px;
  position: absolute;
  bottom: 49px;
  background: #eee;
  // background: #bfa;
  display: flex;

  .check {
    flex: 2;
    // background: deeppink;
    font-size: 13px;
    display: flex;
    align-items: center;
    padding: 0 8px;

    .imgBar {
      height: 16px;
      width: 16px;
      border: 1px solid #666;
      border-radius: 50%;

      img {
        height: 16px;
        width: 16px;
      }
    }

    span {
      margin-left: 5px;
    }
  }

  .checked {
    background: rgb(255, 20, 147);
  }

  .priceAll {
    flex: 6;
    // background: deepskyblue;
    display: flex;
    align-items: center;
    font-size: 13px;

    .price {
      margin-left: 10px;
    }
  }

  .buy {
    flex: 3;
    font-size: 13px;
    text-align: center;
    line-height: 30px;
  }
}
</style>