<template>
  <main class="aboutPage">
    <!-- HERO -->
    <section class="aboutHero">
      <div class="heroText">
        <p class="sectionKicker">Design approach</p>
        <h1>Designing with empathy, structure, and technical depth.</h1>

        <p class="heroLead">
          I design digital products at the intersection of UX, accessibility,
          and technical systems — translating complex needs into thoughtful,
          implementable experiences.
        </p>
      </div>

      <div class="heroProfile">
        <div class="imageFrame">
          <img :src="profileImage" alt="Portrait of Msarra Albani" />
        </div>

        <div class="profileInfo">

          <h2>Bridging design, systems, and implementation</h2>

          <p>
            With foundations in interaction design, system development, and
            accessibility, I approach product design through both human needs
            and technical reality.
          </p>
        </div>
      </div>
    </section>

    <!-- BACKGROUND -->
    <section class="storyGrid">
      <article class="storyCard large">
        <p class="sectionKicker">Background</p>
        <h2>Designing across people, products, and systems.</h2>

        <p>
          I hold a Master of Science in Engineering in Interaction Technology and Design from Umeå
          University, complemented by computer science studies that strengthened
          my technical, logical, and systems-oriented perspective.
        </p>

        <p>
          My work focuses on transforming research insights, user needs, and
          complex structures into accessible, understandable, and functional
          digital experiences.
        </p>

        <p>
          Across projects such as Elevate, CommuniQuiz, and a rule-based study
          progression system, I have explored how design can support inclusion,
          trust, decision-making, and meaningful interaction.
        </p>
      </article>

      <aside class="quickCard">
        <p class="sectionKicker">Quick facts</p>

        <div class="fact">
          <span>Education</span>
          <strong>
            Master of Science in Engineering in Interaction Technology and Design
          </strong>
        </div>

        <div class="fact">
          <span>Technical foundation</span>
          <strong>Bachelor's in Computer Science + System Development</strong>
        </div>

        <div class="fact">
          <span>Focus</span>
          <strong>
            UX, Product Design, Accessibility, UX Engineering
          </strong>
        </div>

        <div class="fact">
          <span>Based in</span>
          <strong>Umeå, Sweden</strong>
        </div>
      </aside>
    </section>

    <!-- CORE STRENGTHS -->
<section class="foundation">
  <div class="foundationHero">
<p class="sectionKicker foundationKicker">Core strengths</p>

    <h2>Human-centered design with systems-level thinking.</h2>

    <p class="foundationLead">
      My strongest value is the ability to connect user needs, product strategy,
      accessibility, and implementation into coherent digital systems.
    </p>

    <p class="foundationStatement">
      I combine user-centered design, accessibility, and technical systems
      thinking to create products that are intuitive, scalable, and grounded in
      real-world implementation.
    </p>
  </div>

      <div class="foundationGrid">
        <article class="foundationCard">
          <span class="foundationNumber">01</span>
          <h3>User-centered design</h3>

          <p>
            Research, user flows, prototyping, usability testing, and product
            thinking grounded in real user needs.
          </p>
        </article>

        <article class="foundationCard">
          <span class="foundationNumber">02</span>
          <h3>Accessibility</h3>

          <p>
            Practical experience with WCAG, inclusive interfaces, and designing
            for clarity, trust, and broader usability.
          </p>
        </article>

        <article class="foundationCard">
          <span class="foundationNumber">03</span>
          <h3>Technical execution</h3>

          <p>
            Frontend, backend, APIs, system logic, and implementation knowledge
            that strengthens feasibility, collaboration, and product quality.
          </p>
        </article>
      </div>
    </section>

    <!-- CAPABILITIES -->
    <section class="skills">
      <div class="sectionIntro">
        <p class="sectionKicker">Capabilities</p>
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
          <h3>Design systems & tools</h3>

          <div class="tags">
            <span>Figma</span>
            <span>Design systems</span>
            <span>Visual storytelling</span>
            <span>Accessibility-first design</span>
          </div>
        </article>

        <article class="skillCard">
          <h3>Frontend development</h3>

          <div class="tags">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>TypeScript</span>
            <span>React</span>
            <span>Vue</span>
            <span>Angular</span>
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

    <!-- HOW I WORK -->
    <section class="approach">
      <p class="sectionKicker">How I work</p>
      <h2>Clarity, trust, and usability before complexity.</h2>

      <div class="approachGrid">
        <p>
          I begin by understanding the problem, users, and broader context
          before moving into solutions.
        </p>

        <p>
          I work iteratively through research, mapping, prototyping, testing,
          and refinement.
        </p>

        <p>
          I value collaboration between design and development because the best
          products emerge when user insight meets technical reality.
        </p>
      </div>
    </section>

    <!-- CAREER DIRECTION -->
    <section class="aboutContact">
      <p class="sectionKicker">Career direction</p>
      <h2>Open to thoughtful product teams.</h2>

      <p>
        I’m open for UX, Product Design, and hybrid UX Engineering roles where I
        can contribute through systems thinking, accessibility, and meaningful
        implementation.
      </p>

      <div class="contactActions">
        <a class="button primary" href="mailto:msarra.albani@gmail.com">
          Email me
        </a>

        <a
          class="button secondary"
          href="https://www.linkedin.com/in/msarra-albani-171343232/"
          target="_blank"
          rel="noreferrer"
        >
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

