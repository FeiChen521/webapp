<template>
  <section>
    <div class="menuT">
      <ul class="menuLayer">
        <li class="pull-left active"><a href="javascript:;">活动列表</a></li>
        <li class="pull-left"><a href="javascript:;">已报名活动</a></li>
        <div class="clearfix"></div>
      </ul>
    </div>
    <el-row>
      <el-col :span="24" class="conRight">
        <template>
          <el-row>
            <el-col :span="24">
              <el-card class="eventList">
                <div class="eventImg pull-left"><img src="http://via.placeholder.com/160x110" class="image"></div>
                <div class="rt pull-left">
                  <ul>
                    <li class="eventTitle"><a href="javascript:;">2018年第一季度协会学术大会2018年第一季度协会学术大会2018年第一季度协会学术大会2018年第一季度协会学术大会2018年第一季度协会学术大会</a></li>
                    <li class="eventTime"><i class="fa fa-clock-o"></i>截止时间：2017-11-12 18:00</li>
                    <li class="eventAddress"><i class="fa fa-map-marker"></i>地点：东方国际科技大厦</li>
                    <li class="bmTime"><i class="fa fa-calendar-check-o"></i>报名时间：2017-11-03 12:00 - 2017-11-03 12:00</li>
                  </ul>
                </div>
                <div class="bmBtn pull-right"><el-button type="primary" size="medium" @click="addUser = true">报名</el-button></div>
                <div class="clearfix"></div>
              </el-card>
              <el-card class="eventList">
                <div class="eventImg pull-left"><img src="http://via.placeholder.com/160x110" class="image"></div>
                <div class="rt pull-left">
                  <ul>
                    <li class="eventTitle"><a href="javascript:;">2018年第一季度协会学术大会2018年第一季度协会学术大会2018年第一季度协会学术大会2018年第一季度协会学术大会2018年第一季度协会学术大会</a></li>
                    <li class="eventTime"><i class="fa fa-clock-o"></i>截止时间：2017-11-12 18:00</li>
                    <li class="eventAddress"><i class="fa fa-map-marker"></i>地点：东方国际科技大厦</li>
                    <li class="bmTime"><i class="fa fa-calendar-check-o"></i>报名时间：2017-11-03 12:00 - 2017-11-03 12:00</li>
                  </ul>
                </div>
                <div class="bmBtn pull-right"><el-button type="primary" size="medium" @click="addUser = true">报名</el-button></div>
                <div class="clearfix"></div>
              </el-card>
              <el-card class="eventList">
                <div class="eventImg pull-left"><img src="http://via.placeholder.com/160x110" class="image"></div>
                <div class="rt pull-left">
                  <ul>
                    <li class="eventTitle"><a href="javascript:;">2018年第一季度协会学术大会2018年第一季度协会学术大会2018年第一季度协会学术大会2018年第一季度协会学术大会2018年第一季度协会学术大会</a></li>
                    <li class="eventTime"><i class="fa fa-clock-o"></i>截止时间：2017-11-12 18:00</li>
                    <li class="eventAddress"><i class="fa fa-map-marker"></i>地点：东方国际科技大厦</li>
                    <li class="bmTime"><i class="fa fa-calendar-check-o"></i>报名时间：2017-11-03 12:00 - 2017-11-03 12:00</li>
                  </ul>
                </div>
                <div class="bmBtn pull-right"><el-button type="primary" size="medium" @click="addUser = true">报名</el-button></div>
                <div class="clearfix"></div>
              </el-card>
              <el-card class="eventList">
                <div class="eventImg pull-left"><img src="http://via.placeholder.com/160x110" class="image"></div>
                <div class="rt pull-left">
                  <ul>
                    <li class="eventTitle"><a href="javascript:;">2018年第一季度协会学术大会2018年第一季度协会学术大会2018年第一季度协会学术大会2018年第一季度协会学术大会2018年第一季度协会学术大会</a></li>
                    <li class="eventTime"><i class="fa fa-clock-o"></i>截止时间：2017-11-12 18:00</li>
                    <li class="eventAddress"><i class="fa fa-map-marker"></i>地点：东方国际科技大厦</li>
                    <li class="bmTime"><i class="fa fa-calendar-check-o"></i>报名时间：2017-11-03 12:00 - 2017-11-03 12:00</li>
                  </ul>
                </div>
                <div class="bmBtn pull-right"><el-button type="primary" size="medium" @click="addUser = true">报名</el-button></div>
                <div class="clearfix"></div>
              </el-card>
              <el-card class="eventList">
                <div class="eventImg pull-left"><img src="http://via.placeholder.com/160x110" class="image"></div>
                <div class="rt pull-left">
                  <ul>
                    <li class="eventTitle"><a href="javascript:;">2018年第一季度协会学术大会2018年第一季度协会学术大会2018年第一季度协会学术大会2018年第一季度协会学术大会2018年第一季度协会学术大会</a></li>
                    <li class="eventTime"><i class="fa fa-clock-o"></i>截止时间：2017-11-12 18:00</li>
                    <li class="eventAddress"><i class="fa fa-map-marker"></i>地点：东方国际科技大厦</li>
                    <li class="bmTime"><i class="fa fa-calendar-check-o"></i>报名时间：2017-11-03 12:00 - 2017-11-03 12:00</li>
                  </ul>
                </div>
                <div class="bmBtn pull-right"><el-button type="primary" size="medium" @click="addUser = true">报名</el-button></div>
                <div class="clearfix"></div>
              </el-card>
              <el-card class="eventList">
                <div class="eventImg pull-left"><img src="http://via.placeholder.com/160x110" class="image"></div>
                <div class="rt pull-left">
                  <ul>
                    <li class="eventTitle"><a href="javascript:;">2018年第一季度协会学术大会2018年第一季度协会学术大会2018年第一季度协会学术大会2018年第一季度协会学术大会2018年第一季度协会学术大会</a></li>
                    <li class="eventTime"><i class="fa fa-clock-o"></i>截止时间：2017-11-12 18:00</li>
                    <li class="eventAddress"><i class="fa fa-map-marker"></i>地点：东方国际科技大厦</li>
                    <li class="bmTime"><i class="fa fa-calendar-check-o"></i>报名时间：2017-11-03 12:00 - 2017-11-03 12:00</li>
                  </ul>
                </div>
                <div class="bmBtn pull-right"><el-button type="primary" size="medium" @click="addUser = true">报名</el-button></div>
                <div class="clearfix"></div>
              </el-card>
              <el-card class="eventList">
                <div class="eventImg pull-left"><img src="http://via.placeholder.com/160x110" class="image"></div>
                <div class="rt pull-left">
                  <ul>
                    <li class="eventTitle"><a href="javascript:;">2018年第一季度协会学术大会2018年第一季度协会学术大会2018年第一季度协会学术大会2018年第一季度协会学术大会2018年第一季度协会学术大会</a></li>
                    <li class="eventTime"><i class="fa fa-clock-o"></i>截止时间：2017-11-12 18:00</li>
                    <li class="eventAddress"><i class="fa fa-map-marker"></i>地点：东方国际科技大厦</li>
                    <li class="bmTime"><i class="fa fa-calendar-check-o"></i>报名时间：2017-11-03 12:00 - 2017-11-03 12:00</li>
                  </ul>
                </div>
                <div class="bmBtn pull-right"><el-button type="primary" size="medium" @click="addUser = true">报名</el-button></div>
                <div class="clearfix"></div>
              </el-card>
              <el-card class="eventList">
                <div class="eventImg pull-left"><img src="http://via.placeholder.com/160x110" class="image"></div>
                <div class="rt pull-left">
                  <ul>
                    <li class="eventTitle"><a href="javascript:;">2018年第一季度协会学术大会2018年第一季度协会学术大会2018年第一季度协会学术大会2018年第一季度协会学术大会2018年第一季度协会学术大会</a></li>
                    <li class="eventTime"><i class="fa fa-clock-o"></i>截止时间：2017-11-12 18:00</li>
                    <li class="eventAddress"><i class="fa fa-map-marker"></i>地点：东方国际科技大厦</li>
                    <li class="bmTime"><i class="fa fa-calendar-check-o"></i>报名时间：2017-11-03 12:00 - 2017-11-03 12:00</li>
                  </ul>
                </div>
                <div class="bmBtn pull-right"><el-button type="primary" size="medium" @click="addUser = true">报名</el-button></div>
                <div class="clearfix"></div>
              </el-card>
              <el-card class="eventList">
                <div class="eventImg pull-left"><img src="http://via.placeholder.com/160x110" class="image"></div>
                <div class="rt pull-left">
                  <ul>
                    <li class="eventTitle"><a href="javascript:;">2018年第一季度协会学术大会2018年第一季度协会学术大会2018年第一季度协会学术大会2018年第一季度协会学术大会2018年第一季度协会学术大会</a></li>
                    <li class="eventTime"><i class="fa fa-clock-o"></i>截止时间：2017-11-12 18:00</li>
                    <li class="eventAddress"><i class="fa fa-map-marker"></i>地点：东方国际科技大厦</li>
                    <li class="bmTime"><i class="fa fa-calendar-check-o"></i>报名时间：2017-11-03 12:00 - 2017-11-03 12:00</li>
                  </ul>
                </div>
                <div class="bmBtn pull-right"><el-button type="primary" size="medium" @click="addUser = true">报名</el-button></div>
                <div class="clearfix"></div>
              </el-card>
            </el-col>
          </el-row>
          <div class="block pages">
            <el-pagination background
              :page-sizes="[10, 20, 50, 100]"
              :page-size="100"
              layout="sizes, prev, pager, next"
              :total="1000">
            </el-pagination>
          </div>
        </template>
      </el-col>
    </el-row>
  </section>
