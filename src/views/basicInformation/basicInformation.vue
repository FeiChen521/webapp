<template>
  <section>
    <el-row>
      <el-col :span="24" class="conRight">
        <template>
            <!-- 会员信息 -->
            <div class="mods">
              <span class="information-title">联系人信息</span>
              <ul class="informations">
                <li><span class="information-field">会员类型：</span><span class="information-valus">团体会员</span></li>
                <li><span class="information-field">会员积分：</span><span class="information-valus">1200</span></li>
                <li><span class="information-field">会员到期时间：</span><span class="information-valus">2019-10-01</span></li>
                <li><span class="information-field">会员编号：</span><span class="information-valus">SB123</span></li>
              </ul>
            </div>
                
            <!-- 联系人信息 -->
            <div class="mods">
              <span class="information-title">联系人信息</span>
                <el-table :data="tableData" border class="hyxx">
                  <el-table-column prop="name" label="姓名" width="180"></el-table-column>
                  <el-table-column prop="mobi" label="手机" width="180"></el-table-column>
                  <el-table-column label="操作" width="180">
                    <template slot-scope="scope">
                      <el-button type="text" size="medium">取消主联系人</el-button>
                      <el-button type="text" size="medium">删除</el-button>
                    </template>
                  </el-table-column>
                </el-table>
            </div>

          <!-- 基本信息 -->
          <div class="mods">
              <span class="information-title">基本信息</span>
              <ul class="informations">
                <li><span class="information-field">会员名称</span><span class="information-valus">金拱门</span></li>
                <li><span class="information-field">省份：</span><span class="information-valus">上海</span></li>
                <li><span class="information-field">城市：</span><span class="information-valus">上海</span></li>
                <li><span class="information-field">地址：</span><span class="information-valus">上海市浦东新区世纪大道666号</span></li>
                <li><span class="information-field">邮箱</span><span class="information-valus">jingongmeng@126.com</span></li>
              </ul>
          </div>

          <!-- 操作按钮 -->
          <div class="fixed-button">
            <el-button type="primary" size="medium" @click="addUser = true">修改信息</el-button>
            <el-button type="primary" size="medium" @click="addUser = true">添加联系人</el-button>
            <el-button type="primary" size="medium" @click="selectMemberType = true">会员升级</el-button>
            <el-button type="primary" size="medium" @click="memberRenewals = true">会员续费</el-button>
            <el-button type="warning" size="medium" @click="submitSuccess = true">提交成功弹出层</el-button>
          </div>

          <!-- 添加／修改联系人弹出层 -->
          <el-dialog class="addUser"
            title="添加联系人"
            :visible.sync="addUser">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="addUserruleForm">
              <el-form-item label="姓名" prop="username">
                <el-input v-model="ruleForm.username"></el-input>
              </el-form-item>
              <el-form-item label="手机" prop="mobiphone">
                <el-input v-model="ruleForm.mobiphone"></el-input>
              </el-form-item>
              <el-form-item label="邮箱" prop="email">
                <el-input v-model="ruleForm.email"></el-input>
              </el-form-item>
              <el-form-item label="公司" prop="company">
                <el-input v-model="ruleForm.company"></el-input>
              </el-form-item>
              <el-form-item label="职位" prop="job">
                <el-input v-model="ruleForm.job"></el-input>
              </el-form-item>
              <el-form-item label="省份" prop="province">
                <el-input v-model="ruleForm.province"></el-input>
              </el-form-item>
              <el-form-item label="城市" prop="city">
                <el-input v-model="ruleForm.city"></el-input>
              </el-form-item>
              <el-form-item label="分组" prop="groups">
                <el-select v-model="ruleForm.groups" placeholder="请选择分组">
                  <el-option label="分组一" value="分组一"></el-option>
                  <el-option label="分组二" value="分组二"></el-option>
                </el-select>
              </el-form-item>
            </el-form>
            
            <span slot="footer" class="dialog-footer">
              <el-button type="primary" @click="submitForm('ruleForm')">确 定</el-button>
              <el-button @click="addUser = false">取 消</el-button>
            </span>
          </el-dialog>

          <!-- 选择会员升级类型出层 -->
          <el-dialog class="selectMemberType"
            title="选择会员升级类型"
            :visible.sync="selectMemberType">
            <div class="text-left">
              <p><el-radio v-model="radio" label="1"><span class="spanName">团体会员</span><span class="spanMoney">1000元／年</span></el-radio></p>
              <p><el-radio v-model="radio" label="2"><span class="spanName">理事</span><span class="spanMoney">5000元／年</span></el-radio></p>
              <p><el-radio v-model="radio" label="3"><span class="spanName">副会长</span><span class="spanMoney">10000元／年</span></el-radio></p>
              <p style="color:#999999">提示：会员只可升级，不可降级</p>
            </div>
            <span slot="footer" class="dialog-footer">
              <el-button type="warning" @click="selectMemberType = false">立即申请</el-button>
            </span>
          </el-dialog>

          <!-- 会员续费出层 -->
          <el-dialog class="memberRenewals"
            title="会员续费"
            :visible.sync="memberRenewals">
            <div class="text-left">
              <p>当前会员类型：团体会员</p>
              <p>续费金额：<span style="color:#f7981c; font-size: 20px;">1000</span> 元／年</p>
              <p>续费成功后有效期至：2019-10-01</p>
            </div>
            <span slot="footer" class="dialog-footer">
              <el-button type="warning" @click="memberRenewals = false">立即申请</el-button>
            </span>
          </el-dialog>

          <!-- 提交成功弹出层 -->
          <el-dialog class="submitSuccess"
            title="提交成功"
            :visible.sync="submitSuccess">
            <div class="text-center">
              <p>您的申请 <span style="color:#00bc8f">提交成功</span>，</p>
              <p>稍后管理员会进行审核，</p>
              <p>审核结果会通过短信邮件发送给您。</p>
            </div>
            <span slot="footer" class="dialog-footer">
              <el-button type="primary" @click="submitSuccess = false">知道了</el-button>
            </span>
          </el-dialog>

        </template>
      </el-col>
    </el-row>
  </section>


