<template>
  <div>
    <div id="hero">
      <Hero />
    </div>
    <div id="about">
      <About />
    </div>
    <div id="skills">
      <Skills />
    </div>
    <div id="suche">
      <Suche />
    </div>
    <div id="certificates">
      <Certificates />
    </div>
    <div id="schule">
      <Schule />
    </div>
    <div id="kurse">
      <Kurse />
    </div>
  </div>
</template>

<script setup lang="ts">
import Hero from '../components/Hero.vue'
import About from '../components/About.vue'
import Skills from '../components/Skills.vue'
import Suche from '../components/Suche.vue'
import Certificates from '../components/Certificates.vue'
import Schule from '../components/Schule.vue'
import Kurse from '../components/Kurse.vue'
</script>
