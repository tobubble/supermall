<template>
  <div class="home">
    <nav-bar>
      <div slot="nav_bar_middle">购物街</div>
    </nav-bar>
    <category @categoryClick="categoryClick" v-show="categoryShow" ref="category2"></category>
    <scroll ref="scroll" :probe-type="3" :pull-up-load="true" @cScroll="scroll" @cPullUp="pullUp">
      <banner :cBanner="banners" @cImgLoad='imgload' ref="banner"></banner>
      <recommand :cRecommand="recommends" />
      <feature />
      <category @categoryClick="categoryClick" ref="category"></category>
      <good-list :cGoods="goods[type].list" />
    </scroll>
    <back-top @click.native="goBack" ref="backTop" v-show="isBackTopShow"></back-top>
  </div>
</template>

<script>
import { request } from "network/request";
import NavBar from "components/common/navbar/NavBar";
import Banner from "views/home/banner/Banner";
import Recommand from "./banner/Recommand";
import Feature from "./banner/Feature";
import GoodList from "components/content/goodList/GoodList";
import Category from "./banner/category";
import Scroll from "components/common/scroll/Scroll";
import BackTop from "components/common/backTop/BackTop";

import { multiData, goodList } from "network/home";

import { debounce } from 'common/utils'

export default {
  components: {
    NavBar,
    Banner,
    Recommand,
    Feature,
    GoodList,
    Category,
    Scroll,
    BackTop,
  },
  data() {
    return {
      // 请求数据之后保存 轮播图 的信息(数组)
      banners: null,
      // 请求数据之后保存 轮播图 下面的 信息(数组)
      recommends: null,
      // 请求 商品列表 数据
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      // 默认显示的是 pop ，通过category的点击切换这个
      type: "pop",
      isBackTopShow: false,
      categoryOffsetTop: 0,
      categoryShow: false,
      // 保存 公共的监听事件
      itemImgLoad: null
    };
  },
  created() {
    // 请求 multidata 的数据并且放到 data 中保存
    this.multiData();
    // 请求商品列表数据
    // 这里注意只需要传递一个参数就行了， page 是设计成自动 + 1 的， 这样方便后续的操作
    this.goodList("pop");
    this.goodList("new");
    this.goodList("sell");
  },
  mounted() {
    // 防抖动
    // console.log(this.$refs.scroll.scroll.refresh)
    // 在这里 一定要 修改 refresh 中的this
    const refresh = debounce(this.$refs.scroll.refresh, 100);
    // console.log(refresh)
    this.itemImgLoad =  () => {refresh()}
    this.$bus.$on("cImgOnLoad", this.itemImgLoad);
  },
  activated() {
    // clearInterval(this.$refs.banner.startTimer);
  },
  deactivated() {
    // this.$refs.banner.imgBarMove()
    // 当处于不活跃的时候，取消对全局事件 bus 中的监听  ---- 后面要加取消的函数
    this.$bus.$off('cImgOnLoad', this.itemImgLoad)
  },
  methods: {
    // 网络请求的相关方法
    multiData() {
      multiData().then((res) => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
                console.log(this.banners)
      });
    },
    goodList(type) {
      // 传递过来要请求的数据类型，并且 根据 data 中的 page， 动态的传递 page
      goodList(type, this.goods[type].page + 1).then((res) => {
        // console.log(res);
        // 将传递过来的数据保存
        let page = this.goods[type].page + 1;
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page = page;

        if (page != 1) {
          this.$refs.scroll.refresh()
          this.$refs.scroll.scroll.finishPullUp();
        }
      });
    },

    // 事件监听相关的方法
    categoryClick(index) {
      if (index === 0) {
        this.type = "pop";
      } else if (index === 1) {
        this.type = "new";
      } else {
        this.type = "sell";
      }
      this.$refs.category.currentIndex = index
      this.$refs.category2.currentIndex = index
    },
    goBack() {
      this.$refs.scroll.scroll.scrollTo(0, 0, 300);
    },
    scroll(position) {
      // console.log(position.y)
      // 判断是否显示 backtop
      if (position.y < -500) {
        this.isBackTopShow = true;
      } else {
        this.isBackTopShow = false;
      }
      // 判断是否显示 category
      if(position.y < -this.categoryOffsetTop){
        this.categoryShow = true
      }else{
        this.categoryShow = false
      }
    },
    pullUp() {
      this.goodList(this.type);
    },
    imgload() {
      // 用 $el 可以得到 refs 引用的 原生 dom 元素
      // console.log(this.$refs.category.$el.offsetTop)
      this.categoryOffsetTop = this.$refs.category.$el.offsetTop
    }
  },
};
</script>

<style lang="less" scoped>
.nav_bar {
  background-color: @background-tink;
  color: #fff;
}
</style>