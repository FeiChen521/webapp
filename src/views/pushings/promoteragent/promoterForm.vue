<template>
    <div class="promoterForm">
      <el-form :inline="true" :model="form" class="demo-form-inline">
        <el-form-item :label="message.radio">
            <el-input v-model="form.user" :placeholder="message.title"></el-input>
            <span class="fa fa-search"></span>
        </el-form-item>
        <div class="promoterForm-radio" v-for="(item,index) in radios">
          <div class="radio">
            <el-radio v-model="form.region" :label="item.lable"></el-radio>
          </div>
        </div>
      </el-form>
    </div>
</template>
<script>
  export default {
    props: {
      message: Object,
      radios: Array
    },
    data() {
      return {
        form: {
          user: '',
          region: '',
          resource: ''
        }
      }
    }
  }
</script>
<style lang="scss">
  .promoterForm{
    margin-top: 50px;
    .el-form-item{
      width: 646px;
      height: 24px;
      margin: 0;
      padding: 10px 15px;
      background-color: transparent;
      border-bottom: 1px solid #ddd;
      .el-input__inner{
        height: 24px;
        width: 201px;
        padding: 6px 12px;
      }
      .el-form-item__label{
        line-height: 0;
      }
      .el-form-item__content{
        line-height: 0;
        float: right;
      }
    }
    .fa-search{
      position: absolute;
      top: 3px;
      right: 12px;
      width: 14px;
      height: 13px;
      padding-top: 2px;
    }
    .demo-form-inline{
      width: 676px;
      height: 484px;
      margin-bottom: 20px;
      border: 1px solid #ddd;
      -webkit-border-radius: 4px;
      -moz-border-radius: 4px;
      border-radius: 4px;
      background-color:#fff;
      box-shadow: 0 1px 1px rgba(0,0,0,.05);
    }

    .promoterForm-radio{
      width: 658px;
      height: 21px;
      padding: 9px;
      border-top: 1px solid #ddd;
      .radio{
        width: 100%;
        height: 20px;
        .el-radio{
          width: 100%;
          .el-radio__label{
            padding-left: 72px;
          }
        }
      }
      .contents{

      }
    }
  }
</style>
