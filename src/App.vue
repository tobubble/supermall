<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view/>
    </keep-alive>
    <main-tabbar/>
  </div>
</template>

<script>
require('assets/css/base.less')
import MainTabbar from "components/content/maintabbar/MainTabbar"
// console.log(imgNum)
export default {
  components:{
    MainTabbar,
  }
}
</script>

<style>
  @import url(assets/css/normalize.css);
  /* @import url(assets/css/base.css); */
  
</style>
