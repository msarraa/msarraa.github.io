<template>
  <main v-if="project" class="casePage">
    <section class="caseHero">
      <div>
        <router-link to="/#projects" class="backLink">
          ← Back to projects
        </router-link>

        <p class="caseType">{{ project.type }} · {{ project.year }}</p>
        <h1>{{ project.title }}</h1>
        <p class="caseSummary">{{ project.summary }}</p>

        <div class="caseTags">
          <span v-for="tag in project.tags" :key="tag">
            {{ tag }}
          </span>
        </div>
      </div>
    </section>

    <section class="metaGrid">
      <article class="metaCard">
        <p>Role</p>
        <strong>{{ project.role }}</strong>
      </article>

      <article class="metaCard">
        <p>Focus</p>
        <strong>{{ project.highlight }}</strong>
      </article>

      <article class="metaCard">
        <p>Project type</p>
        <strong>{{ project.type }}</strong>
      </article>
    </section>

    <section class="contentGrid">
      <article class="contentBlock wide">

        <h2>Overview</h2>
        <p>{{ project.caseStudy.intro }}</p>
      </article>

      <article class="contentBlock">
        <h2>Challenge</h2>
        <p>{{ project.caseStudy.challenge }}</p>
      </article>

      <article class="contentBlock">
        <h2>Goal</h2>
        <p>{{ project.caseStudy.goal }}</p>
      </article>

      <article class="contentBlock wide">
        <h2>Contribution</h2>
        <p>{{ project.caseStudy.contribution }}</p>
      </article>

      <article
        v-if="project.keyDesignPrinciples?.length"
        class="contentBlock wide principlesBlock"
      >
        <div class="principlesIntro">
          <h2>Key design principles</h2>
          <p>
            Core principles that shaped the system’s logic, interaction design,
            and trustworthiness.
          </p>
        </div>

        <div class="principlesGrid">
          <article
            v-for="principle in project.keyDesignPrinciples"
            :key="principle.title"
            class="principleCard"
          >
            <h3>{{ principle.title }}</h3>
            <p>{{ principle.description }}</p>
          </article>
        </div>
      </article>

      <article class="contentBlock wide processBlock">
        <div class="processGrid">
          <div>

            <h2>Process</h2>

            <ol class="processList">
              <li v-for="step in project.caseStudy.process" :key="step">
                {{ step }}
              </li>
            </ol>
          </div>

          <div v-if="project.caseImages?.process1" class="processImageCard">
            <img
              :src="project.caseImages.process1"
              :alt="`${project.title} process`"
            />
          </div>
        </div>
      </article>

      <article
        v-if="project.caseImages?.process2"
        class="contentBlock wide processWideImage"
      >
        <img
          :src="project.caseImages.process2"
          :alt="`${project.title} process overview`"
        />
      </article>

      <section
        v-if="project.caseImages?.results?.length"
        class="resultsSection"
      >
        <div class="resultsIntro">
          <h2>The final results</h2>
          <p>{{ project.caseStudy.outcome }}</p>
        </div>

        <div class="resultsGallery">
          <img
            v-for="image in project.caseImages.results.slice(0, 8)"
            :key="image"
            :src="image"
            :alt="`${project.title} final result screen`"
          />
        </div>
      </section>

      <article class="contentBlock wide">
        <h2>Reflection</h2>
        <p>{{ project.caseStudy.reflection }}</p>
      </article>
    </section>
  </main>

  <main v-else class="casePage">
    <p>Project not found.</p>
    <router-link to="/#projects">Back to projects</router-link>
  </main>
</template>

<script setup>
import { computed } from "vue"
import { useRoute } from "vue-router"
import { projects } from "../data/projects"

const route = useRoute()

const project = computed(() =>
  projects.find((item) => item.slug === route.params.slug)
)
</script>

<style scoped>
.casePage {
  max-width: var(--container);
  margin: 0 auto;
  padding: 48px 20px 96px;
}

.caseHero {
  display: block;
  padding: 48px;
  border-radius: var(--radius-lg);
  background:
    radial-gradient(circle at top right, rgba(221, 214, 254, 0.8), transparent 36%),
    linear-gradient(135deg, #dbeafe, var(--bg));
  border: 1px solid var(--border);
  box-shadow: var(--shadow-lg);
}

.backLink {
  display: inline-flex;
  margin-bottom: 24px;
  color: #334155;
  text-decoration: none;
  font-weight: 700;
}

.backLink:hover {
  color: #0f172a;
}

.caseType {
  margin: 0 0 12px;
  color: #6366f1;
  font-size: 13px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.caseHero h1 {
  margin: 0;
  color: #0f172a;
  font-size: clamp(48px, 7vw, 86px);
  line-height: 0.95;
  letter-spacing: -0.07em;
}

.caseSummary {
  margin: 22px 0 0;
  max-width: 62ch;
  color: #334155;
  font-size: 18px;
  line-height: 1.75;
}

.caseTags {
  display: flex;
  flex-wrap: wrap;
  gap: 9px;
  margin-top: 24px;
}

.caseTags span {
  padding: 8px 12px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.75);
  border: 1px solid rgba(226, 232, 240, 0.9);
  color: #334155;
  font-size: 13px;
  font-weight: 700;
}

.metaGrid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
  margin-top: 24px;
}

