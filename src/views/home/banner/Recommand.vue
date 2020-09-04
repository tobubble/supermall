<template>
  <div class="recommand">
    <div class="recommand-item" v-for="(item, index) in cRecommand" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt />
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cRecommand: Array,
  },
};
</script>

<style lang="less" scpoed>
.recommand {
  display: flex;
  padding: 20px 0 20px;
  font-size: 14px;
  border-bottom: 8px #ccc solid;

  .recommand-item {
    // flex 1 的目的是将父元素平均分配
    flex: 1;
    text-align: center;

    a {
      text-decoration: none;
      color: rgb(71, 70, 70);

      div{
        margin-top: 10px;
      }

      img {
        width: 70px;
        height: 70px;
      }
    }
  }
}
</style>