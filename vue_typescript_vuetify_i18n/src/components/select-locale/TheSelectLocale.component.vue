<template >
  <div >
    <v-menu open-on-hover bottom offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn class="btn-lang" v-bind="attrs" v-on="on">{{$store.state.locale}}</v-btn>
      </template>
    <!--Retirer commentaire pour langues-->
      <!--<v-card class="mt-3" max-width="400" color="transparent">
        <v-list-item-group v-for="locale in locales" :key="locale.code">
          <v-btn color="transparent" @click="switchLanguage(locale.code)"><country-flag class='mr-1' :country='locale.code'/>{{locale.code}}</v-btn>
        </v-list-item-group>
      </v-card>-->
    </v-menu>
  </div>
</template>
<script lang="ts">
import { getSupportedLocales } from '@/utils/i18n/supported-locales'
import i18n from '@/i18n'
import Vue from 'vue'

export default Vue.extend({
  created: function () {
    i18n.locale = this.$store.state.locale
  },
  methods: {
    switchLanguage: function (code:string): void {
      this.$store.dispatch('switchlanguages', code)
    }
  },
  computed: {
    locales: function () {
      return getSupportedLocales().filter(i => i.code !== this.$store.state.locale)
    }
  }
})
</script>

<style>
/* Style par défaut (sans survol) */
.btn-lang {
  background: transparent !important; /* Couleur de fond */
  color: #3E3E3E !important; /* Couleur du texte */
  transition: all 0.3s ease-in-out; /* Animation fluide */
}

/* Style au survol */
.btn-lang:hover {
  background: #B5BCAF !important; /* Inversion des couleurs */
  color: White !important;
}
</style>
