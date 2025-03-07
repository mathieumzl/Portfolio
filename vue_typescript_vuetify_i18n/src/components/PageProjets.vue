<template>
    <div fluid pa-0>
      <!--<v-container fluid pa-0  id="contacts">
        <pf-Contacts/>
      </v-container>-->
      <v-container fluid pa-0 id="projects">
        <v-divider></v-divider>
        <v-card class='rounded-0' align="center" :color="$t('ColorBackground')" elevation='14'>
           <pf-CardsProjectsPresentation/>
        </v-card>
      </v-container>
        <v-divider color="white"/>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'PageProjets'
})
</script>
