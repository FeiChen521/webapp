<template>
  <div class="pushing">
    <el-tabs v-model="activeName" @tab-click="tabClick">
      <el-tab-pane label="分销活动管理" name="first">
        <promoterwithdraw></promoterwithdraw>
      </el-tab-pane>
      <el-tab-pane label="客户列表" name="second">
        <client></client>
      </el-tab-pane>
      <el-tab-pane label="推广员列表" name="third">
        <promoter></promoter>
      </el-tab-pane>
      <el-tab-pane label="代理商列表" name="fourth">
        <agents-lists></agents-lists>
      </el-tab-pane>
      <el-tab-pane label="推广员审核" name="fifth">定时任务补偿</el-tab-pane>
      <el-tab-pane label="提现审核" name="sixth ">定时任务补偿</el-tab-pane>
    </el-tabs>
  </div>

</template>
<script>
import promoterwithdraw from "./promoteragent/promoteragent";
import client from "./client/client";
import promoter from "./promoter/promoter";
import agentsLists from "./agentsLists/agentsLists";
export default {
  data() {
    return {
      activeName: "first"
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    tabClick() {
      console.log("tab切换");
    }
  },
  components: {
    promoterwithdraw,
    client,
    promoter,
    agentsLists
  }
};
</script>
<style lang="scss">
.pushing {
  background: white;
  .contentCon {
    background: white;
  }
}
.el-tabs__content {
  padding: 20px;
}
.promoterTable {
  height: 604px;
  overflow: auto;
  border: 1px solid #ddd;
}
</style>
