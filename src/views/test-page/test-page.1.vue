<template>
  <section>
    <!-- 全局组件使用 -->
    <v-header :user="user"></v-header>
    <v-menu></v-menu>
    <el-row>
      <el-col :span="24" class="box">
        <!-- 局部组件使用 -->
        <my-compoent></my-compoent>
      </el-col>
    </el-row>
  </section>
</template>

<script>
  // 引入全局组件
  import Header from '../../components/header/header'
  import Menu from '../../components/menu/menu.vue'
  
  import Vue from "vue"
  // 创建一个局部组件构造器
  var myComponent = Vue.extend({
    template: '<div>局部组件测试，我是局部组件的内容文字，上面的头部导航和左侧菜单是全局组件</div>'
  })
  // 注册组件 并指定组件的标签 局部组件的html标签为 my-compoent
  Vue.component('my-compoent', myComponent)
  
  export default {
    data() {
      return {
        user: {}
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
  }
</style>