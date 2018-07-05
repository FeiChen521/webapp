<template>
<div>
    <el-row>
  <el-button type="primary" @click="students1">升序</el-button>
  <el-button type="primary" @click="addData">增加一组数据</el-button>
</el-row>
<el-row>
  <el-input v-model="name" placeholder="名字"></el-input>
  <el-input v-model="age" placeholder="年龄"></el-input>
  <el-input v-model="like" placeholder="爱好"></el-input>
</el-row>
   <ListSon v-for=" (items,index) in itemsData" v-on:removeTheData="removeData" :key="items.id" :gg-gg="items" :id="index" ref="ListSon">
    </ListSon>
     <div class="block">
    <span class="demonstration">完整功能</span>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page=0
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400">
    </el-pagination>
  </div>
</div>
</template>

<script>
import ListSon from "./listson";
export default {
  data() {
    return {
      itemsData: [],
      name: "",
      age: 0,
      like: ""
    };
  },
  created: function() {
    this.$http.get("/api/getlistOptions").then(response => {
      this.itemsData = response.data.array;
    });
  },
  components: {
    ListSon: ListSon
  },
  watch: {
    itemsData: {
      handler(newval, oldval) {
        console.log(this.itemsData);
      }
    }
  },

  methods: {
    students1: function() {
      var array1 = this.sortKey(this.itemsData, "age");
      console.log(array1);
      return array1;
    },
    sortKey: function(array, key) {
      return array.sort(function(a, b) {
        var x = a[key];
        var y = b[key];
        return x < y ? -1 : x > y ? 1 : 0;
      });
    },
    addData: function() {
      var obj = {};
      obj.name = this.name;
      obj.like = this.like;
      obj.age = this.age;
      this.itemsData.push(obj);
    },
    removeData: function(index) {
      this.itemsData.splice(index, 1);
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
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



