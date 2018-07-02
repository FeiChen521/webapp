<template>
  <section>
    <el-row>
      <el-col :span="24" class="conRight">
        <template>
            <!-- 会员信息 -->
            <div class="mods">
              <span class="information-title">会员信息</span>
              <ul class="informations">
                <li><span class="information-field">会员类型：</span><span class="information-valus">团体会员</span></li>
                <li><span class="information-field">会员积分：</span><span class="information-valus">1200</span></li>
                <li><span class="information-field">会员到期时间：</span><span class="information-valus">2019-10-01</span></li>
                <li><span class="information-field">会员编号：</span><span class="information-valus">SB123</span></li>
                <li class="btnMar">
                  <el-button type="primary" size="medium" @click="selectMemberType = true">我要升级</el-button>
                  <el-button type="primary" size="medium" @click="memberRenewals = true">我要续费</el-button>
                  <el-button type="warning" size="medium" @click="submitSuccess = true">提交成功弹出层</el-button>
                </li>
              </ul>
            </div>
                
            <!-- 升级续费记录 -->
            <div class="mods">
              <span class="information-title">升级续费记录</span>
              <el-table :data="tableData" border class="hyxx">
                <el-table-column prop="renewalType" label="续费类型" width="180"></el-table-column>
                <el-table-column prop="createTime" label="创建时间" width="180"></el-table-column>
                <el-table-column prop="endTime" label="会员到期时间" width="180"></el-table-column>
                <el-table-column prop="status" label="状态" width="80"></el-table-column>
                <el-table-column label="操作" width="80">
                  <template slot-scope="scope">
                    <el-button type="text" size="medium">付款</el-button>
                  </template>
                </el-table-column>
              </el-table>
            </div>


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
              <p>续费金额：<span style="color:#f7981c;font-size: 20px;">1000</span> 元／年</p>
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
        selectMemberType: false,
        memberRenewals: false,
        submitSuccess: false,
        radio: '1',
        tableData: [{
          renewalType: '会员升级：“团体会员” 升至“理事”',
          createTime: '2017-09-28 19:00',
          endTime: '2017-09-28 19:00',
          status: '缴费成功'
        }, {
          renewalType: '会员升级：“团体会员” 升至“理事”',
          createTime: '2017-09-28 19:00',
          endTime: '2017-09-28 19:00',
          status: '审核中'
        }, {
          renewalType: '会员升级：“团体会员” 升至“理事”',
          createTime: '2017-09-28 19:00',
          endTime: '2017-09-28 19:00',
          status: '升级成功'
        }, {
          renewalType: '会员升级：“团体会员” 升至“理事”',
          createTime: '2017-09-28 19:00',
          endTime: '2017-09-28 19:00',
          status: '审核成功'
        }]
      }
    },
    methods: {
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
        &.btnMar{
          margin-top: 10px;
        }
      } 
    }
    &:nth-child(2){
        margin-bottom: 0;
    } 
  }
  
  .submitSuccess .el-dialog{
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
