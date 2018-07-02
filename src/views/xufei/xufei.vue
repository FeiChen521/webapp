<template>
  <div>
    <el-row :gutter="20" class="box">
      <el-col :span="3">
        <el-button type="primary" size="medium" @click="remindRenewals = true">续费提醒</el-button>
      </el-col>
      <el-col :span="3">
      </el-col>
      <el-col :span="3">
      </el-col>
      <el-col :span="3">
      </el-col>
      <el-col :span="3">
      </el-col>
      <el-col :span="3">
      </el-col>
      <el-col :span="3">
      </el-col>
      <el-col :span="3">
      </el-col>
    </el-row>
  
    <!-- 续费提醒弹出层 -->
    <el-dialog class="remindRenewals" title="续费提醒" :visible.sync="remindRenewals">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px" class="remindRenewals-ruleForm">
        <el-form-item label="提醒类型" prop="reminderTypeName" class="reminderTypeName">
          <span>会员续费提醒</span>
        </el-form-item>
        <el-form-item label="主题" prop="theme">
          <el-input v-model="ruleForm.theme" placeholder="请输入主题名称"></el-input>
        </el-form-item>
        <el-form-item label="发送条件" prop="transmissionCondition" class="transmissionCondition">
          <span>会员到期前</span>
          <el-input-number v-model="ruleForm.transmissionCondition" :min="1" :max="1000" label="描述文字"></el-input-number>
          <span>天发送提醒</span>
        </el-form-item>
        <el-form-item label="发送时间" prop="sendTime">
          <el-time-select v-model="ruleForm.sendTime" :picker-options="{ start: '08:30', step: '00:15', end: '18:30' }" placeholder="请选择发送时间">
          </el-time-select>
        </el-form-item>
        <el-form-item label="通知方式" prop="type" v-model="ruleForm.type">
          <el-checkbox-group v-model="ruleForm.type">
            <el-checkbox label="短信" name="type" v-on:change="toggleSMS"></el-checkbox>
            <el-checkbox label="邮件" name="type" v-on:change="toggleMail"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <div v-show="ruleForm.showTempSMS">
          <el-form-item label="短信内容" prop="conSMS">
            <el-input v-model="ruleForm.conSMS" type="textarea" :rows="3" placeholder="请输入短信内容"></el-input>
            <el-tag type="info">姓名</el-tag>
            <el-tag type="info">会员编号</el-tag>
          </el-form-item>
          <el-form-item label="可选择短信模版" prop="tempSMS">
            <el-tag type="info" closable>会员续费提醒</el-tag>
            <el-button type="primary" plain size="small">加入模版</el-button>
          </el-form-item>
          <hr class="hrStyle">
        </div>
        <div v-show="ruleForm.showTempMail">
          <el-form-item label="邮件标题" prop="titleMail">
            <el-input v-model="ruleForm.titleMail" placeholder="请输入邮件标题"></el-input>
          </el-form-item>
          <el-form-item label="邮件内容" prop="conMail">
            <el-input v-model="ruleForm.conMail" type="textarea" :rows="3" placeholder="刚子快把我换成编辑器"></el-input>
            <el-tag type="info">姓名</el-tag>
            <el-tag type="info">会员编号</el-tag>
          </el-form-item>
          <el-form-item label="可选择邮件模版" prop="tempMail">
            <el-tag type="info">会员续费提醒</el-tag>
            <el-button type="primary" plain size="small">加入模版</el-button>
          </el-form-item>
        </div>
      </el-form>
      <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="submitForm('ruleForm')">保 存</el-button>
          <el-button @click="remindRenewals = false">取 消</el-button>
        </span>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        remindRenewals: false,
        ruleForm: {
          reminderTypeName: '',
          theme: '',
          transmissionCondition: '',
          sendTime: '',
          type: [],
          conSMS: '',
          tempSMS: false,
          conMail: '',
          tempMail: false,
          titleMail: '',
          showTempSMS: false,
          showTempMail: false
        },
        rules: {
          reminderTypeName: [{
            required: true
          }],
          theme: [{
            required: true,
            message: '请输入主题名称',
            trigger: 'change'
          }],
          transmissionCondition: [{
            required: true,
            message: '请输入发送条件',
            trigger: 'change'
          }],
          sendTime: [{
            type: 'date',
            required: true,
            message: '请选择时间',
            trigger: 'change'
          }],
          type: [{
            required: true,
            message: '请选择通知方式',
            trigger: 'change'
          }],
          tempSMS: [{
            required: true,
            message: '请选择短信模版',
            trigger: 'change'
          }],
          tempMail: [{
            required: true,
            message: '请选择邮件模版',
            trigger: 'blur'
          }],
          conSMS: [{
            required: true,
            message: '请填写短信内容',
            trigger: 'blur'
          }],
          titleMail: [{
            required: true,
            message: '请填写邮件标题',
            trigger: 'blur'
          }],
          conMail: [{
            required: true,
            message: '请填写短信内容',
            trigger: 'blur'
          }]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      toggleSMS: function() {
        this.ruleForm.showTempSMS = !this.ruleForm.showTempSMS
      },
      toggleMail: function() {
        this.ruleForm.showTempMail = !this.ruleForm.showTempMail
      }
    }
  }
</script>

<style lang="scss" scoped>
  .box {
    background-color: #fff;
    padding: 30px 20px;
    margin: 0px !important;
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
  }
  
  .remindRenewals {
    .el-dialog__body {
      max-height: 468px;
      overflow-y: auto;
    }
    .reminderTypeName .el-form-item__error {
      display: none;
    }
    .el-form-item__label {
      text-align: left;
    }
    .el-date-editor.el-input,
    .el-date-editor.el-input__inner {
      width: 100%;
    }
    .el-input-number {
      margin: 0 10px;
    }
    .el-tag--info {
      cursor: pointer;
    }
    .hrStyle {
      margin-bottom: 26px;
      border: none;
      border-bottom: 1px #e5e5e5 dashed;
    }
  }
</style>