</template>



<script>
  export default {
    data() {
      return {
        addUser: false,
        selectMemberType: false,
        memberRenewals: false,
        submitSuccess: false,
        tableData: [{
          name: '葫芦娃',
          mobi: '13800138000'
        }, {
          name: '葫芦娃',
          mobi: '13800138000'
        }, {
          name: '葫芦娃',
          mobi: '13800138000'
        }, {
          name: '葫芦娃',
          mobi: '13800138000'
        }],
        ruleForm: {
          name: '',
          region: ''
        },
        radio: '1',
        rules: {
          username: [{
            required: true,
            message: '请输入姓名',
            trigger: 'blur'
          }],
          mobiphone: [{
            required: true,
            message: '请输入手机号码',
            trigger: 'blur'
          }],
        }
      }
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
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style lang="scss">
  .mods {
    margin-bottom: 30px;
    .information-title {
      font-size: 14px;
      margin-bottom: 8px;
      display: block;
      font-weight: bold;
    }
    .informations {
      padding: 18px;
      font-size: 14px;
      border: 1px solid #dfe6ec;
      border-top: 2px solid #1991eb;
      line-height: 24px;
      li {
        height: 34px;
        line-height: 34px;
        .information-field {
          float: left;
          width: 160px;
        }
      }
    }
  }
  
  .addUser .el-dialog__body {
    padding: 30px 60px 20px 20px;
  }
  
  .addUser .el-select {
    width: 100%;
  }
  
  .addUser .el-form-item {
    margin-bottom: 22px;
  }
  
  .submitSuccess .el-dialog,
  {
    width: 360px;
    p {
      margin-bottom: 0;
    }
  }
  
  .selectMemberType .el-dialog {
    width: 420px;
    .el-dialog__body {
      padding: 30px 50px;
      .spanName {
        width: 100px;
        display: inline-block;
      }
    }
  }
  
  .memberRenewals .el-dialog {
    width: 420px;
    .el-dialog__body {
      padding: 30px 80px;
    }
  }
  
  .el-dialog p {
    line-height: 24px;
    margin-bottom: 10px;
    &:last-child {
      margin-bottom: 0;
    }
  }
</style>
