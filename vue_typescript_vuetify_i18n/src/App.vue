<template>
  <v-app>
    <v-main class="pt-0">
      <router-view/>
    </v-main>
    <pf-Footer/>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'App',

  data: () => ({
    //
  })
})
</script>
<style>
body {
  background-color: var(--v-background-base) !important;
  font-family: 'DM Serif Display', serif !important; /* Option : Remplace par 'Work Sans' si préféré */
}
/* Titres premium et modernes */
h1, h2, h3, h4, h5, h6, a, p, span {
  font-family: 'DM Serif Display', serif !important;
  font-weight: 400; /* Pour garder un effet fin et élégant */
  letter-spacing: 0.5px; /* Espacement subtil pour l'élégance */
}
/* Boutons et menu */
.v-btn, .menu-item {
  font-family: 'DM Serif Display', serif !important;
  font-weight: 600; /* Pour un look professionnel et structuré */
  text-transform: uppercase; /* Optionnel, apporte un style plus affirmé */
}
.v-application, .title {
  font-family: 'DM Serif Display', serif !important;
}
/* Surcharge spécifique pour les éléments Vuetify */
.v-btn, .v-card-title, .v-card-text, .v-menu, .v-list, .v-dialog, .v-toolbar {
  font-family: 'DM Serif Display', serif !important;
}
/* Ajuster les tailles et marges */
h1 { font-size: 2.4em; margin-bottom: 10px; }
h2 { font-size: 2em; margin-bottom: 8px; }
h3 { font-size: 1.6em; margin-bottom: 6px; }

/* Style des boutons */
.v-btn {
  letter-spacing: 0.8px;
  padding: 12px 24px;
  border-radius: 8px; /* Coins légèrement arrondis pour un design moderne */
}
</style>
