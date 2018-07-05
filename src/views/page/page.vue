<template>
<div>
 <el-input v-model="tableDataName" placeholder="请输入姓名" style="width:240px"></el-input>
 <el-button type="primary" @click="sourseEvent">姓名搜索</el-button>
 <el-table
 :data="tableDataEnd"
 border
 style="width: 100%">
 <el-table-column
  prop="date"
  label="日期"
  width="180">
 </el-table-column>
 <el-table-column
  prop="name"
  label="姓名"
  width="180">
 </el-table-column>
 <el-table-column
  prop="address"
  label="地址">
 </el-table-column>
 <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
 </el-table>


 <el-pagination
  background
  @current-change="handleCurrentChange"
  :current-page="currentPage"
  :page-size="pageSize"
  layout="total, prev, pager, next, jumper"
  :total="totalItems">
 </el-pagination>
</div>
</template>
<script>
export default {
  data() {
    return {
      tableDataBegin: [],
      tableDataName: "",
      tableDataEnd: [],
      currentPage: 1,
      pageSize: 4,
      totalItems: 0,
      filterTableDataEnd: [],
      flag: false
    };
  },
  created() {
    this.$http.get("/api/listpage").then(response => {
      this.tableDataBegin = response.data.array;
      this.getId(this.tableDataBegin);
      this.showCurrentData(this.currentPage);
      for (let i = 0; i < this.tableDataBegin.length; i++) {
        this.filterTableDataEnd.push(this.tableDataBegin[i]);
      }
    });
  },
  watch: {
    tableDataBegin: function() {
      this.totalItems = this.tableDataBegin.length;
      this.showCurrentData(this.currentPage);
    }
  },
  methods: {
    handleCurrentChange(val) {
      this.currentPage = val;
      this.showCurrentData(val);
    },
    //展示当前数据
    showCurrentData(currentpage) {
      this.tableDataEnd = [];
      let currentLen =
        this.tableDataBegin.length - (currentpage - 1) * this.pageSize >
        this.pageSize
          ? this.pageSize
          : this.tableDataBegin.length - (currentpage - 1) * this.pageSize;
      for (
        let index = (currentpage - 1) * this.pageSize;
        index < (currentpage - 1) * this.pageSize + currentLen;
        index++
      ) {
        this.tableDataEnd.push(this.tableDataBegin[index]);
      }
    },
    //名字搜索
    sourseEvent() {
      let sourceString = this.tableDataName.replace(" ", "");
      console.log(sourceString);
      if (sourceString === "") {
        let allData = [];
        for (let i = 0; i < this.filterTableDataEnd.length; i++) {
          allData.push(this.filterTableDataEnd[i]);
        }
        this.tableDataBegin = allData;
      } else {
        this.tableDataBegin = this.tableDataBegin.filter(item => {
          return item.name == sourceString;
        });
      }
    },
    handleEdit(index, row) {
      this.currentPage;
    },
    handleDelete(index, row) {
      let currentData = (this.currentPage - 1) * this.pageSize + index;
      this.filterTableDataEnd.splice(this.tableDataBegin[currentData].Id, 1);
      this.getId(this.filterTableDataEnd);
      this.tableDataBegin.splice(currentData, 1);
    },
    //重新排序赋值
    getId(array) {
      return array.forEach((item, index) => {
        item.Id = index;
      });
    }
  }
};
</script>