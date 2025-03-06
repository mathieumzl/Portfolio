<template>
    <div id="home">
      <pf-header-projets/>
      <PageProjets class="mt-16"/>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import PageProjets from '../components/PageProjets.vue'

export default Vue.extend({
  name: 'Projets',

  components: {
    PageProjets
  }
})
</script>