/* =========================
   TYPE SCALE SYSTEM
========================= */
.sectionKicker,
.foundationHero .sectionKicker {
  margin: 0 0 12px;
  color: var(--accent);
  font-size: 13px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

/* MAIN HERO */
.heroText h1 {
  margin: 0;
  max-width: 780px;
  color: var(--text);
  font-size: clamp(42px, 6vw, 76px);
  line-height: 0.96;
  letter-spacing: -0.07em;
}

/* ALL SECTION HEADLINES BELOW HERO */
.storyCard h2,
.foundationHero h2,
.approach h2,
.aboutContact h2 {
  margin: 0;
  max-width: 780px;
  color: var(--text);
  font-size: clamp(30px, 4vw, 48px);
  line-height: 1.05;
  letter-spacing: -0.05em;
}

/* CARD / SUBSECTION HEADLINES */
.profileInfo h2,
.foundationCard h3,
.skillCard h3 {
  margin: 0 0 12px;
  color: var(--text);
  font-size: 24px;
  line-height: 1.1;
  letter-spacing: -0.035em;
}

/* BODY TEXT */
.heroLead,
.storyCard p:not(.sectionKicker),
.profileInfo p,
.foundationLead,
.foundationStatement,
.foundationCard p,
.approachGrid p,
.aboutContact p:not(.sectionKicker) {
  color: var(--muted);
  font-size: 16px;
  line-height: 1.75;
  letter-spacing: 0;
}

/* HERO INTRO slightly larger */
.heroLead {
  margin: 24px 0 0;
  max-width: 680px;
  font-size: 18px;
}

/* FOUNDATION TEXT */
.foundationLead {
  margin: 22px 0 0;
  max-width: 760px;
}

.foundationStatement {
  margin: 18px 0 0;
  max-width: 820px;
  color: var(--text);
  font-size: 20px;
  line-height: 1.55;
  letter-spacing: -0.015em;
}

/* =========================
   LAYOUT
========================= */
.aboutHero {
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: 24px;
  align-items: stretch;
}

.heroText,
.storyCard,
.quickCard,
.foundationHero,
.foundationCard,
.skillCard,
.approach,
.aboutContact,
.heroProfile {
  border: 1px solid var(--border);
  box-shadow: var(--shadow-lg);
}

/* =========================
   HERO
========================= */
.heroText {
  padding: 42px;
  border-radius: var(--radius-lg);
  background:
    radial-gradient(circle at top right, rgba(221, 214, 254, 0.75), transparent 34%),
    linear-gradient(135deg, #dbeafe, #ffffff);
}

.heroProfile {
  display: flex;
  flex-direction: column;
  height: 100%;
  border-radius: var(--radius-lg);
  background:
    radial-gradient(circle at bottom left, rgba(235, 200, 178, 0.22), transparent 38%),
    var(--surface);
  overflow: hidden;
}

.imageFrame {
  width: 100%;
  height: 440px;
  overflow: hidden;
  background: linear-gradient(135deg, var(--blue-soft), var(--lavender-soft));
}

.imageFrame img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  display: block;
}

.profileInfo {
  padding: 26px;
}

/* =========================
   BACKGROUND / STORY
========================= */
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

.storyCard p:not(.sectionKicker) {
  margin: 0 0 14px;
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
  font-size: 15px;
}

/* =========================
   SECTION SPACING
========================= */
.foundation,
.skills,
.approach,
.aboutContact {
  margin-top: 70px;
}

/* =========================
   FOUNDATION
========================= */
.foundationHero {
  padding: 52px;
  border-radius: var(--radius-lg);
  background:
    radial-gradient(circle at top right, rgba(191, 219, 254, 0.42), transparent 34%),
    linear-gradient(135deg, #eef2ff, #ffffff);
}

.foundationGrid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 22px;
  margin-top: 28px;
}

.foundationCard {
  padding: 30px;
  border-radius: var(--radius-md);
  background: rgba(255, 255, 255, 0.82);
}

.foundationNumber {
  display: inline-block;
  margin-bottom: 18px;
  color: var(--accent);
  font-size: 14px;
  font-weight: 800;
  letter-spacing: 0.12em;
}

/* =========================
   SKILLS
========================= */
.sectionIntro {
  max-width: 760px;
  margin-bottom: 28px;
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

/* =========================
   APPROACH
========================= */
.approach {
  padding: 34px;
  border-radius: var(--radius-lg);
  background: var(--surface);
}

.approachGrid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
  margin-top: 28px;
}

.approachGrid p {
  margin: 0;
}

/* =========================
   CONTACT
========================= */
.aboutContact {
  padding: 44px 28px;
  border-radius: var(--radius-lg);
  text-align: center;
  background:
    radial-gradient(circle at top left, rgba(191, 219, 254, 0.35), transparent 34%),
    linear-gradient(135deg, #ffffff, #eef2ff);
}

.aboutContact p:not(.sectionKicker) {
  margin: 18px auto 0;
  max-width: 680px;
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

/* =========================
   MOBILE
========================= */
@media (max-width: 900px) {
  .aboutHero,
  .storyGrid,
  .foundationGrid,
  .skillsGrid,
  .approachGrid {
    grid-template-columns: 1fr;
  }

  .heroText,
  .foundationHero,
  .approach,
  .aboutContact {
    padding: 28px;
  }

  .foundationHero h2,
  .storyCard h2,
  .approach h2,
  .aboutContact h2 {
    font-size: clamp(28px, 8vw, 40px);
  }

  .foundationStatement {
    font-size: 18px;
  }

  .imageFrame {
    height: 360px;
  }
}
</style>