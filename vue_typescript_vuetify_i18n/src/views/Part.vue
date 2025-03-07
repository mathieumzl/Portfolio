<template>
    <div class="Part">
      <pf-header-part/>
      <page-part class="mt-16"/>
    </div>
  </template>

<script lang="ts">
import Vue from 'vue'
import PagePart from '../components/PagePart.vue'

export default Vue.extend({
  name: 'part',
  components: {
    PagePart
  }
})
</script>
