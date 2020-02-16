<template>
  <div class="container courseTable">
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="选择教材"> </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: "英语4B三起（湖南少年）13版"
        },
        {
          date: "湖南版语文4B01"
        },
        {
          date: "湖南版语文4B02"
        },
        {
          date: "英语4B三起（湖南少年）14版"
        },
        {
          date: "英语4B三起（湖南少年）15版"
        },
        {
          date: "湖南版数学4B01"
        },
        {
          date: "湖南版数学4B02"
        },
        {
          date: "英语4B三起（湖南少年）12版"
        }
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.courseTable {
  width: 800px;
  margin-top: 30px;
}
</style>
