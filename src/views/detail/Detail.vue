<template>
  <div id="detail" class="clearFix">
    <nav-bar @titleClick="titleClick" ref="navBar"></nav-bar>
    <scroll :probeType="3" ref="scroll" @cScroll="scroll">
      <detail-swiper :cBanner="imgArr" @cImgLoad="imgLoad" />
      <good-info :goods="goods"></good-info>
      <shop-info :shop="shop"></shop-info>
      <detail-images :detailImages="detailImages" @imgLoadUp="imgLoadUp"></detail-images>
      <goods-params ref="params" :goodsParam="goodsParam"></goods-params>
      <comment-info ref="comment" :commentInfo="commentInfo"></comment-info>
      <recommend ref="recommend" :recommend="recommend" />
    </scroll>
    <back-top @click.native="goBack" ref="backTop" v-show="isBackTopShow"></back-top>
    <detail-bottom @addToCart='addToCart'></detail-bottom>
    <!-- <toast v-show="true" message='添加商品成功' /> -->
  </div>
</template>

<script>
import NavBar from "./childCpn/NavBar";
import { getDetail, Goods, Shop, GoodsParam } from "network/detail";
import { recommend } from "network/recommend.js";
import DetailSwiper from "./childCpn/DetailSwiper";
import GoodInfo from "./childCpn/GoodInfo";
import ShopInfo from "./childCpn/ShopInfo";
import DetailImages from "./childCpn/DetailImage";
import GoodsParams from "./childCpn/GoodsParams";
import commentInfo from "./childCpn/commentInfo";
import Recommend from "./childCpn/Recommend";
import BackTop from "components/common/backTop/BackTop";
import DetailBottom from './childCpn/DetailBottom'

// import Toast from 'components/common/toast/Toast'

// 混入 backtop
import { backTop } from "common/mixin";

// 导入防抖动
import { debounce } from "common/utils";

// 导入滚动条
import scroll from "components/common/scroll/Scroll";

export default {
  name: "Detail",
  data() {
    return {
      iid: null,
      // 保存的 img 数组
      imgArr: [],
      // 保存商品的信息
      goods: {},
      // 保存商家的信息
      shop: {},
      // 保存 detail 中下面展示的图片
      detailImages: [],
      count: 0,
      // 保存商品的参数
      goodsParam: {},
      // 保存 评论 信息
      commentInfo: {},
      // 保存推荐的数据
      recommend: [],
      refresh: null,
      imgLoadListener: null,
      scrollY: [],
      getOffSet: null,
      currentIndex: 0,
    };
  },

  mixins: [backTop],

  components: {
    NavBar,
    DetailSwiper,
    ShopInfo,
    GoodInfo,
    scroll,
    DetailImages,
    GoodsParams,
    commentInfo,
    Recommend,
    BackTop,
    DetailBottom,
    // Toast
  },

  created() {
    // 1. 保存 iid
    this.iid = this.$route.query.iid;

    // 2. 根据iid获取数据
    getDetail(this.iid).then((res) => {
      console.log(res);
      const data = res.result;
      this.imgArr = data.itemInfo.topImages;

      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      // console.log(this.goods)

      this.shop = new Shop(data.shopInfo, data.itemInfo);
      // console.log(this.shop)

      this.detailImages = data.detailInfo.detailImage[0].list;
      // console.log(this.DetailImages)

      this.goodsParam = new GoodsParam(
        data.itemParams.info,
        data.itemParams.rule
      );
      console.log(this.goodsParam);

      if (data.rate.cRate !== 0) {
        this.commentInfo = data.rate.list[0];
        console.log(this.commentInfo);
      }

    });

    // 3. 获取recommend 相关的数据
    // recommend()
    recommend().then((res) => {
      this.recommend = res.data.list;
    });

    // 4. g添加防抖
    this.getOffSet = debounce(() => {
        this.scrollY = [];
        this.scrollY.push(0);
        this.scrollY.push(this.$refs.params.$el.offsetTop);
        this.scrollY.push(this.$refs.comment.$el.offsetTop);
        this.scrollY.push(this.$refs.recommend.$el.offsetTop);
    })
  },

  mounted() {
    this.refresh = debounce(this.$refs.scroll.refresh);
    // 4. 监听图片的刷新
    this.imgLoadListener = () => {
      this.refresh();
    };
    this.$bus.$on("cImgOnLoad", this.imgLoadListener);
  },
  // 由于这个vue组件他不是在 keep-alive 中，因此需要使用 destroyed
  destroyed() {
    this.$bus.$off("cImgOnLoad", this.imgLoadListener);
  },
  methods: {
    imgLoad() {
      this.$refs.scroll.refresh();
    },
    imgLoadUp() {
      // 在这里防抖动会没用，因为这里会多次调用
      this.count++;
      if (this.count === this.detailImages.length) {
        this.$refs.scroll.refresh();
      }

      this.getOffSet()
    },
    titleClick(index) {
      this.$refs.scroll.scroll.scrollTo(0, -this.scrollY[index], 200);
      this.currentIndex = index
    },
    scroll() {
      this.$refs.scroll.scroll.on("scroll", (position) => {
        if( -position.y >= 0 && -position.y < this.scrollY[1]) {
          this.currentIndex = 0
          this.$refs.navBar.currentIndex = this.currentIndex
        }else if(-position.y >=this.scrollY[1]  && -position.y < this.scrollY[2]) {
          this.currentIndex = 1
          this.$refs.navBar.currentIndex = this.currentIndex
        }else if(-position.y >= this.scrollY[2]  && -position.y < this.scrollY[3]) {
          this.currentIndex = 2
          this.$refs.navBar.currentIndex = this.currentIndex
        }else{
          this.currentIndex = 3
          this.$refs.navBar.currentIndex = this.currentIndex
        }
      })
    },
    addToCart() {
      const product = {}
      product.image = this.imgArr[0]
      product.title = this.goods.title
      product.desc = this.goods.desc
      product.price = this.goods.realPrice
      product.iid = this.iid
      // 不能直接修改 store 中的数据，需要通过 mutations 修改
      // this.$store.state.cartList.push(product)
      this.$store.dispatch('addToCart', product).then(res => {
        this.$toast.show(res, 2000)
      })
      // console.log(this.$store.state.cartList)
      // 在这个商品的对象中是没有 count 属性的，在加入购物车的时候应该添加这个属性，并且在多次点击之后，将这个属性自增
      // 数组的方法 pop，push，shift，unshift，sort，
    }
  },
};
</script>

<style lang='less' scoped>
// #detail{
//   position: relative;
//   z-index: 9;
//   background: #bfa;
// }

// .nav_bar{
//   img {
//     vertical-align: middle;
//   }

//   span {
//     font-size: 14px;
//   }

//   .highColor{
//     color: deeppink;
//   }
// }
</style>