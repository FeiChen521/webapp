<template>
  <section>
    <!-- 全局组件使用 -->
    <v-header :user="user"></v-header>
    <v-menu></v-menu>
    <el-row>
      <el-col :span="24" class="box">
        <div class="test">
          <div class="test-aaa">
            测试文字
          </div>
          <div class="error seriousError">错误提示文字</div>
          <div class="page-title">@mixin/@include</div>
          <div class="shadows">@mixin Arguments</div>
          <div>{{ message }}</div>
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
        message: " xuxiao is boy ",
      }
    }, // 全局组件注册
    components: {
      'v-header': Header,
      'v-menu': Menu
    },
    // beforeCreate: function() {
    //   console.group('beforeCreate 创建前状态===============》');
    //   console.log("%c%s", "color:red", "el     : " + this.$el); // undefined
    //   console.log("%c%s", "color:red", "data   : " + this.$data); // undefined
    //   console.log("%c%s", "color:red", "message: " + this.message)
    // },
    // created: function() {
    //   console.group('created 创建完毕状态===============》');
    //   console.log("%c%s", "color:red", "el     : " + this.$el); // undefined
    //   console.log("%c%s", "color:red", "data   : " + this.$data); // 已被初始化
    //   console.log("%c%s", "color:red", "message: " + this.message); // 已被初始化
    // },
    // beforeMount: function() {
    //   console.group('beforeMount 挂载前状态===============》');
    //   console.log("%c%s", "color:red", "el     : " + (this.$el)); // 已被初始化
    //   console.log(this.$el);
    //   console.log("%c%s", "color:red", "data   : " + this.$data); // 已被初始化
    //   console.log("%c%s", "color:red", "message: " + this.message); // 已被初始化
    // },
    // mounted: function() {
    //   console.group('mounted 挂载结束状态===============》');
    //   console.log("%c%s", "color:red", "el     : " + this.$el); // 已被初始化
    //   console.log(this.$el);
    //   console.log("%c%s", "color:red", "data   : " + this.$data); // 已被初始化
    //   console.log("%c%s", "color:red", "message: " + this.message); // 已被初始化
    // },
    // beforeUpdate: function() {
    //   console.group('beforeUpdate 更新前状态===============》');
    //   console.log("%c%s", "color:red", "el     : " + this.$el);
    //   console.log(this.$el);
    //   console.log("%c%s", "color:red", "data   : " + this.$data);
    //   console.log("%c%s", "color:red", "message: " + this.message);
    // },
    // updated: function() {
    //   console.group('updated 更新完成状态===============》');
    //   console.log("%c%s", "color:red", "el     : " + this.$el);
    //   console.log(this.$el);
    //   console.log("%c%s", "color:red", "data   : " + this.$data);
    //   console.log("%c%s", "color:red", "message: " + this.message);
    // },
    // beforeDestroy: function() {
    //   console.group('beforeDestroy 销毁前状态===============》');
    //   console.log("%c%s", "color:red", "el     : " + this.$el);
    //   console.log(this.$el);
    //   console.log("%c%s", "color:red", "data   : " + this.$data);
    //   console.log("%c%s", "color:red", "message: " + this.message);
    // },
    // destroyed: function() {
    //   console.group('destroyed 销毁完成状态===============》');
    //   console.log("%c%s", "color:red", "el     : " + this.$el);
    //   console.log(this.$el);
    //   console.log("%c%s", "color:red", "data   : " + this.$data);
    //   console.log("%c%s", "color:red", "message: " + this.message)
    // }
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
    /* 
          引用混合样式 为便于书写，
          @mixin 可以用 = 表示，
          而 @include 可以用 + 表示 
        */
    @mixin large-text {
      font: {
        family: Arial;
        size: 20px;
        weight: bold;
      }
      color: #ff0000;
    }
    .page-title {
      @include large-text;
      padding: 4px;
      margin-top: 10px;
    }
    // 参数变量 Variable Arguments
    @mixin box-shadow($shadows) {
      width: 100px;
      height: 50px;
      margin-top: 20px;
      border: 1px solid #ccc;
      -moz-box-shadow: $shadows;
      -webkit-box-shadow: $shadows;
      box-shadow: $shadows;
    }
    .shadows {
      @include box-shadow(1px 1px 5px #000);
    }
    // 动画
    @mixin keyframes($animationName) {
      @-webkit-keyframes #{$animationName} {
        @content;
      }
      @-moz-keyframes #{$animationName} {
        @content;
      }
      @-o-keyframes #{$animationName} {
        @content;
      }
      @keyframes #{$animationName} {
        @content;
      }
    }
    @include keyframes(move-the-object) {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(200px);
      }
    }
  }
</style>