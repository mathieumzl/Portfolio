<template>
  <div class="Part">
      <pf-header/>
      <PageMentionslegales class="mt-16"/>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
// Assure-toi que le composant Mentionslegales est bien importé
import PageMentionslegales from '../components/PageMentionslegales.vue'

export default Vue.extend({
  name: 'Mentionslegales',
  components: {
    PageMentionslegales // Associe le composant correctement ici
  }
})
</script>
