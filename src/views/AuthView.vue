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

// Update mode if navigation happens between login/register
watch(() => route.path, () => {
  currentMode.value = route.path.includes('register') ? 'register' : 'login'
})

const isLogin = computed(() => currentMode.value === 'login')

const formData = ref({
  email: '',
  password: '',
  confirmPassword: '',
  name: ''
})

const handleSubmit = () => {
  console.log('Form submitted:', formData.value)
  alert(`${isLogin.value ? 'Login' : 'Registration'} successful! (Demo only)`)
}
</script>

<template>
  <div class="auth-page">
    <div class="auth-card">
      <div class="auth-header">
        <h2>{{ isLogin ? 'Welcome Back' : 'Create Account' }}</h2>
        <p>{{ isLogin ? 'Enter your credentials to access your account' : 'Fill in the details to get started' }}</p>
      </div>

      <form @submit.prevent="handleSubmit" class="auth-form">
        <div v-if="!isLogin" class="form-group">
          <label>Full Name</label>
          <input v-model="formData.name" type="text" placeholder="John Doe" required />
        </div>

        <div class="form-group">
          <label>Email Address</label>
          <input v-model="formData.email" type="email" placeholder="name@example.com" required />
        </div>

        <div class="form-group">
          <label>Password</label>
          <input v-model="formData.password" type="password" placeholder="••••••••" required />
        </div>

        <div v-if="!isLogin" class="form-group">
          <label>Confirm Password</label>
          <input v-model="formData.confirmPassword" type="password" placeholder="••••••••" required />
        </div>

        <button type="submit" class="btn btn-primary btn-block">
          {{ isLogin ? 'Sign In' : 'Sign Up' }}
        </button>
      </form>

      <div class="auth-footer">
        <p v-if="isLogin">
          Don't have an account? 
          <router-link to="/register" class="link">Register here</router-link>
        </p>
        <p v-else>
          Already have an account? 
          <router-link to="/login" class="link">Login here</router-link>
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
  min-height: calc(100vh - 70px); /* Adjust for header if needed */
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
