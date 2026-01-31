<template>
  <section id="kurse" class="py-16">
    <v-container>
      <v-row>
        <v-col cols="12">
          <h2 class="text-h3 text-center mb-12 text-primary">Kurse</h2>
        </v-col>
      </v-row>
      <v-row align="start">
        <v-col
          v-for="kurs in kurse"
          :key="kurs.title"
          cols="12"
          md="6"
          lg="4"
          class="d-flex"
        >
          <v-card elevation="4" class="kurs-card d-flex flex-column">
            <v-card-title class="d-flex align-center">
              <v-icon :color="kurs.color" class="mr-2">
                {{ kurs.icon }}
              </v-icon>
              {{ kurs.title }}
            </v-card-title>
            <v-card-text class="flex-grow-1">
              {{ kurs.description }}
            </v-card-text>
            <v-card-actions class="flex-wrap pa-4 gap-2">
              <v-chip size="small" :color="kurs.anbieter === 'Programmieren Starten GmbH' ? 'light-blue' : 'primary'" variant="outlined">
                <v-icon start size="small">mdi-school</v-icon>
                {{ kurs.anbieter }}
              </v-chip>
              <v-chip size="small" :color="kurs.sprache === 'Englisch' ? 'light-blue' : 'primary'" variant="outlined">
                <v-icon start size="small">mdi-translate</v-icon>
                {{ kurs.sprache }}
              </v-chip>
              <v-chip v-if="kurs.dauer" size="small" color="primary" variant="outlined">
                <v-icon start size="small">mdi-clock-outline</v-icon>
                {{ kurs.dauer }}
              </v-chip>
              <v-chip size="small" :color="kurs.abschluss === 'Zertifikat' ? 'light-blue' : 'primary'" variant="outlined">
                <v-icon start size="small">mdi-certificate</v-icon>
                {{ kurs.abschluss }}
              </v-chip>
              <v-spacer></v-spacer>
              <v-chip size="small" color="primary" variant="flat">
                <v-icon start size="small">mdi-calendar</v-icon>
                {{ kurs.datum }}
              </v-chip>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Kurs {
  title: string
  description: string
  anbieter: string
  sprache: string
  dauer?: string
  abschluss: string
  datum: string
  sortDate: Date
  icon: string
  color: string
}

