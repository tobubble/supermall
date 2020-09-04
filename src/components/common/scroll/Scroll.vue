<template>
  <div class="wrapper" ref="wrapper" :style="Bottom">
    <div class="content" ref="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "@better-scroll/core";
import PullUp from "@better-scroll/pull-up";
BScroll.use(PullUp);

export default {
  data() {
    return {
      scroll,
    };
  },
  props: {
    probeType: {
      type: Number,
      default: 0,
    },
    pullUpLoad: {
      type: Boolean,
      default: false,
    },
    bottom: {
      type: Number,
      default: 0
    }
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      // 注意 如果使用了 pullUpLoad 的插件的话，不需要使用 probetype 就可以监听滚动
      pullUpLoad: this.pullUpLoad,
      // 控制里面的元素是否可以点击（默认只有按钮可以点击，开启后其他的标签也能点击）
      click: true,
      // 控制是否可以用 滚轮 滚动
      mouseWheel: true,
      probeType: this.probeType,
    });
    this.scroll.on("scroll", (position) => {
      this.$emit("cScroll", position);
    });
    if (this.pullUpLoad) {
      this.scroll.on("pullingUp", () => {
        this.$emit("cPullUp");
      });
    }
  },
  methods: {
    refresh() {
      console.log("hello");
      this.scroll.refresh();
    },
  },
  computed: {
    Bottom() {
      if(this.bottom) {
        return {bottom: this.bottom + 'px'}
      }else {
        return false
      }
    }
  }
};
</script>

<style lang='less' scoped>
.wrapper {
  position: absolute;
  overflow: hidden;
  top: 44px;
  bottom: 49px;
  z-index: -1;
}
</style>