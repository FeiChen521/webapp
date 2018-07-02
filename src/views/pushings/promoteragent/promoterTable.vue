<template>
  <div class="promoterTable">
    <!--活动展示table-->
    <el-table v-show="formInline === 'activity'"
              :data="tableData" style="width: 100%">
      <el-table-column
        prop="name"
        label="活动名称"
        width="180">
      </el-table-column>
      <el-table-column
        prop="series"
        label="分销级数	"
        width="180">
      </el-table-column>
      <el-table-column
        prop="date"
        label="创建时间	">
      </el-table-column>
      <el-table-column
        prop="updateDate"
        label="更新时间">
      </el-table-column>
      <el-table-column
        prop="operation"
        label="操作">
        <template slot-scope="scope"><a class="promoter-table" @click="show"
                                        :key="index" v-for="(item,index) in activeOperation">{{item}}</a>
        </template>
      </el-table-column>
    </el-table>

    <el-table v-show="formInline === 'vip'"
              :data="tableData" style="width: 100%">
      <el-table-column
        prop="series"
        label="分销级数	"
        width="180">
      </el-table-column>
      <el-table-column
        prop="date"
        label="创建时间	">
      </el-table-column>
      <el-table-column
        prop="updateDate"
        label="更新时间">
      </el-table-column>
      <el-table-column
        prop="operation"
        label="操作">
        <template slot-scope="scope"><a class="promoter-table" @click="show"
                                        :key="index" v-for="(item,index) in vipOperation">{{item}}</a>
        </template>
      </el-table-column>
    </el-table>


    <el-table v-show="formInline === 'classify'"
              :data="tableData" style="width: 100%">
      <el-table-column
        prop="series"
        label="分销级数	"
        width="180">
      </el-table-column>
      <el-table-column
        prop="date"
        label="创建时间	">
      </el-table-column>
      <el-table-column
        prop="updateDate"
        label="更新时间">
      </el-table-column>
      <el-table-column
        prop="operation"
        label="操作">
        <template slot-scope="scope"><a class="promoter-table" @click="show"
                                        :key="index" v-for="(item,index) in classifyOperation">{{item}}</a>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog
    :title="titles"
    :visible.sync="dialogVisible"
    size="tiny"
    :before-close="handleClose">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="活动名称"  class="text-center">
          <el-input v-model="form.name" disabled></el-input>
        </el-form-item>

        <el-form-item label="分销级数"  class="text-center">
          <el-input v-model="form.distriLevel" disabled></el-input>
        </el-form-item>

        <el-form-item label="返佣类型" class="label">
          <el-radio-group v-model="form.resource" >
            <el-radio label="分销获得现金" :disabled="disabled"></el-radio>
            <el-radio label="分销获得积分" :disabled="disabled"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="活动形式" class="label">
          <el-input type="textarea" v-model="form.desc" disabled></el-input>
        </el-form-item>
        <el-form-item label="创建时间"  class="text-center">
          <el-input v-model="form.distriLevel" disabled></el-input>
        </el-form-item>
        <el-form-item label="更新时间"  class="text-center">
          <el-input v-model="form.distriLevel" disabled></el-input>
        </el-form-item>
      </el-form>
  </el-dialog>
  </div>
</template>
<script>
export default {
  props: {
    formInline: String,
    radio: ""
  },
  data() {
    return {
      form: {
        name: "",
        region: "",
        distriLevel: "",
        type: [],
        resource: "",
        desc: "asdasd",
        createDate: "",
        updateDate: ""
      },
      dialogVisible: false,
      disabled: false,
      titles: "分销规则详情",
      tableData: [
        {
          date: "2016-05-01",
          name: "王小虎",
          series: "1级",
          updateDate: "2016-05-01"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          series: "1级",
          updateDate: "2016-05-01"
        }
      ],
      activeOperation: ["关闭规则", "查看", "编辑", "查看业绩"],
      classifyOperation: ["关闭规则", "查看", "编辑", "查看业绩"],
      vipOperation: ["关闭规则", "查看", "编辑"]
    };
  },
  methods: {
    handleClose(done) {
      this.dialogVisible = false;
    },
    show(event) {
      let evt = window.event || event;
      let targetObj = evt.target || evt.srcElement;
      if (targetObj.text === "查看") {
        this.dialogVisible = true;
        this.disabled = true;
        if (this.radio === "vip" || this.radio === "classify") {
          this.titles = "查看分销规则";
        }
      } else if (targetObj.text === "编辑") {
        this.dialogVisible = true;
        this.disabled = false;
        if (this.radio === "vip" || this.radio === "classify") {
          this.titles = "查看分销规则";
        }
      }
    },
    onSubmit() {
      console.log("submit!");
    }
  },
  mounted() {
    this.$bus.$emit("total", this.tableData.length);
  },
  beforeUpdate() {
    console.log(this.radio);
  }
};
</script>
<style lang="scss">
.promoterTable {
  .promoter-table {
    color: #3399cc;
    padding: 5px 5px;
    font-size: 12px;
  }
  a:hover {
    text-decoration: underline;
    cursor: pointer;
  }
  .el-form {
    display: flex;
    flex-direction: column;
    .el-input.is-disabled .el-input__inner {
      color: #666;
      width: 479px;
      height: 29px;
    }
    .el-form-item {
      &.label {
        margin-left: 91px;
      }
      .el-form-item__content {
        margin: 0 !important;
      }
    }
  }
  .el-radio__input.is-disabled + span.el-radio__label {
    color: #666;
  }
  .el-textarea.is-disabled .el-textarea__inner {
    color: #666;
  }
  .promoterTable .el-form .el-input.is-disabled .el-input__inner {
    color: #666;
  }
}
</style>
