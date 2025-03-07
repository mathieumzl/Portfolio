<template>
    <div fluid pa-0>
      <!--<v-container fluid pa-0>
         <pf-HomeCoverPro id="home" carousel-pro="" />
         <p id="present"></p>
         <pf-PresentationHomePagePro class="mb-9"/>
      </v-container>-->
      <v-card class='rounded-0' align="center" :color="$t('ColorBackground')" elevation='14'>
      <v-container fluid pa-0 id="prestations">
          <pf-PrestationsPart/>
      </v-container>
      <v-container id="contacts" fluid pa-0>
        <pf-ContactsPart id="contacts"/>
    </v-container>
    </v-card>
    </div>
  </template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'PagePart'
})
</script>
