<template>
  <section id="schule" class="py-16">
    <v-container>
      <v-row>
        <v-col cols="12">
          <h2 class="text-h3 text-center mb-12 text-primary">FIAE</h2>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="12" md="10" lg="8">
          <v-card elevation="4" class="schule-card">
            <v-card-title class="text-h5 text-primary title-with-border">
              <v-icon start>{{ icons.school }}</v-icon>
              Schulische Leistungen
            </v-card-title>
            <v-card-subtitle class="mt-2">
              10.2023 - 01.2026
            </v-card-subtitle>
            
            <v-card-text>
              <p class="text-body-1 mb-4">
                Umfassende IT-Ausbildung mit Fokus auf Softwareentwicklung, Datenbanken, 
                Netzwerktechnologien und agile Projektmethoden.<br>Die Ausbildung umfasst 
                verschiedene Lernfelder, Vertiefungskurse und Zusatzqualifikationen.
              </p>
            </v-card-text>

            <v-expansion-panels>
              <v-expansion-panel>
                <v-expansion-panel-title>
                  <div class="d-flex align-center">
                    <v-icon start color="primary">{{ icons.grades }}</v-icon>
                    <span class="text-h6">Noten & Leistungen</span>
                  </div>
                </v-expansion-panel-title>
                <v-expansion-panel-text>
                  <v-list lines="three">
                    <v-list-item
                      v-for="(note, index) in sortedNoten"
                      :key="index"
                      class="mb-4"
                    >
                      <v-list-item-title class="text-h6 mb-1">
                        {{ note.title }}
                      </v-list-item-title>
                      
                      <v-list-item-subtitle class="text-body-2 mb-2">
                        {{ note.description }}
                      </v-list-item-subtitle>

                      <div class="d-flex flex-wrap gap-2 mt-2 align-center">
                        <v-chip
                          size="small"
                          variant="outlined"
                          color="primary"
                        >
                          <v-icon start size="small">{{ icons.category }}</v-icon>
                          {{ note.kategorie }}
                        </v-chip>
                        
                        <v-chip
                          v-if="note.dauer"
                          size="small"
                          variant="outlined"
                          color="info"
                        >
                          <v-icon start size="small">{{ icons.clock }}</v-icon>
                          {{ note.dauer }}
                        </v-chip>
                        
                        <v-chip
                          size="small"
                          variant="outlined"
                          color="secondary"
                        >
                          <v-icon start size="small">{{ icons.calendar }}</v-icon>
                          {{ note.datum }}
                        </v-chip>
                        
                        <v-spacer></v-spacer>
                        
                        <v-chip
                          size="small"
                          :color="getAbschlussColor(note.abschluss)"
                          variant="flat"
                        >
                          <v-icon start size="small">{{ icons.trophy }}</v-icon>
                          {{ note.abschluss }}
                        </v-chip>
                      </div>

                      <v-divider v-if="index < sortedNoten.length - 1" class="mt-4"></v-divider>
                    </v-list-item>
                  </v-list>
                </v-expansion-panel-text>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-card>
        </v-col>
      </v-row>

      <!-- Betriebliche Tätigkeit -->
      <v-row justify="center" class="mt-8">
        <v-col cols="12" md="10" lg="8">
          <v-card elevation="4" class="schule-card">
            <v-card-title class="text-h5 text-primary title-with-border">
              <v-icon start>{{ icons.applicationBrackets }}</v-icon>
              Betriebliche Tätigkeit
            </v-card-title>
            <v-card-subtitle class="mt-2">
              04.2025 - 01.2026
            </v-card-subtitle>
            
            <v-card-text>
              <p class="text-body-1 mb-4">
                Full-Stack Entwicklung von Webanwendungen mit JavaScript/TypeScript, 
                Integration von KI-Funktionen und LLM-Modellen.<br>Agile Softwareentwicklung 
                im Bereich Digitalisierung und Innovation.
              </p>
            </v-card-text>

            <v-expansion-panels>
              <v-expansion-panel>
                <v-expansion-panel-title>
                  <div class="d-flex align-center">
                    <v-icon start color="primary">{{ icons.fileDocumentMultiple }}</v-icon>
                    <span class="text-h6">Beurteilung</span>
                  </div>
                </v-expansion-panel-title>
                <v-expansion-panel-text>
                  <p class="text-body-2 mb-4">
                    Marcus zeigte durchgehend sehr hohe Eigeninitiative und Einsatzbereitschaft. 
                    Er identifizierte eigenständig Verbesserungspotenziale und arbeitete stets 
                    äußerst strukturiert und gründlich. Sein Projektmanagement war gekennzeichnet 
                    durch sorgfältige Planung und zielgerichtete Umsetzung. Die Qualität seiner 
                    Arbeit entsprach stets den höchsten Erwartungen...
                  </p>
                  
                  <div class="d-flex flex-wrap gap-2 align-center">
                    <v-chip size="small" color="success" variant="flat">
                      <v-icon start size="small">{{ icons.checkCircle }}</v-icon>
                      Hohe Eigeninitiative
                    </v-chip>
                    <v-chip size="small" color="success" variant="flat">
                      <v-icon start size="small">{{ icons.flash }}</v-icon>
                      Hochmotiviert
                    </v-chip>
                    <v-chip size="small" color="success" variant="flat">
                      <v-icon start size="small">{{ icons.runFast }}</v-icon>
                      Hohe Einsatzbereitschaft
                    </v-chip>
                    <v-chip size="small" color="info" variant="flat">
                      <v-icon start size="small">{{ icons.layers }}</v-icon>
                      Strukturiert & Gründlich
                    </v-chip>
                    <v-chip size="small" color="info" variant="flat">
                      <v-icon start size="small">{{ icons.brain }}</v-icon>
                      Klare Gedankenführung
                    </v-chip>
                    <v-chip size="small" color="info" variant="flat">
                      <v-icon start size="small">{{ icons.emoticonHappyOutline }}</v-icon>
                      Freundlich & Offen
                    </v-chip>
                  </div>
                </v-expansion-panel-text>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup lang="ts">
import { icons } from '../plugins/icons'
import { computed } from 'vue'
import { zeugnis } from '../data/schule'

// Noten nach Datum aufsteigend sortieren (älteste zuerst)
const sortedNoten = computed(() => {
  return [...zeugnis].sort((a, b) => a.sortDate.getTime() - b.sortDate.getTime())
})

// Hilfsfunktion für Abschluss-Farbe
const getAbschlussColor = (abschluss: string): string => {
  switch (abschluss.toLowerCase()) {
    case 'sehr gut':
      return 'success'
    case 'gut':
      return 'info'
    case 'befriedigend':
      return 'warning'
    default:
      return 'grey'
  }
}

</script>

<style scoped>
.gap-2 {
  gap: 0.5rem;
}

.v-list-item {
  border-radius: 8px;
  padding: 16px;
}

.v-list-item:hover {
  background-color: rgba(var(--v-theme-primary), 0.05);
}

.schule-card {
  border: 3px solid rgba(25, 118, 210, 0.5) !important;
}

.title-with-border {
  border-bottom: 3px solid rgba(25, 118, 210, 0.5);
  padding-bottom: 8px;
}
</style>
