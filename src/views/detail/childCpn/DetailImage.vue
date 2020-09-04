<template>
  <div class="detailImages">
    <img v-for="(items,index) in detailImages" :src="items" alt="" :key="index" @load="imgLoadUp">
  </div>
</template>

<script>
  export default {
    props: {
      detailImages:{
        type: Array,
        default() {
          return []
        }
      }
    },
    methods: {
      imgLoadUp() {
        this.$emit('imgLoadUp')
      }
    }
  }
</script>

<style lang='less' scoped>
  .detailImages{

    img{
      width: 100%;
    }
  }
</style>