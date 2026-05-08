<script setup>
  const jobs = [
    {
      title: '前端开发工程师',
      type: '全职 · 深圳',
      summary: '负责 Web 产品前端架构与功能开发，持续优化用户体验与性能。'
    },
    {
      title: '后端开发工程师',
      type: '全职 · 深圳',
      summary: '负责业务服务设计与实现，保障系统稳定性与可扩展性。'
    },
    {
      title: '产品经理',
      type: '全职 · 深圳',
      summary: '主导需求分析和产品规划，推动跨团队协作与项目落地。'
    }
  ]

  const benefits = ['五险一金与年度体检', '弹性工作时间', '年度培训与技术分享', '团队旅游与节日福利']

  const process = ['在线投递简历', 'HR 初筛沟通', '业务面试评估', 'Offer 发放与入职']
</script>

<template>
  <div class="recruitment-page">
    <section class="hero-section">
      <div class="container">
        <h1>加入我们</h1>
        <p class="subtitle">和一群热爱产品与技术的人，一起做有价值的事。</p>
        <div class="hero-tags">
          <span>成长空间大</span>
          <span>技术氛围浓</span>
          <span>业务持续增长</span>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <h2 class="section-title">热招岗位</h2>
        <div class="job-grid">
          <article v-for="job in jobs" :key="job.title" class="job-card">
            <h3>{{ job.title }}</h3>
            <p class="job-meta">{{ job.type }}</p>
            <p>{{ job.summary }}</p>
            <a href="mailto:jobs@vueapp.example.com" class="job-link">投递该岗位</a>
          </article>
        </div>
      </div>
    </section>

    <section class="section bg-light">
      <div class="container">
        <h2 class="section-title">你将获得</h2>
        <ul class="benefit-list">
          <li v-for="item in benefits" :key="item">{{ item }}</li>
        </ul>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <h2 class="section-title">招聘流程</h2>
        <ol class="process-list">
          <li v-for="step in process" :key="step">{{ step }}</li>
        </ol>
      </div>
    </section>

    <section class="section cta-section">
      <div class="container cta-content">
        <h2>准备好投递了吗？</h2>
        <p>请将简历发送至 jobs@vueapp.example.com，邮件标题格式：岗位-姓名。</p>
        <a href="mailto:jobs@vueapp.example.com" class="btn btn-primary">立即投递</a>
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
    max-width: 620px;
    margin: 0 auto 1.25rem;
  }

  .hero-tags {
    display: flex;
    justify-content: center;
    gap: 0.75rem;
    flex-wrap: wrap;
  }

  .hero-tags span {
    background: rgba(255, 255, 255, 0.14);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 999px;
    padding: 0.35rem 0.9rem;
    font-size: 0.88rem;
  }

  .section-title {
    text-align: center;
    margin-bottom: 2rem;
  }

  .job-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 1.5rem;
  }

  .job-card {
    background: white;
    border-radius: 10px;
    padding: 1.5rem;
    box-shadow: var(--shadow);
    border: 1px solid rgba(0, 0, 0, 0.04);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }

  .job-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 24px rgba(0, 0, 0, 0.12);
  }

  .job-meta {
    color: var(--primary-color);
    font-weight: 600;
    margin-bottom: 0.75rem;
    display: inline-block;
    background: rgba(33, 150, 243, 0.12);
    padding: 0.25rem 0.65rem;
    border-radius: 999px;
    font-size: 0.88rem;
  }

  .job-link {
    display: inline-flex;
    margin-top: 1rem;
    color: var(--primary-color);
    font-weight: 600;
  }

  .benefit-list,
  .process-list {
    max-width: 780px;
    margin: 0 auto;
    display: grid;
    gap: 0.8rem;
    padding-left: 1.2rem;
  }

  .benefit-list li,
  .process-list li {
    background: white;
    border-radius: 8px;
    padding: 0.9rem 1rem;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
    border-left: 4px solid var(--primary-color);
  }

  .process-list {
    counter-reset: step;
    list-style: none;
    padding-left: 0;
  }

  .process-list li {
    counter-increment: step;
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    gap: 0.75rem;
  }

  .process-list li::before {
    content: counter(step);
    width: 26px;
    height: 26px;
    border-radius: 50%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: var(--primary-color);
    color: white;
    font-size: 0.82rem;
    font-weight: 700;
  }

  .cta-section {
    background: linear-gradient(135deg, var(--secondary-color), var(--primary-color));
    color: white;
  }

  .cta-content {
    text-align: center;
  }

  .cta-content h2 {
    margin-bottom: 1rem;
  }

  .cta-content p {
    margin-bottom: 1.5rem;
    opacity: 0.92;
  }

  @media (max-width: 768px) {
    .hero-section h1 {
      font-size: 2.3rem;
    }
  }
</style>
