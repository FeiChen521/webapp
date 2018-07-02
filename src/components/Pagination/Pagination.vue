<template>
  <div class="block">
    <el-pagination
      class="promoter-pagination"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[10, 25, 50]"
      layout="total, sizes, prev, pager, next, jumper"
      :total="totals"
      :class="fr? 'pagin':''">
    </el-pagination>
  </div>
</template>
<script>
  export default {
    props: {
      Data: {},
      multipleSelection: [],
      fr: ''
    },
    data() {
      return {
        currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4,
        totals: 12
      }
    },
    methods: {
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
      }
    },
    created() {
      this.$bus.$on('total', (val) => {
        this.totals = val
      })
    }
  };
</script>
<style lang="scss">
  .promoter-pagination {

  }

  .pagin {
    padding-left: 30px;
    .btn-prev {
      margin-left: 50%;
    }
  }
</style>
