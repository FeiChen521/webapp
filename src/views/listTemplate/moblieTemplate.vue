<template>
    <div class="mobiles">
      <el-dialog
        title="设置搜索标签"
        :visible.sync="dialogVisible"
        size="tiny"
        :before-close="handleClose">
        <template>
          <el-transfer 
            v-model="value1" 
            :data="data" 
            :titles="['全部标签', '已选标签']"
            filterable
            :filter-method="filterMethod"
            filter-placeholder="请输入标签名称">
          </el-transfer>
        </template>
        <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
          <el-button @click="dialogVisible = false">取 消</el-button>
        </span>
      </el-dialog>
        <navTemplate></navTemplate>
        <div class="moblieTemplate">
          <div class="tem-mob">
            <div class="mob-con" v-bind:class="move?'phoneMove':'phoneBack'">
               
              </div>
            </div>
            <span class="set" v-on:click="showSet">设置</span>
            <div class="left-set" v-bind:class="move?'move':'back'">
              <div class="setHeader">
                <span>设置</span>
                <span class="pull-right" v-on:click="showSet"><img src="./image/arrowsRight.png" alt=""></span>
              </div>

              <div class="choseTempalte">
                选择模版
              </div>

              <div class="imgContent">
                <img v-on:click="checkTemplate(1)" v-bind:class="imgTemplate?'':'active'" class="img" src="https://static.31meijia.com/img/scrm/event-list-mod1.jpg" alt="">
                <img v-on:click="checkTemplate(2)" v-bind:class="imgTemplate?'active':''" class="img" src="https://static.31meijia.com/img/scrm/event-list-mod2.jpg" alt="">
              </div>

              <div class="check">隐藏/显示设置</div> 

              <div class="checkList">
                <el-form ref="form" :model="form" label-width="80px">
                      <el-form-item prop="type">
                        <el-checkbox-group v-model="form.type">
                          <el-row :gutter="20">
                          <el-col :span="8">
                          <el-checkbox label="开始时间" name="type"></el-checkbox>
                          </el-col>
                          <el-col :span="8">
                          <el-checkbox label="报名人数" name="type"></el-checkbox>
                          </el-col>
                          <el-col :span="8">
                          <el-checkbox label="活动状态" name="type"></el-checkbox>
                          </el-col>
                          <el-col :span="8">
                          <el-checkbox label="价格" name="type"></el-checkbox>
                          </el-col>
                          <el-col :span="8">
                          <el-checkbox label="地点" name="type"></el-checkbox>
                          </el-col>
                          <el-col :span="8">
                          <el-checkbox label="过期活动" name="type"></el-checkbox>
                          </el-col>
                          </el-row>
                        </el-checkbox-group>
                      </el-form-item>
                      <el-form-item  prop="resource">
                        <el-checkbox-group v-model="form.search" v-on:change='selectTag'>
                              <el-checkbox label="搜索标签" ></el-checkbox> <span class="setting" v-on:click="dialogVisible = true" v-show="showTag">设置</span> 
                              <el-checkbox label="搜索城市" class="settingcity"></el-checkbox> <span class="setting" v-on:click="dialogVisible = true" v-show="showCity">设置</span> 
                        </el-checkbox-group>
                      </el-form-item>
                      <el-form-item prop="resource">
                          <el-checkbox class="activeTime" label="活动时间排列顺序" v-on:change="setDes" v-model="form.search"></el-checkbox>
                        <el-radio-group v-model="form.resource" v-show="showDes">
                          <el-radio label="升序" ></el-radio>
                          <el-radio label="降序" ></el-radio>
                        </el-radio-group>
                      </el-form-item>
                </el-form>
                  </div>
            
            <div class="save">
                <el-button type="primary" class="saveBtn" @click="submitForm('form')">保存</el-button>
                <el-button class="recover" @click="resetForm('form')">恢复默认</el-button>
              </div>
            </div>
        </div>
    </div>
</template>

