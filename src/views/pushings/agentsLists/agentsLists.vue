<template>
  <div class="agentLists">
    <el-form :inline="true" :model="formInline" class="demo-form-inline">

        <el-form-item label="">
            <el-select v-model="formInline.region" placeholder="请选择">
            <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
            </el-option>
            </el-select>
        </el-form-item>

            <el-form-item>
      <el-input v-model="formInline.user" placeholder="请输入您搜索的内容"></el-input>
    </el-form-item>

    <el-form-item label="状态：">
      <el-select v-model="formInline.grade" placeholder="全部">
        <el-option
          v-for="item in gradeOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value">
      </el-option>
      </el-select>
    </el-form-item>

    <el-form-item>
      <el-button class="search" type="primary" @click="onSubmit">搜索</el-button>
    </el-form-item>
    </el-form>

    <div class="actions fr">
        <a @click="userField">信息字段设置</a>
        <a @click="userField">字段设置</a>
        <a @click="userField">新增代理商</a>
        <a @click="userField" id="downloadAll" download="download.csv">打标签</a>
        <a @click="userField">更多操作</a>
      </div>




    <!-- 弹窗组件 -->
      <!-- 字段设置弹窗 -->
    <el-dialog
  title="自定义显示字段"
  :visible.sync="setField"
  size="tiny"
  class="setField"
  >
  <div class="row">
    已选择字段：
  </div>
  <div class="rowField">
    <span class="selectedField" :key=index v-for="(item,index) in selectedField">
      {{item}}
    </span>
  </div>
  <hr class="hr">
  <el-row class="systemField">
    <el-col :span="5" class="row">
    <span class="row">选择显示列：</span>
  </el-col>
  
  <el-col :span="19">
    <div>系统字段</div>
    <el-checkbox-group v-model="checkedFields" @change="handleCheckedCitiesChange">
      <el-tooltip class="item" effect="dark" 
      :key="field" placement="left" v-for="field in fields" :content = field>
    <el-checkbox class="systemFields" :label="field" >{{field}}</el-checkbox>
    </el-tooltip>
  </el-checkbox-group>
  <hr class="hr">
  <div>自定义字段</div>
    <el-checkbox-group v-model="checkedFields" @change="handleCheckedCitiesChange">
      <el-tooltip class="item" effect="dark" 
      :key="field" placement="left" v-for="field in fields" :content = field>
    <el-checkbox class="systemFields" :label="field" >{{field}}</el-checkbox>
    </el-tooltip>
  </el-checkbox-group>
  </el-col>
  </el-row>
  <span slot="footer" class="dialog-footer">
    <el-button @click="sendFields" class="saveFields" type="primary">保存</el-button>
    <el-button @click="resetFields" class="saveFields rsetFields">重置</el-button>
    <el-button @click="dialogVisible = false" class="saveFields cancelFields">取消</el-button>    
  </span>
</el-dialog>


  <!-- 新增代理商 -->

  </div>
</template>

<script>
import agentsListsTable from './agentsListsTable'
export default {
  data() {
    return {
      setField: false,
      checkedFields: [],
      selectedField: [], // 用户选择字段名
      promoterData: [], // 用户表单字段
      options: [
        {
          value: "all",
          label: "全部"
        },
        {
          value: "username",
          label: "姓名"
        },
        {
          value: "telephone",
          label: "手机"
        },
        {
          value: "label",
          label: "标签"
        }
      ],
      gradeOptions: [
        {
          value: "allgradeOptions",
          label: "全部"
        },
        {
          value: "freeze",
          label: "冻结"
        },
        {
          value: "normal",
          label: "正常"
        }
      ],
      fields: [
        "姓名",
        "手机",
        "职位",
        "邮箱",
        "地址",
        "固话",
        "微信",
        "QQ",
        "公司",
        "传真",
        "生日",
        "推广会员",
        "推广参会者人数",
        "推广会员金额",
        "推广活动金额",
        "推广会员提成",
        "推广活动提成",
        "微信昵称",
        "推广层级"
      ],
      formInline: {
        user: "",
        region: "",
        grade: ""
      }
    };
  },
  methods: {
    onSubmit() {
      console.log("搜索");
    },
    userField() {
      // 字段设置
      this.setField = true;
    },
    sendFields() {
      // 保存用户设置字段
      if (this.checkedFields.length === 0) {
        alert("至少选择一个");
        return;
      }
      this.promoterData = this.checkedFields;
      this.setField = false;
    },
    handleCheckedCitiesChange(value) {
      this.selectedField = this.checkedFields;
    },
    resetFields() {
      this.selectedField = [];
      this.checkedFields = [];
    }
  },
  components: {
    agentsListsTable
  }
};
</script>

<style lang="scss">
.agentLists {
  border-bottom: 1px solid #e4e7e9;
  margin: 20px 0;
}
.agentLists .search {
  width: 70px;
  height: 29px;
  line-height: 29px;
  padding: 0;
}
.agentLists .actions {
  text-align: center;
  line-height: 30px;
  height: 30px;
  float: right;
  position: absolute;
  top:42px;
  right:40px;
  a {
    width: 82px;
    height: 30px;
    padding: 5px 10px;
    border: 1px solid #bbc3c6;
    border-radius: 3px;
    margin-left: 5px;
    color: #3399cc;
    font-size: 12px;
    cursor: pointer;
  }
}
.agentLists .setField .el-dialog__body {
  padding: 15px;
}
.agentLists .setField .systemFields {
  width: 80px;
  margin: 15px 0 5px 0;
  padding-top: 8px;
}
.agentLists .setField .saveFields {
  width: 100px;
  height: 29px;
  line-height: 29px;
  padding: 0;
  border: none;
  color: #fff;
}
.agentLists .rowField{
  padding: 10px 6px;
  .selectedField{
    display: inline-block;
    background-color: #edf9ff;
    padding: 2px 8px;
    margin: 5px 10px 5px 0;
    border: 1px solid #86d9fd;
    border-radius: 3px;
    cursor: pointer;
    font-size: 12px;
  }
}
.agentLists .setField .saveFields {
  width: 100px;
  height: 29px;
  line-height: 29px;
  padding: 0;
  border: none;
  color: #fff;
}
.agentLists .setField .cancelFields,
.agentLists .setField .rsetFields {
  background: #ccc;
}
.promoters .setField .rsetFields:active {
  background: #20a0ff;
}
.fr {
  float: right;
}
</style>


