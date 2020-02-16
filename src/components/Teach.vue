<template>
  <!-- <el-container>
    <el-aside> -->
  <el-row class="tac">
    <el-col :span="4">
      <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
        <el-radio-button :label="false">展开</el-radio-button>
        <el-radio-button :label="true">收起</el-radio-button>
      </el-radio-group>
      <el-menu
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        :collapse="isCollapse"
      >
        <el-menu-item index="1">
          <i class="el-icon-document"></i>
          <span slot="title">点读</span>
        </el-menu-item>
        <el-menu-item index="2">
          <i class="el-icon-document"></i>
          <span slot="title">抓词</span>
        </el-menu-item>
        <el-menu-item index="3">
          <i class="el-icon-document"></i>
          <span slot="title">整读</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-document"></i>
          <span slot="title">讲解</span>
        </el-menu-item>
        <el-menu-item index="5">
          <i class="el-icon-document"></i>
          <span slot="title">测试</span>
        </el-menu-item>
        <el-menu-item index="6">
          <i class="el-icon-document"></i>
          <span slot="title">复读</span>
        </el-menu-item>
        <el-menu-item index="7">
          <i class="el-icon-document"></i>
          <span slot="title">跟读</span>
        </el-menu-item>
        <el-menu-item index="8">
          <i class="el-icon-document"></i>
          <span slot="title">辅导</span>
        </el-menu-item>
      </el-menu>
    </el-col>
  </el-row>
  <!-- </el-aside>
    <el-main>Main</el-main>
  </el-container> -->
</template>

<script>
export default {
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  data() {
    return {
      isCollapse: true
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style scoped>
.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 400px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
