<template>
    <div>
        <v-app-bar fixed class="TitreContactHPBar">
          <v-spacer></v-spacer>
          <v-icon size="1em" class="IconHeader" >mdi-clock-time-four-outline</v-icon>
          <v-toolbar-title class="TitreContactHP">
            <a style="text-decoration: none;">{{$t('HeaderHoraire')}}</a>
          </v-toolbar-title>
              <v-icon size="1em"  class="IconHeader" >mdi-fountain-pen-tip</v-icon>
          <v-toolbar-title class="TitreContactHP" style="color:white !important;">
            <a href="mailto:contact@mazal-mathieu.fr" style="text-decoration: none;">{{$t('HeaderEmail')}}</a>
          </v-toolbar-title>
        </v-app-bar>
      <!-- Barre de couleur au-dessus de la v-app-bar -->
          <!-- Barre de navigation -->
          <v-app-bar fixed color='rgba(245, 241, 235, 0.9)' class="MainNavBar">
            <v-app-bar-nav-icon class="nav_item" @click="drawer = true"><v-icon class="Hamburger">mdi-menu</v-icon></v-app-bar-nav-icon>
            <!-- Titre et lien vers l'accueil -->
            <v-toolbar-title class="TitreSiteContainer">
              <div class="TitreSiteWrapper">
                <img src="@/assets/logo_.png" alt="Logo" class="logo-header">
                <a href="/" @click="scrollTo('#home')" class="TitreSiteHP TitreTexte">{{$t('NameSite')}}</a>
              </div>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <!-- Accueil -->
            <router-link class="nav_menu mr-4" color="transparent" style="text-decoration: none; color:#cf9b58 !important" to="/">
              <a class="TitreHP">{{$t('HeaderAccueil')}}</a>
            </router-link>
            <!-- Présentations/ L'atelier / L'agence -->
            <a class="nav_menu mr-4" style="color:white !important" @click="scrollTo('#present')"><a class="TitreHP">{{$t('HeaderPresentation')}}</a></a>
            <!-- Projet / Realisation -->
            <router-link class="nav_menu mr-4" color="transparent" style="text-decoration: none; color:#cf9b58 !important" to="/projets">
              <a @click="scrollTo('#home')" class="TitreHPPro">{{$t('HeaderRealisations')}}</a>
            </router-link>
              <!-- Particuliers -->
              <router-link class="nav_menu mr-4" color="transparent" style="text-decoration: none; color:#cf9b58 !important" to="/particuliers">
                  <a class="TitreHP">{{$t('SpacePart')}}</a>
              </router-link>
              <!-- Professionnels -->
              <router-link class="nav_menu mr-4" color="transparent" style="text-decoration: none; color:#cf9b58 !important" to="/pro">
                  <a class="TitreHP">{{$t('SpacePro')}}</a>
              </router-link>
            <!-- Contact -->
            <a class="nav_menu mr-4" color="transparent" style="color:white !important" @click="scrollTo('#contacts')"><a class="TitreHP">{{$t('HeaderContact')}}</a></a>
            <!--<h4 class="nav_menu mr-4">|</h4>-->
            <pf-locale/>
          </v-app-bar>
      <v-navigation-drawer v-model="drawer" temporary app color='rgba(181, 188, 175, 1)' class="nav_item">
        <v-list class="mt-10" nav dense>
          <img src="@/assets/logo_.png" alt="Logo" class="logo-header-ham">
          <v-list-item-group active-class="text--accent-4">
              <a class="mr-4 section-divider-menu" style="color:#3E3E3E  !important" @click="scrollTo('#present')"><h3>{{$t('HeaderPresentationMenu')}}</h3></a>
            <v-list-item  @click="drawer = false">
              <v-list-item-icon>
                <v-icon color="#3E3E3E">mdi-account-tie-voice</v-icon>
              </v-list-item-icon>
              <a class="mr-4" style="color:#3E3E3E  !important" @click="scrollTo('#present')"><h4>{{$t('HeaderPresentation')}}</h4></a>
            </v-list-item>
            <v-list-item @click="drawer = false">
              <v-list-item-icon>
                <v-icon color="rgba(62, 62, 62, 1)">mdi-fountain-pen-tip</v-icon>
              </v-list-item-icon>
              <a class="mr-4" style="color:#3E3E3E  !important" @click="scrollTo('#contacts')"><h4>{{$t('HeaderContact')}}</h4></a>
            </v-list-item>
            <v-list-item @click="drawer = false">
              <v-list-item-icon>
                <v-icon color="rgba(62, 62, 62, 1)">mdi-presentation</v-icon>
              </v-list-item-icon>
              <a class="mr-4" color="transparent" style="color:#3E3E3E  !important" @click="scrollTo('#projects')"><h4>{{$t('HeaderProjets')}}</h4></a>
            </v-list-item>
            <v-list-item>
              <v-list-item-icon>
                <v-icon color="rgba(62, 62, 62, 1)">mdi-account-multiple-check-outline</v-icon>
              </v-list-item-icon>
                <a class="mr-4" align="left" color="transparent" style="text-decoration: none; color:#3E3E3E !important" href="https://www.mazal-mathieu.fr/#/pro" ><h4>{{$t('SpacePro')}}</h4></a>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
    </div>
  </template>
<script>
import Vue from 'vue'
export default Vue.extend({
  data: () => ({
    drawer: false
  }),
  methods: {
    scrollTo: function (targetId) {
      document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' })
    }
  }
})
</script>
<style scoped>
.TitreHPPro {
  color: #A36A4A !important;
  text-decoration: underline;
  font-weight: normal;
  font-size: 1.2em;
  margin: 0.2em;
  display: inline-block;
  transition: transform 0.3s ease-in-out;
}
</style>
