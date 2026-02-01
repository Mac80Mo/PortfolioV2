<template>
  <section id="certificates" class="py-16">
    <v-container>
      <v-row>
        <v-col cols="12">
          <h2 class="text-h3 text-center mb-12 text-primary">Zertifikate</h2>
        </v-col>
      </v-row>
      <v-row align="start">
        <v-col
          v-for="certificate in certificates"
          :key="certificate.title"
          cols="12"
          md="6"
          lg="4"
          class="d-flex align-self-start"
        >
          <v-card elevation="4" class="w-100 d-flex flex-column certificate-card">
            <v-img
              :src="certificate.image"
              height="200"
              cover
              class="bg-grey-lighten-2"
            >
              <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-icon size="64" color="grey">{{ icons.certificate }}</v-icon>
                </v-row>
              </template>
            </v-img>
            <v-card-title class="title-with-border">{{ certificate.title }}</v-card-title>
            
            <v-expansion-panels>
              <v-expansion-panel>
                <v-expansion-panel-title>
                  <span class="text-body-2 text-primary">Beschreibung</span>
                </v-expansion-panel-title>
                <v-expansion-panel-text>
                  {{ certificate.description }}
                </v-expansion-panel-text>
              </v-expansion-panel>
            </v-expansion-panels>
            
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-chip size="small" color="primary" variant="flat">
                <v-icon start size="small">{{ icons.calendar }}</v-icon>
                {{ certificate.year }}
              </v-chip>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup lang="ts">
import { icons } from '../plugins/icons'
import { computed } from 'vue'
import cert1 from '@/assets/images/certificates/cert1.png'
import cert2 from '@/assets/images/certificates/cert2.png'
import cert3 from '@/assets/images/certificates/cert3.png'

interface Certificate {
  title: string
  description: string
  image: string
  year: string
  sortDate: Date
}

const certificatesData: Certificate[] = [
  {
    title: 'EXIN Agile Scrum Foundation',
    description: 'Die EXIN Agile Scrum Foundation ist eine international anerkannte Zertifizierung für grundlegendes Wissen über agile Prinzipien und das Scrum-Framework. Sie vermittelt die agile Denkweise sowie praktische Scrum-Elemente wie Rollen (Scrum Master, Product Owner, Entwicklungsteam), Ereignisse (Sprints, Daily Scrum, Planung, Review, Retrospektive) und Artefakte (Product Backlog, Sprint Backlog). Die Zertifizierung richtet sich an Teams, Projektmanager, Softwareentwickler und Einsteiger in agilen Projekten. Die Prüfung kann flexibel online (24/7) absolviert werden und prüft die praktische Anwendung agiler Konzepte im Arbeitsalltag. Der Nutzen liegt in der Verbesserung von Produktivität, Flexibilität und Teamzusammenarbeit.',
    image: cert1,
    year: '2024',
    sortDate: new Date('2024-01-01')
  },
  {
    title: 'Python Certified Entry-Level Programmer',
    description: 'Die PCEP-Zertifizierung (Certified Entry-Level Python Programmer) ist eine vom Python Institute angebotene, international anerkannte Prüfung, die grundlegende Programmierkenntnisse in Python 3 nachweist. Die Prüfung umfasst 30 Multiple-Choice- und Drag-and-Drop-Fragen auf Englisch, die in 40-45 Minuten bearbeitet werden müssen, wobei 70% für das Bestehen erforderlich sind. Inhaltlich werden grundlegende Konzepte wie Datentypen, Kontrollstrukturen (if/else, loops), Funktionen, Exceptions, Listen, Tupel und Dictionarys abgedeckt. Die Zertifizierung richtet sich an Einsteiger in die Programmierung, Quereinsteiger oder IT-Interessierte, die ihre Kenntnisse in Bereichen wie Data Science, Webentwicklung oder KI belegen möchten. Es gibt keine offiziellen Voraussetzungen, jedoch sind gute Englischkenntnisse hilfreich. Zur Vorbereitung werden einige Wochen bis Monate intensives Training empfohlen, um Syntax und Logik zu beherrschen. Die lebenslang gültige Zertifizierung dient oft als erster Schritt und Vorstufe zur anspruchsvolleren PCAP-Zertifizierung auf Associate Level.',
    image: cert2,
    year: '2024',
    sortDate: new Date('2024-06-01')
  },
  {
    title: 'KI Kompetenz art.4 EU AI ACT',
    description: 'Mit der erfolgreichen Teilnahme an der KI-Kompetenz-Schulung nach Artikel 4 EU AI Act wird die gesetzlich vorgeschriebene Qualifikation zum regelkonformen Umgang mit KI-Systemen nachgewiesen. Teilnehmende erwerben fundiertes Wissen über rechtliche Grundlagen, Risiken und Best Practices im KI-Einsatz und erhalten ein Zertifikat, das gegenüber Behörden und bei Kontrollen als offizieller Nachweis der KI-Kompetenz dient. Damit erfüllen Unternehmen die ab 2025 geltende EU-weite Schulungspflicht für alle Mitarbeitenden, die mit KI-Systemen arbeiten, und minimieren rechtliche Risiken wie Bußgelder oder Haftungsansprüche. Zugleich werden die Teilnehmenden befähigt, KI-Tools wie ChatGPT oder Copilot sicher, ethisch und qualitätsgesichert in der Praxis einzusetzen.',
    image: cert3,
    year: '2025',
    sortDate: new Date('2025-01-01')
  }
]

// Zertifikate nach Datum absteigend sortieren (neueste zuerst)
const certificates = computed(() => {
  return [...certificatesData].sort((a, b) => b.sortDate.getTime() - a.sortDate.getTime())
})
</script>

<style scoped>
#certificates {
  background-color: rgba(0, 0, 0, 0.02);
}

.certificate-card {
  border: 3px solid rgba(25, 118, 210, 0.5) !important;
}

.title-with-border {
  border-bottom: 3px solid rgba(25, 118, 210, 0.5);
  padding-bottom: 8px;
}
</style>
