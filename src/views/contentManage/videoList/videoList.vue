<template>
<div>
     <div v-if="!showVideo">
    <!-- 头部tab -->
    <div class="videoList" id="videoList">
      <div class="importText">
        <el-input
        style="padding:0px;"
        placeholder="请输入您搜索的内容"
        icon="search"
        class="userSearch"
        v-model="searchValue"
        :on-icon-click="handleIconClick">
      </el-input>
      </div>
    
      <div class="btn pull-right">
        <el-button :disabled="disabled">批量关联栏目</el-button>
        <el-button :disabled="disabled">批量添加分类</el-button>
        <el-button :disabled="disabled">批量删除</el-button>
        <el-button type="primary" v-on:click="showAddVideo">添加视频</el-button>
        <div class="clearfix"></div>
      </div>
    </div>

    <!-- 视频列表 -->
    <div class="listMessage">
        <el-checkbox class="checkbox" v-model="checked"></el-checkbox>
        <img src="../img/a.jpg" alt="会议图">
        <div class="container">
          <div class="operationLine pull-right">
          <el-switch
            v-model="switchVal"
            on-text=""
            off-text=""
            :width='35'>
          </el-switch>

        <span class="topLine" v-text="switchVal?'上线':'下线'"></span>
        </div>
          <div>
            <p>2018年第一季度营销活动</p>
            <p>创建时间：2017-11-12 18:00</p>
            <p><span>视频分类：培训类</span><span>观看次数：177</span></p>
            <ul class="operation">
              <li><a href="javascript:void(1);" v-on:click="showAddVideo">编辑</a></li>
              <li><a href="javascript:void(1);" v-on:click="showDelete">删除</a></li>
              <li><a href="javascript:void(1);" v-on:click="showWechat">复制链接</a></li>    
            </ul>
          </div>
        
         
        </div>
      </div>

  <div class="popups">
    <img src="../img/8.png" alt="图片">
    <div class="tips">这个星球没有任何东西~</div>
  </div>

   
   <!-- /************弹窗组件************/ -->
<!-- 复制链接 -->
  <el-dialog title="" :visible.sync="weChat" class="w600" :before-close="handleClose">
  <div class="weChat">
    <img class="imgs" src="../img/a.jpg" alt="">
    <span class="open">打开微信扫一扫</span> <span class="download">下载</span>
  </div>
  <span slot="footer" class="dialog-footer urlInput">
    <el-input
       placeholder=""
       v-model="copyUrl"
      :on-icon-click="handleIconClick">
    </el-input>
    <el-button class="copy">复制</el-button>
  </span>
</el-dialog>

<!-- 删除 -->
<el-dialog :visible.sync="deleteDatas" class="w400" :before-close="handleClose">
  <div class="h18 text-center">是否删除?</div>
  <span slot="footer" class="dialog-footer">
    <el-button class="foot-btn" style="width:85px;" type="danger" v-on:click="deleteData">删除</el-button>
    <el-button  class="foot-btn" v-on:click="deleteDatas = false">取消</el-button>
  </span>
</el-dialog>
</div>


<transition name="fade">
<addVideo v-if="showVideo" :backList="backList">
  
</addVideo>
</transition>
</div>

</template>

<script>
import addVideo from "./addVideo";
export default {
  data() {
    return {
      copyUrl: "", // 微信分享数据
      searchValue: "", // 搜索框数据
      checked: false, // 是否勾选
      switchVal: true, // 开关按钮
      weChat: false, // 控制二维码弹层
      deleteDatas: false,
      disabled: true,
      showVideo: false
    };
  },
  mounted() {},
  methods: {
    showWechat() {
      // 微信分享弹层
      this.weChat = true;
    },
    handleClose() {
      this.weChat = false;
      this.deleteDatas = false;
    },
    showDelete() {
      // 删除按钮弹层
      this.deleteDatas = true;
    },
    deleteData() {}, // 删除按钮
    handleIconClick() {},
    showAddVideo() {
      console.log(11);
      this.showVideo = true;
    },
    backList(boolean) {
      this.showVideo = boolean;
    }
  },
  components: {
    addVideo
  }
};
</script>

