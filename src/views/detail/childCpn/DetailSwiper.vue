<template>
  <div class="banner_bar">
    <div class="banner_img_bar" :style="position()" :class="{Transition: isTransition}">
      <a @click="showMessage" :href="items" v-for="(items,index) in cBanner"  alt :key="index" >
        <img :src="items" alt :key="index" @load="cImgLoad" />
      </a>
    </div>
    <div class="banner_dot_bar">
      <div :class="{showDot: isShow(index)}" v-for="(items,index) in cBanner" :key="index"></div>
    </div>
  </div>
</template>

<script>
// 主界面只管传递数据就行，处理数据都放在 组件中进行比较好

export default {
  data() {
    return {
      index: 0, // 当前正在展示的图片索引
      imgLength: 0, // 当前展示的图片的数量
      imgMoveWidth: 320, // 图片的移动距离
      startTimer: null,
      isTransition: false, // 默认情况下图片开启 transition
      isload: false
    };
  },
  props: {
    // home主页传递过来的 img 数组
    cBanner: Array,
  },
  mounted() {
    setTimeout(() => {
      this.imgBarMove();
    }, 1000);
  },
  methods: {
    position() {
      return { left: -320 * (this.index + 1) + "px" };
    },
    cImgLoad() {
      if(this.isload === false){
        this.$emit('cImgLoad')
        this.isload = true
      }
    },
    // 这里定义图片移动的方法
    imgBarMove() {
      const imgBar = document.querySelector(".banner_img_bar");
      // 1. 获取总的图片长度,并保存到 data
      this.getImgLenth();
          // 下面开判断 this.index
        clearInterval(this.startTimer);
        //2. 设置一个定时器，隔一段时间就移动图片的位置，这里我们设置 3s
        this.startTimer = setInterval(() => {
          this.index++;
          // 当播放到最后一张图片的时候，动用 transition 的回调函数
          if (this.index === this.imgLength) {
            imgBar.addEventListener("transitionend", this.transitionCallBack);
          } else {
            this.isTransition = false;
          }
          }, 2000);
    },
    getImgLenth() {
      // 在这里如果不能够直接获取到子元素，那么可以使用 父元素.children 来获取所有的子元素
      const imgBar = document.querySelector(".banner_img_bar");
      const imgFirst = imgBar.children[0].cloneNode(true);
      const imgLast = imgBar.children[imgBar.children.length - 1].cloneNode(
        true
      );
      this.imgLength = imgBar.children.length;

      imgBar.appendChild(imgFirst);
      imgBar.insertBefore(imgLast, imgBar.children[0]);
    },
    transitionCallBack() {
      const imgBar = document.querySelector(".banner_img_bar");
      this.index = 0;
      this.isTransition = true;
      imgBar.removeEventListener("transitionend", this.transitionCallBack);
    },

    showMessage() {
      console.log(this.cBanner)
    },

    isShow(index) {
      if(this.index === index ||( this.index == this.imgLength && index == 0)){
        return true
      }else{
        return false
      }
    }
  },
};
</script>

<style lang="less" scoped>
.banner_bar {
  overflow: hidden;
  height: 300px;
  position: relative;
  overflow: hidden;

  .banner_dot_bar {
    position: absolute;
    bottom: 8px;
    left: 50%;
    transform: translateX(-50%); 

    div {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: pink;
      float: left;
      margin-left: 10px;
    }

    .showDot{
      background-color: silver;
    }
  }

  .banner_img_bar {
    display: flex;
    position: absolute;
    // 设置的是 动画效果
    transition: all 0.5s ease-in-out;
    left: -320px;
  }

  .Transition {
    left: -320px;
    transition: none;
  }

  .banner_img_bar img {
    // height: 300px;
    width: 320px;
  
    vertical-align: middle;
  }
}
</style>