.metaCard,
.contentBlock {
  background: #ffffff;
  border: 1px solid rgba(226, 232, 240, 0.9);
  border-radius: 24px;
  box-shadow: 0 18px 45px rgba(15, 23, 42, 0.055);
}

.metaCard {
  padding: 20px;
}

.metaCard p {
  margin: 0 0 8px;
  color: #64748b;
  font-size: 13px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.07em;
}

.metaCard strong {
  color: #0f172a;
  font-size: 16px;
  line-height: 1.5;
}

.contentGrid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px;
  margin-top: 18px;
}

.contentBlock {
  padding: 24px;
}

.contentBlock.wide {
  grid-column: 1 / -1;
}

.label {
  margin: 0 0 10px;
  color: #6366f1;
  font-size: 12px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.contentBlock h2 {
  margin: 0 0 12px;
  color: #0f172a;
  font-size: 28px;
  line-height: 1.1;
  letter-spacing: -0.04em;
}

.contentBlock p {
  margin: 0;
  color: #334155;
  font-size: 16px;
  line-height: 1.8;
}

/* Principles */
.principlesBlock {
  padding: 30px;
}

.principlesIntro {
  max-width: 760px;
  margin-bottom: 24px;
}

.principlesIntro h2 {
  margin: 0 0 12px;
  color: #0f172a;
  font-size: 34px;
  line-height: 1;
  letter-spacing: -0.045em;
}

.principlesIntro p:not(.label) {
  margin: 0;
  color: #334155;
  font-size: 16px;
  line-height: 1.8;
}

.principlesGrid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 14px;
}

.principleCard {
  padding: 20px;
  border-radius: 20px;
  background:
    radial-gradient(circle at top left, rgba(221, 214, 254, 0.28), transparent 34%),
    #ffffff;
  border: 1px solid rgba(226, 232, 240, 0.9);
}

.principleCard h3 {
  margin: 0 0 10px;
  color: #0f172a;
  font-size: 20px;
  line-height: 1.1;
  letter-spacing: -0.03em;
}

.principleCard p {
  margin: 0;
  color: #334155;
  font-size: 15px;
  line-height: 1.75;
}

/* Process */
.processBlock {
  padding: 28px;
}

.processGrid {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 28px;
  align-items: start;
}

.processList {
  margin: 0;
  padding-left: 20px;
  color: #334155;
  line-height: 1.8;
}

.processList li {
  padding-left: 6px;
  margin: 8px 0;
}

.processImageCard {
  padding: 16px;
  border-radius: 22px;
  background:
    radial-gradient(circle at top left, rgba(221, 214, 254, 0.45), transparent 34%),
    linear-gradient(135deg, #ffffff, #eef2ff);
  border: 1px solid rgba(226, 232, 240, 0.9);
}

.processImageCard img,
.processWideImage img {
  width: 100%;
  display: block;
  border-radius: 16px;
}

.processWideImage {
  padding: 20px;
  background:
    radial-gradient(circle at top right, rgba(191, 219, 254, 0.3), transparent 34%),
    linear-gradient(135deg, #ffffff, #f8fafc);
}

/* Results */
.resultsSection {
  grid-column: 1 / -1;
  margin-top: 18px;
}

.resultsIntro {
  margin-bottom: 24px;
}

.resultsIntro h2 {
  margin: 0 0 14px;
  color: #0f172a;
  font-size: 28px;
  line-height: 1.1;
  letter-spacing: -0.04em;
}

.resultsIntro p:not(.label) {
  margin: 0;
  color: #334155;
  font-size: 16px;
  line-height: 1.8;
}

.resultsGallery {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 22px;
  padding: 28px;
  border-radius: 28px;
  background: #dcd8ff;
}

.resultsGallery img {
  width: 100%;
  display: block;
  object-fit: contain;
  filter: drop-shadow(0 18px 28px rgba(30, 20, 60, 0.12));
}

.resultsGallery img:nth-child(2),
.resultsGallery img:nth-child(4),
.resultsGallery img:nth-child(6),
.resultsGallery img:nth-child(8) {
  margin-top: 56px;
}

@media (max-width: 900px) {
  .caseHero,
  .contentGrid,
  .metaGrid,
  .processGrid,
  .principlesGrid {
    grid-template-columns: 1fr;
  }

  .caseHero {
    padding: 24px;
  }

  .resultsGallery {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
    padding: 18px;
  }

  .resultsGallery img:nth-child(n) {
    margin-top: 0;
  }
}
</style>