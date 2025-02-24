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
    <div>
      <v-app-bar fixed class="TitreContactHPBar">
        <v-spacer></v-spacer>
        <v-icon size="1em" class="IconHeader" >mdi-clock-time-four-outline</v-icon>
        <v-toolbar-title class="TitreContactHP">
          <a style="text-decoration: none;">{{$t('HeaderHoraire')}}</a>
        </v-toolbar-title>
            <v-icon size="1em"  class="IconHeader" >mdi-fountain-pen-tip</v-icon>
        <v-toolbar-title class="TitreContactHP" style="color:white !important;">
          <a href="mailto:mazal.mathieu@gmail.com" style="text-decoration: none;">{{$t('HeaderEmail')}}</a>
        </v-toolbar-title>
      </v-app-bar>
    </div>
    <!-- Barre de couleur au-dessus de la v-app-bar -->
        <!-- Barre de navigation -->
        <v-app-bar fixed  style="margin-top: 1.3em;" color='rgba(245, 241, 235, 0.9)' >
          <v-app-bar-nav-icon class="nav_item" @click="drawer = true"></v-app-bar-nav-icon>
          <!-- Titre et lien vers l'accueil -->
          <v-toolbar-title>
            <a @click="scrollTo('#home')" class="TitreSiteHP" >{{$store.state.name}}</a>
          </v-toolbar-title>
          <v-spacer></v-spacer>
          <!-- Accueil -->
          <a class="nav_menu mr-4" style="color:white !important" @click="scrollTo('#home')"><a class="TitreHP">{{$t('HeaderAccueil')}}</a></a>
          <!-- Présentations/ L'atelier / L'agence -->
          <a class="nav_menu mr-4" style="color:white !important" @click="scrollTo('#present')"><a class="TitreHP">{{$t('HeaderPresentation')}}</a></a>
          <!-- Projet / Realisation -->
          <a class="nav_menu mr-4" style="color:white !important" @click="scrollTo('#projects')"><a class="TitreHP">{{$t('HeaderRealisations')}}</a></a>
          <!-- Contact -->
          <a class="nav_menu mr-4" color="transparent" style="color:white !important" @click="scrollTo('#contacts')"><a class="TitreHP">{{$t('HeaderContact')}}</a></a>
          <!-- Particuliers -->
          <a class="nav_menu mr-4" color="transparent" style="text-decoration: none; color:#cf9b58 !important" href="https://www.mazal-mathieu.fr/#/particuliers"><a class="TitreHP">{{$t('SpacePart')}}</a></a>
          <!-- Professionnels -->
          <a class="nav_menu mr-4" color="transparent" style="text-decoration: none; color:#cf9b58 !important" href="https://www.mazal-mathieu.fr/#/pro"><a class="TitreHP">{{$t('SpacePro')}}</a></a>
          <!--<h4 class="nav_menu mr-4">|</h4>-->
          <pf-locale/>
        </v-app-bar>
    <v-navigation-drawer v-model="drawer" temporary app color='rgb(38, 50, 56, 0.8)' class="nav_item">
      <v-list class="mt-10" nav dense>
        <v-list-item-group active-class="text--accent-4">
          <v-list-item @click="drawer = false">
            <v-list-item-icon>
              <v-icon>mdi-account-tie-voice</v-icon>
            </v-list-item-icon>
            <a class="mr-4" style="color:white !important" @click="scrollTo('#present')"><h4>{{$t('HeaderPresentation')}}</h4></a>
          </v-list-item>
          <v-list-item @click="drawer = false">
            <v-list-item-icon>
              <v-icon>mdi-fountain-pen-tip</v-icon>
            </v-list-item-icon>
            <a class="mr-4" style="color:white !important" @click="scrollTo('#contacts')"><h4>{{$t('HeaderContact')}}</h4></a>
          </v-list-item>
          <v-list-item @click="drawer = false">
            <v-list-item-icon>
              <v-icon>mdi-presentation</v-icon>
            </v-list-item-icon>
            <a class="mr-4" color="transparent" style="color:white !important" @click="scrollTo('#projects')"><h4>{{$t('HeaderProjets')}}</h4></a>
          </v-list-item>
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account-multiple-check-outline</v-icon>
            </v-list-item-icon>
              <a class="mr-4" align="left" color="transparent" style="text-decoration: none; color:#cf9b58 !important" href="https://www.mazal-mathieu.fr/#/pro" ><h4>{{$t('SpacePro')}}</h4></a>
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
<style>
.IconHeader {
  margin-right: 0.2em;
  margin-left: 0.8em;
  margin-top: -0.3em;
}
.TitreContactHPBar {
  background: #B5BCAF !important;
  height: 2.6em !important;
  margin-top: -1.3em !important;
}
/* Couleur hover */
.TitreContactHP a:hover {
  color: #A36A4A !important;
}
.TitreContactHP a {
  color: #000000 !important;
  font-size: 0.6em;
}
.TitreContactHP {
  font-weight: normal;
  text-decoration: none;
  position: relative;
  z-index: 2;
  text-align: end !important;
  margin-right: -0.2em;
  margin-top: -0.4em;
}
.header {
  overflow: hidden;
  background-color: rgba(38, 50, 56, 0.6);
  z-index: 2;
}
/* Style the header links */
.header a {
  float: left;
  color: black;
  text-align: center;
  padding: 12px;
  text-decoration: none;
  font-size: 18px;
  border-radius: 4px;
}

/* Style the logo link (notice that we set the same value of line-height and font-size to prevent the header to increase when the font gets bigger */
.header a.logo {
  font-size: 25px;
  font-weight: bold;
}

/* Change the background color on mouse-over */
.header a:hover {
  background-color: #ddd;
  color: black;
}

/* Style the active/current link*/
.header a.active {
  background-color: dodgerblue;
  color: #3E3E3E;
}

/* Float the link section to the right */
.header-right {
  float: right;
}

/* Add media queries for responsiveness - when the screen is 500px wide or less, stack the links on top of each other */
@media screen and (max-width: 1000px) {
  .header a {
    float: none;
    display: block;
    text-align: left;
  }
  .header-right {
    float: none;
  }
}
@media only screen and (min-width: 1000px) {
  .nav_item {
    z-index: 7 !important;
  }
}
@media only screen and (max-width: 1000px) {
  .nav_item {
    z-index: 7 !important;
    display: block !important;
  }
}
/* Style for h3 elements */
.TitreHP {
  font-weight: normal;
  text-decoration: none;
  color: #3E3E3E !important;
  font-size: 1.2em;
  margin: 0.2em;
}
/* Couleur hover */
.TitreHP:hover {
  color: #A36A4A !important;
}
.TitreSiteHP {
  font-weight: normal;
  text-decoration: none;
  color: #3E3E3E !important;
  font-size: 1.2em;
  margin: 0.2em;
}
/* Couleur hover */
.TitreSiteHP:hover {
  color: #A36A4A !important;
}
</style>
