<script setup>
  import { ref, computed, watch } from 'vue'
  import { useRoute } from 'vue-router'

  const props = defineProps({
    mode: {
      type: String,
      default: 'login'
    }
  })

  const route = useRoute()
  const currentMode = ref(props.mode)

  // 在登录/注册之间切换时更新模式
  watch(
    () => route.path,
    () => {
      currentMode.value = route.path.includes('register') ? 'register' : 'login'
    }
  )

  const isLogin = computed(() => currentMode.value === 'login')

  const formData = ref({
    email: '',
    password: '',
    confirmPassword: '',
    name: ''
  })

  const handleSubmit = () => {
    console.log('表单提交:', formData.value)
    alert(`${isLogin.value ? '登录' : '注册'}成功！（演示模式）`)
  }
</script>

<template>
  <div class="auth-page">
    <div class="auth-card">
      <div class="auth-header">
        <h2>{{ isLogin ? '欢迎回来' : '创建账号' }}</h2>
        <p>{{ isLogin ? '输入您的凭据以访问您的账号' : '填写以下信息开始使用' }}</p>
      </div>

      <form @submit.prevent="handleSubmit" class="auth-form">
        <div v-if="!isLogin" class="form-group">
          <label for="name">姓名</label>
          <input id="name" v-model="formData.name" type="text" placeholder="请输入姓名" autocomplete="name" required />
        </div>

        <div class="form-group">
          <label for="email">邮箱地址</label>
          <input id="email" v-model="formData.email" type="email" placeholder="name@example.com" autocomplete="email" required />
        </div>

        <div class="form-group">
          <label for="password">密码</label>
          <input id="password" v-model="formData.password" type="password" placeholder="••••••••" autocomplete="current-password" required />
        </div>

        <div v-if="!isLogin" class="form-group">
          <label for="confirm-password">确认密码</label>
          <input id="confirm-password" v-model="formData.confirmPassword" type="password" placeholder="••••••••" autocomplete="new-password" required />
        </div>

        <button type="submit" class="btn btn-primary btn-block">
          {{ isLogin ? '登录' : '注册' }}
        </button>
      </form>

      <div class="auth-footer">
        <p v-if="isLogin">
          还没有账号？
          <router-link to="/register" class="link">立即注册</router-link>
        </p>
        <p v-else>
          已有账号？
          <router-link to="/login" class="link">立即登录</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .auth-page {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    background-color: var(--gray-light);
    min-height: calc(100vh - 70px);
  }

  .auth-card {
    background: white;
    padding: 3rem;
    border-radius: 12px;
    box-shadow: var(--shadow);
    width: 100%;
    max-width: 450px;
  }

  .auth-header {
    text-align: center;
    margin-bottom: 2.5rem;
  }

  .auth-header h2 {
    font-size: 2rem;
    color: var(--secondary-color);
    margin-bottom: 0.5rem;
  }

  .auth-header p {
    color: var(--gray-dark);
  }

  .auth-form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .form-group {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .form-group label {
    font-weight: 600;
    font-size: 0.9rem;
    color: var(--text-color);
  }

  input {
    padding: 0.8rem 1rem;
    border: 1px solid #ddd;
    border-radius: 8px;
    font-size: 1rem;
    transition: var(--transition);
  }

  input:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 3px rgba(66, 184, 131, 0.1);
  }

  .btn-block {
    width: 100%;
    margin-top: 1rem;
  }

  .auth-footer {
    margin-top: 2rem;
    text-align: center;
    font-size: 0.95rem;
    color: var(--gray-dark);
  }

  .link {
    color: var(--primary-color);
    font-weight: 600;
  }

  .link:hover {
    text-decoration: underline;
  }
</style>
