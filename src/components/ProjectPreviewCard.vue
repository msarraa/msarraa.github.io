<!-- src/components/ProjectPreviewCard.vue -->
import BaseButton from "./ui/BaseButton.vue"
import BaseTag from "./ui/BaseTag.vue"

<template>
  <article class="projectCard" :class="{ flip }">
    <div class="projectText">
      <h3>{{ project.title }}</h3>

      <p>
        {{ project.summary }}
      </p>

      <router-link class="projectButton" :to="`/projects/${project.slug}`">
        View Project
      </router-link>
    </div>

<div
  class="projectVisual"
  :class="{ systemVisual: project.visualType === 'system' }"
>
  <div
    class="imageStack"
    :class="{ systemImageStack: project.visualType === 'system' }"
  >
    <img
      v-for="src in project.heroImages"
      :key="src"
      :src="src"
      :alt="project.title"
    />
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
.projectCard {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  max-width: 1000px;
  margin: 0 auto 80px;
  min-height: 520px;
  border-radius: 22px;
  background: #ffffff;
  overflow: hidden;
  box-shadow: 0 24px 70px rgba(40, 30, 20, 0.08);
}

.projectCard.flip .projectText {
  order: 2;
}

.projectCard.flip .projectVisual {
  order: 1;
}

.projectText {
  padding: 64px 52px;
}

.projectText h3 {
  margin: 0;
  font-family: Georgia, serif;
  font-size: 44px;
  line-height: 1;
  color: #2b2118;
}

.projectText p {
  margin: 28px 0 0;
  max-width: 340px;
  color: #7a746f;
  font-size: 21px;
  line-height: 1.45;
}

.projectButton {
  display: inline-flex;
  margin-top: 28px;
  padding: 10px 24px;
  border-radius: 999px;
  border: 1px solid #2b2118;
  color: #2b2118;
  text-decoration: none;
  font-size: 17px;
  font-weight: 600;
}

.projectVisual {
  min-height: 520px;
  height: 100%;
  background: #dcd8ff;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 36px;
  border-radius: 0 22px 22px 0;
}

.projectCard.flip .projectVisual {
  border-radius: 22px 0 0 22px;
}

.imageStack img {
  width: 190px;
  max-height: 445px;
  object-fit: contain;
  display: block;
}
.systemVisual {
  padding: 42px;
}

.systemImageStack {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.systemImageStack img {
  width: 100%;
  max-width: none;
  max-height: none;
  object-fit: contain;
  border-radius: 18px;
  filter: drop-shadow(0 18px 28px rgba(20, 20, 40, 0.18));
}

.imageStack {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 18px;
  width: 100%;
}
@media (max-width: 900px) {
  .projectCard {
    grid-template-columns: 1fr;
    margin-bottom: 56px;
  }

  .projectCard.flip .projectText,
  .projectCard.flip .projectVisual {
    order: initial;
  }

  .projectText {
    padding: 42px 28px;
  }

  .projectVisual {
    min-height: 420px;
    border-radius: 0 0 22px 22px;
    padding: 28px;
  }

.imageStack img {
  width: 150px;
}
}
</style>