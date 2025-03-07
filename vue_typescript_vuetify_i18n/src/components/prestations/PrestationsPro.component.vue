<template>
    <v-container>
      <v-card-title class="justify-center mb-7 mt-4">
        <h2 class="TitreH3 section-divider">{{$t('TitleAllPrestations')}}</h2>
      </v-card-title>
      <span class="HeaderContactDesc">{{$t('TitleAllPrestationsProDesc')}}</span>
      <!-- Affichage des prestations -->
      <v-row class="justify-center CartePrestations">
        <v-col cols="12" sm="10" :md="mdt" v-for="(item, i) in PrestationsPro" :key="i">
          <v-card class="custom-card" @click="scrollTo('#contacts')">
            <v-row class="card-content">
              <!-- Colonne 1 -->
              <v-col cols="12" md="4" class="text-left">
                <h3 class="card-title">{{ item.title }}</h3>
                <p class="card-desc">{{ item.description }}</p>
              </v-col>

              <!-- Colonne 2 -->
              <v-col cols="12" md="5" class="text-left">
                <h3 class="card-title">{{ item.NeedReinforcement }}</h3>
                <p class="card-desc">{{ item.details }}</p>
              </v-col>

              <!-- Colonne 3 -->
              <v-col cols="12" md="3" class="text-right">
                <h3 v-if="item.price" class="card-title">{{$t('Price')}} : {{ item.price }}</h3>
                <h3 v-if="item.dailyRate" class="card-title-desc">{{$t('DailyRate')}} : {{ item.dailyRate }}</h3>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>

      <div class="mb-15" />
    </v-container>
  </template>

<script lang="ts">
import Vue from 'vue'
import i18n from '@/i18n'

export default Vue.extend({
  name: 'PrestationList',
  data: () => ({
    filterTag: '',
    mdt: 'auto'
  }),
  computed: {
    PrestationsPro (): Array<any> {
      return i18n.t('PrestationsPro') as unknown as Array<any>
    }
  },
  methods: {
    scrollTo (targetId) {
      const element = document.querySelector(targetId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  },
  mounted () {
    if (window.location.hash) {
      this.scrollTo(window.location.hash)
    }
  }
})
</script>

<style scoped>
.HeaderContactDesc {
  font-size: 0.7em !important; /* Réduit la taille du texte */
  color: rgba(62, 62, 62, 1) !important; /* Couleur du texte */
  font-style: italic !important; /* Met le texte en italique */
  margin-top: -28px !important;
  margin-bottom: 15px !important;
  max-width: 550px !important; /* Fixe la largeur du texte à 100px */
  overflow: hidden; /* Cache le texte qui dépasse de 100px */
  text-overflow: ellipsis; /* Affiche "..." si le texte dépasse la largeur définie */
  display: inline-block !important; /* Assure un comportement de type bloc tout en permettant une largeur définie */
}

.TitreH3 {
  color:rgba(62, 62, 62, 1) !important;
}
.section-divider {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  position: relative;
  padding: 10 10px; /* Espace de 10px de chaque côté */
  box-sizing: border-box;
}

.section-divider::before,
.section-divider::after {
  content: "";
  height: 2px;
  background: #333;
  flex-grow: 1;
  margin-left: 5px !important;
  margin-right: 5px !important;
  max-width: 170px !important;
}

.section-divider span {
  font-size: 1.2rem !important;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding: 0 30px; /* Espace autour du texte */
  background: white; /* Pour cacher la ligne derrière le texte */
}
.gradient-text_menu {
    border-color: rgb(255, 255, 255) !important;
    color: #FFFFFF;
    height: 40px;
    background-color: #ffffff;
    background-image: linear-gradient(360deg, #ffffff, #ffffff);
    background-size: 100%;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
}
.custom-card {
    padding: 20px;
    border-radius: 0;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    background: #f5f5f5;
    border: 3px solid #3e3e3e; /* Ajuste selon le contenu */
    max-width: 1000px;
    display: flex;
    flex-direction: column;
    justify-content: space-between; /* Évite l'étirement du contenu */
}
.custom-card:hover {
    transform: scale(1.02); /* Applique le zoom uniquement à la carte survolée */
    border-color: rgba(163, 106, 74, 1) !important;
    border: 4px solid #3e3e3e; /* Ajuste selon le contenu */
}
.card-title {
    flex: 1;
    font-weight: bold;
    font-size: clamp(15px, 1vw, 19px) !important;
    color: #3e3e3e;
}
.card-title-desc {
    font-size: 0.9em;
    font-style: italic;
    margin-top: -10px;
    color: #3e3e3e;
}

.card-desc {
    font-size: 0.9em;
    color: #5a5a5a;
}

.card-content {
    display: flex;
    flex-wrap: wrap;
}
</style>
