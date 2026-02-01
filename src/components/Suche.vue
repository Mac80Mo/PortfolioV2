<template>
  <section id="suche" class="py-16">
    <v-container>
      <v-row>
        <v-col cols="12">
          <h2 class="text-h3 text-center mb-12 text-primary">Erweiterte Suche</h2>
        </v-col>
      </v-row>
      
      <v-row>
        <v-col cols="12">
          <v-text-field
            v-model="searchQuery"
            label="Suche nach weiteren Technologien, Frameworks, Tools..."
            :prepend-inner-icon="icons.magnify"
            clearable
            variant="outlined"
            density="comfortable"
            class="mb-6"
            hint=""
            persistent-hint
          ></v-text-field>
        </v-col>
      </v-row>
      
      <v-row v-if="searchQuery && filteredSkills.length === 0">
        <v-col cols="12">
          <v-alert type="info" variant="tonal" class="text-center">
            <v-icon size="large" class="mb-2">{{ icons.informationOutline }}</v-icon>
            <div class="text-h6">Keine Ergebnisse gefunden</div>
            <div class="text-body-2">Versuche es mit anderen Suchbegriffen wie "python", "frontend" oder "devops"</div>
          </v-alert>
        </v-col>
      </v-row>
      
      <v-row v-if="!searchQuery">
        <v-col cols="12">
          <div class="text-center text-medium-emphasis mb-8">
            <v-icon size="48" color="primary" class="mb-2">{{ icons.databaseSearch }}</v-icon>
            <p class="text-body-1">Starte deine Suche um aus {{ skills.length }} Technologien zu filtern</p>
            <div class="d-flex justify-center mt-4">
              <v-chip-group>
                <v-chip 
                  v-for="category in categories" 
                  :key="category"
                  variant="outlined"
                  size="small"
                  @click="searchQuery = category.toLowerCase()"
                >
                  {{ category }}
                </v-chip>
              </v-chip-group>
            </div>
          </div>
        </v-col>
      </v-row>
      
      <v-row v-if="searchQuery && filteredSkills.length > 0">
        <v-col cols="12" class="mb-4">
          <div class="d-flex align-center justify-space-between">
            <div class="text-body-1 text-medium-emphasis">
              {{ filteredSkills.length }} {{ filteredSkills.length === 1 ? 'Ergebnis' : 'Ergebnisse' }} gefunden
            </div>
            <v-chip color="primary" variant="flat" size="small">
              {{ searchQuery }}
            </v-chip>
          </div>
        </v-col>
      </v-row>
      
      <v-row v-if="searchQuery && filteredSkills.length > 0">
        <v-col
          v-for="skill in filteredSkills"
          :key="skill.id"
          cols="12"
          sm="6"
          md="4"
          lg="3"
        >
          <v-card 
            elevation="2" 
            class="search-skill-card h-100"
            hover
          >
            <v-card-title class="text-body-1 pb-2 d-flex align-center">
              <v-icon :color="skill.color" class="mr-2">
                {{ skill.icon }}
              </v-icon>
              {{ skill.label }}
            </v-card-title>
            <v-card-subtitle class="text-caption">
              {{ skill.category }}
            </v-card-subtitle>
            <v-card-text class="pt-2">
              <v-chip-group column>
                <v-chip
                  v-for="keyword in skill.keywords.slice(0, 3)"
                  :key="keyword"
                  size="x-small"
                  variant="outlined"
                  color="primary"
                >
                  {{ keyword }}
                </v-chip>
              </v-chip-group>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { icons } from '../plugins/icons'
import { searchableSkills, type SearchableSkill } from '../data/skills'

const searchQuery = ref('')
const skills = searchableSkills

// Extrahiere unique Kategorien für Quick-Filter
const categories = computed<string[]>(() => {
  // Zähle Skills pro Kategorie
  const categoryCount = skills.reduce((acc: Record<string, number>, skill: SearchableSkill) => {
    acc[skill.category] = (acc[skill.category] || 0) + 1
    return acc
  }, {})
  
  // Sortiere nach Anzahl (absteigend)
  const uniqueCategories = [...new Set(skills.map((s: SearchableSkill) => s.category))]
  return uniqueCategories
    .sort((a, b) => categoryCount[b] - categoryCount[a])
})

// Filtere Skills basierend auf Suchanfrage
const filteredSkills = computed<SearchableSkill[]>(() => {
  const query = searchQuery.value.toLowerCase().trim()
  
  if (!query) {
    return []
  }
  
  return skills.filter((skill: SearchableSkill) => {
    // Suche in Label
    if (skill.label.toLowerCase().includes(query)) {
      return true
    }
    
    // Suche in Keywords
    if (skill.keywords.some((kw: string) => kw.toLowerCase().includes(query))) {
      return true
    }
    
    // Suche in Kategorie
    if (skill.category.toLowerCase().includes(query)) {
      return true
    }
    
    return false
  }).sort((a: SearchableSkill, b: SearchableSkill) => {
    // Sortiere: Exakte Matches zuerst, dann alphabetisch
    const aExact = a.label.toLowerCase() === query || a.keywords.includes(query)
    const bExact = b.label.toLowerCase() === query || b.keywords.includes(query)
    
    if (aExact && !bExact) return -1
    if (!aExact && bExact) return 1
    
    return a.label.localeCompare(b.label)
  })
})
</script>

<style scoped>
#suche {
  background-color: rgba(0, 0, 0, 0.02);
}

.search-skill-card {
  border-left: 3px solid rgb(var(--v-theme-primary));
  transition: all 0.3s ease;
}

.search-skill-card:hover {
  border-left-width: 5px;
  transform: translateY(-2px);
}
</style>
