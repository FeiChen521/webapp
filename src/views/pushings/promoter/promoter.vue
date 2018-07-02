<template>
  <div>
    <div class="promoters">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item>
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

        <el-form-item>
          <el-button @click="onSubmit">搜索</el-button>
        </el-form-item>
      </el-form>

      <div class="actions fr">
        <a @click="addPromoters">添加推广员</a>
        <a @click="importPromoters">批量导入</a>
        <a @click="userField">字段设置</a>
        <a @click="downloadAll" id="downloadAll" download="download.csv">导出所选</a>
        <a @click="exportList">导出搜索</a>
        <a @click="addPromoters">导出全部</a>
      </div>

       <!-- 弹窗 -->
       <!-- 添加推广员弹窗 -->
      <el-dialog
        title="推广员新增"
        :visible.sync="Promoter"
        size="tiny"
        >
        <el-form :model="promoters"  label-width="100px" class="demo-ruleForm addPromoter">
          <el-form-item label="姓名:" prop="name">
            <el-input type="text" v-model="promoters.name" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="手机:" prop="telephone">
            <el-input type="text" v-model="promoters.telephone" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="邮箱:" prop="email">
            <el-input v-model.number="promoters.email"></el-input>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
    <el-button type="primary" @click="Promoter = false" class="saveAdd">保存并继续添加</el-button>
    <el-button type="primary" @click="savePromoter" class="save">保存</el-button>

  </span>
      </el-dialog>

      <!-- 批量导入弹窗 -->
      <el-dialog
        title="批量导入推广员"
        :visible.sync="importPromoter"
        size="tiny"
        class="import"
        >
        <div class="importPromoter">
          <p><strong>提示：导入文件需满足三个条件：</strong></p>
          <p>1. 文件第一行必须为每列数据的名称，例如：姓名、手机；手机不可以重复。</p>
          <p>2. 文件为.csv或.xlsx或.xls格式。</p>
          <p>3. 文件不能大于20MB。</p>
        </div>

        <el-form :model="formPromoter" label-width="80px" class="uploadFile">
          上传文件:
          <a href="javascript:;" class="upload">上传Excel
            <input class="change" type="file" multiple="multiple" />
          </a>
          <div class="del">
            <span>重复处理：</span>
           <el-radio class="radio" v-model="radio" label="跳过">跳过</el-radio>
          <el-radio class="radio" v-model="radio" label="覆盖">覆盖</el-radio>
          </div>
        </el-form>
        <span slot="footer" class="dialog-footer">
    <el-button class="importField" type="primary" @click="importPromoter = false">导入</el-button>
    <el-button class="close" @click="savePromoter">关闭</el-button>

  </span>
      </el-dialog>

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
      

    <!-- 导出搜索list -->
     <el-dialog
        title="批量导入推广员信息"
        :visible.sync="serachList"
        size="tiny"
        >
        <div class="serachList">1.正在准备请稍候...</div>
        <span slot="footer" class="dialog-footer">
    <el-button class="close" @click="savePromoter">取消</el-button>

  </span>
      </el-dialog>
    </div>

    <!--Table表格-->
    <promoter-table :promoterData = "promoterData" :getSelectedPromoter = "getSelectedPromoter"></promoter-table>

<!--分页组件-->
    <el-pagination
      class="promoter-pagination pagin"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[10, 25, 50]"
      layout="total, sizes, prev, pager, next, jumper"
      :total="totals">
    </el-pagination>
  </div>
</template>

  <script>
import promoterTable from "./promoterTable";

