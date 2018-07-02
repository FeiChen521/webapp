<template>
    <div>
        <navTemplate></navTemplate>
        <div class="pcTemplate">
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
                filter-placeholder="请输入标签名称"
                v-on:change="handleChange">
              </el-transfer>
            </template>
            <span slot="footer" class="dialog-footer">
              <el-button type="primary" v-on:click="enterTagList">确 定</el-button>
              <el-button @click="dialogVisible = false">取 消</el-button>
            </span>
          </el-dialog>
          <div class="logo">
            <img src="./image/31huiyi.png" alt="">
            <span class="set" v-on:click="showSet">设置</span>
            <div class="left-set" v-bind:class="move?'move':'back'">
              <div class="setHeader">
                <span>设置</span>
                <span class="pull-right" v-on:click="showSet"><img src="./image/arrowsRight.png" alt=""></span>
              </div>
              <div class="banner">
                <span class="pull-left">Banner</span><span>尺寸：1920-360,拖动调整顺序</span>
              </div>
              <div class="uploadImg">
                <el-form ref="form" :model="form" label-width="80px">
                  <el-form-item class="upload">
                    <el-upload
                      class="upload-demo"
                      action="https://jsonplaceholder.typicode.com/posts/"
                      :on-preview="handlePreview"
                      :on-remove="handleRemove"
                      :on-success="handleAvatarSuccess"
                      list-type="picture">
                      <el-button size="small" class="add">+ 添加轮播图</el-button>
                    </el-upload>
                      <div class="pictureList" :key="img.name" v-for="(img, index) in fileList2" v-dragging="{ item: img, list: fileList2, group: 'fileList2' }">
                        <img :src="img.url" alt="">
                        <i class="el-icon-close" v-on:click="closeImg(index)"></i>
                      </div>
                  </el-form-item>
                  <el-form-item label="链接" class="link">
                    <el-input placeholder="" v-model="input3" class="urlInput">
                    </el-input>
                  </el-form-item> 
                  <div class="check">隐藏/显示设置</div> 
                  <div class="checkList">
                      <el-form-item prop="type">
                        <el-checkbox-group v-model="form.type" v-on:change="selectTagList">
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
                  </div>
                </el-form>
              </div>

              <div class="save">
                <el-button type="primary" class="saveBtn" @click="submitForm('form')">保存</el-button>
                <el-button class="recover" v-on:click="resetForm('form')">恢复默认</el-button>
              </div>

              </div>
          </div>  
          <div class="contentList">
                 <el-carousel trigger="click" height="150px">
                  <el-carousel-item v-for="item in 1" :key="item" style="height:100%;">
                    <img class="lunboImage" src="./image/lunbo.png" alt="" ref="lunboImage"/>
                  </el-carousel-item>
                </el-carousel>
            <div class="content">
            <div class="classily">
              <span class="ily">分类</span>
              <span>全部</span>
              <div class="number">
                <span>活动分类1</span>
              </div>
            </div>
            <div class="country">
              <span class="ily">国别</span>
              <span>全部</span>
              <div class="number">
                <span>国内  </span>
              </div>
            </div>
            <div class="city">
              <span class="ily">城市</span>
              <span>全部</span>
              <div class="number">
                <span>北京</span>
              </div>
            </div>
            </div>
          
          <div class="meetingList">
              <el-row :gutter="20">
                <el-col :span="8" v-for="item in 6">
                  <div class="grid-content bg-purple">
                    <div><img src="./image/huiyi.png" alt="">
                      <i v-bind:class="tips?'tips tips-orange':'tips'" v-show="status">未开始</i>
                    </div>
                    <div class="meeting" style="-webkit-box-orient: vertical;">全球前端技术大会</div>
                    <div class="con">
                        <div class="left-con pull-left">
                            <div class="line1" v-show="beginTime">
                                <i class="icon icon-date"></i>2015/12/28
                            </div>
                            <div class="line1" v-show="personNumber">
                                <i class="icon icon-user"></i>1234
                            </div>
                            <div class="line2" v-show="showDress">
                                <i class="icon icon-address"></i>上海市浦东新区向城路58号18H
                            </div>
                        </div>
                        <div class="right-con pull-right" v-show="money">
                            <span class="price"><i>¥</i>200</span>
                        </div>
                        <div class="clearfix"></div>
                    </div>
                  </div>
                  </el-col>
              </el-row>
          </div>
          

           <div class="block">
            <el-pagination class="pagina"
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="currentPage4"
              :page-sizes="[100, 200, 300, 400]"
              :page-size="100"
              layout="total, sizes, prev, pager, next, jumper"
              :total="400">
            </el-pagination>
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
      clientHeight: "",
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4,
      input3: "",
      tips: true,
      showTag: false,
      showCity: false,
      data: generateData(),
      select: ".comqweqwe",
      fileList2: [
        {
          name: "csd.png",
          url: "./img/csd.png"
        },
        {
          name: "dois.png",
          url: "./img/dois.png"
        },
        {
          name: "cmtc.png",
          url: "./img/cmtc.png"
        }
      ],
      value1: [1, 4],
      form: {
        type: ["开始时间", "报名人数", "地点", "价格", "活动状态", "过期活动"],
        search: [],
        resource: "",
        desc: ""
      },
      move: false,
      beginTime: true,
      showDress: true,
      personNumber: true,
      money: true,
      status: true,
      showDes: false,
      dialogVisible: false,
      filterMethod(query, item) {
        return item.pinyin.indexOf(query) > -1;
      }
    };
  },
  created() {},
  mounted() {
    window.onresize = () => {
      for (let i = 0; i < this.$refs.lunboImage.length; i++) {
        this.$refs.lunboImage[i].style.height = "auto";
      }
      document.getElementsByClassName(
        "el-carousel__item is-active"
      )[0].style.height =
        this.$refs.lunboImage[0].clientHeight + "px";
      document.getElementsByClassName("el-carousel")[0].style.height =
        this.$refs.lunboImage[0].clientHeight + "px";
      document.getElementsByClassName("el-carousel")[0].style.overflow =
        "hidden";
    };
  },
  methods: {
    enterTagList() {
      this.dialogVisible = false;
      console.log(this.value1);
    },
    handleChange(value, direction, movedKeys) {
      console.log(value, direction, movedKeys);
    },
    selectTagList() {
      if (this.form.type.indexOf("开始时间") < 0) {
        this.beginTime = false;
      } else {
        this.beginTime = true;
      }
      if (this.form.type.indexOf("报名人数") < 0) {
        this.personNumber = false;
      } else {
        this.personNumber = true;
      }
      if (this.form.type.indexOf("地点") < 0) {
        this.showDress = false;
      } else {
        this.showDress = true;
      }
      if (this.form.type.indexOf("价格") < 0) {
        this.money = false;
      } else {
        this.money = true;
      }
      if (this.form.type.indexOf("活动状态") < 0) {
        this.status = false;
      } else {
        this.status = true;
      }
    },
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
    handleAvatarSuccess(response, file, fileList) {},
    closeImg(i) {
      this.fileList2.splice(i, 1);
      console.log(this.fileList2);
    },
    submitForm(formName) {
      this.showSet();
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
      this.form.search = [];
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    onSubmit() {
      console.log("submit!");
    },
    showSet() {
      this.move = !this.move;
    }
  },
  components: {
    navTemplate
  }
};
</script>

