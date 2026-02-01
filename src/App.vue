<template>
  <v-app>
    <AnimatedBackground />
    
    <v-navigation-drawer v-model="drawer" temporary>
      <v-list>
        <v-list-item
          :prepend-icon="icons.home"
          title="Start"
          @click="scrollTo('hero')"
        ></v-list-item>
        <v-list-item
          :prepend-icon="icons.account"
          title="Über mich"
          @click="scrollTo('about')"
        ></v-list-item>
        <v-list-item
          :prepend-icon="icons.codeTags"
          title="Fähigkeiten"
          @click="scrollTo('skills')"
        ></v-list-item>
        <v-list-item
          :prepend-icon="icons.databaseSearch"
          title="Erweiterte-Suche"
          @click="scrollTo('suche')"
        ></v-list-item>
        <v-list-item
          :prepend-icon="icons.certificate"
          title="Zertifikate"
          @click="scrollTo('certificates')"
        ></v-list-item>
        <v-list-item
          :prepend-icon="icons.school"
          title="Kurse"
          @click="scrollTo('kurse')"
        ></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app elevation="2">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      
      <v-app-bar-title class="text-h5 font-weight-bold">
        Marcus
      </v-app-bar-title>
      
      <v-spacer></v-spacer>
      
      <v-btn icon @click="toggleTheme">
        <v-icon>{{ theme.global.current.value.dark ? icons.weatherSunny : icons.weatherNight }}</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main style="position: relative; z-index: 1; background: transparent;">
      <router-view />
    </v-main>

    <v-footer>
      <v-container>
        <v-row justify="center">
          <v-col cols="auto">
            <span class="text-caption">
              &copy; {{ new Date().getFullYear() }}
            </span>
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useTheme } from 'vuetify'
import AnimatedBackground from './components/AnimatedBackground.vue'
import { icons } from './plugins/icons'

const theme = useTheme()
const drawer = ref(false)

const toggleTheme = () => {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}

const scrollTo = (id: string) => {
  drawer.value = false
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}
</script>

<style scoped>
</style>
