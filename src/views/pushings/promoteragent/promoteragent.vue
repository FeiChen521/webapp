<template>
  <!--分销类型 select选择框-->
  <div class="promoteragent">
    <el-form :inline="true" :model="formInline" class="demo-form-inline">

      <el-form-item label="分销类型">
        <el-select v-model="formInline.region" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>


      <span v-if="this.formInline.region!='vip'">
    <el-form-item>
      <el-input v-model="formInline.user" placeholder="请输入活动名称"></el-input>
    </el-form-item>

    <el-form-item>
      <el-select v-model="formInline.grade" placeholder="分销等级">
        <el-option
          v-for="item in DistriLevel"
          :key="item.value"
          :label="item.label"
          :value="item.value">
      </el-option>
      </el-select>
    </el-form-item>

    <el-form-item>
      <el-button class = "search" type="primary" @click="onSubmit">搜索</el-button>
    </el-form-item>


</span>
      <!--弹窗组件-->
      <el-button class="fr add-activity" type="text" @click="addActivity">添加分销活动</el-button>

      <el-dialog
        title="添加分销活动"
        :visible.sync="dialogVisible"
        size="tiny"
        class="promoteragent-dialog"
      >
        <ul class="fenxiao-layer fl">
          <li class="fl" v-if = "DistributionSteps" :class="on >= index? 'on':''"
              v-for="(item,index) in DistributionSteps" :key="index" ref="mySteps">
            {{index + 1}}. {{item}}
          </li>
        </ul>
        <div class="modal-body">
          <div v-if="restDom">
            <h3>{{addOptions.step}} <span>{{addOptions.purpose}}</span></h3>
            <el-radio-group v-model="radio" @change="listen">
            <el-radio :class="Index==2? 'modal-choose': ''" class="readio" v-if="Index!=3" v-model="radio"
                      label="activity">
              {{addOptions.options[0]}}
            </el-radio>
            <el-radio :class="Index==2? 'modal-set': ''" class="readio" v-if="Index!=3" v-model="radio" label="vip">
              {{addOptions.options[1]}}
            </el-radio>
            <el-radio :class="Index==2? 'modal-set': ''" class="readio" v-if="Index==1" v-model="radio" label="1">
              {{addOptions.options[2]}}
            </el-radio>


              <div v-if="Index ==3">

                <el-radio :class="Index==3? 'modal-choose' : ''" class="readio" v-model="radio"
                          label="activity">
                  {{addOptions.options[0].choose}}
                </el-radio>
                <el-radio :class="Index==3? 'modal-set' : ''" class="readio" v-model="radio" label="vip">
                  {{addOptions.options[1].choose}}
                </el-radio>

              </div>
            </el-radio-group>
            <PromoterForm v-show="showPagination == Index" :message="message" :radios="radios"></PromoterForm>
            <Pagination v-show="showPagination == Index" class="promoter-pagination"></Pagination>

            <div class="reward" v-if="Index ==3">
              <h5>(默认通道)嘉宾：</h5>
              <div>每卖出一张门票，获得<el-input class="reward-input"></el-input>%提成</div>
              <h5>(默认通道)收费票1：</h5>
              <div>每卖出一张门票，获得<el-input class="reward-input" ></el-input>%提成</div>
              <h5>(默认通道)收费票2：</h5>
              <div>每卖出一张门票，获得<el-input  class="reward-input" ></el-input>%提成</div>
              <h5>(默认通道)收费票3：</h5>
              <div>每卖出一张门票，获得<el-input class="reward-input"></el-input>%提成</div>
              <h5>(VIP1通道)嘉宾：</h5>
              <div>每卖出一张门票，获得<el-input class="reward-input"></el-input>%提成</div>
              <h5>(VIP2通道)嘉宾：</h5>
              <div>每卖出一张门票，获得<el-input class="reward-input"></el-input>%提成</div>
              <h5>(VIP3通道)嘉宾：</h5>
              <div>每卖出一张门票，获得<el-input class="reward-input"></el-input>%提成</div>
            </div>
          </div>

        </div>
        <span slot="footer" class="dialog-footer">
    <div>
      <el-button type="primary" v-if="Index<nextSaveIndex" @click="nextOption">下一步</el-button>
      <el-button v-else @click="save">保存</el-button>

      <el-button @click="reset">取 消</el-button>
    </div>

  </span>
      </el-dialog>

      <!--活动展示table-->
      <PromoterTable :formInline = formInline.region :radio = "formInline.region"></PromoterTable>
      <!--分页-->
      <Pagination :fr = "fr"></Pagination>
    </el-form>

  </div>
