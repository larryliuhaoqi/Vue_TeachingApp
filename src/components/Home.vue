<template>
  <div class="home">
    <el-container>
      <!-- <el-header>Header</el-header> -->

      <el-main>
        <el-row :gutter="20">
          <el-col :span="6">
            <router-link to="Book">
              <!-- <div class="grid-content bg-purple"> -->
              <el-avatar
                shape="square"
                :size="110"
                src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
              ></el-avatar>
              <!-- <i class="el-icon-edit"></i> -->
              <!-- </div> -->
              <br />点读教材</router-link
            >
          </el-col>
          <el-col :span="6">
            <router-link to="Book">
              <el-avatar
                shape="square"
                :size="110"
                src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
              ></el-avatar>
              <br />辅导教材</router-link
            >
          </el-col>
          <el-col :span="6">
            <router-link to="Book">
              <el-avatar
                shape="square"
                :size="110"
                src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
              ></el-avatar>
              <br />模拟试卷</router-link
            >
          </el-col>
          <el-col :span="6">
            <router-link to="Book">
              <el-avatar
                shape="square"
                :size="110"
                src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
              ></el-avatar>
              <br />单词学习</router-link
            >
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="6">
            <router-link to="Book">
              <el-avatar
                shape="square"
                :size="110"
                src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
              ></el-avatar>
              <br />听力训练</router-link
            >
          </el-col>
          <el-col :span="6">
            <router-link to="Book">
              <el-avatar
                shape="square"
                :size="110"
                src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
              ></el-avatar>
              <br />生字练习</router-link
            >
          </el-col>

          <el-col :span="6">
            <router-link to="Book">
              <el-avatar
                shape="square"
                :size="110"
                src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
              ></el-avatar>
              <br />开心背单词</router-link
            >
          </el-col>

          <el-col :span="6">
            <router-link to="Book">
              <el-avatar
                shape="square"
                :size="110"
                src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
              ></el-avatar>
              <br />快乐选择题</router-link
            >
          </el-col>
        </el-row>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* container */
.el-header {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  /* line-height: 160px; */
}

body > .el-container {
  margin-bottom: 40px;
}

/* layout */
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
  min-height: 118px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
