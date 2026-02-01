<template>
  <div class="animated-background" :class="{ 'light-theme': !theme.global.current.value.dark }">
    <!-- Linien werden von index.html gerendert, hier nur Theme-Wrapper -->
  </div>
</template>

<script setup lang="ts">
import { useTheme } from 'vuetify'
import { onMounted } from 'vue'

const theme = useTheme()

// Entferne instant-bg nachdem Vue geladen ist
onMounted(() => {
  const instantBg = document.getElementById('instant-bg')
  if (instantBg) {
    instantBg.remove()
  }
})
</script>

<style scoped>
.animated-background {
  position: fixed;
  inset: 0;
  z-index: 0;
  overflow: hidden;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0f0f0f 100%);
  pointer-events: none;
  transition: background 0.3s ease;
}

.animated-background.light-theme {
  background: linear-gradient(135deg, #f5f5f5 0%, #e8e8e8 50%, #f0f0f0 100%);
}

.animated-background.light-theme .blue-line {
  opacity: 0.15 !important;
  box-shadow: 
    0 0 15px rgba(25, 118, 210, 0.2),
    0 0 30px rgba(25, 118, 210, 0.1);
}

.blue-line {
  position: absolute;
  left: -50%;
  width: 200%;
  height: 2px;
  background: linear-gradient(
    90deg,
    transparent 0%,
    transparent 40%,
    rgba(25, 118, 210, 0.5) 50%,
    transparent 60%,
    transparent 100%
  );
  transform: rotate(-25deg);
  box-shadow: 
    0 0 15px rgba(25, 118, 210, 0.3),
    0 0 30px rgba(25, 118, 210, 0.18);
  animation: shimmer linear infinite;
}

@keyframes shimmer {
  0% {
    transform: translateX(-100%) rotate(-25deg);
  }
  100% {
    transform: translateX(100%) rotate(-25deg);
  }
}

/* Respektiere prefers-reduced-motion */
@media (prefers-reduced-motion: reduce) {
  .blue-line {
    animation: none;
    opacity: 0.2;
  }
}
</style>
