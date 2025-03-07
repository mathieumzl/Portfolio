<template>
    <div class="background-page" fluid pa-0>
      <v-container fluid pa-0 id="prestations">
          <pf-Contact/>
      </v-container>
      <v-container id="contacts" fluid pa-0>
        <pf-Contacts id="contacts"/>
    </v-container>
    </div>
  </template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'PagePart'
})
</script>
<style scoped>
</style>
