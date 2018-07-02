<template>

<div class="mobile">
    <div class="content">
        <div class="text">
            <div class="contain">
                <div class="head">
                    营销活动名称-邀请码名称
                    <div class="dashLine"></div>
                <div class="circleRight"></div>
                <div class="circleLeft"></div>
                </div>
                <div class="condition" ref="condition">
                    <span>优惠条件：</span>
                    <span class="conditionText" :key="index" v-for="(item,index) in conditions">艾丝凡三个艾丝凡三个艾丝凡三个艾丝凡三个艾丝凡三个</span>
                    <div class="clearfix"></div>
                    <img src="../../images/bottom.png" alt="" v-on:click="showText" ref="imgs">
                </div>
                <div class="range">
                    <span>优惠范围：</span>
                    <span class="conditionText" :key="index" v-for="(item,index) in conditions">艾丝凡三个艾丝凡三个艾丝凡三个艾丝凡三个艾丝凡三个艾丝凡三个艾丝凡三个艾丝凡三个艾丝凡三个艾丝凡三个</span>
                    <div class="clearfix"></div>
                </div>
                <div class="date">
                    <span>有效日期：</span>
                    <div class="time">2018-04-10 12:30 至 2018-04-10 12:30</div>
                </div>
                <div class="footer">
                <input class="input" type="text" placeholder="请输入手机号码">
                <div class="btn">立即领取</div>
            </div>
            </div>
        </div>
    </div>
</div>

</template>

<script>
export default {
  data() {
    return {
      conditions: [
        "艾丝凡三个艾丝凡三个艾丝凡三个艾丝凡三个艾丝凡三个",
        "艾丝凡三个艾丝凡三个艾丝凡三个艾丝凡三个艾丝凡三个",
        "艾丝凡三个艾丝凡三个艾丝凡三个艾丝凡三个艾丝凡三个"
      ],
      bottom: true
    };
  },
  methods: {
    showText() {
      if (this.bottom) {
        this.$refs.condition.style.height = "auto";
        this.bottom = !this.bottom;
        this.$refs.imgs.classList.add("roate");
      } else {
        this.$refs.condition.style.height = "30px";
        this.bottom = !this.bottom;
        this.$refs.imgs.classList.remove("roate");
      }
    }
  }
};
</script>

<style lang="scss">
.mobile {
  position: fixed;
  top: 132px;
  left: 578px;
  background-image: url("../../images/10.png");
  width: 318px;
  height: 639px;
  padding-top: 72px;
  padding-left: 19px;
  .content {
    background-image: url("../../images/15.png");
    width: 280px;
    height: 494px;
    padding-top: 48px;
    .text {
      width: 280px;
      height: 446px;
      background-color: #2fa5fd;
      padding: 25px 12px 0 12px;
      .contain {
        width: 100%;
        height: 100%;
        background: #ffffff;
        border-top-left-radius: 6px;
        border-top-right-radius: 6px;
        .head {
          position: relative;
          height: 54px;
          line-height: 54px;
          text-align: center;
          font-family: PingFangSC;
          font-size: 14px;
          background-color: #fafafa;
          border-radius: 6px;
          color: #000000;
          .dashLine {
            border-top: 1px dashed #d0d0d0;
            margin: 0 auto;
          }
          .circleRight,
          .circleLeft {
            position: absolute;
            display: inline-block;
            border-radius: 50%;
            width: 13px;
            height: 13px;
            background-color: #1e98f3;
          }
          .circleLeft {
            bottom: 0;
            right: 0;
            transform: translate(50%, 50%);
          }
          .circleRight {
            bottom: 0;
            left: 0;
            transform: translate(-50%, 50%);
          }
        }
        .condition {
          position: relative;
          margin-top: 25px;
          padding: 0 15px;
          height: 30px;
          overflow: hidden;
          span {
            display: inline-block;
            font-family: PingFangSC;
            font-size: 10px;
            color: #666666;
          }
          span:nth-child(1) {
            float: left;
          }
          .conditionText {
            width: 154px;
            line-height: 14px;
            float: right;
            margin-right: 16px;
            height: 32px;
          }
          img {
            position: absolute;
            width: 15px;
            height: 15px;
            top: 0;
            right: 10px;
          }
          .roate {
            transform: rotate(180deg);
            -ms-transform: rotate(180deg); /* IE 9 */
            -moz-transform: rotate(180deg); /* Firefox */
            -webkit-transform: rotate(180deg); /* Safari 和 Chrome */
            -o-transform: rotate(180deg); /* Opera */
          }
        }
        .range {
          font-size: 10px;
          padding: 0 15px;
          margin-top: 10px;
          height: 28px;
          overflow: hidden;
          span {
            font-family: PingFangSC;
            font-size: 10px;
            color: #666666;
          }
          span:nth-child(1) {
            float: left;
          }

          .conditionText {
            width: 154px;
            line-height: 14px;
            float: right;
            margin-right: 16px;
            height: 32px;
            display: -webkit-box !important;
            -webkit-line-clamp: 2 !important; //这里是在第二行有省略号
            overflow: hidden !important;
            -webkit-box-orient: vertical !important;
          }
        }
        .date {
          font-size: 10px;
          padding: 0 15px;
          margin-top: 10px;
          span:nth-child(1) {
            float: left;
          }
          .time {
            width: 226px !important;
            line-height: 14px;
            padding-left: 54px;
          }
        }
        .footer {
          padding: 0 15px;
          padding-top: 20px;
          border-top: dashed 1px #d0d0d0;
          margin-top: 20px;
          .input {
            width: 100%;
            height: 30px;
            border-radius: 3px;
            background-color: #fffffe;
            border: solid 1px #c3c9d0;
            padding-left: 12px;
            font-size: 15px;
          }
          .btn {
            width: 100%;
            height: 30px;
            line-height: 30px;
            border-radius: 4px;
            background-color: #2fa5fd;
            border: solid 1px #1991eb;
            color: #ffffff;
            margin-top: 20px;
          }
        }
      }
    }
  }
}
</style>
