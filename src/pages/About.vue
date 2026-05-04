<template>
  <main class="aboutPage">
    <section class="aboutHero">
      <div class="heroText">
        <p class="sectionKicker">About me</p>
        <h1>Designing with empathy, structure, and technical depth.</h1>
        <p class="heroLead">
          I’m a UX Engineer & Product Designer who bridges user-centered design,
          accessibility, and technical implementation to create meaningful digital experiences.
        </p>
      </div>

      <div class="heroProfile">
  <div class="imageFrame">
    <img :src="profileImage" alt="Portrait of Msarra Albani" />
  </div>

  <div class="profileInfo">
    <p class="cardLabel">Profile</p>
    <h2>UX / Product Design + Engineering mindset</h2>
    <p>
      My background combines interaction design, computer science, system development,
      and practical accessibility work.
    </p>
  </div>
</div>

    </section>

    <section class="storyGrid">
      <article class="storyCard large">
        <p class="sectionKicker">My story</p>
        <h2>From understanding people to building better systems.</h2>

        <p>
          I am currently completing a Civil Engineering degree in Interaction & Design at
          Umeå University, alongside a Bachelor’s degree in Computer Science. This combination
          has shaped how I approach digital products: with both user empathy and technical
          understanding.
        </p>

        <p>
          My work focuses on transforming user needs, research insights, and complex problems
          into clear, accessible, and functional experiences. I enjoy working across the full
          process — from needs analysis, user flows, and prototyping to implementation,
          testing, and iteration.
        </p>

        <p>
          Through projects such as Elevate, CommuniQuiz, and a rule-based study progression
          system, I have explored how design can support inclusion, clarity, engagement, and
          trust in digital services.
        </p>
      </article>

      <aside class="quickCard">
        <p class="sectionKicker">Quick facts</p>

        <div class="fact">
          <span>Education</span>
          <strong>Civil Engineering in Interaction & Design</strong>
        </div>

        <div class="fact">
          <span>Also studying</span>
          <strong>Bachelor’s in Computer Science</strong>
        </div>

        <div class="fact">
          <span>Focus</span>
          <strong>UX, Product Design, Accessibility, UX Engineering</strong>
        </div>

        <div class="fact">
          <span>Location</span>
          <strong>Umeå, Sweden</strong>
        </div>
      </aside>
    </section>

    <section class="foundation">
      <div class="sectionIntro">
        <p class="sectionKicker">Foundation</p>
        <h2>Design thinking with technical depth.</h2>
        <p>
          My strongest value is the ability to move between user needs, product thinking,
          accessibility, and implementation.
        </p>
      </div>

      <div class="foundationHero">
        <p>
          I combine user-centered design, accessibility, and technical systems thinking
          to create digital products that are not only intuitive, but sustainable,
          scalable, and grounded in real-world implementation.
        </p>
      </div>

      <div class="foundationGrid">
        <article class="foundationCard">
          <span class="foundationNumber">01</span>
          <h3>User-centered design</h3>
          <p>
            Research, user flows, prototyping, usability testing, and product thinking
            grounded in real user needs.
          </p>
        </article>

        <article class="foundationCard">
          <span class="foundationNumber">02</span>
          <h3>Accessibility</h3>
          <p>
            Practical experience with WCAG, inclusive interfaces, and designing for
            clarity, trust, and broader usability.
          </p>
        </article>

        <article class="foundationCard">
          <span class="foundationNumber">03</span>
          <h3>Technical execution</h3>
          <p>
            Frontend, backend, system logic, APIs, Git, and implementation knowledge that
            strengthens product feasibility and collaboration.
          </p>
        </article>
      </div>
    </section>

    <section class="skills">
      <div class="sectionIntro">
        <p class="sectionKicker">Skills & tools</p>
        <h2>What I bring into product teams.</h2>
      </div>

      <div class="skillsGrid">
        <article class="skillCard">
          <h3>UX & Product</h3>
          <div class="tags">
            <span>User research</span>
            <span>Personas</span>
            <span>User flows</span>
            <span>Wireframing</span>
            <span>Prototyping</span>
            <span>Usability testing</span>
          </div>
        </article>

        <article class="skillCard">
          <h3>Design tools</h3>
          <div class="tags">
            <span>Figma</span>
            <span>Photoshop</span>
            <span>Visual storytelling</span>
            <span>Design systems</span>
          </div>
        </article>

        <article class="skillCard">
          <h3>Development</h3>
          <div class="tags">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>TypeScript</span>
            <span>React</span>
            <span>Angular</span>
            <span>Vue</span>
          </div>
        </article>

        <article class="skillCard">
          <h3>Systems & backend</h3>
          <div class="tags">
            <span>Java</span>
            <span>C# / .NET</span>
            <span>REST APIs</span>
            <span>Git</span>
            <span>Linux</span>
            <span>System design</span>
          </div>
        </article>
      </div>
    </section>

    <section class="approach">
      <p class="sectionKicker">How I work</p>
      <h2>I care about clarity before decoration.</h2>

      <div class="approachGrid">
        <p>
          I like to start by understanding the problem, the users, and the context before
          jumping into solutions.
        </p>
        <p>
          I work iteratively: researching, mapping, prototyping, testing, and improving based
          on feedback.
        </p>
        <p>
          I value collaboration between design and development, because the best products are
          shaped by both user insight and technical reality.
        </p>
      </div>
    </section>

    <section class="aboutContact">
      <p class="sectionKicker">Contact</p>
      <h2>Let’s connect.</h2>
      <p>
        I’m open to UX/Product Design roles, UX Engineer opportunities, and hybrid positions
        where design, accessibility, and technology meet.
      </p>

      <div class="contactActions">
        <a class="button primary" href="mailto:msarra.albani@gmail.com">Email me</a>
        <a class="button secondary" href="https://www.linkedin.com/in/your-linkedin/" target="_blank" rel="noreferrer">
          LinkedIn
        </a>
      </div>
    </section>
  </main>
