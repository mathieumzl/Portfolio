<template>
    <div fluid pa-0 class='rounded-0' align="center" elevation='14'>
      <!--<v-container fluid pa-0  id="contacts">
        <pf-Contacts/>
      </v-container>-->
      <v-container fluid pa-0 id="projects" >
        <v-divider></v-divider>
           <pf-CardsProjectsPresentation />
      </v-container>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'PageProjets'
})
</script>
