<template>
  <section id="impressum" class="py-16">
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="8" lg="6">
          <v-card elevation="4" class="impressum-card">
            <v-card-title class="text-h4 text-primary text-center title-with-border">
              Impressum
            </v-card-title>
            
            <v-card-text class="text-body-1 pa-8">
              <p class="mb-4">
                Diese Website ist ein rein privates, nicht kommerzielles Projekt und dient 
                ausschließlich experimentellen und persönlichen Lernzwecken.
              </p>
              
              <p class="text-body-2 text-medium-emphasis mb-6">
                Gemäß § 5 TMG besteht daher keine Pflicht zur Angabe eines Impressums.
              </p>

              <v-divider class="my-6"></v-divider>

              <div class="contact-section">
                <div class="d-flex align-center">
                  <v-icon class="mr-2" :icon="mdiEmail"></v-icon>
                  <a :href="mailtoLink" class="text-decoration-none">
                    {{ emailAddress }}
                  </a>
                </div>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { mdiEmail } from '@mdi/js'

// Mehrfach-Verschleierung: 
const decryptEmail = (): string => {
  
  const encodedUser = 'bWFyY3VzbW9zZXI='
  const user = atob(encodedUser)
  
  const domainParts = ['w', 'e', 'b']
  const domain = domainParts.join('')
  
  const tld = String.fromCharCode(100, 101)
  
  return `${user}@${domain}.${tld}`
}

const emailAddress = computed(() => decryptEmail())
const mailtoLink = computed(() => `mailto:${emailAddress.value}`)
</script>

<style scoped>
#impressum {
  min-height: calc(100vh - 64px);
  display: flex;
  align-items: center;
}

.impressum-card {
  border: 3px solid rgba(25, 118, 210, 0.5) !important;
}

.title-with-border {
  border-bottom: 3px solid rgba(25, 118, 210, 0.5);
  padding-bottom: 16px;
}
</style>
