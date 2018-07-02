<template>
  <div>
    <menu>
      <el-col :span="24" class="main">
      <el-row>
        <el-menu :default-active="$route.path" class="mar-l el-menu-list el-col el-col-4" light router>
          <template v-for="(item,index) in $router.options.routes[0].children" v-if="!item.hidden">
            <el-menu-item :index="item.path"><a href="javascript:;"><i class="fa" :class="item.class"></i>{{item.name}}</a></el-menu-item>
          </template>
        </el-menu>
      </el-row>
    </el-col>
    </menu>
  </div>
</template>

<script>
  export default {
    props: {
      user: {}
    },
    data() {
      return {};
    }
  };
</script>

<style lang="scss">
  .el-menu {
    width: 200px;
    height: 100%;
    padding: 14px 0;
    background-color: #2e323e;
    position: fixed;
    float: left;
    overflow-y: auto;
    .el-menu-item {
      height: 40px;
      line-height: 40px;
      font-size: 14px;
      a{
        color: rgb(255, 255, 255);
      }
      i.fa {
          color: rgb(255, 255, 255);
          margin-right: 20px;
      }
    }
    .el-menu-item:hover {
      background-color: rgb(25, 145, 235);
    }
    .el-menu-item.is-active {
      color: rgb(255, 255, 255);
      background-color: rgb(25, 145, 235);
    }
  }
</style>
