<template>
  <section>
    <el-row>
      <div class="thisBody">
        <el-col :span="24">
          <div class="loginBox">
            <h3>环境护理协会会员管理系统</h3>
            <div class="phone">
              <el-input placeholder="请输入手机号"></el-input>
            </div>
            <div class="code">
              <el-input class="pull-left" placeholder="请输入验证码"></el-input>
              <el-button class="pull-right" type="primary">获取验证码</el-button>
              <div class="clearfix"></div>
            </div>
            <div class="getCode">
              <el-button type="primary">登录</el-button>
            </div>
          </div>
        </el-col>
      </div>
    </el-row>
  </section>
</template>

<script>
  export default {
    data() {
      return {
  
      }
    },
    mounted() {},
    methods: {}
  
  }
</script>

<style lang="scss" scoped>
  .thisBody {
    background: url(../../images/login@2x.png) no-repeat;
    background-size: 100% 100%;
    // background-attachment: fixed;
    padding: 130px 0;
    position: fixed;
    width: 100%;
    height: 100%;
  }
  
  .loginBox {
    width: 324px;
    height: 230px;
    padding: 48px;
    background-color: rgb(255, 255, 255);
    box-shadow: 0px 1px 9px 0 rgba(87, 111, 147, 0.58);
    margin: 0 auto;
    h3 {
      font-size: 24px;
      text-align: center;
      color: rgb(51, 51, 51);
      margin-bottom: 28px;
      // text-overflow: ellipsis;
      // white-space: nowrap;
      // overflow: hidden;
    }
    .phone {
      margin-bottom: 28px;
    }
    .code {
      margin-bottom: 28px;
      .el-input {
        width: 198px;
      }
      .el-button--primary {
        color: rgb(25, 145, 235);
        background-color: transparent;
        border-color: rgb(25, 145, 235);
        &:hover {
          color: rgb(255, 255, 255);
          background-color: rgb(25, 145, 235);
        }
      }
    }
    .getCode {
      .el-button--primary {
        width: 100%;
        font-size: 18px;
      }
    }
  }
</style>
