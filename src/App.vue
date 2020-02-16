<template>
  <div id="app">
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="1">
        <router-link to="Login" class="nav-link">登录</router-link>
      </el-menu-item>
      <el-menu-item index="2">
        <router-link to="/" class="nav-link">首页</router-link>
      </el-menu-item>
      <el-menu-item index="3">
        <router-link to="Book" class="nav-link">教材</router-link>
      </el-menu-item>
      <el-menu-item index="4">
        <router-link to="Teach" class="nav-link">教学</router-link>
      </el-menu-item>
      </el-menu>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
};
</script>

<style></style>
