<template>
  <section id="skills" class="py-16">
    <v-container>
      <v-row>
        <v-col cols="12">
          <h2 class="text-h3 text-center mb-12 text-primary">Fähigkeiten</h2>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          v-for="skill in skills"
          :key="skill.name"
          cols="12"
          sm="6"
          md="4"
          class="d-flex"
        >
          <v-card elevation="2" class="text-center pa-4 skill-card d-flex flex-column align-center">
            <v-icon size="64" :color="skill.color" class="mb-4">
              {{ skill.icon }}
            </v-icon>
            <v-card-title class="justify-center">
              {{ skill.name }}
            </v-card-title>
            <v-card-text class="flex-grow-1">
              {{ skill.description }}
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup lang="ts">
import { icons } from '../plugins/icons'

interface Skill {
  name: string
  icon: string
  color: string
  description: string
}

const skills: Skill[] = [
  {
    name: 'Python',
    icon: icons.languagePython,
    color: 'blue',
    description: 'Vielseitige Programmiersprache'
  },
  {
    name: 'JavaScript',
    icon: icons.languageJavascript,
    color: 'yellow',
    description: 'Die Sprache des Webs'
  },
  {
    name: 'TypeScript',
    icon: icons.languageTypescript,
    color: 'blue',
    description: 'Typsicheres JavaScript für skalierbare Projekte'
  },
  {
    name: 'HTML/CSS',
    icon: icons.languageHtml5,
    color: 'orange',
    description: 'Grundlagen für modernes Webdesign'
  },
  {
    name: 'Vue.js',
    icon: icons.vuejs,
    color: 'green',
    description: 'Modern Frontend Framework für reaktive Anwendungen'
  },
  {
    name: 'Vuetify',
    icon: icons.vuetify,
    color: 'primary',
    description: 'Material Design Komponenten für Vue'
  },
  {
    name: 'Git',
    icon: icons.git,
    color: 'red',
    description: 'Versionskontrolle für effiziente Zusammenarbeit'
  },
  {
    name: 'SQL',
    icon: icons.database,
    color: 'purple',
    description: 'Datenbankabfragen und Datenverwaltung'
  },
  {
    name: 'Java',
    icon: icons.languageJava,
    color: 'red',
    description: 'Objektorientierte Programmierung für Enterprise-Lösungen'
  },
  {
    name: 'Node.js',
    icon: icons.nodejs,
    color: 'green',
    description: 'JavaScript-Laufzeitumgebung für Backend-Entwicklung'
  },
  {
    name: 'Arduino',
    icon: icons.chip,
    color: 'teal',
    description: 'Mikrocontroller-Programmierung für IoT-Projekte'
  },
  {
    name: 'LLM\'s',
    icon: icons.brain,
    color: 'purple',
    description: 'Integration und Anwendung von Large Language Models'
  }
]
</script>

<style scoped>
.skill-card {
  width: 100%;
  height: 220px;
}

#skills {
  background-color: rgba(0, 0, 0, 0.02);
}
</style>
