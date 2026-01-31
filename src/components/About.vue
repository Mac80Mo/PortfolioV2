<template>
  <section id="about" class="py-16">
    <v-container>
      <v-row>
        <v-col cols="12">
          <h2 class="text-h3 text-center mb-12 text-primary">Über mich</h2>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          v-for="abschluss in abschluesse"
          :key="abschluss.title"
          cols="12"
          md="6"
        >
          <v-card elevation="4" class="h-100 d-flex flex-column about-card" border="primary">
            <v-card-title>{{ abschluss.title }}</v-card-title>
            <v-card-text class="flex-grow-1">
              {{ abschluss.description }}
            </v-card-text>
            <v-card-actions class="mt-auto">
              <v-chip size="small" color="primary" variant="flat">
                <v-icon start size="small">mdi-domain</v-icon>
                {{ abschluss.ihk }}
              </v-chip>
              <v-chip size="small" color="primary" variant="outlined">
                <v-icon start size="small">mdi-star</v-icon>
                {{ abschluss.punkte }}
              </v-chip>
              <v-spacer></v-spacer>
              <v-chip size="small" color="primary" variant="flat">
                <v-icon start size="small">mdi-calendar</v-icon>
                {{ abschluss.year }}
              </v-chip>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup lang="ts">
interface Abschluss {
  title: string
  description: string
  ihk: string
  punkte: number
  year: string
}

const abschluesse: Abschluss[] = [
  {
    title: 'Fachinformatiker Anwendungsentwicklung',
    description: 'Zusatz: Künstliche Intelligenz',
    ihk: 'IHK Rhein-Neckar',
    punkte: 77,
    year: '2026'
  },
  {
    title: 'Bürokaufmann',
    description: 'Im Speditionsbereich',
    ihk: 'IHK Rhein-Neckar',
    punkte: 67,
    year: '2001'
  }
]
</script>

<style scoped>
#about {
  background-color: rgba(0, 0, 0, 0.02);
}

.about-card {
  border: 3px solid rgba(25, 118, 210, 0.5) !important;
}
</style>
