<!-- src/pages/About.vue -->
<template>
  <main class="page">
    <!-- AboutHeader -->
    <header class="aboutHeader">
      <p class="kicker">About</p>
      <h1>UX &amp; Product Designer</h1>
      <p class="lead">
        I design digital experiences that balance usability, strategy, and meaningful impact.
      </p>
      <p class="sublead">
        Curious by nature, I enjoy turning complex challenges into intuitive solutions through research, structure, and thoughtful design.
      </p>
    </header>

    <!-- About Me -->
    <section class="section">
      <div class="grid">
        <article class="card">
          <h2>About me</h2>
          <p>
            I am a UX &amp; Product Designer with a strong interest in user-centered design, research,
            and concept development. My work focuses on understanding real user needs and translating
            them into clear, functional, and visually cohesive digital experiences.
          </p>

          <p>
            Through projects such as CommuniQuiz, Elevate, and UnikSyn, I have worked with research,
            personas, ideation, prototyping, usability testing, and visual storytelling. I value
            structured processes and iterative improvement — testing, refining, and continuously learning.
          </p>

          <p>
            What drives me most is designing solutions that create real value. Whether it’s simplifying
            interaction, increasing accessibility, or supporting sustainability, I aim to combine
            creativity with analytical thinking to build thoughtful and impactful products.
          </p>

          <p>
            I enjoy collaborating in teams where ideas are challenged constructively, and where design
            is seen not only as aesthetics, but as strategy and problem-solving.
          </p>
        </article>

        <!-- Optional: quick facts card (nice for layout like your PDF) -->
        <aside class="card facts">
          <h2>Quick facts</h2>
          <ul>
            <li><strong>Focus:</strong> UX, Product Thinking, Research, Prototyping</li>
            <li><strong>Strengths:</strong> Structure, clarity, visual storytelling</li>
            <li><strong>Interested in:</strong> Accessibility, sustainability, impact</li>
          </ul>

          <div class="chips">
            <span class="chip">User research</span>
            <span class="chip">Personas</span>
            <span class="chip">Wireframes</span>
            <span class="chip">Usability testing</span>
            <span class="chip">Figma</span>
          </div>
        </aside>
      </div>
    </section>

    <!-- Contact Me -->
    <section class="section contactCard">
      <h2>Let’s connect</h2>
      <p class="contactText">
        If you would like to collaborate, discuss a project, or explore opportunities, feel free to reach out.
      </p>

      <div class="contactLinks">
        <a class="link" href="mailto:yourmail@email.com">yourmail@email.com</a>
        <a class="link" href="https://www.linkedin.com/in/your-linkedin/" target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a class="link" href="https://github.com/your-github" target="_blank" rel="noreferrer">
          GitHub
        </a>
      </div>

      <p class="contactNote">
        I’m always open to meaningful conversations and new challenges.
      </p>
    </section>
  </main>
</template>

<script setup>
// No script needed for this page yet
</script>

<style scoped>
.page {
  max-width: 1100px;
  margin: 0 auto;
  padding: 40px 20px 80px;
}

/* Header (matches the soft gradient vibe from your PDF) */
.aboutHeader {
  border-radius: 26px;
  padding: 34px 24px;
  text-align: center;
  background: linear-gradient(180deg, #bfe2ff, #d9d8ff);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.06);
}
.kicker {
  margin: 0 0 8px;
  color: #374151;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-size: 12px;
}
.aboutHeader h1 {
  margin: 0 0 10px;
  font-size: 44px;
}
.lead {
  margin: 0 auto 10px;
  max-width: 70ch;
  font-size: 18px;
  line-height: 1.7;
  color: #111827;
}
.sublead {
  margin: 0 auto;
  max-width: 78ch;
  line-height: 1.7;
  color: #374151;
}

/* Sections */
.section {
  margin-top: 28px;
}

.grid {
  display: grid;
  grid-template-columns: 1.4fr 0.9fr;
  gap: 16px;
}

.card {
  background: #fff;
  border-radius: 18px;
  padding: 18px;
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.06);
}

.card h2 {
  margin: 0 0 10px;
  font-size: 18px;
}

.card p {
  margin: 0 0 12px;
  color: #374151;
  line-height: 1.75;
}

.facts ul {
  margin: 0 0 14px;
  padding-left: 18px;
  color: #374151;
  line-height: 1.7;
}
.facts li {
  margin: 8px 0;
}

.chips {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
.chip {
  font-size: 12px;
  padding: 6px 10px;
  border: 1px solid #e5e7eb;
  border-radius: 999px;
  color: #111827;
  background: #f9fafb;
}

/* Contact */
.contactCard {
  border-radius: 22px;
  padding: 22px;
  background: #fff;
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.06);
}
.contactText {
  margin: 0 0 14px;
  color: #374151;
  line-height: 1.7;
}
.contactLinks {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 10px;
}
.link {
  display: inline-block;
  padding: 10px 14px;
  border-radius: 999px;
  border: 1px solid #111827;
  text-decoration: none;
  color: inherit;
}
.link:hover {
  transform: translateY(-1px);
}
.contactNote {
  margin: 0;
  color: #374151;
}

/* Responsive */
@media (max-width: 900px) {
  .grid {
    grid-template-columns: 1fr;
  }
  .aboutHeader h1 {
    font-size: 36px;
  }
}
</style>
