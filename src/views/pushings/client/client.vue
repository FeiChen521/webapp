<template>
  <div>
    <div class="client">
      <el-form  :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item>
          <el-select v-model="formInline.region" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>

    <el-form-item>
      <el-input v-model="formInline.user" placeholder="请输入您搜索的内容"></el-input>
    </el-form-item>

    <el-form-item>
      <el-button @click="onSubmit">搜索</el-button>
    </el-form-item>
      </el-form>
        <a @click="download" id="download" download="download.csv" class="pullRight download">批量导出</a>
    </div>

  <clientTable :client = client></clientTable>

    <el-pagination
      class="promoter-pagination pagin"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[10, 25, 50]"
      layout="total, sizes, prev, pager, next, jumper"
      :total="totals">
    </el-pagination>
  </div>
</template>
<script>
  import clientTable from './clientTable'
  import pagination from '../../../components/Pagination/Pagination'
  export default {
    data() {
      return {
        formInline: {
          user: '',
          region: '全部'
        },
        client: true,
        options: [
          {
            value: 'selectAll',
            label: '全部'
          },
          {
            value: 'name',
            label: '客户姓名'
          },
          {
            value: 'telephone',
            label: '客户手机'
          },
          {
            value: 'agent',
            label: '推广员'
          }
        ],
        currentPage1: 5,   // 分页数据
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4,
        totals: 12,
        users: [{name: "张三", sex: "男", age: 18, birth: '1993-08-18', addr: '上海'}]
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
      // 下载数据
      download: function() {
        var obj = document.getElementById("download");
        var str = "姓名,性别,年龄,生日,地址\n";
        for (var i = 0; i < this.users.length; i++) {
          var item = this.users[i];
          str += item.name + "," + item.sex + "," + item.age + "," + item.birth + "," + item.addr
          str += "\n";
        }
        str = encodeURIComponent(str);
        obj.href = "data:text/csv;charset=utf-8,\ufeff" + str;
        obj.download = "download.csv";
      }
    },
    components: {
      clientTable,
      pagination
    }
  }
</script>
<style lang="scss">
  .client{
    display: flex;
    flex-direction: row;
    height: 68px;
    margin-bottom: 10px;
    border-bottom: 1px solid #e4e7e9;
  }
  .client .demo-form-inline{
     padding: 0 20px;
    margin: 20px 0;
  }
  .client .el-input__inner{
    width: 160px;
    height: 29px;
  }
  .client .el-form-item__content {
    text-align: center;
    line-height: 29px;
    height: 29px;
  }
  .client .el-button{
    width: 70px;
    height: 29px;
    padding: 5px 20px;
    font-size: 12px;
  }
  .client .el-form-item{
    margin-right: 2px;
  }
  .client .pullRight{
    position: absolute;
    right: 50px;
    top: 40px;
    text-align: center;
    width: 72px;
    height: 18px;
    color: #3399cc;
    line-height: 18px;
    padding: 5px 10px;
    border: 1px solid #bbc3c6;
    border-radius: 3px !important;
    font-size: 12px;
  }
  .el-table--border td, .el-table--border th{
    border: none;
  }
  .el-table td, .el-table th.is-leaf {
    border-bottom: 1px solid #ebeef5;
  }
  .pagin {
    padding-left: 30px;
    .btn-prev {
      margin-left: 50%;
    }
  }

</style>