</template>



<script>
  export default {
    data() {
      return {
        currentDate: new Date()
      }
    },
    methods: {
    }
  }
</script>

<style lang="scss" scoped>
.conRight{
  margin-top: 56px;
  padding: 16px 16px 59px;
  min-height: 1000px;//临时显示用
}

.menuT{
  position: fixed;
  top: 60px;
  left: 200px;
  background-color: rgb(255, 255, 255);
  padding: 0px 40px;
  z-index: 2;
  width: calc(100% - 280px);
  .menuLayer li{
    padding: 18px;
    margin-right: 35px;
    border-top: 3px solid rgb(255, 255, 255);
    border-bottom: 3px solid rgb(255, 255, 255);
    a{
      font-size: 14px;
      color: rgb(51, 51, 51);
    }
    &.active{
      border-bottom: 3px solid rgb(25, 145, 235);
      a{
        color: rgb(25, 145, 235);
      }
    }
  }
}

.eventList{
    border:none;
    border-bottom: 1px solid rgb(223, 226, 229);
    background-color: rgb(255, 255, 255);
    box-shadow: none;
    color: rgb(51, 51, 51);
    border-radius: 0;
  .eventImg{
    width: 160px;
    margin-right: 20px;
    .image {
      display: block;
      width: 160px;
      height: 110px;
    }
  }
  
  .rt{
    width: calc(80% - 160px);
    font-size: 12px;
    color: rgb(51, 51, 51);
    .eventTitle{
      font-size: 20px;
      font-weight: 500;
      margin-bottom: 25px;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      a{
        color: rgb(25, 145, 235);
      }
    }
    .eventTime{
      color: rgb(255, 153, 51);
      margin-bottom: 13px;
      i.fa {
          color: rgb(255, 153, 51);
      }
    }
    .eventAddress{
      margin-bottom: 13px;
    }
    i.fa {
          color: rgb(197, 208, 222);
          margin-right: 6px;
      }
  }
  .bmBtn{
    width: 10%;
    padding-top: 37px;
    text-align: right;
  }
  &:last-child{
    border-bottom: none;
  }
}

.pages{
    position: fixed;
    bottom: 0;
    left: 210px;
    background-color: #fff;
    width: calc(100% - 260px);
    padding: 20px;
    text-align: right;
    .el-pagination {
        text-align: right;
        margin-top: 0;
      .el-pagination__sizes{
        float: left;
      }
    }
}


</style>
