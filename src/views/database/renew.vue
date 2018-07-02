<template>
  <section>
    <!-- 全局组件使用 -->
    <v-header :user="user"></v-header>
    <v-menu></v-menu>
  
    <el-row class="con">
      <el-col :span="24" class="box">
        <form action="">
          <!-- 设置续费条件 -->
          <el-card>
            <div slot="header" class="clearfix">
              <span>设置续费条件</span>
            </div>
            <div class="renew-type">
              <div class="bg-warning">
                <i class="fa fa-info-circle"></i>
                <ul class="tipsType">
                  <li>这里的设置是维护用户在手机及PC端续费时选择的续费周期及价格</li>
                  <li>续费周期默认一年</li>
                  <li>只有入会条件是缴纳时，才能设置续费规则</li>
                </ul>
                <div class="clearfix"></div>
              </div>
              <el-row class="checkType">
                <el-col :span="24">
                  <h6>VIP1</h6>
                </el-col>
                <el-col :span="24" class="checkboxText">
                  <el-checkbox v-model="checked"></el-checkbox>有效期内续费12个月会员，价格
                  <el-input size="small"></el-input>元
                </el-col>
                <el-col :span="24" class="checkboxText">
                  <el-checkbox v-model="checked">有效期内续费12个月会员，价格
                    <el-input size="small"></el-input>元</el-checkbox>
                </el-col>
                <el-col :span="24" class="checkboxText">
                  <el-checkbox v-model="checked">有效期内续费12个月会员，价格
                    <el-input size="small"></el-input>元</el-checkbox>
                </el-col>
              </el-row>
            </div>
          </el-card>
  
          <!-- 设置续费页面 -->
          <el-card>
            <div slot="header" class="clearfix">
              <span>设置续费页面</span>
            </div>
            <div class="renew-page">
              <el-form label-width="80px">
                <el-form-item label="标题">
                  <el-input placeholder="请输入标题名称" class="title"></el-input>
                </el-form-item>
                <el-form-item label="描述">
                  <img src="https://file.31huiyi.com/Uploads/Files/2018/03/19/6365707835576005171993.png" title="edit.png" alt="edit.png" width="800" />
                </el-form-item>
              </el-form>
            </div>
          </el-card>
  
          <!-- 设置续费成功页面 -->
          <el-card>
            <div slot="header" class="clearfix">
              <span>设置续费成功页面</span>
            </div>
            <div class="renew-page">
              <el-form label-width="80px">
                <el-form-item label="选择类型">
                  <el-radio v-model="radio" label="1">自定义网页</el-radio>
                  <el-radio v-model="radio" label="2">跳转到自定义链接</el-radio>
                  <el-radio v-model="radio" label="3">个人中心</el-radio>
                </el-form-item>
                <el-form-item label="描述">
                  <img src="https://file.31huiyi.com/Uploads/Files/2018/03/19/6365707835576005171993.png" title="edit.png" alt="edit.png" width="800" />
                </el-form-item>
              </el-form>
            </div>
          </el-card>
  
          <el-row class="saveLayer">
            <el-col :span="24">
              <el-button type="primary">保存</el-button>
              <el-button>预览</el-button>
            </el-col>
          </el-row>
  
          <el-row class="saveLayer renewLink">
            <el-col :span="10">
              <p>续费链接：</p>
              <el-input value="https://www.31meijia.com">
                <template slot="append">复制链接
</template>
              </el-input>
            </el-col>
            <el-col :span="24"><img src="https://file.31huiyi.com/Uploads/Files/2018/03/19/6365707852728978358395.png" class="renewImg"/></el-col>
          </el-row>
        </form>
      </el-col>
    </el-row>
  </section>
</template>

<script>
  // 引入全局组件
  import Header from '../../components/header/header'
  import Menu from '../../components/menu/menu.vue'
  
  export default {
    data() {
      return {
        user: {},
        checked: '',
        input: '',
        radio: '1'
      }
    }, // 全局组件注册
    components: {
      'v-header': Header,
      'v-menu': Menu
    }
  
  }
</script>

<style lang="scss" scoped>
  section {
    padding: 0;
    .box {
      padding: 20px;
      .el-card {
        box-shadow: none;
        border: none;
        margin-bottom: 20px;
        .el-form-item {
          &:last-child {
            margin-bottom: 0;
          }
        }
        .renew-type {
          .bg-warning {
            padding: 15px;
            color: #ffa646;
            background-color: #fcf8e3;
            font-size: 12px;
            .fa-info-circle {
              font-size: 36px;
              vertical-align: middle;
              color: #ffa646;
              float: left;
            }
            ul.tipsType {
              float: left;
              margin-left: 30px;
              line-height: 18px;
              li {
                list-style: decimal;
              }
            }
          }
          .checkType {
            padding: 20px 58px 0;
            h6 {
              margin-bottom: 10px;
            }
            .checkboxText {
              font-size: 14px;
              .el-checkbox {
                margin:0 5px 10px 0;
              }
              .el-input--small {
                font-size: 13px;
                width: 100px;
                margin: 0 4px;
              }
              .el-checkbox+.el-checkbox {
                margin-left: 0;
              }
            }
          }
        }
        .renew-page {
          margin-top: 20px;
          .el-input.title {
            width: 460px;
          }
          .edui-default .edui-editor {
            width: 800px;
          }
        }
      }
      .saveLayer {
        padding: 30px 0 0 100px;
        border-top: 1px solid #d1dbe5;
        .el-button {
          padding: 10px 30px;
        }
      }
      .renewLink {
        border: none;
        .el-col {
          margin-bottom: 10px;
          .el-input-group {
            cursor: pointer !important;
          }
          p {
            margin-bottom: 10px;
          }
        }
      }
      .renewImg {
        width: 150px;
        height: 150px;
        padding: 3px;
        border: 1px solid #d1dbe5;
        border-radius: 3px;
      }
    }
  }
</style>
