<template>
  <section>
    <el-row>
      <div class="thisBody">
        <el-col :span="24">
          <div class="loginBox">
            <h3>请选择您要登录的公司</h3>
            <h5>您的账号属于多个公司</h5>
            <div class="companys">
              <el-button type="primary">31会议</el-button>
            </div>
            <div class="companys">
              <el-button type="primary" class="active">上海八彦图信息科技有限公司</el-button>
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
      return {}
    },
    methods: {},
    updated() {
      this.thisBody.height(this.windows.height);
    }
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
      margin-bottom: 8px;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
    h5 {
      color: rgb(153, 153, 153);
      text-align: center;
      margin-bottom: 30px;
    }
    .companys {
      margin-bottom: 28px;
      .el-button--primary {
        width: 100%;
        height: 50px;
        // border-radius: 0;
        color: rgb(25, 145, 235);
        background-color: transparent;
        border-color: rgb(25, 145, 235);
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        &:hover,
        &.active {
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
