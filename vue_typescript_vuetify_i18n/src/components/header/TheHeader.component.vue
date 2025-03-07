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
            <a href="/" @click="scrollTo('#home')" class="TitreHPAccueil">{{$t('HeaderAccueil')}}</a>
          </router-link>
          <!-- Présentations/ L'atelier / L'agence -->
          <a @click="scrollTo('#present')" href="/#present" class="TitreHP nav_menu mr-5">{{$t('HeaderPresentation')}}</a>
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
            <a class="TitreHP">{{$t('SpacePro')}}</a>
          </router-link>
          <!-- Contact -->
          <router-link  @click="scrollTo('#contacts')" class="nav_menu mr-4" color="transparent" style="text-decoration: none; color:#cf9b58 !important" to="/contact">
            <a class="TitreHP">{{$t('HeaderContact')}}</a>
          </router-link>
          <!--<h4 class="nav_menu mr-4">|</h4>-->
          <pf-locale/>
        </v-app-bar>

    <!-- BAR BURGER-->
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
                <a href="/" @click="scrollTo('#home')" class="TitreHPAccueil">{{$t('HeaderAccueil')}}</a>
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
            <a  href="/pro" class="TitreHP">{{$t('SpacePro')}}</a>
          </v-list-item>
          <!-- Contact -->
          <v-list-item>
            <v-list-item-icon>
              <v-icon color="rgba(62, 62, 62, 1)">mdi-card-account-mail-outline</v-icon>
            </v-list-item-icon>
            <a  href="/contact" class="TitreHP">{{$t('HeaderContact')}}</a>
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
  scrollToAndCloseDrawer (targetId) {
    this.scrollTo(targetId)
    this.drawer = false
  },
  mounted () {
    if (window.location.hash) {
      this.scrollTo(window.location.hash)
    }
  }
})
</script>
<style>
.TitreHPAccueil {
  color: #A36A4A !important;
  text-decoration: underline;
  font-weight: normal;
  font-size: 1.2em;
  margin: 0.2em;
  display: inline-block;
  transition: transform 0.3s ease-in-out;
}
.logo-header-ham {
  height: 100px; /* Ajustez la taille selon vos besoins */
  margin-top: -40px;
  vertical-align: middle; /* Alignement vertical avec le texte */
  z-index: 12;
}
.logo-header {
  height: 70px; /* Ajustez la taille selon vos besoins */
  margin-right: -10px; /* Espace entre le logo et le texte */
  margin-top: 0px;
  vertical-align: middle; /* Alignement vertical avec le texte */
  z-index: 12;
}
.TitreSiteHP {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: #3E3E3E !important;
  margin-top: 20px !important; /* Ajuste cette valeur selon le besoin */
}
.TitreTexte {
  margin-top: 21.3px !important; /* Ajuste progressivement */
  font-size: clamp(24px, 3.2vh, 24px) !important;
}
.TitreSiteWrapper {
  display: flex;
  align-items: center; /* Centre le texte verticalement avec le logo */
  margin-left: -26px !important;
}

.v-navigation-drawer {
  border-right: 3px solid #3E3E3E !important; /* Couleur et épaisseur de la barre */
  border-left: 3px solid #3E3E3E !important;
  z-index: 5;
}
.section-divider-menu {
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  width: 100% !important;
  position: relative !important;
  padding: 10 10px !important; /* Espace de 10px de chaque côté */
  box-sizing: border-box !important;
  text-align: center !important; /* Centre le texte */
  width: 100%; /* Prend toute la largeur */
}

.section-divider-menu::before,
.section-divider-menu::after {
  content: "";
  height: 2px;
  background: #333;
  flex-grow: 1;
  margin-left: 5px !important;
  margin-right: 5px !important;
  max-width: 90px !important;
}
.section-divider-menu span {
  font-size: 1.2rem !important;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding: 0 30px; /* Espace autour du texte */
  background: white; /* Pour cacher la ligne derrière le texte */
}
.BackgroundListBurger {
  background-color: rgba(245, 241, 235, 1);
  width: 110%;
  left: -10px;
}
.IconHeader {
  margin-right: 0.2em;
  margin-left: 0.8em;
  margin-top: -0.3em;
}
.TitreContactHPBar {
  background: #B5BCAF !important;
  height: 2.6em !important;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  margin-top: -1.3em !important;
  z-index: 10; /* S'assure que cette barre est bien visible */
}

.MainNavBar {
  position: fixed;
  top: 1.3em !important; /* Pour placer cette barre juste en dessous de la première */
  left: 0;
  width: 100%;
  background: rgba(245, 241, 235, 0.9);
  z-index: 9; /* Moins que la première barre */
}

/* Couleur hover et effet */
.TitreContactHP a {
  display: inline-block;
  transition: transform 0.1s ease-in-out;
}
.TitreContactHP a:hover {
  color: #A36A4A !important;
  transform: scale(1.01) !important;  /* Effet d'agrandissement */
}
.TitreContactHP a {
  color: #000000 !important;
  font-size: clamp(10px, 0.7vw, 17px);
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
.Hamburger {
  color: rgba(62, 62, 62, 1) !important;
}
.Hamburger:hover {
  color: rgba(163, 106, 74, 1) !important;
  transform: scale(1.3) !important;
}
/* Add media queries for responsiveness - when the screen is 500px wide or less, stack the links on top of each other */
@media screen and (max-width: 1100px) {
  .header a {
    float: none !important;
    display: block !important;
    text-align: left !important;
  }
  .header-right {
    float: none !important;
  }
  .IconHeader {
    margin-top: 0.4em !important;
  }
  .TitreContactHP {
    margin-top: 0em !important;
  }
  .nav_menu {
    display: none !important; /* Cache les liens de navigation */
  }
}
@media only screen and (min-width: 1100px) {
  .nav_item {
    z-index: 7 !important;
    display: none !important;
  }
}
@media only screen and (max-width: 1100px) {
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
  display: inline-block;
  transition: transform 0.3s ease-in-out;
}
/* Couleur hover */
.TitreHP:hover {
  color: #A36A4A !important;
  transform: scale(1.05) !important;  /* Effet d'agrandissement */
  text-decoration: underline;
}
.TitreSiteHP {
  font-weight: normal;
  text-decoration: none;
  color: #3E3E3E !important;
  font-size: 1.2em;
  margin: 0.2em;
  display: inline-block;
  text-decoration: none;
  transition: transform 0.3s ease-in-out, border-bottom 0.3s ease-in-out;
  border-bottom: 2px solid transparent; /* Invisible au départ */
}
/* Couleur hover */
.TitreSiteHP:hover {
  color: #A36A4A !important;
  transform: scale(1.05) !important;  /* Effet d'agrandissement */
}
</style>
