<template>
  <main class="page">
    <h1 class="title">Projects</h1>

    <section class="stack">
      <ProjectPreviewCard
        v-for="(p, i) in projects"
        :key="p.slug"
        :project="p"
        :flip="i % 2 === 1"
      />
    </section>
  </main>
</template>

<script setup>
import { projects } from "../data/projects"
import ProjectPreviewCard from "../components/ProjectPreviewCard.vue"
</script>

<style scoped>
.page { max-width: 1100px; margin: 0 auto; padding: 48px 20px 80px; }
.title { text-align: center; font-size: 44px; margin: 0 0 28px; }
.stack { display: grid; gap: 28px; }
</style>
