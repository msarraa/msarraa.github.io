<template>
  <span class="baseTag" :class="variant">
    <slot />
  </span>
</template>

<script setup>
defineProps({
  variant: {
    type: String,
    default: "default",
  },
})
</script>

<style scoped>
.baseTag {
  display: inline-flex;
  align-items: center;
  padding: 8px 12px;
  border-radius: 999px;
  font-size: 13px;
  font-weight: 700;
  border: 1px solid var(--border);
}

.default {
  background: #ffffff;
  color: var(--muted);
}

.accent {
  background: #eef2ff;
  color: #334155;
}

.soft {
  background: #f8fafc;
  color: var(--soft);
}
</style>