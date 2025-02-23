<template>
    <div id="app">
    <typical
    class="font-weight-medium typicalWrapper" :steps="['Mathieu MAZAL',8000,'',500,]" :wrapper="'h1'" :loop="Infinity">
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
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
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
