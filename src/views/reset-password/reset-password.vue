<template>
  <section>
    <el-row>
      <el-col :span="24" class="conRight">
        <template>
          <div class="mods">

            <el-form :model="pwdRuleForm" status-icon :rules="rules2" ref="pwdRuleForm" label-width="140px" class="pwdRuleForm">
              <el-form-item label="原始密码" prop="pwd">
                <el-input type="password" v-model="pwdRuleForm.pwd" auto-complete="off"></el-input>
              </el-form-item>
              <el-form-item label="新密码" prop="pass">
                <el-input type="password" v-model="pwdRuleForm.pass" auto-complete="off"></el-input>
              </el-form-item>
              <el-form-item label="再次输入新密码" prop="checkPass">
                <el-input type="password" v-model="pwdRuleForm.checkPass" auto-complete="off"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="submitForm('pwdRuleForm')">提交</el-button>
              </el-form-item>
            </el-form>

          </div>
        </template>
      </el-col>
    </el-row>
  </section>
</template>

<script>
  export default {
    data() {
      var validatePwd = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.pwdRuleForm.checkPass !== '') {
            this.$refs.pwdRuleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.pwdRuleForm.checkPass !== '') {
            this.$refs.pwdRuleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.pwdRuleForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        pwdRuleForm: {
          validatePwd: '',
          pwd: '',
          pass: ''
        },
        rules2: {
          pwd: [
            { required: true, validator: validatePwd, trigger: 'blur' }
          ],
          pass: [
            { required: true, validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { required: true, validator: validatePass2, trigger: 'blur' }
          ]
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
      }
    }
  }
</script>

<style lang="scss" scoped>
.mods {
  margin-bottom: 30px;
  .information-title {
    font-size: 14px;
    margin-bottom: 8px;
    display: block;
    font-weight: bold;
  }
}

.pwdRuleForm{
  width: 390px;
  .el-form-item{
    margin-bottom: 22px;
  }
}

</style>