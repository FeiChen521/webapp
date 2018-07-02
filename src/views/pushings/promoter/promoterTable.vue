<template>
  <div class="clientTable">
    <template>
      <el-table
        ref="multipleTable"
        :data="tableData3"
        border
        tooltip-effect="dark"
        style="width: 100%"
        height="638"
        @selection-change="handleSelectionChange">
        <el-table-column
          type="selection"
          width="55">
        </el-table-column>

        <el-table-column
          :prop="list[index]"
          :label="item"
          width="150" :key="item" v-for= "(item, index) in promoterData">
        </el-table-column>
        
           <!-- <el-table-column
          prop="telephone"
          label="手机"
          width="120">
        </el-table-column>
        <el-table-column
          prop="email"
          label="邮箱"
          width="120">
        </el-table-column>
        <el-table-column
          prop="company"
          label="公司"
          width="120">
        </el-table-column>
        <el-table-column
          prop="position"
          label="职位"
          width="120">
        </el-table-column>
        <el-table-column
          prop="generalize"
          label="所属推广员/代理商"
          width="150">
        </el-table-column>  -->
        <el-table-column
          label="操作"
          show-overflow-tooltip>
          <template scope="scope">
            <a>编辑</a>
            <a>删除</a>
            <div><a>绑定参数二维码</a></div>
            <div><a>复制会员推广链接</a></div>
            </template>
        </el-table-column>
      </el-table>
    </template>
  </div>
</template>
<script>
export default {
  props: {
    promoterData: Array,
    getSelectedPromoter: {
      require: true
    }
  },
  data() {
    return {
      list: [
        "name",
        "telephone",
        "email",
        "company",
        "generalize",
        "operation"
      ],
      tableData3: [
        {
          name: "王小虎1",
          telephone: "421",
          email: "wss123123",
          company: "31会议",
          generalize: "范冰冰",
          operation: ["编辑", "删除"]
        },
        {
          name: "王小虎2",
          telephone: "567",
          email: "wss123123",
          company: "31会议",
          generalize: "范冰冰",
          operation: ["编辑", "删除"]
        },
        {
          name: "王小虎3",
          telephone: "123123123",
          email: "wss123123",
          company: "31会议",
          generalize: "范冰冰",
          operation: ["编辑", "删除"]
        },
        {
          name: "王小虎",
          telephone: "123123123",
          email: "wss123123",
          company: "31会议",
          generalize: "范冰冰",
          operation: ["编辑", "删除"]
        },
        {
          name: "王小虎",
          telephone: "123123123",
          email: "wss123123",
          company: "31会议",
          generalize: "范冰冰",
          operation: ["编辑", "删除"]
        },
        {
          name: "王小虎",
          telephone: "123123123",
          email: "wss123123",
          company: "31会议",
          generalize: "范冰冰",
          operation: ["编辑", "删除"]
        },
        {
          name: "王小虎",
          telephone: "123123123",
          email: "wss123123",
          company: "31会议",
          generalize: "范冰冰",
          operation: ["编辑", "删除"]
        },
        {
          name: "王小虎",
          telephone: "123123123",
          email: "wss123123",
          company: "31会议",
          generalize: "范冰冰",
          operation: ["编辑", "删除"]
        },
        {
          name: "王小虎",
          telephone: "123123123",
          email: "wss123123",
          company: "31会议",
          generalize: "范冰冰",
          operation: ["编辑", "删除"]
        },
        {
          name: "王小虎",
          telephone: "123123123",
          email: "wss123123",
          company: "31会议",
          generalize: "范冰冰",
          operation: ["编辑", "删除"]
        }
      ],
      multipleSelection: []
    };
  },
  methods: {
    handleSelectionChange(val) {
      this.multipleSelection = val;
      this.getSelectedPromoter(this.multipleSelection);
      console.log(this.promoterData);
    }
  }
};
</script>
<style lang="scss">

</style>
