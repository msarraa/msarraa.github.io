<template>
  <main class="page" v-if="project">
    <header class="hero">
      <h1>{{ project.title }}</h1>
      <p class="lead">{{ project.summary }}</p>
    </header>

    <section class="grid">
      <div class="block">
        <h2>Role</h2>
        <p>{{ project.role }}</p>
      </div>

      <div class="block">
        <h2>Tools & methods</h2>
        <ul class="list">
          <li v-for="t in project.tools" :key="t">{{ t }}</li>
        </ul>
      </div>

      <div class="block">
        <h2>Overview</h2>
        <p>{{ project.overview }}</p>
      </div>

      <div class="block">
        <h2>Challenge</h2>
        <p>{{ project.challenge }}</p>
      </div>

      <div class="block wide">
        <h2>The process</h2>
        <p>{{ project.process }}</p>
      </div>

      <div class="block wide">
        <h2>Final results</h2>
        <p>{{ project.results }}</p>
      </div>
    </section>
  </main>

  <main v-else class="page">
    <p>Projekt hittades inte.</p>
  </main>
</template>

<script setup>
import { computed } from "vue"
import { useRoute } from "vue-router"
import { projects } from "../data/projects"

const route = useRoute()
const project = computed(() => projects.find(p => p.slug === route.params.slug))
</script>

<style scoped>
.page { max-width: 1100px; margin: 0 auto; padding: 40px 20px 80px; }
.hero {
  border-radius: 26px;
  padding: 32px 24px;
  background: linear-gradient(180deg, #bfe2ff, #d9d8ff);
  text-align: center;
}
.hero h1 { margin: 0 0 10px; font-size: 44px; }
.lead { margin: 0 auto; max-width: 75ch; line-height: 1.7; }

.grid {
  margin-top: 26px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}
.block {
  background: #fff;
  border-radius: 18px;
  padding: 18px;
  box-shadow: 0 10px 30px rgba(0,0,0,.06);
}
.block.wide { grid-column: 1 / -1; }
.block h2 { margin: 0 0 10px; font-size: 18px; }
.block p { margin: 0; color: #374151; line-height: 1.7; }
.list { margin: 0; padding-left: 18px; color: #374151; }
</style>
