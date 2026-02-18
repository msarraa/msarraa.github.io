<template>
  <main class="page">
    <!-- Hero / Intro -->
    <section class="hero">
      <p class="kicker">Hi, I’m</p>
      <h1>Your Name</h1>
      <p class="lead">
        UX & Product Designer who turns complex ideas into clear, impactful digital experiences.
      </p>

      <div class="cta">
        <a class="btn" href="#projects">See projects</a>
        <a class="btn ghost" href="#contact">Contact</a>
      </div>
    </section>

    <!-- Projects overview (sida 2–4 style) -->
    <section id="projects" class="section">
      <h2 class="sectionTitle">Projects</h2>

      <div class="stack">
        <ProjectPreviewCard
          v-for="(p, i) in projects"
          :key="p.slug"
          :project="p"
          :flip="i % 2 === 1"
        />
      </div>
    </section>

    <!-- About -->
    <section id="about" class="section">
      <h2 class="sectionTitle">About</h2>
      <div class="card">
        <p>
          I am a UX &amp; Product Designer with a strong interest in user-centered design, research,
          and concept development...
        </p>
      </div>
    </section>

    <!-- Contact -->
    <section id="contact" class="section">
      <h2 class="sectionTitle">Contact</h2>
      <div class="card">
        <p>If you’d like to collaborate or discuss opportunities, reach out:</p>
        <div class="links">
          <a class="pill" href="mailto:yourmail@email.com">yourmail@email.com</a>
          <a class="pill" href="https://www.linkedin.com/in/your-linkedin/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a class="pill" href="https://github.com/your-github" target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import ProjectPreviewCard from "../components/ProjectPreviewCard.vue"
import { projects } from "../data/projects"
</script>

<style scoped>
.page { max-width: 1100px; margin: 0 auto; padding: 40px 20px 80px; }

.hero {
  border-radius: 26px;
  padding: 34px 24px;
  text-align: center;
  background: linear-gradient(180deg, #bfe2ff, #d9d8ff);
  box-shadow: 0 12px 30px rgba(0,0,0,.06);
}
.kicker { margin: 0 0 8px; color: #374151; text-transform: uppercase; font-size: 12px; letter-spacing: .08em; }
.hero h1 { margin: 0 0 10px; font-size: 44px; }
.lead { margin: 0 auto; max-width: 70ch; line-height: 1.7; color: #374151; }

.cta { display: flex; gap: 12px; justify-content: center; margin-top: 16px; flex-wrap: wrap; }
.btn {
  padding: 10px 16px;
  border-radius: 999px;
  border: 1px solid #111827;
  text-decoration: none;
  color: inherit;
}
.ghost { border-color: #e5e7eb; }

.section { margin-top: 40px; }
.sectionTitle { margin: 0 0 16px; font-size: 26px; }

.stack { display: grid; gap: 28px; }

.card {
  background: #fff;
  border-radius: 18px;
  padding: 18px;
  box-shadow: 0 12px 28px rgba(0,0,0,.06);
}

.links { display: flex; gap: 12px; flex-wrap: wrap; margin-top: 12px; }
.pill {
  padding: 10px 14px;
  border-radius: 999px;
  border: 1px solid #111827;
  text-decoration: none;
  color: inherit;
}
</style>
