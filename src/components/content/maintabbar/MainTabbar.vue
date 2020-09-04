<template>
  <tabbar>
    <tabbar-item link="/home">
      <img slot="item_img" src="~assets/img/tabbar/home.svg"/>
      <img slot="item_activeImg" src="~assets/img/tabbar/home_active.svg"/>
      <div slot="item_text">主页</div>
    </tabbar-item>
    <tabbar-item link="/category">
      <img slot="item_img" src="~assets/img/tabbar/category.svg"/>
      <img slot="item_activeImg" src="~assets/img/tabbar/category_active.svg"/>
      <div slot="item_text">分类</div>
    </tabbar-item>
    <tabbar-item link="/shopcart">
      <img slot="item_img" src="~assets/img/tabbar/cart.svg"/>
      <img slot="item_activeImg" src="~assets/img/tabbar/cart_active.svg"/>
      <div slot="item_text">购物车</div>
    </tabbar-item>
    <tabbar-item link="/profile">
      <img slot="item_img" src="~assets/img/tabbar/profile.svg"/>
      <img slot="item_activeImg" src="~assets/img/tabbar/profile_active.svg"/>
      <div slot="item_text">我的</div>
    </tabbar-item>
  </tabbar>
</template>

<script>
import Tabbar from "components/common/tabbar/Tabbar";
import TabbarItem from "components/common/tabbar/TabbarItem";
export default {
  components: {
    Tabbar,
    TabbarItem,
  }
};
</script>

<style>
</style>