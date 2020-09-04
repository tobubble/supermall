<template>
  <div id="tabbar">
    <slot/>
  </div>
</template>

<script>
  export default {

  }
</script>

<style>
  #tabbar{
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    height: 49px;
    background-color: #f6f6f6;
    /* display: none; */
  }
</style>