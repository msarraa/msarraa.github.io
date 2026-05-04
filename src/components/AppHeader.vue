<!-- src/components/AppHeader.vue -->
<template>
  <header class="header" :class="{ scrolled: isScrolled }">
    <div class="inner">
      <router-link to="/" class="brand" @click="closeMenu">
        <span class="brandMark">MA</span>
        <span class="brandName">Msarra Albani</span>
      </router-link>

      <nav class="desktopNav">
        <router-link to="/" class="navLink">Home</router-link>
        <a href="/#projects" class="navLink">Projects</a>
        <router-link to="/about" class="navLink">About</router-link>
      </nav>

      <button class="menuButton" @click="toggleMenu" :aria-expanded="isOpen">
        <span></span>
        <span></span>
      </button>
    </div>

    <nav v-if="isOpen" class="mobileNav">
      <router-link to="/" @click="closeMenu">Home</router-link>
      <a href="/#projects" @click="closeMenu">Projects</a>
      <router-link to="/about" @click="closeMenu">About</router-link>

    </nav>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue"

const isOpen = ref(false)
const isScrolled = ref(false)

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}

const closeMenu = () => {
  isOpen.value = false
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 16
}

onMounted(() => {
  handleScroll()
  window.addEventListener("scroll", handleScroll)
})

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll)
})
</script>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(248, 250, 252, 0.58);
  backdrop-filter: blur(14px);
  border-bottom: 1px solid rgba(226, 232, 240, 0.6);
  transition: background 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
}

.header.scrolled {
  background: rgba(255, 255, 255, 0.82);
  border-color: rgba(226, 232, 240, 0.9);
  box-shadow: 0 14px 34px rgba(15, 23, 42, 0.06);
}

.inner {
  max-width: 1180px;
  margin: 0 auto;
  padding: 14px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  color: #0f172a;
}

.brandMark {
  width: 36px;
  height: 36px;
  border-radius: 14px;
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, #bfdbfe, #ddd6fe);
  font-size: 13px;
  font-weight: 800;
  letter-spacing: -0.03em;
}

.brandName {
  font-size: 14px;
  font-weight: 700;
  letter-spacing: -0.02em;
}

.desktopNav {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.65);
  border: 1px solid rgba(226, 232, 240, 0.75);
}

.navLink {
  position: relative;
  padding: 9px 14px;
  border-radius: 999px;
  text-decoration: none;
  color: #475569;
  font-size: 14px;
  font-weight: 600;
  transition: color 0.2s ease, background 0.2s ease;
}

.navLink:hover {
  color: #0f172a;
  background: #f8fafc;
}

.router-link-active:not(.contact) {
  color: #0f172a;
  background: #eef2ff;
}

.contact {
  color: #ffffff;
  background: #0f172a;
}

.contact:hover {
  color: #ffffff;
  background: #1e293b;
}

.menuButton {
  display: none;
  width: 42px;
  height: 42px;
  border: 1px solid #e2e8f0;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.75);
  cursor: pointer;
}

.menuButton span {
  display: block;
  width: 18px;
  height: 2px;
  margin: 4px auto;
  border-radius: 999px;
  background: #0f172a;
}

.mobileNav {
  max-width: 1180px;
  margin: 0 auto;
  padding: 6px 20px 18px;
  display: grid;
  gap: 8px;
}

.mobileNav a {
  padding: 13px 14px;
  border-radius: 16px;
  text-decoration: none;
  color: #334155;
  background: rgba(255, 255, 255, 0.78);
  border: 1px solid #e2e8f0;
  font-weight: 600;
}

@media (max-width: 760px) {
  .desktopNav {
    display: none;
  }

  .menuButton {
    display: block;
  }

  .brandName {
    display: none;
  }
}
</style>