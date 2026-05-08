<!--
 * @Author: xiao
 * @Date: 2026-05-07 17:26:32
 * @LastEditors: xiaobin
 * @LastEditTime: 2026-05-07 18:51:35
 * @FilePath: \tes\src\App.vue
 * @Description: 注释
-->
<script setup>
  import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="main-header">
    <div class="container header-content">
      <router-link to="/" class="logo">VueApp</router-link>
      <nav class="nav-links">
        <router-link to="/" class="nav-item">首页</router-link>
        <router-link to="/company" class="nav-item">公司介绍</router-link>
        <router-link to="/recruitment" class="nav-item">招聘信息</router-link>
        <router-link to="/personnel" class="nav-item">人员介绍</router-link>
        <router-link to="/about" class="nav-item">关于我们</router-link>
        <router-link to="/login" class="nav-item">登录</router-link>
        <router-link to="/register" class="btn btn-primary btn-sm">注册</router-link>
      </nav>
    </div>
  </header>

  <main class="main-content">
    <RouterView />
  </main>
</template>

<style scoped>
  .main-header {
    background-color: white;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
    height: 70px;
    display: flex;
    align-items: center;
    position: sticky;
    top: 0;
    z-index: 1000;
  }

  .header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  .logo {
    font-size: 1.5rem;
    font-weight: 800;
    color: var(--primary-color);
  }

  .nav-links {
    display: flex;
    align-items: center;
    gap: 2rem;
  }

  .nav-item {
    font-weight: 600;
    color: var(--secondary-color);
    transition: var(--transition);
  }

  .nav-item:hover {
    color: var(--primary-color);
  }

  .btn-sm {
    padding: 0.5rem 1.2rem;
    font-size: 0.9rem;
  }

  .main-content {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
</style>
