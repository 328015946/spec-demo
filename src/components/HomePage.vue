<script setup>
  const features = [
    {
      title: 'Vue 3 + Vite',
      description: '采用最新的 Vue 3 组合式 API 和极速 Vite 构建工具，提供卓越的开发体验。',
      icon: '⚡'
    },
    {
      title: '现代设计',
      description: '简洁、响应式的界面设计，为用户提供最佳的使用体验。',
      icon: '🎨'
    },
    {
      title: '高可扩展性',
      description: '采用清晰的架构设计，能够随着项目需求的变化而灵活扩展。',
      icon: '🚀'
    }
  ]
</script>

<template>
  <div class="homepage">
    <!-- Hero 区域 -->
    <section class="hero">
      <div class="container">
        <h1 class="hero-title">欢迎使用 Vue 项目</h1>
        <p class="hero-subtitle">用于构建现代 Web 界面的渐进式框架。</p>
        <div class="cta-buttons">
          <router-link to="/register" class="btn btn-primary">立即开始</router-link>
          <router-link to="/login" class="btn btn-secondary">了解更多</router-link>
        </div>
      </div>
    </section>

    <!-- 功能特性 -->
    <section class="features">
      <div class="container">
        <h2 class="section-title">核心特性</h2>
        <div class="features-grid">
          <div v-for="feature in features" :key="feature.title" class="feature-card">
            <div class="feature-icon">{{ feature.icon }}</div>
            <h3 class="feature-title">{{ feature.title }}</h3>
            <p class="feature-desc">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 关于我们 -->
    <section class="about">
      <div class="container">
        <div class="about-content">
          <h2 class="section-title">为什么选择我们？</h2>
          <p>
            本项目是您下一个伟大创意的起点。我们为您搭建好了所有必要的基础设施，
            遵循行业最佳实践，为高性能和可维护性提供了坚实的基础。
          </p>
        </div>
      </div>
    </section>

    <!-- 页脚 -->
    <footer class="footer">
      <div class="container">
        <p>&copy; 2024 Vue 首页. 保留所有权利。</p>
        <div class="footer-links">
          <a href="#">隐私政策</a>
          <a href="#">服务条款</a>
          <a href="#">联系我们</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
  /* Hero 区域 */
  .hero {
    padding: 8rem 0;
    background: linear-gradient(135deg, var(--secondary-color), var(--primary-color));
    color: white;
    text-align: center;
  }

  .hero-title {
    font-size: 3.5rem;
    font-weight: 800;
    margin-bottom: 1.5rem;
    letter-spacing: -1px;
  }

  .hero-subtitle {
    font-size: 1.25rem;
    margin-bottom: 2.5rem;
    opacity: 0.9;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }

  .cta-buttons {
    display: flex;
    gap: 1rem;
    justify-content: center;
  }

  /* 功能特性区域 */
  .features {
    padding: 6rem 0;
    background-color: var(--gray-light);
  }

  .features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2.5rem;
  }

  .feature-card {
    background: white;
    padding: 2.5rem;
    border-radius: 12px;
    box-shadow: var(--shadow);
    transition: var(--transition);
    text-align: center;
  }

  .feature-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.15);
  }

  .feature-icon {
    font-size: 3rem;
    margin-bottom: 1.5rem;
  }

  .feature-title {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: var(--secondary-color);
  }

  .feature-desc {
    color: var(--gray-dark);
  }

  /* 关于我们区域 */
  .about {
    padding: 6rem 0;
    text-align: center;
  }

  .about-content {
    max-width: 800px;
    margin: 0 auto;
  }

  .about p {
    font-size: 1.15rem;
    color: var(--gray-dark);
  }

  /* 页脚 */
  .footer {
    padding: 3rem 0;
    background-color: var(--secondary-color);
    color: white;
    text-align: center;
  }

  .footer-links {
    margin-top: 1rem;
    display: flex;
    justify-content: center;
    gap: 2rem;
  }

  .footer-links a {
    font-size: 0.9rem;
    opacity: 0.7;
    transition: var(--transition);
  }

  .footer-links a:hover {
    opacity: 1;
  }

  /* 响应式 */
  @media (max-width: 768px) {
    .hero-title {
      font-size: 2.5rem;
    }

    .cta-buttons {
      flex-direction: column;
      padding: 0 2rem;
    }
  }
</style>
