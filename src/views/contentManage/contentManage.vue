<template>
    <div class="contentManage">
    <ul class="content">  
        <router-link :to="{name: 'videoList'}" exact tag="li" class="videoLists pull-left">
          <a class="videoList-list">视频列表</a>
          </router-link>
          <li class="pull-left line"></li> 
        <router-link :to="{name: 'videoClassify'}" class="videoClassify pull-left" tag="li">
          <a class="videoList-classify">视频分类</a>
          </router-link>
          <div class="clearfix"></div>  
      </ul> 
    <div class="contentVideo">     
    <router-view></router-view>
    </div>
    </div>
</template> 

<script>
export default {
  data() {
    return {};
  },
  mounted() {},
  methods: {}
};
</script>

<style lang="scss" scoped>
.contentManage .contentVideo {
  margin: 8px 8px 0 8px;
  background: white;
}
.contentManage .content {
  width: 100%;
  height: 39px;
  background-color: #ffffff;
  border: solid 1px #e5e5e5;
  li {
    margin-top: 9px;
  }
}
.contentManage .videoLists {
  margin-left: 43px;
}
.contentManage .videoLists,
.videoClassify {
  width: 65px;
  height: 22px;
  vertical-align: middle;
  border-radius: 10.5px;
  text-align: center;
  line-height: 22px;
  .videoList-list,
  .videoList-classify {
    display: inline-block;
    width: 49px;
    height: 13px;
    font-family: MicrosoftYaHei;
    font-size: 12px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: left;
  }
}
.contentManage .line {
  width: 1px;
  height: 15px;
  border-right: 1px solid #e6e6e6;
  margin: 4px 12px;
}
.active {
  background-color: #1991eb;
  a {
    color: white;
  }
}
</style>
