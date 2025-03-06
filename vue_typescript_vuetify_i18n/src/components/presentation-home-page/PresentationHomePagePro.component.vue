<template >
    <div >
        <v-card flat color="transparent" align="center" justify="center" class="mt-8 mb-4">
            <v-row align="center" justify="center">
                <v-col class="mt-4 mb-3" cols="12" md="8" lg="6">
                    <h1 class="" >{{ $t("PresentationHomePage.titrepro") }}</h1>
                    <p align="center">
                        <br />{{ $t("PresentationHomePage.DescriptionPro.paragraph1") }}
                        <br /><br />{{ $t("PresentationHomePage.DescriptionPro.paragraph2") }}
                    </p>
                </v-col>
            </v-row>
        </v-card>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data: () => ({
    lgt: '6',
    sizei: '100%',
    sheet: false,
    show: false,
    scrollInvoked: 0,
    offsetTop: 0
  }),
  methods: {
    onclick: function () {
      console.log('click')
    }
  }
})
</script>

<style>
@-webkit-keyframes hvr-logo {
    0% {
      -webkit-transform: translateY(-8px);
      transform: translateY(-8px);
    }
    50% {
      -webkit-transform: translateY(-4px);
      transform: translateY(-4px);
    }
    100% {
      -webkit-transform: translateY(-8px);
      transform: translateY(-8px);
    }
  }

  @-webkit-keyframes hvr-logo-float {
    100% {
      -webkit-transform: translateY(-8px);
      -webkit-filter: brightness(150%);

      transform: translateY(-8px);
    }
  }

  .hvr-logo:hover, .hvr-logo:focus, .hvr-logo:active {
    -webkit-animation-name: hvr-blogoob-float, hvr-logo;
    animation-name: hvr-logo-float, hvr-logo;
    -webkit-animation-duration: .3s, 1.5s;
    animation-duration: .3s, 1.5s;
    -webkit-animation-delay: 0s, .3s;
    animation-delay: 0s, .3s;
    -webkit-animation-timing-function: ease-out, ease-in-out;
    animation-timing-function: ease-out, ease-in-out;
    -webkit-animation-iteration-count: 1, infinite;
    animation-iteration-count: 1, infinite;
    -webkit-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
    -webkit-animation-direction: normal, alternate;
    animation-direction: normal, alternate;
  }
</style>
