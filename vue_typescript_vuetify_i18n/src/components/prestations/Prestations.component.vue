<template>
  <v-container class="mt-10 cartesvisite">
    <v-row justify="center" class="text-center">
      <!-- Carte Particuliers -->
      <v-col cols="12" sm="11" md="6" lg="5">
        <v-card
          href="/particuliers"
          class="service-card"
          elevation="10"
          :class="{ 'hover-effect': hoverParticulier }"
          @mouseover="hoverParticulier = true"
          @mouseleave="hoverParticulier = false"
        >
          <v-card-title class="title">
            <v-icon left >mdi-home</v-icon><span>{{$t('ChoixPrestationCarteParticuliers')}}</span>
          </v-card-title>
          <v-card-text class="TextCarte">
            {{$t('ChoixPrestationCarteParticuliersTexte')}}
          </v-card-text>
          <v-card-actions>
            <v-btn block class="custom-btn">{{$t('ChoixPrestationCarteBtn')}}</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>

      <!-- Carte Professionnels -->
      <v-col cols="12" sm="11" md="6" lg="5">
        <v-card
          href="/pro"
          class="service-card"
          elevation="10"
          :class="{ 'hover-effect': hoverPro }"
          @mouseover="hoverPro = true"
          @mouseleave="hoverPro = false"
        >
          <v-card-title class="title">
            <v-icon left>mdi-domain</v-icon><span>{{$t('ChoixPrestationCarteProfessionnels')}}</span>
          </v-card-title>
          <v-card-text class="TextCarte">
            {{$t('ChoixPrestationCarteProfessionnelsTexte')}}
          </v-card-text>
          <v-card-actions>
            <v-btn block class="custom-btn">{{$t('ChoixPrestationCarteBtn')}}</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      hoverParticulier: false,
      hoverPro: false
    }
  }
})
</script>

<style scoped>
/* Container principal */
.cartesvisite {
  margin-top: -2em !important; /* Remonte tout le conteneur */
}
/* Style des cartes */
.service-card {
  padding: 2em;
  border: 3px solid rgba(62, 62, 62, 1) !important;
  background: rgba(181, 188, 175, 1);
  color: rgba(62, 62, 62, 1);
  transition: all 0.3s ease-in-out;
  min-height: 22.7em !important; /* Assure que les cartes ont la même hauteur */
  max-height: 22.7em !important;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
}
.TextCarte,
.v-icon {
  color: rgba(62, 62, 62, 1) !important;
}
/* Effet au survol */
.hover-effect .TextCarte,
.service-card:hover .v-icon {
  color: white !important;
}
/* Vitesse animation */
.service-card {
  transition: all 0.1s ease-in-out;
}
.hover-effect {
  background: #A36A4A !important;  /* Changement de couleur */
  color: rgba(250, 250, 248, 1) !important;
  transform: scale(1.05) !important;  /* Effet d'agrandissement */
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.3) !important;
}
/* Titre des cartes */
.title, span, .v-icon {
  text-align: center; /* Centre le texte */
  font-size: clamp(35px, 4.5vw, 40px) !important; /* Augmente la taille du texte */
  display: flex;
  justify-content: center; /* Centre horizontalement */
  align-items: center; /* Centre verticalement */
  gap: 10px; /* Espacement entre l'icône et le texte */
}
/* Boutons stylisés */
.custom-btn {
  background: rgba(245, 241, 235, 1) !important;
  color: rgba(62, 62, 62, 1); /* Blanc cassé */
  font-size: 1.1em;
  font-weight: bold;
  padding: 12px 24px;
  border: 2px solid rgba(62, 62, 62, 1);
  transition: all 0.3s ease-in-out;
  text-transform: uppercase;
}
.custom-btn:hover {
  transform: scale(1.1);  /* Effet d'agrandissement */
}
.title {
  display: flex;
  align-items: center;
  justify-content: center; /* Centrer horizontalement */
  flex-wrap: nowrap; /* Empêche le retour à la ligne */
  gap: 10px; /* Espacement entre l’icône et le texte */
  min-height: 1em; /* Garantit une hauteur uniforme */
  max-height: 2em; /* Garantit une hauteur uniforme */
}

.title span {
  white-space: nowrap; /* Empêche le texte de passer à la ligne */
}

</style>
