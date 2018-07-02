<template>
  <section>
    <el-row>
      <el-col :span="24" class="conRight">
        <template>
          <!-- 申请类型 -->
          <div class="mods">
            <el-table :data="tableData" border class="hyxx">
              <el-table-column prop="applicationType" label="文件名称" width="180"></el-table-column>
              <el-table-column label="操作" width="180">
                <template slot-scope="scope">
                  <el-button type="text" size="medium">下载</el-button>
                </template>
              </el-table-column>
            </el-table>
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
      tableData: [
        {
          applicationType: "入会申请书"
        },
        {
          applicationType: "行业自律保证书"
        },
        {
          applicationType: "行业自律保证书"
        },
        {
          applicationType: "我是葫芦娃"
        }
      ]
    };
  },
  methods: {
  }
};
</script>

<style lang="scss" scoped>
.mods {
  margin-bottom: 30px;
  .information-title {
    font-size: 14px;
    margin-bottom: 8px;
    display: block;
    font-weight: bold;
  }
  .informations {
    padding: 18px;
    font-size: 14px;
    border: 1px solid #dfe6ec;
    border-top: 2px solid #1991eb;
    line-height: 24px;
    li {
      height: 40px;
      line-height: 40px;
      .information-field {
        float: left;
        width: 160px;
      }
    }
  }
}

.mods:last-child {
  margin-bottom: 0;
}
</style>
