<template>
<el-row>
  <el-col :span="24">
      <div class="grid-content bg-purple-dark" @click="something">
          {{ggGg.name}}-{{ggGg.age}}-{{ggGg.like}}-{{id}}
      </div>
        <el-button type="primary" @click="removeD">删除操作</el-button>
      </el-col>
</el-row>
</template>

<script>
export default {
  props: ["ggGg", "id"],
  data() {
    return {};
  },
  methods: {
    something: function() {
      console.log(this.ggGg.name, this.id);
    },
    removeD: function() {
      this.$emit('removeTheData',this.id)
    }
  }
};
</script>

<style lang="scss">
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>



