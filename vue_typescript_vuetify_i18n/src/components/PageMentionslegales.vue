<template>
  <div fluid pa-0>
    <!--<v-container fluid pa-0>
       <pf-HomeCoverPro id="home" carousel-pro="" />
       <p id="present"></p>
       <pf-PresentationHomePagePro class="mb-9"/>
    </v-container>-->
    <v-container fluid pa-0 id="prestations">
        <pf-Mentionslegales/>
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'PageMentionslegales'
})
</script>
