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
    <v-app-bar color='rgb(38, 50, 56, 0.6)' app >
      <v-app-bar-nav-icon class="nav_item" @click="drawer = true"></v-app-bar-nav-icon>
      <v-toolbar-title class="">
        <a  @click="scrollTo('#home')" style="color:white !important; " >{{$store.state.name}}</a>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <h4 class="nav_menu mr-4">|</h4>
      <a class="nav_menu mr-4" style="color:white !important" @click="scrollTo('#present')"><h3>{{$t('HeaderProPresentation')}}</h3></a>
      <h4 class="nav_menu mr-4">|</h4>
      <a class="nav_menu mr-4" style="color:white !important" @click="scrollTo('#contacts')"><h3>{{$t('HeaderProContact')}}</h3></a>
      <h4 class="nav_menu mr-4">|</h4>
      <a class="nav_menu mr-4" color="transparent" style="text-decoration: none; color:#cf9b58 !important" href="https://www.mazal-mathieu.fr/" ><h3>{{$t('SpacePortfolio')}}</h3></a>
      <h4 class="nav_menu mr-4">|</h4>
      <pf-locale/>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" temporary app color='rgb(38, 50, 56, 0.8)' class="nav_item">
      <v-list class="mt-10" nav dense>
        <v-list-item-group active-class="text--accent-4">
          <v-list-item @click="drawer = false">
            <v-list-item-icon>
              <v-icon>mdi-account-tie-voice</v-icon>
            </v-list-item-icon>
            <a class="mr-4" style="color:white !important" @click="scrollTo('#present')"><h4>{{$t('HeaderProPresentation')}}</h4></a>
          </v-list-item>
          <v-list-item @click="drawer = false">
            <v-list-item-icon>
              <v-icon>mdi-fountain-pen-tip</v-icon>
            </v-list-item-icon>
            <a class="mr-4" style="color:white !important" @click="scrollTo('#contacts')"><h4>{{$t('HeaderProContact')}}</h4></a>
          </v-list-item>
                  <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-book-open-page-variant-outline</v-icon>
          </v-list-item-icon>
            <a class="mr-4" align="left" color="transparent" style="text-decoration: none; color:#cf9b58 !important" href="https://www.mazal-mathieu.fr/" ><h4>{{$t('SpacePortfolio')}}</h4></a>
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
  color: white;
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
    display: none !important;
    z-index: 0 !important;
  }
}
@media only screen and (max-width: 1000px) {
  .nav_item {
    z-index: 7 !important;
  }
  .nav_menu {
    display: none !important;
  }
}
</style>
