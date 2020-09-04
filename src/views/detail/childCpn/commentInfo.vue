<template>
  <div id="commentInfo" v-if="Object.keys(commentInfo).length !== 0">
    <div class="commentTab">
      <span>用户评价</span>
      <div class="more">
        更多
      </div>
    </div>

    <div class="userComment">
      <div class="userName">
        <img :src="commentInfo.user.avatar" alt="">
        <span>{{commentInfo.user.uname}}</span>
      </div>
      <div class="comment">{{commentInfo.content}}</div>
      <div class="commentObj">
        <span class="date">{{commentInfo.created | showDate}}</span>
        <span class="size">{{commentInfo.style}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  import {formatDate} from 'common/utils'

  export default {
    props: {
      commentInfo: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    filters: {
      showDate(value) {
        //  1. 时间戳是秒， date 传入的是 毫秒
        const date = new Date(value * 1000)

        // 2. 将 date 格式化
        return formatDate(date, 'yyyy-MM-dd')
      }
    }

  }
</script>

<style lang='less' scoped>
  #commentInfo{
    margin-top: 20px;
    border-top: 5px rgb(242,245,248) solid;
    border-bottom: 5px rgb(242,245,248) solid;

    .commentTab{
      line-height: 50px;
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid rgb(233,236,239);
      color: #333;
      padding: 5px 12px;

      span{
        font-size: 15px;
      }

      .more{
        font-size: 13px;
        margin-right: 5px;
      }
    }

    .userComment{
      padding: 10px 10px 15px;

      .userName {
        line-height: 45px;

          img{
          width: 42px;
          vertical-align: middle;
        }

        span {
          margin-left: 5px;
          font-size: 15px;
          color: #333;
        }
      }

      .comment{
        margin-top: 13px;
        font-size: 14px;
        color: #777;
      }

      .commentObj {
        margin-top: 13px;
        font-size: 13px;
        color: #999;

        .size{
          margin-left: 10px;
        }
      }
    }
  }
</style>