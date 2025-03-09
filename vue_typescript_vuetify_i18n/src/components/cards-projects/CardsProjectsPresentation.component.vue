<template>
    <v-container>
        <v-card-title class="justify-center mb-7 mt-4"><h2 class="TitreH3 section-divider">{{$t('TitleAllProject')}}</h2></v-card-title>
        <v-row class="mb-6 justify-center">
          <v-chip-group mandatory class="">
            <v-chip class="ma-2 custom-btn" outlined :class="{'selected-chip': filterTag === ''}" @click="filterTag =''">{{$t('FilterAll')}}</v-chip>
            <v-chip class="ma-2 custom-btn" outlined :class="{'selected-chip': filterTag === 'Professional'}" @click="filterTag ='Professional'">{{$t('FilterIProfessional')}}</v-chip>
            <v-chip class="ma-2 custom-btn" outlined :class="{'selected-chip': filterTag === 'Portfolio'}" @click="filterTag ='Portfolio'">{{$t('FilterPortfolio')}}</v-chip>
          </v-chip-group>
        </v-row>
        <v-row class="justify-center">
            <v-col cols="12" sm="6" :md="mdt" v-for="(item, i) in projects" v-bind:key="i">
              <pf-CardsProjects :project="item"/>
            </v-col>
        </v-row>
        <div class="mb-15"/>
    </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import i18n from '@/i18n'

export default Vue.extend({
  name: 'titlep',
  data: () => ({
    sheet: false,
    show: false,
    mdt: 'auto',
    lgt: '4',
    filterTag: ''
  }),
  computed: {
    projects: function () {
      const _ps = JSON.stringify(i18n.t('Projects'))
      const _projects = JSON.parse(_ps) as Array<any>
      const _projectss = Array<any>()

      for (const project in _projects) {
        _projectss.push(_projects[project])
      }

      return _projectss.filter((p:any) => p.tag === this.filterTag || this.filterTag === '')
    }
  }
})
</script>
<style scoped>
.PageProjets {
  background-color: #FFFFFF !important;
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

.v-chip-group {
  display: flex;               /* Utilisation de flexbox */
  flex-wrap: wrap;             /* Permet aux chips de se mettre à la ligne si besoin */
  justify-content: center;     /* Centrer les chips dans le conteneur */
}

/* BOUTONS FILTRE RECHERCHE */
.custom-btn {
  border-radius: 5px !important;
  background: rgba(245, 241, 235, 1) !important;
  color: rgba(62, 62, 62, 1) !important; /* Blanc cassé */
  font-size: 1.1em !important;
  font-weight: bold !important;
  padding: 12px 24px !important;
  border: 2px solid rgba(62, 62, 62, 1) !important;
  transition: all 0.3s ease-in-out !important;
  text-transform: uppercase !important;
  box-sizing: border-box;
}
/* Media Query pour les petits écrans */
@media (max-width: 640px) {
  .custom-btn {
    font-size: 2vw !important;  /* Réduction de la taille du texte */
    padding: 8px 16px !important;  /* Réduction du padding */
  }
}
.custom-btn:hover {
  transform: scale(1.1) !important;  /* Effet d'agrandissement */
}

.selected-chip {
  border: 2px solid #A36A4A !important; /* Couleur de la bordure lorsque sélectionné */
  background-color: #B5BCAF !important; /* Optionnel: Fond légèrement coloré pour un meilleur contraste */
}

</style>