</template>
<script>
import Pagination from "../../../components/Pagination/Pagination";
import PromoterTable from "./promoterTable";
import PromoterForm from "./promoterForm.vue";

var radio = null;
export default {
  data() {
    return {
      Index: 0, // 对应的添加活动分销步骤
      nextSaveIndex: 3, // 判断 下一步or保存
      radio: "activity", // 单选框
      show: "", // 控制分销设置：第四步骤
      on: "", // 控制分销步骤的绿色进度条
      restDom: true, // 重置弹出层
      showPagination: null, // 控制分页
      message: { radio: "分类名称", title: "请输入分类标题" }, // 弹窗第三步radio选择信息
      formInline: {
        user: "",
        region: "activity",
        grade: ""
      },
      radios: [
        {
          // 子组件弹窗表格数据
          lable: "111"
        },
        {
          lable: "222"
        },
        {
          lable: "333"
        },
        {
          lable: "444"
        },
        {
          lable: "555"
        },
        {
          lable: "666"
        },
        {
          lable: "777"
        },
        {
          lable: "888"
        },
        {
          lable: "999"
        },
        {
          lable: "333"
        }
      ],
      dialogVisible: false, // 显示隐藏弹框
      DistributionSteps: ["选择分销类型", "选择分销等级", "选择参与分销活动", "设置奖励规则"],
      saveDistributionSteps: "",
      DistriLevel: [
        {
          value: "distriLevel",
          label: "分销等级"
        },
        {
          value: "first",
          label: "1级"
        },
        {
          value: "second",
          label: "2级"
        },
        {
          value: "third",
          label: "3级"
        }
      ],
      options: [
        {
          value: "activity",
          label: "活动分销"
        },
        {
          value: "vip",
          label: "会员分销"
        },
        {
          value: "classify",
          label: "活动分类分销"
        }
      ],
      addOption: [
        {
          step: "第一步:",
          purpose: "选择分销活动类型",
          options: ["活动分销", "会员分销"]
        },
        {
          step: "第二步:",
          purpose: "选择分销等级",
          options: ["1级", "2级", "3级"]
        },
        {
          step: "第三步:",
          purpose: "选择参与分销的活动",
          options: ["选择单场活动 ", "选择一个分类的活动"]
        },
        {
          step: "第四步:",
          purpose: "设置奖励规则",
          options: [
            {
              choose: "分销获得现金",
              aisle: "%提成"
            },
            {
              choose: "分销获得积分",
              aisle: "积分"
            }
          ]
        }
      ],
      addOptions: [],
      fr: true
    };
  },
  created() {
    this.addOptions = this.addOption[0];
    this.saveDistributionSteps = this.DistributionSteps;
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
    switchActivity(Index) {
      // 活动分销数据
      switch (Index) {
        case 1:
          this.addOptions = this.addOption[1];
          this.addOptions.options = ["1级", "2级", "3级"];
          this.addOptions.step = "第二步：";
          this.addOptions.purpose = "选择分销等级";
          break;
        case 2:
          this.addOptions = this.addOption[2];
          this.addOptions.step = "第三步：";
          this.addOptions.purpose = "选择参与分销活动";
          break;
        case 3:
          this.addOptions = this.addOption[3];
          this.addOptions.step = "第四步：";
          this.addOptions.purpose = "设置奖励规则";
          break;
        default:
          this.addOptions = this.addOption[0];
      }
    },
    switchVip(Index) {
      // vip活动分销数据
      switch (Index) {
        case 1:
          this.addOptions = this.addOption[1];
          this.addOptions.options = ["1级", "2级", "3级"];
          this.addOptions.step = "第二步：";
          this.addOptions.purpose = "选择分销等级";
          break;
        case 2:
          this.addOptions.step = this.addOption[2].step;
          this.addOptions.purpose = this.addOption[3].purpose;
          this.addOptions.options = ["分销获得现金", "分销获得积分"];
          this.addOptions.step = "第三步：";
          this.addOptions.purpose = "设置奖励规则";
          break;
        default:
          this.addOptions = this.addOption[0];
      }
    },
    listen(event) {
      if (radio && radio === "activity") {
        this.radios = this.radios.reverse();
      }
    },
    addDistribution() {
      // 添加分销设置数据
      switch (this.Index) {
        case 1:
          this.addOptions = this.addOption[1];
          break;
        case 2:
          this.addOptions = this.addOption[2];
          break;
        case 3:
          this.addOptions = this.addOption[3];
          break;
        default:
          this.addOptions = this.addOption[0];
      }
    },
    nextOption() {
      // 添加分销活动弹窗点击下一步操作
      if (!radio) {
        radio = this.radio;
        if (radio === "vip") {
          this.$refs.mySteps[3].style.display = "none";
          this.nextSaveIndex = 2;
          // this.radio = 'activity'
          // this.DistributionSteps[2] = '设置规则奖励'
        }
      }
      let Index = ++this.Index;
      this.on++;
      if (Index > 3) {
        this.Index = 0;
        this.on = 0;
        Index = this.Index;
      }

      if (radio === "activity") {
        this.showPagination = 2;
        this.switchActivity(Index);
      } else if (radio === "vip") {
        this.showPagination = null;
        this.switchVip(Index);
      }
    },
    addActivity() {
      // 添加分销活动
      this.addDistribution();
      this.DistributionSteps = this.saveDistributionSteps;
      this.nextSaveIndex = 3;
      this.dialogVisible = true;
    },
    save(event) {
      console.log(event);
      console.log(this.Index);
    },
    reset() {
      // 将业务数据回复初始状态
      this.$refs.mySteps[3].style = "block";
      radio = null;
      this.dialogVisible = false;
      this.radio = "activity";
      this.on = "";
      this.Index = 0;
    }
  },
  components: {
    Pagination: Pagination,
    PromoterForm: PromoterForm,
    PromoterTable: PromoterTable
  },
  beforeUpdate() {
    console.log(this.formInline.user);
  }
};
</script>
<style lang="scss">
.promoteragent {
  .el-tabs__content {
    padding: 20px;
  }
  .el-dialog {
    width: 750px;
  }
  .fenxiao-layer {
    position: absolute;
    left: 175px;
    top: -45px;
    margin: 0 20px 0 0;
    padding: 0;
    width: auto;
    color: #999;
    list-style: none;
    font-size: 12px;
    display: flex;
  }
  .el-dialog__body {
    position: relative;
    padding: 0;
  }
  .on {
    border-bottom: 2px solid #35c252;
    color: #35c252;
  }
  .modal-body {
    padding: 30px;

    .el-radio-group {
      display: flex;
      flex-direction: column;
      .readio {
        width: 50px;
        padding: 20px 0 0 50px;
        margin-left: 20px;
      }
      .modal-choose {
        position: absolute;
        top: 30px;
        left: -68px;
        margin: 20px 0 30px 50px;
      }
      .modal-set {
        position: absolute;
        top: 30px;
        left: 76px;
        margin: 20px 0 30px 50px;
      }
      .add-activity {
        border: 1px solid lightgray;
        padding-left: 10px;
        padding-right: 10px;
      }
      .el-dialog__footer {
        background: #eef1f4;
      }
    }
    .promoter-pagination {
      position: absolute;
      bottom: 24px;
      right: 22px;
      margin-bottom: 4px;
    }
    .reward {
      margin-top: 40px;
      h5 {
        height: 20px;
        color: #475059;
      }
      .reward-input {
        display: inline-block;
        width: 48px;
        height: 24px;
        margin: 0 4px;
        padding: 0;
        text-align: center;
        .el-input__inner {
          width: 48px;
          height: 24px;
          padding: 0 5px;
        }
      }
    }
  }
}
.promoteragent .search{
  width: 70px;
  height: 29px;
  line-height: 29px;
  padding: 0;
}
.fr {
  float: right;
}

.fl {
  float: left;
}
</style>
