<template>
    <div id="app">
    <typical
    class="font-weight-medium typicalWrapper" :steps="['Mathieu MAZAL',8000,'',500,]" :wrapper="'h2'" :loop="Infinity">
      {{ $t("PresentationHomePage.name") }}
    </typical>
  </div>
</template>

<script>

import Vue from 'vue'
import typical from 'vue-typical'

export default Vue.extend({
  name: 'App',
  components: {
    typical
  }
})
</script>

<style>
#app {
  font-family: 'DM Serif Display', serif !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #A36A4A !important;
}
.typicalWrapper {
  text-decoration: none;
}
.typicalWrapper::after {
  content: "|";
  animation: blink 1s infinite step-start;
}
@keyframes blink {
  50% {
    opacity: 0;
  }
}
</style>
