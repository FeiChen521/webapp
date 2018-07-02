<template>
<transition name="fade">
<div>

  <div class="addVideo">
      <div class="addVideo-header">
          <span >添加视频</span>
          <span class="pull-right" v-on:click="back"><a href="javascript:void(1);">返回</a></span>
      </div>
      <div class="addVideo-contenter">
          <div class="errorTip">只支持格式：avi,mpg,mov,wmv,mp4,divx,xvid, 视频大小能超过500MB</div>
          <div class="videoFile">
          <label class="control-label videoFiles"><span>视频文件:</span></label>
          <el-upload
            class="upload-demo"
            drag
            action=""
            multiple>
        <i class="el-icon-upload"></i>
        <div class="el-upload__text"><span class="clickUpload">点此上传</span>或<div class="move">将视频文件拖拽至框中上传</div></div>
        <div class="el-upload__tip" slot="tip">只所支持格式：avi,mpg,mov,wmv,mp4,divx,xvid，视频大小不能超过500MB</div>
        </el-upload>
        <div class="baffle">
          <el-button type="primary">更换</el-button>
          <el-button>删除</el-button>
        </div>
          </div>
          
          

            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" 
                    label-width="100px" class="demo-ruleForm">
                    <div class="errorTip">只支持格式：avi,mpg,mov,wmv,mp4,divx,xvid, 视频大小能超过500MB</div>
            <el-form-item label="视频名称" prop="videoName">
                <el-input v-model="ruleForm.videoName" placeholder="请输入视频名称"></el-input>
            </el-form-item>
            <el-form-item label="视频分类" prop="region">
                <el-input v-model="ruleForm.sort" placeholder="请选择未分类名称"></el-input>
            </el-form-item>
            <el-form-item label="视频标签" prop="tag">
                <el-input v-model="ruleForm.tag" placeholder="请输入栏目标签"></el-input>
            </el-form-item>
            <el-form-item label="视频简介" prop="introduction">
                <el-input type="textarea" v-model="ruleForm.introduction" placeholder="必填项，不少于15字"></el-input>
                </el-form-item>
            <el-form-item class='img' label="缩略图" prop="img">
                <el-upload
                        class="upload-demo uloadimg"
                        action="https://jsonplaceholder.typicode.com/posts/"
                        :on-preview="handlePreview"
                        :on-remove="handleRemove"
                        >
                    <el-button class="uploadBtn" type="primary">点击上传</el-button>
                    <span slot="tip" class="el-upload__tip uploadImg">{{tips}}</span>
                </el-upload>
                </el-form-item>
            <el-form-item label="权限设置" prop="delivery">
                <el-transfer v-model="value1" :data="data"></el-transfer>
            </el-form-item>
            <el-form-item>
                
            </el-form-item >
            <el-button class="saveData" type="primary" :disabled="saveData">保存</el-button>
            <el-button :disabled="saveData">取消</el-button>
            </el-form>
      </div>
  </div>
  
</div>
</transition>
</template>

<script>
export default {
  props: {
    backList: Function
  },
  data() {
    const generateData = _ => {
      const data = [];
      for (let i = 1; i <= 15; i++) {
        data.push({
          key: i,
          label: `备选项 ${i}`
        });
      }
      return data;
    };
    return {
      data: generateData(),
      value1: [1, 4], // 权限设置数据
      saveData: true,
      ruleForm: {
        videoName: "",
        sort: "",
        tag: "",
        introduction: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        img: ""
      },
      tips: "只能上传jpg,bmp,png,gif格式的文件，且不超过5M",
      rules: {
        videoName: [
          { required: true, message: "内容错误，不能为空", trigger: "blur" }
        ],
        img: [
          {
            required: true,
            message: "",
            trigger: "change"
          }
        ],
        resource: [
          { required: true, message: "请选择活动资源", trigger: "change" }
        ],
        introduction: [
          { required: true, message: "必填项，不少于15字", trigger: "blur" },
          {
            min: 15,
            max: 1000,
            message: "必填项，不少于15字",
            trigger: "blur"
          }
        ]
      }
    };
  },
  mounted() {},
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    back() {
      this.backList(false);
    }
  }
};
</script>

<style lang="scss">
.addVideo {
  .errorTip {
    width: 531px;
    height: 30px;
    text-align: left;
    background-color: #fff1f0;
    font-family: MicrosoftYaHei;
    font-size: 12px;
    color: #e53f34;
    padding: 9px 0 7px 9px;
    border: solid 1px #fee3e1;
    position: absolute;
    top: 5px;
    left: 166px;
  }
  .addVideo-header {
    height: 55px;
    line-height: 55px;
    padding: 0 16px 0 18px;
    width: 100%;
    span {
      display: inline-block;
    }
    span:nth-child(1) {
      width: 50px;
      height: 12px;
      font-family: MicrosoftYaHei;
      font-size: 12px;
      color: #000000;
    }
    span:nth-child(2) {
      display: inline-block;
      width: 85px;
      height: 35px;
      line-height: 35px;
      margin-top: 10px;
      border-radius: 3px;
      text-align: center;
      font-size: 12px;
      border: solid 1px #cccccc;
      background-image: linear-gradient(to top, #f3f4f7, #ffffff);
    }
  }
  .addVideo-contenter {
    position: relative;
    padding-top: 15px;
    border-top: solid 1px #dfe2e5;
    .control-label:before {
      padding-right: 6px;
      color: #f36969;
      content: "*";
    }
    .videoFile {
      position: relative;
      .baffle {
        position: absolute;
        z-index: 100;
        bottom: 22px;
        left: 130px;
        width: 227px;
        height: 79px;
        background-color: rgba(0, 0, 0, 0.6);
        text-align: center;
        line-height: 79px;
        .el-button {
          width: 85px;
          height: 35px;
        }
      }
    }
  }
  .el-form-item__label {
    padding-right: 21px;
    margin-left: 31px;
    margin-top: 4px;
  }
  .el-upload__text {
    font-family: MicrosoftYaHei;
    font-size: 12px;
    color: #000000;
    .clickUpload {
      color: #fc6621;
      margin-right: 12px;
    }
  }
}

.addVideo .saveData {
  margin-left: 130px;
}
.addVideo .el-input {
  width: 380px;
  height: 35px;
}
.addVideo .el-textarea {
  width: 608px;
  height: 153px;
  textarea {
    width: 100%;
    height: 100%;
  }
}
.addVideo .el-form-item__error {
  left: 30px;
}
.addVideo .uploadBtn {
  width: 85px;
  height: 35px;
  margin-top: 4px;
}
.addVideo .uploadImg {
  margin-left: 18px;
  font-family: MicrosoftYaHei;
  font-size: 12px;
  text-align: left;
  color: #999999;
}
.addVideo .upload-demo {
  padding-left: 130px;
  margin-bottom: 14px;
  .el-upload .el-upload-dragger {
    width: 227px;
    height: 156px;
  }
}
.addVideo .el-form-item__content {
  padding-top: 4px;
}
.addVideo .videoFiles {
  position: absolute;
  top: 7px;
  left: 34px;
  font-size: 14px;
}
.addVideo .fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.addVideo .fade-enter,
.fade-leave-to {
  opacity: 0;
}
.addVideo .uloadimg {
  padding-left: 30px;
}
</style>
