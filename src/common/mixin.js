export const backTop = {
  methods: {
    goBack() {
      this.$refs.scroll.scroll.scrollTo(0, 0, 300);
    },
    scroll(position) {
      // console.log(position.y)
      // 判断是否显示 backtop
      if (position.y < -500) {
        this.isBackTopShow = true;
      } else {
        this.isBackTopShow = false;
      }
      // 判断是否显示 category
      if(position.y - 44 < -this.categoryOffsetTop){
        this.categoryShow = true
      }else{
        this.categoryShow = false
      }
    },
  },
  data() {
    return {
      isBackTopShow: false
    }
  }
} 