<style lang="scss">
.contentManage .videoList {
  display: flex;
  flex-direction: row;
}
.contentManage .w600 .el-dialog .el-dialog__header {
  border: none !important;
}
.contentManage .w600 .el-dialog .el-dialog__footer .el-input {
  width: 378px;
}
.contentVideo .w400 {
  .el-dialog__header {
    border: none;
  }
}
.contentManage .w600 .el-dialog .el-dialog__footer .el-input__inner {
  border-bottom-right-radius: 0px !important;
  border-top-right-radius: 0px !important;
}
.contentManage .w600 .el-dialog .el-dialog__footer .copy {
  margin-left: -5px;
  border-bottom-left-radius: 0px !important;
  border-top-left-radius: 0px !important;
}
.contentManage .videoList .importText {
  width: 220px;
  height: 67px;
  margin-right: 0px;
}
.contentManage .btn {
  padding-top: 17px;
  text-align: right;
  flex: 1;
  margin-right: 17px;
  button {
    width: 95px;
    height: 35px;
    line-height: 35px;
    text-align: center;
    padding: 0;
    font-size: 12px;
  }
}
.contentManage .userSearch {
  margin: 16px 0 0 16px;
}
.contentManage .listMessage {
  padding: 30px 0 30px 40px;
  border-top: 1px solid #dfe2e5;
  position: relative;
  .checkbox {
    position: absolute;
    top: 30px;
    left: 12px;
  }
  .container {
    display: inline-block;
    padding: 0;
    height: 110px;
    min-width: 80%;
    margin-left: 20px;
    & > div p:nth-child(1) {
      width: 300px;
      height: 18px;
      font-family: PingFangSC;
      font-size: 18px;
      font-weight: 700;
      text-align: left;
      color: #000000;
      margin-bottom: 19px;
    }
    & > div p:nth-child(2),
    & > div p:nth-child(3) {
      font-size: 13px;
      color: #333333;
      font-family: MicrosoftYaHei;
      margin-bottom: 14px;
    }
    & > div p:nth-child(3) {
      margin-bottom: 19px;
    }
    .operation {
      li {
        float: left;
        width: 41px;
        height: 14px;
        border-right: 1px solid #c2dce8;
        font-size: 13px;
        font-family: MicrosoftYaHei;
        text-align: left;
        margin-right: 14px;
        a {
          color: #1991eb;
        }
      }
      li:nth-child(3) {
        width: 54px;
        border-right: none;
      }
    }
  }
  img {
    width: 160px;
    height: 110px;
    vertical-align: top;
  }
}
.contentManage .operationLine {
  display: inline-block;
  position: absolute;
  right: 0px;
  top: 30px;
  .topLine {
    display: inline-block;
    width: 25px;
    height: 12px;
    font-family: MicrosoftYaHei;
    font-size: 12px;
    text-align: left;
    color: #000000;
    margin-right: 58px;
  }
}
.contentManage .videoList .copy {
  width: 439px;
  height: 35px;
}
.contentManage .videoList .inputText {
  width: 378px;
  height: 31px;
}
.contentManage .footer .el-button {
  width: 61px;
  height: 35px;
}
.contentManage .el-dialog__footer {
  padding: 20px 67px 23px 64px !important;
  background: #f0f0f0;
}
.contentManage .videoList .el-dialog__header {
  border-bottom: none;
}

.contentManage .weChat {
  text-align: center;
  .imgs {
    display: block;
    margin: 0 auto;
    margin-bottom: 17px;
    width: 160px;
    height: 160px;
  }
}
.contentManage .copyText {
  width: 378px;
  padding: 11px 16px 9px 22px;
}
.contentManage .open {
  margin-right: 30px;
  font-size: 13px;
}
.contentManage .download {
  font-family: MicrosoftYaHei;
  font-size: 13px;
  color: #1991eb;
  cursor: pointer;
}

.contentManage .w400 .el-dialog__footer {
  background-color: #ffffff;
  border: none;
}
.contentManage .h18 {
  font-family: MicrosoftYaHei;
  font-size: 18px;
  color: #333333;
  font-weight: 700;
}
.contentManage .foot-btn {
  width: 85px;
  height: 35px;
}
.contentManage .popups {
  margin: 0 auto;
  text-align: center;
  margin-top: 105px;
  width: 100%;
  .tips {
    // display: inline-block;
    margin-top: 20px;
    font-family: MicrosoftYaHei;
    font-size: 14px;
    color: #999999;
  }
}
.contentManage .fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.contentManage .fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