</template>

<script setup>
import profileImage from "../assets/images/Msarra.jpeg"
</script>

<style scoped>
.aboutPage {
  max-width: var(--container);
  margin: 0 auto;
  padding: 48px 20px 96px;
}

.sectionKicker {
  margin: 0 0 10px;
  color: var(--accent);
  font-size: 13px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.aboutHero {
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: 24px;
  align-items: stretch;
}

.heroText,
.heroCard,
.storyCard,
.quickCard,
.foundationHero,
.foundationCard,
.skillCard,
.approach,
.aboutContact {
  border: 1px solid var(--border);
  box-shadow: var(--shadow-lg);
}

.heroText {
  padding: 42px;
  border-radius: var(--radius-lg);
  background:
    radial-gradient(circle at top right, rgba(221, 214, 254, 0.75), transparent 34%),
    linear-gradient(135deg, #dbeafe, #ffffff);
}

.heroText h1 {
  margin: 0;
  max-width: 780px;
  color: var(--text);
  font-size: clamp(42px, 6vw, 76px);
  line-height: 0.96;
  letter-spacing: -0.07em;
}

.heroLead {
  margin: 24px 0 0;
  max-width: 680px;
  color: var(--muted);
  font-size: 18px;
  line-height: 1.75;
}

.heroCard {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 30px;
  border-radius: var(--radius-lg);
  background:
    radial-gradient(circle at bottom left, rgba(191, 219, 254, 0.45), transparent 38%),
    var(--surface);
}

.heroProfile {
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 100%;
  border-radius: var(--radius-lg);
  background:
    radial-gradient(circle at bottom left, rgba(235, 200, 178, 0.22), transparent 38%),
    var(--surface);
  border: 1px solid var(--border);
  box-shadow: var(--shadow-lg);
  overflow: hidden;
}

/* Bilden fyller hela toppdelen */
.imageFrame {
  width: 100%;
  height: 440px; /* Justera beroende på hur hög du vill ha bilden */
  overflow: hidden;
  background: linear-gradient(135deg, var(--blue-soft), var(--lavender-soft));
}

/* Bilden fyller exakt containern */
.imageFrame img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  display: block;
}

/* Textdelen under */
.profileInfo {
  padding: 26px;
}

.cardLabel {
  margin: 0 0 10px;
  color: var(--soft);
  font-size: 13px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.profileInfo h2 {
  margin: 0;
  color: var(--text);
  font-size: 30px;
  line-height: 1.05;
  letter-spacing: -0.04em;
}

.profileInfo p:not(.cardLabel) {
  margin: 16px 0 0;
  color: var(--muted);
  line-height: 1.75;
  font-size: 16px;
}

.storyGrid {
  display: grid;
  grid-template-columns: 1.35fr 0.65fr;
  gap: 18px;
  margin-top: 22px;
}

.storyCard,
.quickCard {
  background: var(--surface);
  border-radius: var(--radius-md);
  padding: 28px;
}

.storyCard h2 {
  margin: 0 0 18px;
  color: var(--text);
  font-size: 34px;
  line-height: 1.05;
  letter-spacing: -0.05em;
}

.storyCard p:not(.sectionKicker) {
  margin: 0 0 14px;
  color: var(--muted);
  line-height: 1.8;
}

.fact {
  padding: 16px 0;
  border-bottom: 1px solid var(--border);
}

.fact:last-child {
  border-bottom: 0;
  padding-bottom: 0;
}

.fact span {
  display: block;
  margin-bottom: 6px;
  color: var(--soft);
  font-size: 12px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.07em;
}

.fact strong {
  color: var(--text);
  line-height: 1.5;
}

.foundation,
.skills,
.approach,
.aboutContact {
  margin-top: 70px;
}

.sectionIntro {
  max-width: 760px;
  margin-bottom: 28px;
}

.sectionIntro h2 {
  margin: 0;
  color: var(--text);
  font-size: clamp(36px, 5vw, 60px);
  line-height: 1;
  letter-spacing: -0.06em;
}

.sectionIntro p {
  margin: 18px 0 0;
  color: var(--muted);
  font-size: 17px;
  line-height: 1.75;
}

.foundationHero {
  padding: 42px;
  border-radius: var(--radius-lg);
  background:
    radial-gradient(circle at top right, rgba(191, 219, 254, 0.35), transparent 34%),
    linear-gradient(135deg, #eef2ff, #ffffff);
}

.foundationHero p {
  margin: 0;
  max-width: 860px;
  font-size: clamp(24px, 3vw, 40px);
  line-height: 1.35;
  letter-spacing: -0.04em;
  color: var(--text);
}

.foundationGrid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
  margin-top: 22px;
}

.foundationCard {
  padding: 26px;
  border-radius: var(--radius-md);
  background: var(--surface);
}

.foundationNumber {
  display: inline-block;
  margin-bottom: 16px;
  color: var(--accent);
  font-size: 13px;
  font-weight: 800;
  letter-spacing: 0.08em;
}

.foundationCard h3,
.skillCard h3 {
  margin: 0 0 12px;
  color: var(--text);
  font-size: 24px;
  line-height: 1.1;
  letter-spacing: -0.03em;
}

.foundationCard p {
  margin: 0;
  color: var(--muted);
  line-height: 1.8;
  font-size: 15px;
}

.skillsGrid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 18px;
}

.skillCard {
  padding: 24px;
  border-radius: var(--radius-md);
  background: var(--surface);
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tags span {
  padding: 8px 11px;
  border-radius: 999px;
  background: #eef2ff;
  border: 1px solid var(--border);
  color: #334155;
  font-size: 13px;
  font-weight: 700;
}

.approach {
  padding: 34px;
  border-radius: var(--radius-lg);
  background: var(--surface);
}

.approach h2 {
  margin: 0;
  max-width: 720px;
  color: var(--text);
  font-size: clamp(34px, 5vw, 58px);
  line-height: 1;
  letter-spacing: -0.06em;
}

.approachGrid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
  margin-top: 28px;
}

.approachGrid p {
  margin: 0;
  color: var(--muted);
  line-height: 1.8;
}

.aboutContact {
  padding: 44px 28px;
  border-radius: var(--radius-lg);
  text-align: center;
  background:
    radial-gradient(circle at top left, rgba(191, 219, 254, 0.35), transparent 34%),
    linear-gradient(135deg, #ffffff, #eef2ff);
}

.aboutContact h2 {
  margin: 0;
  color: var(--text);
  font-size: clamp(36px, 5vw, 60px);
  line-height: 1;
  letter-spacing: -0.06em;
}

.aboutContact p:not(.sectionKicker) {
  margin: 18px auto 0;
  max-width: 680px;
  color: var(--muted);
  line-height: 1.75;
  font-size: 17px;
}

.contactActions {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 26px;
}

.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 44px;
  padding: 11px 18px;
  border-radius: 999px;
  text-decoration: none;
  font-weight: 800;
}

.button.primary {
  background: var(--text);
  color: #ffffff;
  box-shadow: 0 14px 28px rgba(15, 23, 42, 0.18);
}

.button.secondary {
  color: var(--text);
  border: 1px solid #d1d5db;
  background: rgba(255, 255, 255, 0.75);
}

@media (max-width: 900px) {
  .aboutHero,
  .storyGrid,
  .foundationGrid,
  .skillsGrid,
  .approachGrid {
    grid-template-columns: 1fr;
  }

  .heroText,
  .foundationHero {
    padding: 28px;
  }
}
</style>