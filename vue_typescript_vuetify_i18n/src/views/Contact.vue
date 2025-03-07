<template id="home">
    <div class="Pro">
      <pf-header/>
      <page-contact class="mt-16"/>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import PageContact from '../components/PageContact.vue'

export default Vue.extend({
  name: 'Contact',

  components: {
    PageContact
  }
})
</script>
