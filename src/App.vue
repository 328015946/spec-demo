<!--
 * @Author: xiao
 * @Date: 2026-05-07 17:26:32
 * @LastEditors: xiaobin
 * @LastEditTime: 2026-05-07 18:51:35
 * @FilePath: \tes\src\App.vue
 * @Description: 注释
-->
<script setup>
  import { RouterView } from 'vue-router'
</script>

<template>
  <header class="main-header">
    <div class="container header-content">
      <router-link to="/" class="logo">VueApp</router-link>
      <nav class="nav-links">
        <router-link to="/" class="nav-item">首页</router-link>
        <router-link to="/company" class="nav-item">公司介绍</router-link>
        <router-link to="/environment" class="nav-item">公司环境</router-link>
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
    background-color: rgba(255, 255, 255, 0.95);
    box-shadow: 0 4px 14px rgba(18, 38, 63, 0.08);
    min-height: 70px;
    display: flex;
    align-items: center;
    position: sticky;
    top: 0;
    z-index: 1000;
    backdrop-filter: saturate(160%) blur(8px);
  }

  .header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    gap: 1.25rem;
    padding: 0.85rem 0;
  }

  .logo {
    font-size: 1.35rem;
    font-weight: 800;
    color: var(--primary-color);
    letter-spacing: 0.2px;
    white-space: nowrap;
  }

  .nav-links {
    display: flex;
    align-items: center;
    gap: 0.35rem;
    flex-wrap: wrap;
    justify-content: flex-end;
  }

  .nav-item {
    font-weight: 600;
    color: var(--secondary-color);
    transition: var(--transition);
    border-radius: 999px;
    padding: 0.42rem 0.72rem;
    font-size: 0.93rem;
  }

  .nav-item:hover {
    color: var(--primary-color);
    background: rgba(66, 184, 131, 0.12);
  }

  .nav-item.router-link-active {
    color: var(--primary-color);
    background: rgba(66, 184, 131, 0.16);
  }

  .btn-sm {
    padding: 0.45rem 0.95rem;
    font-size: 0.85rem;
    width: auto;
    margin-left: 0.35rem;
  }

  .main-content {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 992px) {
    .header-content {
      flex-direction: column;
      align-items: stretch;
      gap: 0.6rem;
    }

    .nav-links {
      justify-content: flex-start;
      row-gap: 0.5rem;
    }
  }

  @media (max-width: 576px) {
    .main-header {
      min-height: 0;
    }

    .logo {
      font-size: 1.2rem;
    }

    .nav-item {
      font-size: 0.88rem;
      padding: 0.35rem 0.58rem;
    }
  }
</style>
