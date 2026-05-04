<template>
  <main class="page">
    <!-- Hero / Intro -->
<section class="hero">
  <div class="heroContent">
    <p class="eyebrow">UX Engineer &amp; Product Designer</p>

    <h1>
      Designing thoughtful digital products.
	</h1>
	<p class="heroStatement">
		Through UX, systems thinking, and technical execution.
	</p>

    <p class="lead">
      I bridge user-centered design, accessibility, and development to create meaningful,
      inclusive, and technically sustainable experiences.
    </p>


    <div class="actions">
  <BaseButton href="#projects">View Projects</BaseButton>
  <BaseButton to="/about" variant="secondary">About Me</BaseButton>
</div>

  
  </div>

  <div class="heroVisual" aria-hidden="true">
    <div class="orb orbOne"></div>
    <div class="orb orbTwo"></div>

    <div class="visualCard mainVisual">
      <p class="visualLabel">Hybrid focus</p>
      <h3>Designing between users, systems and implementation.</h3>

      <div class="miniGrid">
        <span>UX Research</span>
        <span>Interaction &amp; Design</span>
        <span>WCAG Accessibility</span>
        <span>Fullstack Foundation</span>
      </div>
    </div>


  </div>
</section>

    <!-- Projects overview (sida 2–4 style) -->
<section id="projects" class="projects">
  <div class="sectionIntro">
    <h2>Projects</h2>
    <p>
      A selection of UX, product design and technical projects that show how I work
      from research and concept development to systems thinking and implementation.
    </p>
  </div>


  <div class="projectStack">
  <ProjectPreviewCard
    v-for="(project, index) in projects"
    :key="project.slug"
    :project="project"
    :flip="index % 2 === 1"
  />
</div>
</section>

 

    <!-- Contact -->
<section class="homeContact">
  <p class="sectionKicker"></p>
  <h2>Get in touch at</h2>
  <p>
    I’m open to UX/Product Design roles, UX Engineer opportunities, and hybrid positions
    where design, accessibility, and technology meet.
  </p>

  <div class="contactActions">
    <BaseButton to="/contact">Get in touch</BaseButton>
    <BaseButton href="mailto:msarra.albani@gmail.com" variant="secondary">
      Email me
    </BaseButton>
  </div>
</section>
  </main>
</template>

<script setup>
import ProjectPreviewCard from "../components/ProjectPreviewCard.vue"
import { projects } from "../data/projects"
import BaseButton from "../components/ui/BaseButton.vue"
</script>

<style scoped>
.page { max-width: 1100px; margin: 0 auto; padding: 40px 20px 80px; }

.hero {
  min-height: auto;
  display: grid;
  grid-template-columns: 1.12fr 0.88fr;
  align-items: center;
  gap: 56px;
  padding: 52px 0 48px;
}

.heroContent {
  position: relative;
  z-index: 2;
}

.eyebrow {
  display: inline-flex;
  margin: 0 0 20px;
  padding: 8px 14px;
  border-radius: 999px;
  background: #eef2ff;
  color: #1e293b;
  font-size: 13px;
  font-weight: 700;
}

.hero h1 {
  margin: 0;
  max-width: 720px;
  font-size: clamp(48px, 6vw, 86px);
  line-height: 0.95;
  letter-spacing: -0.07em;
  color: var(--text);
}

.heroStatement {
  margin: 18px 0 0;
  max-width: 680px;
  font-size: clamp(24px, 3vw, 42px);
  line-height: 1.1;
  letter-spacing: -0.045em;
  font-weight: 800;
  color: var(--muted);
}

.lead {
  margin: 26px 0 0;
  max-width: 660px;
  font-size: 19px;
  line-height: 1.75;
  color: #334155;
}

.context {
  margin: 14px 0 0;
  max-width: 620px;
  font-size: 15px;
  line-height: 1.7;
  color: #64748b;
}

.actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 30px;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 44px;
  padding: 11px 18px;
  border-radius: 999px;
  text-decoration: none;
  font-weight: 700;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.btn:hover {
  transform: translateY(-2px);
}

.primary {
  background: #0f172a;
  color: #ffffff;
  box-shadow: 0 14px 28px rgba(15, 23, 42, 0.18);
}

.secondary {
  color: #0f172a;
  border: 1px solid #d1d5db;
  background: rgba(255, 255, 255, 0.75);
}

.credibility {
  margin-top: 24px;
  gap: 8px;
}

.credibility span {
  padding: 7px 11px;
  font-size: 12px;
  box-shadow: none;
  background: rgba(255, 253, 249, 0.72);
}

/* Right visual */
.heroVisual {
  position: relative;
  min-height: 420px;
}

.orb {
  position: absolute;
  border-radius: 999px;
  filter: blur(1px);
}

