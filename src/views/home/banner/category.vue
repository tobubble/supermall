<template>
  <ul class="category">
    <li v-for="(item, index) in arr" :key="index" @click="isClick(index)" :class="{isSlect: index === currentIndex}">{{item}}</li>
  </ul>
</template>

<script>
  export default {
    data () {
       return {
        isSlect: true,
        currentIndex: 0,
        arr: ['流行', '新款', '精选']
      }
    },
    methods: {
      isClick(index) {
        this.currentIndex = index;
        this.$emit('categoryClick' , index)
      }
    }
  }
</script>

<style lang="less" scoped>
  .category{
    background: white;
    list-style: none;
    width: 100%;
    height: 44px;
    display: flex;
    justify-content: space-around;

    li{
      color: rgb(119, 119, 119);
      vertical-align: middle;
      display: inline-block;
      height: 30px;
      line-height: 30px;
      text-align: center;
    }

    .isSlect{
      color: deeppink;
      border-bottom: 2px solid deeppink;
    }
  }
</style>