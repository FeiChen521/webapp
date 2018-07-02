<template>
  <section>
    <el-row>
      <div class="thisBody">
        <el-col :span="24">
          <div class="errbox">
            <h3 class="tipText">对不起，你访问的页面出错了！</h3>
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
    background-color: rgb(4, 168, 251);
    position: fixed;
    width: 100%;
    height: 100%;
    .errbox {
      position: relative;
      background: url(../../images/errorsBg.jpg) no-repeat;
      background-size: 100% 100%;
      width: 500px;
      height: 500px;
      margin: 10% auto 0;
      border-radius: 50%;
      background-color: rgb(71, 187, 249);
      .tipText {
        position: absolute;
        top: 195px;
        width: 300px;
        left: 50%;
        margin-left: -150px;
        font-size: 20px;
        color: rgb(255, 244, 175);
        text-align: center;
        // text-shadow: 0px 1px 3px rgb(0, 57, 86);
      }
    }
  }
</style>
