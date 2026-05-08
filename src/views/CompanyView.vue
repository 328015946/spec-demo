<script setup>
  const stats = [
    { label: '服务企业客户', value: '1200+' },
    { label: '项目交付覆盖城市', value: '30+' },
    { label: '核心团队成员', value: '80+' },
    { label: '客户续约率', value: '92%' }
  ]

  const serviceAreas = [
    {
      title: '企业官网与品牌站',
      description: '打造高性能、易维护、具备品牌辨识度的官网与营销站点。'
    },
    {
      title: '业务中台与管理系统',
      description: '围绕业务流程提供可扩展的管理平台，提升组织协同效率。'
    },
    {
      title: '数据平台与可视化',
      description: '建设可观测的数据看板与决策分析系统，支持业务增长。'
    }
  ]

  const values = [
    {
      title: '客户价值优先',
      description: '坚持以业务目标为导向，确保每一项投入都能产生可衡量的结果。'
    },
    {
      title: '工程质量驱动',
      description: '通过规范化研发流程和持续集成体系，保证项目稳定、可持续演进。'
    },
    {
      title: '长期主义合作',
      description: '关注项目上线后的长期运营，提供持续优化和迭代支持。'
    }
  ]

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

  const collaborationSteps = [
    '需求访谈与目标澄清',
    '方案评审与里程碑规划',
    '敏捷开发与分阶段验收',
    '上线运维与持续优化'
  ]
</script>

<template>
  <div class="company-page">
    <section class="hero-section">
      <div class="container">
        <h1>公司介绍</h1>
        <p class="subtitle">以技术和产品能力为核心，帮助企业实现可持续增长。</p>
        <div class="stats-grid">
          <div v-for="item in stats" :key="item.label" class="stat-card">
            <p class="stat-value">{{ item.value }}</p>
            <p class="stat-label">{{ item.label }}</p>
          </div>
        </div>
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
        <h2 class="section-title">服务领域</h2>
        <div class="feature-grid">
          <article v-for="item in serviceAreas" :key="item.title" class="feature-card">
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <h2 class="section-title">核心价值观</h2>
        <div class="feature-grid">
          <article v-for="item in values" :key="item.title" class="feature-card">
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
          </article>
        </div>
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

    <section class="section">
      <div class="container process-section">
        <h2 class="section-title">合作流程</h2>
        <ol class="process-list">
          <li v-for="step in collaborationSteps" :key="step">{{ step }}</li>
        </ol>
      </div>
    </section>

    <section class="section cta-section">
      <div class="container cta-content">
        <h2>准备开启下一阶段数字化升级？</h2>
        <p>欢迎联系我们的顾问团队，我们将基于你的业务目标提供定制化方案。</p>
        <a href="mailto:hello@vueapp.example.com" class="btn btn-primary">联系商务团队</a>
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
    margin-bottom: 2rem;
  }

  .stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    gap: 1rem;
  }

  .stat-card {
    background: rgba(255, 255, 255, 0.12);
    border-radius: 10px;
    padding: 1rem;
  }

  .stat-value {
    font-size: 1.6rem;
    font-weight: 700;
  }

  .stat-label {
    opacity: 0.9;
    font-size: 0.92rem;
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

  .feature-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 1.5rem;
  }

  .feature-card {
    background: white;
    border-radius: 10px;
    padding: 1.5rem;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
  }

  .feature-card h3 {
    color: var(--primary-color);
    margin-bottom: 0.75rem;
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

  .process-section {
    max-width: 820px;
  }

  .process-list {
    display: grid;
    gap: 0.9rem;
    padding-left: 1.25rem;
  }

  .process-list li {
    background: white;
    border-radius: 8px;
    padding: 0.9rem 1rem;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
  }

  .cta-section {
    background-color: var(--secondary-color);
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
