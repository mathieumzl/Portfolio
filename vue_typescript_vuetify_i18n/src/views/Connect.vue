<template id="home">
    <div class="Pro">
      <pf-header/>
      <page-connect class="mt-16"/>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import PageConnect from '../components/PageConnect.vue'

export default Vue.extend({
  name: 'Connect',

  components: {
    PageConnect
  }
})
</script>
