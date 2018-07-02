<template>
  <section>
    <el-row>
      <el-col :span="24" class="conRight">
        <template>
          <!-- 申请类型 -->
          <div class="mods">
            <el-table :data="tableData" border class="hyxx">
              <el-table-column prop="applicationType" label="申请类型" width="180"></el-table-column>
              <el-table-column label="操作" width="180">
                <template slot-scope="scope">
                  <el-button type="text" size="medium">申请</el-button>
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
          applicationType: "空气品质评价"
        },
        {
          applicationType: "产品质量鉴定"
        },
        {
          applicationType: "室内环境评价"
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
  }

  .mods:last-child {
    margin-bottom: 0;
  }
</style>
