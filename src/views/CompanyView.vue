<script setup>
  const milestones = [
    {
      year: '2019',
      event: '公司成立，专注企业数字化转型服务。'
    },
    {
      year: '2021',
      event: '上线首个 SaaS 产品，服务超过 500 家客户。'
    },
    {
      year: '2024',
      event: '完成全国交付网络布局，支持多行业解决方案。'
    }
  ]
</script>

<template>
  <div class="company-page">
    <section class="hero-section">
      <div class="container">
        <h1>公司介绍</h1>
        <p class="subtitle">以技术驱动业务增长，帮助企业构建可持续竞争力。</p>
      </div>
    </section>

    <section class="section">
      <div class="container intro-grid">
        <article class="card">
          <h2>我们是谁</h2>
          <p>
            我们是一家面向企业客户的数字化服务公司，提供产品咨询、系统研发与长期运维支持。
            团队覆盖产品、设计、研发和运营等关键岗位，能够快速完成从想法到落地的全流程交付。
          </p>
        </article>
        <article class="card">
          <h2>我们能做什么</h2>
          <p>
            在 Web 应用、内部管理系统与数据可视化平台方面，我们拥有成熟的方法论和工程实践。
            通过标准化流程与可复用组件，帮助客户缩短交付周期，稳定提升项目质量。
          </p>
        </article>
      </div>
    </section>

    <section class="section bg-light">
      <div class="container">
        <h2 class="section-title">发展历程</h2>
        <div class="timeline">
          <div v-for="item in milestones" :key="item.year" class="timeline-item">
            <span class="year">{{ item.year }}</span>
            <p>{{ item.event }}</p>
          </div>
        </div>
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

  .intro-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
  }

  .card {
    background: white;
    border-radius: 10px;
    padding: 2rem;
    box-shadow: var(--shadow);
  }

  .card h2 {
    margin-bottom: 1rem;
    color: var(--primary-color);
  }

  .section-title {
    text-align: center;
    margin-bottom: 2rem;
  }

  .timeline {
    max-width: 820px;
    margin: 0 auto;
    display: grid;
    gap: 1.25rem;
  }

  .timeline-item {
    background: white;
    border-radius: 10px;
    padding: 1.25rem 1.5rem;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
    border-left: 5px solid var(--primary-color);
  }

  .year {
    display: inline-block;
    font-weight: 700;
    margin-bottom: 0.5rem;
    color: var(--secondary-color);
  }
</style>
