<script setup>
const teamMembers = [
  {
    id: 1,
    name: 'Jane Doe',
    role: 'CEO & Founder',
    image: 'https://via.placeholder.com/150'
  },
  {
    id: 2,
    name: 'John Smith',
    role: 'Lead Developer',
    image: 'https://via.placeholder.com/150'
  },
  {
    id: 3,
    name: 'Emily Brown',
    role: 'Product Designer',
    image: 'https://via.placeholder.com/150'
  }
]
</script>

<template>
  <div class="about-page">
    <section class="hero-section">
      <div class="container">
        <h1>About Us</h1>
        <p class="subtitle">Building the future of modern web applications.</p>
      </div>
    </section>

    <section class="vision-mission section">
      <div class="container">
        <div class="grid">
          <div class="card">
            <h2>Our Vision</h2>
            <p>To empower every developer and organization with the tools they need to build exceptional digital experiences that push the boundaries of innovation.</p>
          </div>
          <div class="card">
            <h2>Our Mission</h2>
            <p>We are dedicated to creating high-performance, accessible, and intuitive software solutions that simplify complex workflows and drive business growth.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="team-section section bg-light">
      <div class="container">
        <h2 class="section-title">Our Team</h2>
        <div class="team-grid">
          <div v-for="member in teamMembers" :key="member.id" class="team-card">
            <div class="member-image">
              <img :src="member.image" :alt="member.name">
            </div>
            <h3>{{ member.name }}</h3>
            <p class="role">{{ member.role }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="contact-section section">
      <div class="container">
        <h2 class="section-title">Contact Us</h2>
        <div class="contact-grid">
          <div class="contact-info">
            <div class="info-item">
              <strong>Email</strong>
              <p>hello@vueapp.example.com</p>
            </div>
            <div class="info-item">
              <strong>Address</strong>
              <p>123 Tech Avenue, Suite 456<br>Innovation District<br>Palo Alto, CA 94301</p>
            </div>
          </div>
          <div class="map-placeholder">
            <div class="map-box">
              <span>Interactive Map Placeholder</span>
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
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
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
