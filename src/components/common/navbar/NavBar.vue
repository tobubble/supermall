<template>
  <div class="nav_bar">
    <div class="nav_bar_left"> <slot name="nav_bar_left"></slot> </div>
    <div class="nav_bar_middle"> <slot name="nav_bar_middle"></slot> </div>
    <div class="nav_bar_right"> <slot name="nav_bar_right"></slot> </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="less">
  .nav_bar{
    display: flex;
    line-height: 44px;
    text-align: center;
    box-shadow: 0 1px 1px rgba(100, 100, 100, .5);
    // margin-top: 44px;
  }

  .nav_bar_left,
  .nav_bar_right{
    width: 60px;
  }

  .nav_bar_middle{
    flex: 1;
  }

  .nav_bar_middle{
    display: flex;
    justify-content: space-evenly;
  }
</style>
