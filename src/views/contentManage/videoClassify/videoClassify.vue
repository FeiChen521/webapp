<template>
<div>
<div v-if="!showVideo">
    <div class="videoClass">
        <!-- 头部tab -->
    <div class="videoList" id="videoList">
      <div class="importText">
        <el-input
        style="padding:0px;"
        placeholder="请输入您搜索的内容"
        icon="search"
        class="userSearch"
        v-model="searchValue"
        v-bind:on-icon-click="handleIconClick">
      </el-input>
      </div>
    
      <div class="btn pull-right">
        <el-button type="primary" v-on:click="showAddVideo">添加视频分类</el-button>
        <div class="clearfix"></div>
      </div>
    </div>

    <div class="container">
          <el-table
      v-bind:data="tableData"
      style="width: 100%">
      <el-table-column
        prop="name"
        label="分类名称"
        >
      </el-table-column>
      <el-table-column
        prop="name"
        label="分类数量"
        >
      </el-table-column>
      <el-table-column
        prop="address"
        label="创建时间">
      </el-table-column>
      <el-table-column
        label="session操作">
        <template scope="scope">
        <a
          size="small"
          v-on:click="showCopyUrl(scope.$index, scope.row)">复制链接</a>
        <a
          size="small"
         v-on:click="showEdit(scope.$index, scope.row)">编辑</a>
        <a
          size="small"
          v-on:click="showDelete(scope.$index, scope.row)">删除</a>  
      </template>
      </el-table-column>
    </el-table>
    </div>

    <!-- 弹窗组件 -->
      <el-dialog title="新增视频分类" class="addNewVideo" v-bind:visible.sync="addVideoClassfiy"  v-bind:before-close="handleClose">
        <span class="saveName">保存名称</span>
        <el-input
          placeholder="请输入内容"
          v-model="videoClass"
          class="classText"
        >
        </el-input>
      <span slot="footer" class="dialog-footer urlInput">
      <el-button class="copy" v-bind:disabled="disabled" type="primary" v-on:click="saveData">保存</el-button>
      <el-button class="copy" v-bind:disabled="disabled" v-on:click="cancle">取消</el-button>
    </span>
</el-dialog>

<!-- 复制链接 -->
  <el-dialog title="" v-bind:visible.sync="weChat" class="w600 " v-bind:before-close="handleClose">
  <div class="weChat">
    <img class="imgs" src="../img/a.jpg" alt="">
    <span class="open">打开微信扫一扫</span> <span class="download">下载</span>
  </div>
  <span slot="footer" class="dialog-footer urlInput">
    <el-input
       placeholder=""
       v-model="copyUrl"
       v-bind:on-icon-click="handleIconClick">
    </el-input>
    <el-button class="copy">复制</el-button>
  </span>
</el-dialog>

<!-- 删除 -->
<el-dialog v-bind:visible.sync="deleteDatas" class="w400" v-bind:before-close="handleClose">
  <div class="h18 text-center">是否删除?</div>
  <span slot="footer" class="dialog-footer">
    <el-button class="foot-btn" style="width:85px;" type="danger" v-on:click="deleteData">删除</el-button>
    <el-button  class="foot-btn" v-on:click="deleteDatas = false">取消</el-button>
  </span>
</el-dialog>
    </div>
    </div>

    <addVideo v-if="showVideo" v-bind:backList="backList">
    </addVideo>
      
</div>
</template>

<script>
import addVideo from "../videoList/addVideo";
export default {
  data() {
    return {
      searchValue: "", // 搜素数据
      addVideoClassfiy: false, // 新增弹窗
      videoClass: "", // 视频分类名称
      weChat: false, // 微信分享弹窗
      copyUrl: "", // 分享链接
      deleteDatas: false,
      showVideo: true,
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ]
    };
  },
  mounted() {},
  computed: {
    disabled: function() {
      if (this.videoClass) {
        return false;
      } else {
        return true;
      }
    }
  },
  methods: {
    handleIconClick() {},
    deleteData() {}, // 删除按钮
    cancle() {
      this.addVideoClassfiy = false; // 关闭弹窗
    },
    saveData() {
      this.addVideoClassfiy = false;
    },
    handleClose() {
      this.addVideoClassfiy = false;
      this.weChat = false;
      this.deleteDatas = false;
    },
    showAddVideo() {
      this.addVideoClassfiy = true;
      this.videoClass = ""; // 关闭按钮后清空数据
    },
    showCopyUrl(index, row) {
      // 微信分享弹层
      this.weChat = true;
    },
    showEdit(index, row) {
      console.log(11);
      this.showVideo = true;
    },
    showDelete(index, row) {
      this.deleteDatas = true;
    },
    backList(boolean) {
      // 控制编辑视频组件显示隐藏
      this.showVideo = boolean;
    }
  },
  components: {
    addVideo
  }
};
</script>

<style lang="scss">
.videoClass .videoList {
  display: flex;
  flex-direction: row;
}
.videoClass .addNewVideo .el-dialog {
  width: 560px;
}
.videoClass .addNewVideo .el-dialog__header {
  padding: 37px 30px 30px 37px;
  border-bottom: 1px solid #cccccc;
}
.videoClass .addNewVideo .el-dialog__body {
  height: 206px;
  padding-top: 69px;
  .saveName {
    font-family: MicrosoftYaHei;
    font-size: 14px;
    color: #333333;
    margin: 0 20px 0 24px;
  }
  .classText {
    width: 378px;
    height: 35px;
  }
}
.contentManage .videoClass .addNewVideo .el-dialog__footer {
  background-image: linear-gradient(to top, #f3f4f7, #ffffff);
  .el-button {
    width: 85px;
    height: 35px;
    font-family: MicrosoftYaHei;
    font-size: 12px;
  }
}
.videoClass .videoList .importText {
  width: 220px;
  height: 67px;
  margin-right: 0px;
}
.videoClass .userSearch {
  margin: 16px 0 0 16px;
}
.videoClass .btn .el-button {
  width: 114px;
  height: 35px;
}
.videoClass .container {
  padding: 20px 21px 0 21px;
  border-top: solid 1px #dfe2e5;
}
.videoClass .container .cell a {
  font-family: MicrosoftYaHei;
  font-size: 13px;
  color: #1991eb;
  margin-right: 19px;
  cursor: pointer;
}
</style>