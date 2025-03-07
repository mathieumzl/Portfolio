<template>
  <!--
    <v-app-bar flex app dense color='rgb(38, 50, 56, 0.6)' >
      <v-toolbar-title> <a @click="scrollTo('#home')" style="color:white !important">{{$store.state.name}}</a> </v-toolbar-title>
      <v-spacer></v-spacer>
        <h4 class="mr-4">|</h4>
        <a class="mr-4" style="color:white !important" @click="scrollTo('#present')"><h3>{{$t('HeaderPresentation')}}</h3></a>
        <h4 class="mr-4">|</h4>
        <a class="mr-4" style="color:white !important" @click="scrollTo('#contacts')"><h3>{{$t('HeaderContact')}}</h3></a>
        <h4 class="mr-4">|</h4>
        <a class="mr-4" color="transparent" style="color:white !important" @click="scrollTo('#projects')"><h3>{{$t('HeaderProjets')}}</h3></a>
        <h4 class="mr-4">|</h4>
      <pf-locale/>
  </v-app-bar> -->
<!--<div float class="header">
        <a @click="scrollTo('#home')" style="color:white !important" ><h2>{{$store.state.name}}</h2></a>
        <div class="header-right mt-1">
          <a style="color:white !important" @click="scrollTo('#present')"><h3>{{$t('HeaderPresentation')}}</h3></a>
          <a style="color:white !important" @click="scrollTo('#contacts')"><h3>{{$t('HeaderContact')}}</h3></a>
          <a color="transparent" style="color:white !important" @click="scrollTo('#projects')"><h3>{{$t('HeaderProjets')}}</h3></a>
          <a><pf-locale class=""/></a>
      </div>
</div>-->
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
            <a @click="scrollTo('#home')" class="TitreHP">{{$t('HeaderAccueil')}}</a>
          </router-link>
          <!-- Présentations/ L'atelier / L'agence -->
            <a href="/#present" class="TitreHP nav_menu mr-5">{{$t('HeaderPresentation')}}</a>
          <!-- Projet / Realisation -->
          <router-link class="nav_menu mr-4" color="transparent" style="text-decoration: none; color:#cf9b58 !important" to="/projets">
            <a @click="scrollTo('#home')" class="TitreHP">{{$t('HeaderRealisations')}}</a>
          </router-link>
            <!-- Particuliers -->
            <router-link class="nav_menu mr-4" color="transparent" style="text-decoration: none; color:#cf9b58 !important" to="/particuliers">
                <a class="TitreHP">{{$t('SpacePart')}}</a>
            </router-link>
            <!-- Professionnels -->
            <router-link class="nav_menu mr-4" color="transparent" style="text-decoration: none; color:#cf9b58 !important" to="/pro">
                <a @click="scrollTo('#home')" class="TitreHPPro">{{$t('SpacePro')}}</a>
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
          <!-- Accueil -->
            <v-list-item  @click="drawer = false">
              <v-list-item-icon>
                <v-icon color="#3E3E3E">mdi-home-outline</v-icon>
              </v-list-item-icon>
                <a href="/" @click="scrollTo('#home')" class="TitreHP">{{$t('HeaderAccueil')}}</a>
          </v-list-item>
          <!-- Présentations/ L'atelier / L'agence -->
          <v-list-item @click="drawer = false">
            <v-list-item-icon>
              <v-icon color="rgba(62, 62, 62, 1)">mdi-presentation</v-icon>
            </v-list-item-icon>
            <a @click="scrollTo('#present')" href="/#present" class="TitreHP mr-5">{{$t('HeaderPresentation')}}</a>
          </v-list-item>
          <!-- Projet / Realisation -->
          <v-list-item @click="drawer = false">
            <v-list-item-icon>
              <v-icon color="rgba(62, 62, 62, 1)">mdi-home-group-plus</v-icon>
            </v-list-item-icon>
            <a href="/projets" @click="scrollTo('#home')" class="TitreHP">{{$t('HeaderRealisations')}}</a>
          </v-list-item>
          <!-- Particuliers -->
          <v-list-item>
            <v-list-item-icon>
              <v-icon color="rgba(62, 62, 62, 1)">mdi-account-edit-outline</v-icon>
            </v-list-item-icon>
            <a  href="/particuliers" class="TitreHP">{{$t('SpacePart')}}</a>
          </v-list-item>
          <!-- Professionnels -->
          <v-list-item>
            <v-list-item-icon>
              <v-icon color="rgba(62, 62, 62, 1)">mdi-briefcase-edit-outline</v-icon>
            </v-list-item-icon>
            <a  href="/pro" class="TitreHPAccueil">{{$t('SpacePro')}}</a>
          </v-list-item>
          <!-- Contact -->
          <v-list-item>
            <v-list-item-icon>
              <v-icon color="rgba(62, 62, 62, 1)">mdi-card-account-mail-outline</v-icon>
            </v-list-item-icon>
            <a  @click="scrollTo('#contacts')" class="TitreHP">{{$t('HeaderContact')}}</a>
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
