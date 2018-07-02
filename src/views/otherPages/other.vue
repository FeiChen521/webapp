<template>
  <section>
    <el-row class="con">
      <el-col :span="3"><a href="http://localhost:8082/#/xufei" target="_blank" class="btn">续费提醒</a></el-col>
      <el-col :span="3"><a href="http://localhost:8082/#/login" target="_blank" class="btn">登录页面</a></el-col>
      <el-col :span="3"><a href="http://localhost:8082/#/chooseCompany" target="_blank" class="btn">选择公司</a></el-col>
      <el-col :span="3"><a href="http://localhost:8082/#/error-page" target="_blank" class="btn">错误页面</a></el-col>
      <el-col :span="3"><a href="http://localhost:8082/#/test-page" target="_blank" class="btn">测试页面</a></el-col>
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
  section {
    padding: 20px;
    background-color: #fff;
  }
</style>
