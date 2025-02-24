<template>
  <v-container class="mt-10 cartesvisite">
    <v-row justify="center" class="text-center">
      <!-- Carte Particuliers -->
      <v-col cols="12" md="5">
        <v-card
          href="https://www.mazal-mathieu.fr/#/particuliers"
          class="service-card"
          elevation="10"
          :class="{ 'hover-effect': hoverParticulier }"
          @mouseover="hoverParticulier = true"
          @mouseleave="hoverParticulier = false"
        >
          <v-card-title class="title">
            <v-icon left color="amber">mdi-home</v-icon>Particuliers
          </v-card-title>
          <v-card-text>
            Vous souhaitez repenser votre intérieur, optimiser votre espace ou rénover votre logement ?
            Je vous accompagne dans la conception et la réalisation de votre projet sur-mesure.
          </v-card-text>
          <v-card-actions>
            <v-btn block color="primary">En savoir plus</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>

      <!-- Carte Professionnels -->
      <v-col cols="12" md="5">
        <v-card
          href="https://www.mazal-mathieu.fr/#/pro"
          class="service-card"
          elevation="10"
          :class="{ 'hover-effect': hoverPro }"
          @mouseover="hoverPro = true"
          @mouseleave="hoverPro = false"
        >
          <v-card-title class="title">
            <v-icon left color="blue">mdi-domain</v-icon>Professionnels
          </v-card-title>
          <v-card-text>
            Besoin d’un aménagement fonctionnel et esthétique pour votre espace professionnel ?
            J’accompagne entreprises et commerçants dans la création d’environnements inspirants et adaptés.
          </v-card-text>
          <v-card-actions>
            <v-btn block color="primary">Découvrir</v-btn>
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
.cartesvisite {
  margin-top: -2em !important; /* Remonte tout le conteneur */
}
.service-card {
  padding: 1em;
  border-radius: none;
  background: #ECE0D1;
  color: white;
  transition: all 0.3s ease-in-out;
}

.hover-effect {
  background: #B5BCAF !important;  /* Changement de couleur */
  color: black !important;
  transform: scale(1.05);  /* Effet d'agrandissement */
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.3);
}
.title {
  text-align: center; /* Centre le texte */
  font-size: 1.8em !important; /* Augmente la taille du texte */
  font-weight: bold;
  width: 100%; /* Assure que le titre prend toute la largeur */
  display: flex;
  justify-content: center; /* Centre horizontalement */
  align-items: center; /* Centre verticalement */
}
</style>