<script>
import navTemplate from "./navTemplate";
export default {
  data() {
    const generateData = _ => {
      const data = [];
      const cities = ["上海", "北京", "广州", "深圳", "南京", "西安", "成都"];
      const pinyin = [
        "shanghai",
        "beijing",
        "guangzhou",
        "shenzhen",
        "nanjing",
        "xian",
        "chengdu"
      ];
      cities.forEach((city, index) => {
        data.push({
          label: city,
          key: index,
          pinyin: pinyin[index]
        });
      });
      return data;
    };
    return {
      form: {
        type: [],
        search: [],
        resource: "",
        desc: ""
      },
      showDes: false,
      showTag: false,
      showCity: false,
      data: generateData(),
      value1: [1, 4],
      title: "设置搜索标签",
      move: false,
      hidden: false,
      imgTemplate: false,
      dialogVisible: false,
      filterMethod(query, item) {
        return item.pinyin.indexOf(query) > -1;
      }
    };
  },
  created() {
    console.log(this.data);
  },
  methods: {
    setDes() {
      if (this.form.search.indexOf("活动时间排列顺序") >= 0) {
        this.showDes = true;
      } else {
        this.showDes = false;
      }
    },
    selectTag() {
      if (this.form.search.indexOf("搜索标签") >= 0) {
        this.showTag = true;
      } else {
        this.showTag = false;
      }
      if (this.form.search.indexOf("搜索城市") >= 0) {
        this.showCity = true;
      } else {
        this.showCity = false;
      }
    },
    handleClose(done) {
      done();
    },
    submitForm(formName) {
      this.showSet();
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    showSet() {
      this.move = !this.move;
    },
    checkTemplate(index) {
      this.imgTemplate = !this.imgTemplate;
    }
  },
  components: {
    navTemplate
  }
};
</script>

<style lang="scss">
.move {
  transform: translateX(0);
  transition-property: all;
  transition-duration: 1s;
}
.back {
  transform: translateX(100%);
  transition-property: all;
  transition-duration: 1s;
}
.phoneBack {
  transform: translateX(0%);
  transition-property: all;
  transition-duration: 1s;
}
.phoneMove {
  transform: translateX(-70%);
  transition-property: all;
  transition-duration: 1s;
}
.contentCon {
  height: 100%;
}
.content-wrapper {
  height: 100%;
}
.mobiles {
  height: 100%;
  background-color: #f0f0f0;
  overflow: hidden;
  .el-dialog--tiny {
    width: 570px;
    height: 464px;
    .el-dialog__header {
      padding: 20px;
      border-bottom: 1px solid #e5e5e5;
      .el-dialog__title {
        line-height: 1;
        font-size: 16px;
        font-weight: 700;
        color: #666;
        font-weight: 400;
      }
    }
    .el-dialog__body {
      padding: 30px 56px;
      color: #48576a;
      font-size: 14px;
      height: 344px;
    }
    .el-dialog__footer {
      background-color: #eef1f4;
      padding: 17px 20px;
      text-align: right;
      box-sizing: border-box;
      border-top: 1px solid #e5e5e5;
    }
  }
  .moblieTemplate {
    height: 100%;
    position: relative;
    overflow: scroll;
    .set {
      position: absolute;
      top: 61px;
      right: 0;
      display: inline-block;
      width: 70px;
      height: 45px;
      background-color: rgb(25, 145, 235);
      text-align: left;
      line-height: 45px;
      font-size: 14px;
      padding-left: 10px;
      color: #ffffff;
      background-image: url("./image/arrows.png");
      background-repeat: no-repeat;
      background-position: 42px 10px;
      cursor: pointer;
    }
    .tem-mob {
      margin: 0 auto;
      padding-top: 118px;
      .mob-con {
        width: 352px;
        height: 731px;
        margin: 0 auto;
        padding: 166px 26px 115px 26px;
        background-image: url("./image/text.png");
        background-repeat: no-repeat;
        background-position: 50% 0;
        background-size: 352px 731px;
        background-color: #f0f0f0;
        iframe {
          width: 100%;
          height: 100%;
        }
      }
    }
    .left-set {
      display: block;
      width: 280px;
      min-height: 800px;
      background-color: #fafafa;
      box-shadow: 0px 5px 9px 0px rgba(3, 0, 0, 0.17);
      position: absolute;
      right: 0;
      top: 60px;
      .setHeader {
        height: 44px;
        line-height: 44px;
        padding-left: 15px;
        font-size: 14px;
        color: #1991eb;
        span:nth-child(2) {
          img {
            margin-top: 13px;
            margin-right: 10px;
          }
        }
      }
      .choseTempalte {
        width: 280px;
        height: 30px;
        background-color: #ededed;
        padding: 8px 0 8px 15px;
        font-family: MicrosoftYaHei;
        font-size: 13px;
        color: #2e323e;
      }
      .imgContent {
        padding: 15px;
        .img {
          width: 122px;
          height: 190px;
        }
        .active {
          border: solid 2px #1991eb;
        }
      }
      .check {
        width: 280px;
        height: 30px;
        background-color: #ededed;
        padding: 9px 0 8px 15px;
        font-size: 13px;
      }
      .checkList {
        .el-form {
          .el-checkbox__label {
            font-size: 12px;
            color: #000000;
          }
          .setting {
            font-family: MicrosoftYaHei;
            font-size: 12px;
            color: #1991eb;
            cursor: pointer;
            margin-right: 20px;
          }
          .activeTime {
            margin-right: 8px;
          }
          .el-form-item {
            margin-left: 0 !important;
            padding: 17px 15px 10px 15px;
            height: auto;
            margin: 0;
            border-top: 1px solid #ededed;
            .el-form-item__content {
              margin-left: 0 !important;
            }
          }
        }
      }
      .save {
        position: absolute;
        bottom: 0;
        height: 55px;
        width: 100%;
        line-height: 55px;
        font-size: 12px;
        text-align: center;
        border-top: 1px solid #dddddd;
        .saveBtn {
          width: 85px;
          height: 35px;
          font-size: 12px;
          background-color: #1991eb;
          border-radius: 3px;
        }
        .recover {
          width: 85px;
          height: 35px;
          font-size: 12px;
          background-color: #ffffff;
          border-radius: 3px;
          border: solid 1px #dfdfdf;
        }
      }
    }
  }
}
</style>
