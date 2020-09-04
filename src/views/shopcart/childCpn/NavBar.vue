<template>
  <nav-bar>
    <img src="~assets/img/common/back.svg" alt slot="nav_bar_left" @click="goBack" />
    <div slot="nav_bar_middle"> 购物车 ({{count}}) </div>
  </nav-bar>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'

  export default {
    components: {
      NavBar
    },
    props: {
      count: {
        type: Number,
        default: 0
      }
    },
    methods: {
      goBack() {
        this.$router.go(-1)
      }
    },
  }
</script>

<style lang='less' scoped>
  img {
    vertical-align: middle;
  }
</style>