export default {
  data() {
    return {
      formInline: {
        user: "",
        region: "全部"
      },
      promoters: { name: "", password: "", email: "" },
      totals: 10,
      formPromoter: { file: "" },
      Promoter: false, // 控制对话框
      importPromoter: false,
      setField: false,
      currentPage4: 1,
      radio: "跳过",
      selectedField: [], // 用户选择字段名
      sonSelectField: [],
      promoterData: [], // 用户表单字段
      serachList: false,
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
      checkedFields: [],
      options: [
        {
          value: "selectAll",
          label: "全部"
        },
        {
          value: "name",
          label: "客户姓名"
        },
        {
          value: "telephone",
          label: "客户手机"
        },
        {
          value: "agent",
          label: "推广员"
        }
      ]
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
    addPromoters() {
      // 添加推广员
      this.Promoter = true;
    },
    exportList() {
      this.serachList = true;
    },
    importPromoters() {
      // 批量导入
      this.importPromoter = true;
    },
    userField() {
      // 字段设置
      this.setField = true;
    },
    handleCheckedCitiesChange(value) {
      this.selectedField = this.checkedFields;
    },
    savePromoter() {
      console.log("save");
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
    resetFields() {
      this.selectedField = [];
      this.checkedFields = [];
    },
    // 下载数据
    downloadAll() {
      let obj = document.getElementById("downloadAll");
      let str = this.promoterData.join() + "\n";
      for (let i = 0; i < this.sonSelectField.length; i++) {
        let item = this.sonSelectField[i];
        for (let a in item) {
          str += item[a] + ",";
        }
        str = str + "\n";
      }
      console.log(str);
      str = encodeURIComponent(str);
      obj.href = "data:text/csv;charset=utf-8,\ufeff" + str;
      obj.download = "download.csv";
    },
    getSelectedPromoter(datas) {
      // 获取子组件数据
      this.sonSelectField = datas;
      console.log(this.sonSelectField);
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  },
  components: {
    promoterTable
  }
};
</script>

  <style lang="scss" scoped>
.promoters {
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid #e4e7e9;
  margin: 20px 0;
}

.promoters .el-form {
  padding-top: 9px;
}

.promoters .actions {
  text-align: center;
  line-height: 50px;
  height: 50px;
  float: right;
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

.promoters > .el-form-item__content,
.el-input__inner {
  width: 169px;
  height: 29px;
}

.promoters .el-form-item__content .el-button {
  width: 70px;
  height: 29px;
  padding: 5px 20px;
}
.promoters .el-dialog__bod {
  padding: 0;
}
.promoters .importPromoter {
  margin: 0 auto;
  width: 518px;
  height: 140px;
  background-color: #fcf8e3;
  padding: 10px 20px;
  margin: 30px 76px;
  strong,
  p {
    font-family: Arial, "Hiragino Sans GB", 微软雅黑, 黑体-简, Helvetica,
      sans-serif;
    font-size: 14px;
    color: #ffa646;
  }
}
.promoters .upload {
  display: inline-block;
  padding-right: 2px;
  height: 24px;
  line-height: 22px;
  text-align: center;
  width: 85px;
  position: relative;
  border: 1px solid #d2d2d2;
  text-decoration: none;
  color: #666;
  font-size: 12px;
}
.promoters .change {
  position: absolute;
  overflow: hidden;
  right: 0;
  top: 0;
  opacity: 0;
  width: 78px;
  font-size: 12px;
  padding: 0;
  color: #8f908a;
}
.promoters .import .el-dialog {
  width: 700px;
}
.promoters .del {
  margin-top: 20px;
}
.promoters .uploadFile {
  padding: 15px 100px;
}
.promoters .addPromoter .el-form-item .el-input__inner {
  width: 453px;
}
.promoters .el-dialog__footer .el-button {
  &.saveAdd {
    width: 144px;
    height: 26px;
    line-height: 2px;
    padding: 0px;
  }
  &.save {
    height: 26px;
    width: 84px;
    line-height: 26px;
    padding: 0px;
  }
}
.promoters .close {
  width: 84px;
  height: 26px;
  line-height: 26px;
  background: #ccc;
  text-align: center;
  border-color: #ccc;
  color: #fff;
  padding: 0;
}
.promoters .importField {
  width: 84px;
  height: 26px;
  line-height: 26px;
  color: #fff;
  background-color: #20a0ff;
  border-color: #20a0ff;
  padding: 0;
}
.promoters .row {
  font-family: Arial, "Hiragino Sans GB", 微软雅黑, 黑体-简, Helvetica,
    sans-serif;
  font-weight: 700;
  color: #475059;
  font-size: 12px;
}
.hr {
  margin: 15px 0;
  border-bottom: none;
  border-top: 1px solid #eee;
}
.promoters .setField .el-dialog__body {
  padding: 15px;
}
.promoters .setField .systemFields {
  width: 80px;
  margin: 15px 0 5px 0;
  padding-top: 8px;
}
.promoters .setField .saveFields {
  width: 100px;
  height: 29px;
  line-height: 29px;
  padding: 0;
  border: none;
  color: #fff;
}
.promoters .setField .cancelFields,
.promoters .setField .rsetFields {
  background: #ccc;
}
.promoters .setField .rsetFields:active {
  background: #20a0ff;
}
.promoters .serachList {
  margin: 0 30px;
  padding: 20px;
  color: #8f908a;
}
.promoters .rowField {
  padding: 10px 6px;
  .selectedField {
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
</style>
