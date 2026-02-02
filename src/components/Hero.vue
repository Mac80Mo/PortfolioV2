<template>
  <section id="hero">
    <v-container fluid class="hero-container">
      <v-row align="center" justify="center" class="fill-height">
        <v-col cols="12" md="4" class="d-flex justify-center mb-6 mb-md-0">
          <div class="profile-image-wrapper">
            <img 
              :src="profileImage" 
              alt="Marcus Profilbild" 
              class="profile-image"
            />
          </div>
        </v-col>
        <v-col cols="12" md="8" class="text-center text-md-left">
          <h1 class="text-h2 text-md-h1 font-weight-bold mb-4">
            <span class="greeting">Hallo, ich bin </span><br><span class="text-primary name">Marcus</span>
          </h1>
          <p class="text-h5 text-md-h4 mb-6">
            Fachinformatiker Anwendungsentwicklung<br>
            Schwerpunkt: Web-Entwicklung & KI-Integration
          </p>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup lang="ts">
import profileImage from '@/assets/images/profile/_S3A4489_3.jpeg'
</script>

<style scoped>
.hero-container {
  min-height: calc(100vh - 64px);
  display: flex;
  align-items: center;
}

.greeting {
  font-size: 0.7em;
}

.name {
  font-size: 1.3em;
}

.profile-image-wrapper {
  width: 250px;
  height: 250px;
  border-radius: 50%;
  overflow: hidden;
  border: 4px solid #1976D2;
  box-shadow: 0 0 20px rgba(25, 118, 210, 1);
}

.profile-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

@media (min-width: 960px) {
  .profile-image-wrapper {
    width: 300px;
    height: 300px;
  }
}
</style>
