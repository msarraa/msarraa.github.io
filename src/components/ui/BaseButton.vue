<template>
  <component
    :is="to ? 'router-link' : href ? 'a' : 'button'"
    :to="to"
    :href="href"
    :target="href ? '_blank' : undefined"
    :rel="href ? 'noreferrer' : undefined"
    class="baseButton"
    :class="variant"
  >
    <slot />
  </component>
</template>

<script setup>
defineProps({
  to: String,
  href: String,
  variant: {
    type: String,
    default: "primary",
  },
})
</script>

<style scoped>
.baseButton {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 44px;
  padding: 11px 18px;
  border-radius: 999px;
  text-decoration: none;
  font-weight: 800;
  border: 1px solid transparent;
  transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
  cursor: pointer;
}

.baseButton:hover {
  transform: translateY(-2px);
}

.primary {
  background: var(--text);
  color: white;
  box-shadow: 0 14px 28px rgba(15, 23, 42, 0.18);
}

.secondary {
  color: var(--text);
  border-color: #d1d5db;
  background: rgba(255, 255, 255, 0.75);
}

.ghost {
  color: var(--muted);
  background: transparent;
}
</style>