<style lang="scss">
.pcTemplate {
  padding-top: 60px;
  overflow-x: hidden;
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
  .logo {
    position: relative;
    padding: 0 0 10px 18px;
    img {
      margin-top: 10px;
    }
    .set {
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
      position: fixed;
      z-index: 100;
      top: 121px;
      right: 0;
    }
    .left-set {
      width: 280px;
      min-height: 800px;
      background-color: #fafafa;
      box-shadow: 0px 5px 9px 0px rgba(3, 0, 0, 0.17);
      position: absolute;
      right: 0;
      top: 0;
      z-index: 100;
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
      .banner {
        width: 280px;
        min-height: 30px;
        line-height: 30px;
        background-color: #ededed;
        span:nth-child(1) {
          font-size: 13px;
          color: #2e323e;
          margin-right: 4px;
          padding-left: 16px;
        }
        span:nth-child(2) {
          font-size: 12px;
          color: #999999;
          width: 190px;
          display: inline-block;
        }
      }
      .uploadImg {
        height: 100%;
        padding-bottom: 200px;
        .el-form {
          .el-form-item {
            .el-form-item__content {
              margin-left: 0 !important;

              .add {
                font-size: 13px;
                height: 14px;
                line-height: 14px;
                color: #1991eb;
                cursor: pointer;
                border: none;
                padding: 0;
              }
            }
          }
          .upload {
            padding: 16px;
            padding-top: 0;
            border-bottom: 1px solid #e0e0e0;
            margin-bottom: 0;
            .el-upload {
              height: 14px;
              line-height: 14px;
              input[type="file"] {
                display: none;
              }
              .el-upload__tip {
                margin-top: -14px !important;
              }
            }
            .pictureList {
              position: relative;
              overflow: hidden;
              background-color: #fff;
              border: 1px solid #c0ccda;
              border-radius: 6px;
              box-sizing: border-box;
              margin-top: 10px;
              height: 76px;
              width: 245px;
              img {
                width: 100%;
                height: 100%;
                margin: 0;
              }
              .el-icon-close {
                position: absolute;
                top: 4px;
                right: 4px;
              }
            }
          }
          .link {
            box-sizing: border-box;
            margin-bottom: 15px;
            height: 48px;
            .el-form-item__label {
              box-sizing: border-box;
              padding: 0;
              width: 28px !important;
              font-size: 13px;
              color: #2e323e;
              margin: 22px 6px 5px 10px;
            }
            .el-input-group {
              width: 218px !important;
              padding-top: 10px;
              .el-select {
                width: 52px !important;
                margin-top: -18px;
                .el-input {
                  .el-input__icon {
                    left: 24px;
                  }
                }
              }
              .el-input-group__prepend {
                box-sizing: border-box;
                width: 50px !important;
                height: 25px;
                padding: 5px;
                color: #666666;
                font-size: 12px;
                background-color: #ededed;
                .el-select {
                  .el-input {
                    .el-input__inner {
                      width: 36px !important;
                    }
                  }
                }
              }

              .el-input__inner {
                box-sizing: border-box;
                width: 120px;
                padding: 2px;
              }
              .el-select {
                width: 47px;
                height: 25px;
              }
            }
            .el-form-item__content {
              .urlInput {
                width: 218px;
                padding-top: 10px;
                .el-input__inner {
                  height: 25px;
                }
                .el-input-group__append {
                  .el-input {
                    .el-input__inner {
                      height: 25px;
                    }
                  }
                }
              }
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
      .check {
        width: 280px;
        height: 30px;
        background-color: #ededed;
        padding: 9px 0 8px 15px;
        font-size: 13px;
      }
      .checkList {
        .el-checkbox__label {
          font-size: 12px;
          color: #000000;
        }
        .settingcity {
          margin-left: 20px;
        }
        .setting {
          font-family: MicrosoftYaHei;
          font-size: 12px;
          color: #1991eb;
          cursor: pointer;
        }
        .activeTime {
          margin-right: 8px;
        }
        .el-form-item {
          padding: 17px 15px 10px 15px;
          height: auto;
          margin: 0;
          border-top: 1px solid #ededed;
          .el-checkbox-group {
            .el-checkbox {
              .el-checkbox__label {
                overflow: hidden;
              }
            }
            .el-row {
              .el-col {
                padding-right: 0 !important;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
              }
            }
          }
        }
      }

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
    }
  }
  .contentList {
    width: 100%;
    font-family: MicrosoftYaHei;
    overflow-y: scroll;
    background-color: rgb(240, 240, 240);
    padding-top: 3px;
    img {
      width: 100%;
      height: 100%;
    }
    .el-carousel {
      .el-carousel__arrow--right,
      .el-carousel__arrow--left {
        display: none;
      }
      .el-carousel__container {
        min-height: 320px;
        max-width: 1920px;
      }
    }
    .el-carousel__item h3 {
      color: #475669;
      font-size: 14px;
      opacity: 0.75;
      line-height: 150px;
      margin: 0;
    }
    .content {
      margin: 0 auto;
      width: 1190px;
      .classily {
        font-size: 14px;
        color: #8c8c8c;
        min-height: 50px;
        line-height: 10px;
        border-bottom: 1px dashed #cccccc;
        span {
          height: 50px;
          line-height: 50px;
          float: left;
          margin-left: 50px;
        }
        .ily {
          margin-left: 0;
        }
        span:nth-child(2) {
          color: #1991eb;
        }
        .number {
          width: 1082px;
          display: inline-block;
          color: #333333;
          span {
            max-width: 1032px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
        }
      }
      .country {
        font-size: 14px;
        color: #8c8c8c;
        min-height: 45px;
        line-height: 10px;
        border-bottom: 1px dashed #cccccc;
        span {
          height: 45px;
          line-height: 45px;
          float: left;
          margin-left: 50px;
        }
        .ily {
          margin-left: 0;
        }
        span:nth-child(2) {
          color: #1991eb;
        }
        .number {
          width: 1082px;
          display: inline-block;
          color: #333333;
          span {
            max-width: 1032px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
        }
      }
      .city {
        font-size: 14px;
        color: #8c8c8c;
        min-height: 45px;
        line-height: 10px;
        border-bottom: 1px dashed #cccccc;
        span {
          height: 45px;
          line-height: 45px;
          float: left;
          margin-left: 50px;
        }
        .ily {
          margin-left: 0;
        }
        span:nth-child(2) {
          color: #1991eb;
        }
        .number {
          width: 1082px;
          display: inline-block;
          color: #333333;
          span {
            max-width: 1032px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
        }
      }
    }
    .meetingList {
      max-width: 1190px;
      margin: 0 auto;
      margin-top: 20px;
      margin-bottom: 42px;
      .el-row {
        margin-bottom: 20px;
        &:last-child {
          margin-bottom: 0;
        }
      }
      .grid-content {
        position: relative;
        max-height: 308px;
        width: 385px;
        padding: 10px;
        background: #ffffff;
        margin-bottom: 20px;
        .tips {
          padding: 2px 6px;
          color: #fff;
          font-size: 12px;
          position: absolute;
          top: 10px;
          right: 10px;
          font-style: normal;
          border-top-left-radius: 3px;
          border-bottom-left-radius: 3px;
          background-color: #3db8ff;
        }
        .tips-orange {
          background-color: #ff9900;
        }
        img {
          width: 365px;
          height: 206px;
        }
        .con {
          .left-con {
            width: 70%;
            color: #999999;
            font-size: 12px;
            .line1 {
              width: 50%;
              float: left;
              margin-bottom: 4px;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              .icon {
                background: url("./image/mt_icon.png") no-repeat 0 0;
                width: 13px;
                height: 14px;
                display: inline-block;
                margin-right: 6px;
                position: relative;
                background-size: 100%;
                top: 3px;
              }
              .icon-date {
                background-position: 0 0;
              }
              .icon-user {
                background-position: 0 -25px;
              }
            }
            .line2 {
              width: 100%;
              float: left;
              text-overflow: ellipsis;
              overflow: hidden;
              white-space: nowrap;
              .icon {
                background: url("./image/mt_icon.png") no-repeat 0 0;
                width: 13px;
                height: 14px;
                display: inline-block;
                margin-right: 6px;
                position: relative;
                background-size: 100%;
                top: 3px;
              }
              .icon-address {
                background-position: 0 -50px;
                height: 15px;
              }
            }
          }
          .right-con {
            width: 29%;
            text-align: center;
            min-height: 38px;
            line-height: 38px;
            border-left: 1px solid #e4e4e4;
            .price {
              color: #ff6600;
              font-size: 15px;
              i {
                font-style: normal;
              }
            }
          }
        }
        .meeting {
          margin-top: 8px;
          color: #333333;
          overflow: hidden;
          text-overflow: ellipsis;
          height: 30px;
          line-height: 15px;
          font-size: 14px;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          overflow: hidden;
        }
        span {
          &.meetingTime {
            float: left;
          }
          &.times {
            float: left;
            display: inline-block;
            width: 304px;
            line-height: 12px;
            height: 38px;
            overflow: hidden;
          }
          font-size: 12px;
          color: #999999;
        }
      }
      .row-bg {
        padding: 10px 0;
        background-color: #0e1420;
      }
    }
    .block {
      text-align: center;
      padding-bottom: 208px;
      .pagina {
        display: inline-block;
      }
    }
  }
}
.el-select-dropdown {
  width: 53px !important;
  left: 1354px;
  .el-scrollbar__view {
    padding: 0;
    .el-select-dropdown__item {
      padding: 0;
      font-size: 12px;
      color: #666666;
      text-align: center;
      line-height: 36px;
      &.selected.hover {
        background-color: none;
      }
    }
  }
}
</style>
