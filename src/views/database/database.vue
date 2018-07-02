<template>
  <section>
    <el-row class="con">
      <el-col :span="24">
        <el-col :span="3"><a href="http://localhost:8082/#/database/renew/renew" target="_blank" class="btn">续费管理</a></el-col>
      </el-col>
    </el-row>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        checked: 'true',
        input: '',
        radio: '1'
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
