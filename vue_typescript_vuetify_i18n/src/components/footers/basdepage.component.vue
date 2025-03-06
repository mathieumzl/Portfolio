<template>
<v-container pa-0 fluid >
<v-divider class="divider-custom-BP"/>
<v-footer dark padless>
  <v-card elevation='14' flat tile class="flex white--text text-center">
    <v-card-text class="BasDePage01">
      <v-btn v-for="network in networks" :key="network.url" class="mx-4 white--text LienBasDePage01" icon @click="onclick(network.url)" >
        <v-icon v-if="!network.isSvg" size="24px"> {{ network.icon }} </v-icon>
        <img v-else :src="network.icon" alt="Behance" class="svg-icon" />
      </v-btn>
    </v-card-text>
        <v-divider></v-divider>
        <v-card-text class="white--text BasDePage02">
        <span class="LienBasDePage02">2021 - {{ new Date().getFullYear() }}- MAZAL Mathieu</span>
    </v-card-text>
  </v-card>
  </v-footer>
  </v-container>
</template>
<script lang="ts">
import Vue from 'vue'
import '@mdi/font/css/materialdesignicons.css'

export default Vue.extend({
  data: () => ({
    networks: [
      {
        icon: 'mdi-linkedin',
        url: 'https://www.linkedin.com/in/mathieu-mazal-51b130124/'
      },
      {
        icon: 'mdi-instagram',
        url: 'https://www.instagram.com/mathieumzl/'
      },
      {
        icon: 'mdi-artstation',
        url: 'https://www.artstation.com/mathieu_mazal'
      },
      {
        icon: require('@/assets/logo-soft/behance.svg'), // Charge le fichier SVG
        url: 'https://www.behance.net/mathieu_mzl',
        isSvg: true // Indique que c'est un SVG
      }
    ]
  }),
  methods: {
    onclick: function (link:string) {
      window.open(link, '_blank')
    }
  }
})
</script>
<style scoped>
.divider-custom-BP {
  border-color: rgba(62, 62, 62, 1) !important; /* Remplace par ta couleur */
  border-width: 1px !important;    /* Épaisseur */
}
.BasDePage01 {
  max-height: 2.0em !important;
  background-color: rgba(181, 188, 175, 1) !important;
}
.LienBasDePage01 {
  margin-top: -24px !important;
}
.BasDePage02 {
  background-color: rgba(62, 62, 62, 1) !important;
  max-height: 1em !important;
  display: flex;
  justify-content: center; /* Centrer le texte horizontalement */
  align-items: center; /* Centrer le texte verticalement */
  padding: 10px 0; /* Ajouter un peu d'espace en haut/bas */
}

.LienBasDePage02 {
  font-size: 0.9em; /* Ajuste la taille si nécessaire */
  color: white !important; /* Assure que le texte est bien visible */
  display: inline-block; /* S'assurer que l'élément est visible */
  text-align: center;
}
.LienBasDePage02:hover {
  color: rgba(181, 188, 175, 1) !important; /* Assure que le texte est bien visible */
  transform: scale(1.08) !important;  /* Effet d'agrandissement */
}
.v-icon {
  color: rgba(62, 62, 62, 1) !important;
  visibility: visible !important;
  font-size: 24px !important;
}
.v-icon:hover {
  color: #A36A4A !important;
  transform: scale(1.2) !important;  /* Effet d'agrandissement */
}
.svg-icon {
  width: 24px;
  height: 24px;
  filter: invert(21%) sepia(6%) saturate(144%) hue-rotate(49deg) brightness(97%) contrast(87%);
  transition: transform 0.2s ease-in-out, filter 0.2s ease-in-out;
}

.svg-icon:hover {
  filter: invert(44%) sepia(28%) saturate(582%) hue-rotate(340deg) brightness(91%) contrast(90%);
  transform: scale(1.2);
}
</style>
