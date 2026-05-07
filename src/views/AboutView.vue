<script setup>
  const teamMembers = [
    {
      id: 1,
      name: '张明',
      role: '首席执行官 & 创始人',
      image: 'https://via.placeholder.com/150'
    },
    {
      id: 2,
      name: '李华',
      role: '技术负责人',
      image: 'https://via.placeholder.com/150'
    },
    {
      id: 3,
      name: '王芳',
      role: '产品设计师',
      image: 'https://via.placeholder.com/150'
    }
  ]
</script>

<template>
  <div class="about-page">
    <section class="hero-section">
      <div class="container">
        <h1>关于我们</h1>
        <p class="subtitle">构建现代 Web 应用的未来。</p>
      </div>
    </section>

    <section class="vision-mission section">
      <div class="container">
        <div class="grid">
          <div class="card">
            <h2>我们的愿景</h2>
            <p>为每一位开发者和组织提供所需的工具，帮助他们打造突破性的数字体验，推动创新的边界。</p>
          </div>
          <div class="card">
            <h2>我们的使命</h2>
            <p>致力于创建高性能、易访问、直观的软件解决方案，简化复杂的工作流程，驱动业务增长。</p>
          </div>
        </div>
      </div>
    </section>

    <section class="team-section section bg-light">
      <div class="container">
        <h2 class="section-title">我们的团队</h2>
        <div class="team-grid">
          <div v-for="member in teamMembers" :key="member.id" class="team-card">
            <div class="member-image">
              <img :src="member.image" :alt="member.name" />
            </div>
            <h3>{{ member.name }}</h3>
            <p class="role">{{ member.role }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="contact-section section">
      <div class="container">
        <h2 class="section-title">联系我们</h2>
        <div class="contact-grid">
          <div class="contact-info">
            <div class="info-item">
              <strong>邮箱</strong>
              <p>hello@vueapp.example.com</p>
            </div>
            <div class="info-item">
              <strong>地址</strong>
              <p>北京市朝阳区科技大道 123 号<br />创新产业园<br />邮编：100000</p>
            </div>
          </div>
          <div class="map-placeholder">
            <div class="map-box">
              <span>地图占位区域</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
  .about-page {
    flex: 1;
  }

  .section {
    padding: 5rem 0;
  }

  .bg-light {
    background-color: var(--gray-light);
  }

  .hero-section {
    background-color: var(--secondary-color);
    color: white;
    padding: 6rem 0;
    text-align: center;
  }

  .hero-section h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  .subtitle {
    font-size: 1.25rem;
    opacity: 0.9;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
  }

  .card {
    padding: 2rem;
    background: white;
    border-radius: 8px;
    box-shadow: var(--shadow);
  }

  .card h2 {
    color: var(--primary-color);
    margin-bottom: 1rem;
  }

  .team-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 3rem;
  }

  .team-card {
    text-align: center;
    background: white;
    padding: 2rem;
    border-radius: 8px;
    transition: var(--transition);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  }

  .team-card:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow);
  }

  .member-image {
    width: 150px;
    height: 150px;
    margin: 0 auto 1.5rem;
    border-radius: 50%;
    overflow: hidden;
    border: 4px solid var(--primary-color);
  }

  .member-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .team-card h3 {
    margin-bottom: 0.5rem;
  }

  .role {
    color: var(--gray-dark);
    font-weight: 500;
  }

  .contact-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 4rem;
    align-items: center;
  }

  .info-item {
    margin-bottom: 2rem;
  }

  .info-item strong {
    display: block;
    font-size: 1.1rem;
    color: var(--primary-color);
    margin-bottom: 0.5rem;
  }

  .map-placeholder {
    aspect-ratio: 16 / 9;
    background: var(--gray-light);
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px dashed var(--gray-dark);
    color: var(--gray-dark);
  }

  .map-box {
    text-align: center;
  }
</style>
