<script setup>
const personnel = [
  {
    id: 1,
    name: '张明',
    role: '首席执行官 (CEO)',
    bio: '张明拥有超过15年的互联网行业经验，曾领导多家初创公司走向成功。他致力于通过技术创新改变人们的生活方式。',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=250&auto=format&fit=crop',
    skills: ['战略规划', '团队领导', '市场洞察']
  },
  {
    id: 2,
    name: '李华',
    role: '首席技术官 (CTO)',
    bio: '作为一名资深架构师，李华对分布式系统和前沿前端技术有着深厚的造诣。他负责公司的技术架构和研发方向。',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=250&auto=format&fit=crop',
    skills: ['架构设计', '全栈开发', '人工智能']
  },
  {
    id: 3,
    name: '王芳',
    role: '产品总监 (CPO)',
    bio: '王芳深耕产品设计10余年，始终坚持以用户为中心的设计理念。她主导了多款现象级产品的设计与迭代。',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=250&auto=format&fit=crop',
    skills: ['用户研究', '交互设计', '产品迭代']
  },
  {
    id: 4,
    name: '赵强',
    role: '研发主管',
    bio: '赵强是核心开发团队的灵魂人物，擅长解决复杂的技术难题。他热衷于开源社区，是多个知名项目的贡献者。',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=250&auto=format&fit=crop',
    skills: ['后端性能', '云计算', 'DevOps']
  },
  {
    id: 5,
    name: '孙莉',
    role: '市场部经理',
    bio: '孙莉拥有敏锐的市场嗅觉和卓越的沟通能力。她负责品牌推广和全球市场拓展战略。',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=250&auto=format&fit=crop',
    skills: ['品牌营销', '公共关系', '数据分析']
  },
  {
    id: 6,
    name: '陈刚',
    role: '客户成功主管',
    bio: '陈刚致力于为客户提供最优质的服务体验。他通过建立完善的反馈机制，不断提升客户满意度。',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=250&auto=format&fit=crop',
    skills: ['客户关系', '服务优化', '团队管理']
  }
]
</script>

<template>
  <div class="personnel-page">
    <section class="hero-section">
      <div class="container">
        <h1>人员介绍</h1>
        <p class="subtitle">汇聚精英人才，共创卓越未来</p>
      </div>
    </section>

    <section class="personnel-list section">
      <div class="container">
        <div class="personnel-grid">
          <div v-for="person in personnel" :key="person.id" class="person-card">
            <div class="person-image">
              <img :src="person.image" :alt="person.name" />
            </div>
            <div class="person-info">
              <h3>{{ person.name }}</h3>
              <p class="role">{{ person.role }}</p>
              <p class="bio">{{ person.bio }}</p>
              <div class="skills">
                <span v-for="skill in person.skills" :key="skill" class="skill-tag">{{ skill }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.personnel-page {
  flex: 1;
}

.hero-section {
  background: linear-gradient(135deg, var(--secondary-color) 0%, #1a2a3a 100%);
  color: white;
  padding: 6rem 0;
  text-align: center;
}

.hero-section h1 {
  font-size: 3.5rem;
  margin-bottom: 1rem;
  letter-spacing: 2px;
}

.subtitle {
  font-size: 1.5rem;
  opacity: 0.9;
  font-weight: 300;
}

.section {
  padding: 5rem 0;
  background-color: var(--gray-light);
}

.personnel-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 3rem;
}

.person-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
  transition: var(--transition);
  display: flex;
  flex-direction: column;
}

.person-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}

.person-image {
  height: 250px;
  overflow: hidden;
}

.person-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: var(--transition);
}

.person-card:hover .person-image img {
  transform: scale(1.05);
}

.person-info {
  padding: 2rem;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.person-info h3 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: var(--secondary-color);
}

.role {
  color: var(--primary-color);
  font-weight: 700;
  margin-bottom: 1rem;
  font-size: 1.1rem;
}

.bio {
  color: var(--gray-dark);
  font-size: 0.95rem;
  margin-bottom: 1.5rem;
  flex: 1;
}

.skills {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.skill-tag {
  background-color: #e8f5e9;
  color: var(--primary-color);
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
}

@media (max-width: 768px) {
  .hero-section h1 {
    font-size: 2.5rem;
  }
  
  .personnel-grid {
    grid-template-columns: 1fr;
  }
}
</style>
