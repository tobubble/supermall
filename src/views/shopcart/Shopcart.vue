<template>
  <div id="shopCart">
    <nav-bar :count="productCount"></nav-bar>
    <scroll ref="scroll" :bottom='79'>
      <product-item @imgLoad='imgLoad'></product-item>
    </scroll>
    <product-counter :count='productCount'></product-counter>
  </div>
</template>
<script>
import NavBar from "./childCpn/NavBar";
import ProductItem from "./childCpn/ProductItem";
import Scroll from "components/common/scroll/Scroll";
import ProductCounter from './childCpn/ProductCounter';
import {debounce} from 'common/utils'

export default {
  components: {
    NavBar,
    ProductItem,
    Scroll,
    ProductCounter,
  },
  data() {
    return {
      refresh: null
    }
  },
  activated() {
    this.$refs.scroll.refresh()
  },
  mounted() {
    this.refresh = debounce(this.$refs.scroll.refresh, 100)
    // console.log(this.refresh)
  },
  data() {
    return {
      count: 0,
    };
  },
  computed: {
    productCount() {  
      this.count = 0;
      for (let item of this.$store.state.cartList) {
        this.count += item.count;
      }
      return this.count;
    },
  },
  methods: {
    imgLoad() {
    }
  }
};
</script>

<style>
</style>