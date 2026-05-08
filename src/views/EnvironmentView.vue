<script setup>
  const highlights = [
    '开放式协作办公区，沟通高效',
    '多功能会议室与路演空间，支持多场景协作',
    '专注区与休闲区分离，平衡效率与舒适'
  ]

  const spaces = [
    {
      title: '开放办公区',
      description: '自然采光与人体工学工位布局，提升日常工作舒适度。'
    },
    {
      title: '创意讨论区',
      description: '配备白板与投屏设备，支持快速头脑风暴与评审。'
    },
    {
      title: '休闲交流区',
      description: '咖啡与轻食区域，鼓励跨团队交流与灵感碰撞。'
    }
  ]

  const activities = ['每周技术分享', '新人导师机制', '季度团队团建']
</script>

<template>
  <div class="environment-page">
    <section class="hero-section">
      <div class="container">
        <h1>公司环境</h1>
        <p class="subtitle">舒适、开放、协作的办公环境，支持每个人持续成长。</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <h2 class="section-title">环境亮点</h2>
        <ul class="list-box">
          <li v-for="item in highlights" :key="item">{{ item }}</li>
        </ul>
      </div>
    </section>

    <section class="section bg-light">
      <div class="container">
        <h2 class="section-title">办公空间</h2>
        <div class="grid">
          <article v-for="item in spaces" :key="item.title" class="card">
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <h2 class="section-title">团队活动</h2>
        <ul class="list-box">
          <li v-for="item in activities" :key="item">{{ item }}</li>
        </ul>
      </div>
    </section>

    <section class="section cta-section">
      <div class="container cta-content">
        <h2>欢迎预约参观</h2>
        <p>想了解更多团队文化和办公环境，可通过邮件联系我们。</p>
        <a href="mailto:hello@vueapp.example.com" class="btn btn-primary">联系参观</a>
      </div>
    </section>
  </div>
</template>

<style scoped>
  .section {
    padding: 5rem 0;
  }

  .bg-light {
    background-color: var(--gray-light);
  }

  .hero-section {
    background: linear-gradient(135deg, var(--secondary-color), var(--primary-color));
    color: white;
    padding: 6rem 0;
    text-align: center;
  }

  .hero-section h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  .subtitle {
    font-size: 1.2rem;
    opacity: 0.9;
  }

  .section-title {
    text-align: center;
    margin-bottom: 2rem;
  }

  .list-box {
    max-width: 820px;
    margin: 0 auto;
    display: grid;
    gap: 0.8rem;
    padding-left: 1.2rem;
  }

  .list-box li {
    background: white;
    border-radius: 8px;
    padding: 0.9rem 1rem;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
    border-left: 4px solid var(--primary-color);
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 1.5rem;
  }

  .card {
    background: white;
    border-radius: 10px;
    padding: 1.5rem;
    box-shadow: var(--shadow);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }

  .card:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 24px rgba(0, 0, 0, 0.12);
  }

  .card h3 {
    color: var(--primary-color);
    margin-bottom: 0.8rem;
  }

  .cta-section {
    background: linear-gradient(135deg, var(--secondary-color), var(--primary-color));
    color: white;
  }

  .cta-content {
    text-align: center;
    max-width: 760px;
  }

  .cta-content h2 {
    margin-bottom: 1rem;
  }

  .cta-content p {
    margin-bottom: 1.5rem;
    opacity: 0.92;
  }
</style>