const kurseData: Kurs[] = [
  {
    title: 'Java Masterkurs',
    description: 'Grundlagen, Operatoren, Kontrollstrukturen, Methoden, Arrays, OOP, Vererbung, Interfaces, Abstrakte Klassen und Methoden, Exception Handling, Klonen v. Objekten, Generics, Collection Framework',
    anbieter: 'Programmieren Starten GmbH',
    sprache: 'Deutsch',
    dauer: '40 Stunden',
    abschluss: 'Zertifikat',
    datum: 'Dezember 2024',
    sortDate: new Date('2024-12-17'),
    icon: 'mdi-language-java',
    color: 'blue'
  },
  {
    title: 'Python Masterkurs',
    description: 'Grundlagen, Operatoren, Kontrollstrukturen, Funktionen und Namensbereiche, OOP, Module, Vererbung, Arbeiten mit String, Arbeiten mit Listen und Dictionaries, Arbeiten mit Dateien',
    anbieter: 'Programmieren Starten GmbH',
    sprache: 'Deutsch',
    dauer: '40 Stunden',
    abschluss: 'Zertifikat',
    datum: 'April 2024',
    sortDate: new Date('2024-04-04'),
    icon: 'mdi-language-python',
    color: 'blue'
  },
  {
    title: 'Basic CMD',
    description: 'Basic command line for IT Support. How to use cmd in window',
    anbieter: 'Udemy',
    sprache: 'Englisch',
    dauer: '1 Stunde',
    abschluss: 'Abschlussbescheinigung',
    datum: 'Juni 2024',
    sortDate: new Date('2024-06-01'),
    icon: 'mdi-console',
    color: 'grey'
  },
  {
    title: 'UML & BPMN',
    description: 'Business Process Modelling with UML Activity Diagrams & BPMN',
    anbieter: 'Udemy',
    sprache: 'Englisch',
    dauer: '3,5 Stunden',
    abschluss: 'Abschlussbescheinigung',
    datum: 'Oktober 2025',
    sortDate: new Date('2025-10-17'),
    icon: 'mdi-file-chart',
    color: 'purple'
  },
  {
    title: 'Browser Dev-Tools',
    description: 'Browser Developer Tools - Using for everything',
    anbieter: 'Udemy',
    sprache: 'Englisch',
    dauer: '1,5 Stunden',
    abschluss: 'Abschlussbescheinigung',
    datum: 'Januar 2026',
    sortDate: new Date('2026-01-21'),
    icon: 'mdi-application-brackets',
    color: 'green'
  },
  {
    title: 'PowerShell',
    description: 'Windows PowerShell in 2 Stunden: Crash-Kurs für Einsteiger',
    anbieter: 'Udemy',
    sprache: 'Deutsch',
    dauer: '2 Stunden',
    abschluss: 'Abschlussbescheinigung',
    datum: 'September 2024',
    sortDate: new Date('2024-09-17'),
    icon: 'mdi-powershell',
    color: 'blue'
  },
  {
    title: 'TypeScript',
    description: 'TypeScript Kompaktkurs',
    anbieter: 'Udemy',
    sprache: 'Deutsch',
    dauer: '1,5 Stunden',
    abschluss: 'Abschlussbescheinigung',
    datum: 'Juli 2025',
    sortDate: new Date('2025-07-26'),
    icon: 'mdi-language-typescript',
    color: 'blue'
  },
  {
    title: 'Git',
    description: 'Git/Versionskontrolle: Beginnerfreundlicher Praxiskurs 2024',
    anbieter: 'Udemy',
    sprache: 'Deutsch',
    dauer: '3,5 Stunden',
    abschluss: 'Abschlussbescheinigung',
    datum: 'Dezember 2024',
    sortDate: new Date('2024-12-26'),
    icon: 'mdi-git',
    color: 'orange'
  },
  {
    title: 'HTML5 & CSS3',
    description: 'HTML5 & CSS3 Einsteiger-Kurs - brandaktuell - 2024',
    anbieter: 'Udemy',
    sprache: 'Deutsch',
    dauer: '10 Stunden',
    abschluss: 'Abschlussbescheinigung',
    datum: 'September 2024',
    sortDate: new Date('2024-09-24'),
    icon: 'mdi-language-html5',
    color: 'orange'
  },
  {
    title: 'IPv4 Subnetting',
    description: 'Subnetting mit IPv4: From Zero to Hero',
    anbieter: 'Udemy',
    sprache: 'Deutsch',
    dauer: '2 Stunden',
    abschluss: 'Abschlussbescheinigung',
    datum: 'Oktober 2025',
    sortDate: new Date('2025-10-28'),
    icon: 'mdi-ip-network',
    color: 'green'
  },
  {
    title: 'JavaScript Campus',
    description: 'JavaScript Campus: In 10 Tagen zum JavaScript Entwickler',
    anbieter: 'Udemy',
    sprache: 'Deutsch',
    dauer: '21,5 Stunden',
    abschluss: 'Abschlussbescheinigung',
    datum: 'August 2025',
    sortDate: new Date('2025-08-13'),
    icon: 'mdi-language-javascript',
    color: 'yellow'
  },
  {
    title: 'JavaScript Bootcamp',
    description: 'JavaScript Bootcamp: Lerne DIE Programmiersprache des Webs',
    anbieter: 'Udemy',
    sprache: 'Deutsch',
    dauer: '10 Stunden',
    abschluss: 'Abschlussbescheinigung',
    datum: 'November 2024',
    sortDate: new Date('2024-11-05'),
    icon: 'mdi-language-javascript',
    color: 'yellow'
  },
  {
    title: 'JavaScript Essentials',
    description: 'JavaScript Essentials: Spielerisch Programmieren lernen',
    anbieter: 'Udemy',
    sprache: 'Deutsch',
    dauer: '14 Stunden',
    abschluss: 'Abschlussbescheinigung',
    datum: 'September 2025',
    sortDate: new Date('2025-09-11'),
    icon: 'mdi-language-javascript',
    color: 'yellow'
  },
  {
    title: 'Jira Grundkurs',
    description: 'Jira Software Grundkurs: Projektmanagement mit Jira Software',
    anbieter: 'Udemy',
    sprache: 'Deutsch',
    dauer: '2,5 Stunden',
    abschluss: 'Abschlussbescheinigung',
    datum: 'März 2025',
    sortDate: new Date('2025-03-01'),
    icon: 'mdi-jira',
    color: 'blue'
  },
  {
    title: 'OSI-Modell',
    description: 'Netzwerktechnik: Das OSI-Modell simple und einfach erklärt',
    anbieter: 'Udemy',
    sprache: 'Deutsch',
    dauer: '2,5 Stunden',
    abschluss: 'Abschlussbescheinigung',
    datum: 'September 2025',
    sortDate: new Date('2025-09-25'),
    icon: 'mdi-layers',
    color: 'blue'
  },
  {
    title: 'Open-Source LLMs',
    description: 'Open-Source LLMs: Unzensierte & sichere KI lokal auf dem PC',
    anbieter: 'Udemy',
    sprache: 'Deutsch',
    dauer: '8 Stunden',
    abschluss: 'Abschlussbescheinigung',
    datum: 'Februar 2025',
    sortDate: new Date('2025-02-10'),
    icon: 'mdi-robot',
    color: 'green'
  },
  {
    title: 'Python Campus: KI',
    description: 'Python Campus: In 14 Tagen zur eigenen KI mit Python',
    anbieter: 'Udemy',
    sprache: 'Deutsch',
    dauer: '12,5 Stunden',
    abschluss: 'Abschlussbescheinigung',
    datum: 'Januar 2025',
    sortDate: new Date('2025-01-30'),
    icon: 'mdi-brain',
    color: 'purple'
  },
  {
    title: 'React',
    description: 'React-Grundlagen in 2 Stunden meistern!',
    anbieter: 'Udemy',
    sprache: 'Deutsch',
    dauer: '2 Stunden',
    abschluss: 'Abschlussbescheinigung',
    datum: 'Juni 2025',
    sortDate: new Date('2025-06-13'),
    icon: 'mdi-react',
    color: 'cyan'
  },
  {
    title: 'Architecture',
    description: 'Software Architecture',
    anbieter: 'Udemy',
    sprache: 'Englisch',
    dauer: '7 Stunden',
    abschluss: 'Abschlussbescheinigung',
    datum: 'September 2025',
    sortDate: new Date('2025-09-28'),
    icon: 'mdi-floor-plan',
    color: 'grey'
  },
  {
    title: 'MySQL',
    description: 'MySQL Datenbanken: Das SQL Datenbanken & Daten Komplettpaket',
    anbieter: 'Udemy',
    sprache: 'Deutsch',
    dauer: '9,5 Stunden',
    abschluss: 'Abschlussbescheinigung',
    datum: 'Dezember 2024',
    sortDate: new Date('2024-12-19'),
    icon: 'mdi-database',
    color: 'blue'
  },
  {
    title: 'System Design',
    description: 'System Design for Beginners: Build Scalable Backend Systems',
    anbieter: 'Udemy',
    sprache: 'Englisch',
    dauer: '2,5 Stunden',
    abschluss: 'Abschlussbescheinigung',
    datum: 'Oktober 2025',
    sortDate: new Date('2025-10-07'),
    icon: 'mdi-server-network',
    color: 'green'
  },
  {
    title: 'UML Class',
    description: 'UML Class Diagrams',
    anbieter: 'Udemy',
    sprache: 'Englisch',
    dauer: '2 Stunden',
    abschluss: 'Abschlussbescheinigung',
    datum: 'Oktober 2025',
    sortDate: new Date('2025-10-13'),
    icon: 'mdi-file-chart',
    color: 'purple'
  },
  {
    title: 'Vue.js 3',
    description: 'Vue JS 3 Komplettkurs',
    anbieter: 'Udemy',
    sprache: 'Deutsch',
    dauer: '7 Stunden',
    abschluss: 'Abschlussbescheinigung',
    datum: 'August 2025',
    sortDate: new Date('2025-08-02'),
    icon: 'mdi-vuejs',
    color: 'green'
  },
]

// Kurse nach Datum absteigend sortieren (neueste zuerst)
const kurse = computed(() => {
  return [...kurseData].sort((a, b) => b.sortDate.getTime() - a.sortDate.getTime())
})
</script>

<style scoped>
#kurse {
  background-color: rgba(0, 0, 0, 0.02);
}

.kurs-card {
  width: 100%;
  height: 260px;
}
</style>
