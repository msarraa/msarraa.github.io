<template>
  <article class="card" :class="{ flip }">
    <div class="text">
      <h2>{{ project.title }}</h2>
      <p>{{ project.summary }}</p>

      <router-link class="btn" :to="`/projects/${project.slug}`">
        View Project
      </router-link>
    </div>

    <div class="media">
      <div class="mediaInner">
        <img v-for="src in project.heroImages" :key="src" :src="src" :alt="project.title" />
      </div>
    </div>
  </article>
</template>

<script setup>
defineProps({
  project: { type: Object, required: true },
  flip: { type: Boolean, default: false },
})
</script>

<style scoped>
.card {
  display: grid;
  grid-template-columns: 1.05fr 1.35fr;
  gap: 18px;
  padding: 24px;
  border-radius: 22px;
  background: #fff;
  box-shadow: 0 10px 30px rgba(0,0,0,.06);
  align-items: center;
}
.card.flip { grid-template-columns: 1.35fr 1.05fr; }
.card.flip .text { order: 2; }
.card.flip .media { order: 1; }

.text h2 { font-size: 34px; margin: 0 0 10px; }
.text p { color: #4b5563; font-size: 16px; line-height: 1.7; margin: 0 0 16px; max-width: 45ch; }

.btn {
  display: inline-block;
  padding: 10px 16px;
  border-radius: 999px;
  border: 1px solid #111827;
  text-decoration: none;
  color: inherit;
}

.media {
  border-radius: 18px;
  background: linear-gradient(135deg, #d9d8ff, #cfe8ff);
  padding: 18px;
}
.mediaInner {
  display: grid;
  grid-auto-flow: column;
  gap: 14px;
  justify-content: center;
}
img { width: 190px; max-width: 100%; border-radius: 14px; display: block; }
</style>