.orbOne {
  width: 360px;
  height: 390px;
  right: 10px;
  top: 50px;
  background: linear-gradient(135deg, #bfdbfe, #ddd6fe);
}

.orbTwo {
  width: 240px;
  height: 240px;
  left: 20px;
  bottom: 55px;
  background: linear-gradient(135deg, #e0e7ff, #f5d0fe);
  opacity: 0.9;
}

.visualCard {
  position: absolute;
  border-radius: 28px;
  background: rgba(255, 255, 255, 0.82);
  border: 1px solid rgba(255, 255, 255, 0.85);
  box-shadow: 0 28px 70px rgba(15, 23, 42, 0.14);
  backdrop-filter: blur(14px);
}

.mainVisual {
  right: 35px;
  top: 100px;
  width: 330px;
  padding: 26px;
}

.visualLabel {
  margin: 0 0 12px;
  color: #64748b;
  font-size: 13px;
  font-weight: 700;
}

.mainVisual h3 {
  margin: 0;
  font-size: 29px;
  line-height: 1.12;
  letter-spacing: -0.04em;
  color: #0f172a;
}

.miniGrid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  margin-top: 22px;
}

.miniGrid span {
  padding: 10px;
  border-radius: 14px;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  color: #334155;
  font-size: 13px;
  font-weight: 700;
}

.sideCard {
  padding: 16px 18px;
}

.sideCard p {
  margin: 0 0 5px;
  color: #64748b;
  font-size: 12px;
  font-weight: 700;
}

.sideCard strong {
  color: #0f172a;
  font-size: 14px;
}

.sideCard.top {
  left: 15px;
  top: 95px;
}

.sideCard.bottom {
  right: 0;
  bottom: 55px;
}

@media (max-width: 900px) {
  .hero {
    grid-template-columns: 1fr;
    padding: 96px 20px 48px;
    gap: 34px;
    overflow: hidden;
  }

  .heroContent {
    text-align: left;
  }

  .hero h1 {
    font-size: clamp(44px, 13vw, 64px);
    line-height: 0.95;
  }

  .heroStatement {
    font-size: clamp(24px, 7vw, 34px);
    line-height: 1.08;
  }

  .lead {
    font-size: 17px;
    line-height: 1.7;
  }

  .actions {
    margin-top: 24px;
  }

  .heroVisual {
    min-height: 380px;
    width: 100%;
  }

  .mainVisual {
    position: relative;
    top: auto;
    right: auto;
    width: 100%;
    max-width: 430px;
    margin: 0 auto;
    padding: 26px;
  }
  .orbOne {
    width: 420px;
    height: 420px;
    right: 0px;
    top: -40px;
    opacity: 0.72;
  }

  .orbTwo {
    width: 360px;
    height: 360px;
    left: 0px;
    bottom: -20px;
    opacity: 0.55;
  }

.projects {
  padding: 72px 0 56px;
}

.projectStack {
  display: grid;
  gap: 156px;
} 
.sectionIntro {
  max-width: 760px;
  margin: 0 0 42px;
}

.sectionIntro h2 {
  margin: 0;
  font-size: clamp(40px, 5vw, 64px);
  line-height: 1;
  letter-spacing: -0.06em;
  color: var(--text);
}

.sectionIntro p {
  margin: 18px 0 0;
  max-width: 760px;
  color: var(--muted);
  font-size: 18px;
  line-height: 1.65;
}

.sectionIntro {
  max-width: 760px;
  margin: 0 auto 34px;
  text-align: center;
}

.sectionKicker {
  margin: 0 0 8px;
  color: #6366f1;
  font-size: 13px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.sectionIntro h2 {
  margin: 0;
  color: #0f172a;
  font-size: clamp(38px, 5vw, 64px);
  line-height: 1;
  letter-spacing: -0.06em;
}

.sectionIntro p {
  margin: 18px auto 0;
  max-width: 68ch;
  color: #475569;
  font-size: 17px;
  line-height: 1.75;
}


.homeContact {
  margin-top: 80px;
  padding: 46px 28px;
  border-radius: var(--radius-lg);
  text-align: center;
  background:
    radial-gradient(circle at top left, rgba(191, 219, 254, 0.35), transparent 34%),
    linear-gradient(135deg, #ffffff, #eef2ff);
  border: 1px solid var(--border);
  box-shadow: var(--shadow-lg);
}

.homeContact h2 {
  margin: 0;
  font-size: clamp(34px, 5vw, 58px);
  line-height: 1;
  letter-spacing: -0.06em;
  color: var(--text);
}

.homeContact p:not(.sectionKicker) {
  margin: 18px auto 0;
  max-width: 680px;
  color: var(--muted);
  font-size: 17px;
  line-height: 1.75;
}

.contactActions {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 26px;
}

.links { display: flex; gap: 12px; flex-wrap: wrap; margin-top: 12px; }
.pill {
  padding: 10px 14px;
  border-radius: 999px;
  border: 1px solid #111827;
  text-decoration: none;
  color: inherit;
}
}

</style>


