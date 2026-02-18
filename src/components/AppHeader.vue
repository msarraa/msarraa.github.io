<template>
  <header class="header">
    <div class="container">
      <!-- Logo / Name -->
      <router-link to="/" class="logo">
        Your Name
      </router-link>

      <!-- Navigation -->
      <nav class="nav">
        <router-link to="/" class="navLink">Home</router-link>
        <router-link to="/projects" class="navLink">Projects</router-link>
        <router-link to="/about" class="navLink">About</router-link>
        <router-link to="/contact" class="navLink btn">Contact</router-link>
      </nav>

      <!-- Mobile Menu Button -->
      <button class="menuBtn" @click="toggleMenu">
        ☰
      </button>
    </div>

    <!-- Mobile Dropdown -->
    <div v-if="isOpen" class="mobileMenu">
      <router-link @click="closeMenu" to="/">Home</router-link>
      <router-link @click="closeMenu" to="/projects">Projects</router-link>
      <router-link @click="closeMenu" to="/about">About</router-link>
      <router-link @click="closeMenu" to="/contact">Contact</router-link>
    </div>
  </header>
</template>

<script setup>
import { ref } from "vue"

const isOpen = ref(false)

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}

const closeMenu = () => {
  isOpen.value = false
}
</script>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 50;
  backdrop-filter: blur(8px);
  background: rgba(255, 255, 255, 0.7);
  border-bottom: 1px solid #e5e7eb;
}

.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 14px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* Logo */
.logo {
  font-weight: 600;
  text-decoration: none;
  color: #111827;
  font-size: 16px;
  letter-spacing: 0.02em;
}

/* Desktop Nav */
.nav {
  display: flex;
  gap: 24px;
  align-items: center;
}

.navLink {
  text-decoration: none;
  color: #374151;
  font-size: 14px;
  position: relative;
  transition: 0.2s ease;
}

.navLink:hover {
  color: #111827;
}

/* Active route styling */
.router-link-active:not(.btn) {
  color: #111827;
  font-weight: 500;
}

/* Contact button style */
.btn {
  padding: 8px 14px;
  border-radius: 999px;
  border: 1px solid #111827;
  font-size: 13px;
}

/* Mobile */
.menuBtn {
  display: none;
  font-size: 20px;
  background: none;
  border: none;
  cursor: pointer;
}

.mobileMenu {
  display: none;
}

@media (max-width: 768px) {
  .nav {
    display: none;
  }

  .menuBtn {
    display: block;
  }

  .mobileMenu {
    display: flex;
    flex-direction: column;
    gap: 14px;
    padding: 16px 20px;
    border-top: 1px solid #e5e7eb;
    background: white;
  }

  .mobileMenu a {
    text-decoration: none;
    color: #374151;
  }
}
</style>
