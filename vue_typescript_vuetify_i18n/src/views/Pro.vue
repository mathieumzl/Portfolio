<template id="home">
  <div class="Pro">
    <pf-header-pro/>
    <page-pro class="mt-16"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import PagePro from '../components/PagePro.vue'

export default Vue.extend({
  name: 'Pro',

  components: {
    PagePro
  }
})
</script>
