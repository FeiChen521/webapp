<template>
  <el-row class="con" style="height: 100%;padding-top:40px;">
    <!-- 头部组件 -->
    <v-header :user="user"></v-header>
    <!-- 左侧菜单组件 -->
    <v-menu></v-menu>
    <!-- 右侧内容 -->
    <section class="contentCon">
      <el-col :span="20" :offset="4" class="content-wrapper">
        <transition>
          <router-view></router-view>
        </transition>
      </el-col>
    </section>
  </el-row>
</template>

<script>
import header from "./components/header/header.vue";
import menu from "./components/menu/menu.vue";
const ERR_OK = "000";
export default {
  data() {
    return {
      user: {}
    };
  },
  created() {
    this.$http.get("/api/user").then(response => {
      console.log(response);
      response = response.data;
      if (response.code === ERR_OK) {
        this.user = response.datas;
      }
    });
  },
  beforeCreate() {
    if (this.$route.path === "/") {
      this.$router.push({
        // 指定初始页面
        path: "/basicInformation"
      });
    }
  },
  components: {
    "v-header": header,
    "v-menu": menu
  }
};
</script>

<style lang="scss">
// @import "../static/css/common.scss";
// @import "../static/css/reset.scss";
@import "../static/css/dll.bundle.css";
@import "../static/css/global.scss";
</style>
