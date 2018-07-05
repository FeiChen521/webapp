<template>
  <section>
    <!-- 全局组件使用 -->
    <v-header :user="user"></v-header>
    <v-menu></v-menu>
    <el-row>
      <el-col :span="24" class="box">
        <div class="test">
          <div class="test-aaa">
            <el-switch v-model="value1" on-text="开" off-text="关">
        </el-switch>
          </div>
        </div>
      </el-col>
    </el-row>
  </section>
</template>

<script>
  // 引入全局组件
  import Header from '../../components/header/header'
  import Menu from '../../components/menu/menu.vue'
  
  export default {
    data() {
      return {
        user: {},
        value1: true
      }
    }, // 全局组件注册
    components: {
      'v-header': Header,
      'v-menu': Menu
    }
  }
</script>

<style lang="scss" scoped>
  section {
    padding: 0;
    .test {
      border: 1px solid rgb(221, 221, 221);
      border-radius: 3px;
      padding: 10px;
      &-aaa {
        color: red;
        margin-bottom: 20px;
        font: {
          family: 'Microsoft YaHei';
          size: 14px;
          weight: 700;
        }
      }
      &:hover {
        border-color: rgb(46, 173, 247);
      }
      .error {
        border: 1px solid #f00;
        background-color: #f0f0f0;
        padding: 4px;
      }
      .seriousError {
        @extend .error;
        border-width: 3px;
      }
    }
  }
</style>