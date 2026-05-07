<script setup>
const features = [
  {
    title: 'Vue 3 + Vite',
    description: 'Powered by the latest Vue 3 Composition API and lightning-fast Vite build tool.',
    icon: '⚡'
  },
  {
    title: 'Modern Design',
    description: 'Clean and responsive interface designed for the best user experience.',
    icon: '🎨'
  },
  {
    title: 'Highly Scalable',
    description: 'Built with a clean architecture that grows with your project needs.',
    icon: '🚀'
  }
]
</script>

<template>
  <div class="homepage">
    <!-- Hero Section -->
    <section class="hero">
      <div class="container">
        <h1 class="hero-title">Welcome to Your Vue Project</h1>
        <p class="hero-subtitle">The progressive framework for building modern web interfaces.</p>
        <div class="cta-buttons">
          <router-link to="/register" class="btn btn-primary">Get Started</router-link>
          <router-link to="/login" class="btn btn-secondary">Learn More</router-link>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features">
      <div class="container">
        <h2 class="section-title">Key Features</h2>
        <div class="features-grid">
          <div v-for="feature in features" :key="feature.title" class="feature-card">
            <div class="feature-icon">{{ feature.icon }}</div>
            <h3 class="feature-title">{{ feature.title }}</h3>
            <p class="feature-desc">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section class="about">
      <div class="container">
        <div class="about-content">
          <h2 class="section-title">Why Choose Us?</h2>
          <p>
            This project is a starting point for your next big idea. We've set up everything you need 
            to start building right away, following industry best practices and providing a solid 
            foundation for performance and maintainability.
          </p>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <div class="container">
        <p>&copy; 2024 Vue Homepage. All rights reserved.</p>
        <div class="footer-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Contact Us</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* Hero Section */
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

.btn {
  padding: 0.8rem 2rem;
  border-radius: 8px;
  font-weight: 600;
  transition: var(--transition);
  cursor: pointer;
}

.btn-primary {
  background-color: var(--primary-color);
  color: white;
  border: 2px solid var(--primary-color);
}

.btn-primary:hover {
  background-color: #3aa673;
  border-color: #3aa673;
  transform: translateY(-2px);
}

.btn-secondary {
  background-color: transparent;
  color: white;
  border: 2px solid white;
}

.btn-secondary:hover {
  background-color: rgba(255, 255, 255, 0.1);
  transform: translateY(-2px);
}

/* Features Section */
.features {
  padding: 6rem 0;
  background-color: var(--gray-light);
}

.section-title {
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 4rem;
  color: var(--secondary-color);
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

/* About Section */
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

/* Footer */
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

/* Responsive */
@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }
  
  .cta-buttons {
    flex-direction: column;
    padding: 0 2rem;
  }
  
  .features-grid {
    grid-template-columns: 1fr;
  }
}
</style>
