<template>
<div fluid pa-0>
    <v-container fluid pa-0>
        <v-divider color="white"/>
        <v-divider color="white"/>
        <div max-height="10px">
            <v-parallax dark src="@/assets/parallax/parallax.png">
            <v-card flat color="transparent" align="center" >
            <v-row>
                <v-col class="mb-10" cols="12">
                    <v-card-title class="text-decoration-underline mt-n10 justify-center">
                        <h1 class="title-contact">{{$t('HeaderContact')}}</h1>
                    </v-card-title>
                    <a target="_blank" style="text-decoration: none;" class="black--text" href="mailto:contact@mazal-mathieu.fr">
                      <h4>contact@mazal-mathieu.fr</h4>
                    </a>
                </v-col>
                <v-col cols="4" color="transparent">
                    <a style="text-decoration: none;" target="_blank" href="https://www.linkedin.com/in/mathieu-mazal-51b130124/">
                        <v-card-text align="center !important" class="hvr-logo">
                            <v-img align="center !important" width="220px" src="@/assets/logo_contacts/Linkb.png" ></v-img>
                            <h3 class="v-toolbar__title title-contact white--text pl-0">Linkedin</h3>
                        </v-card-text>
                    </a>
                </v-col>
                <v-col cols="4" color="transparent">
                    <a style="text-decoration: none;" target="_blank" href="https://www.instagram.com/mathieumzl/">
                        <v-card-text align="center !important" class="hvr-logo">
                            <v-img align="center !important" width="220px" src="@/assets/logo_contacts/Instab.png" ></v-img>
                            <h3 class="v-toolbar__title title-contact white--text pl-0">Instagram</h3>
                        </v-card-text>
                    </a>
                </v-col>
                <v-col cols="4" color="transparent">
                    <a style="text-decoration: none;" target="_blank" href="https://www.artstation.com/mathieu_mazal">
                        <v-card-text align="center !important" class="hvr-logo">
                            <v-img align="center !important" width="220px" src="@/assets/logo_contacts/artstationb.png" ></v-img>
                            <h3 class="v-toolbar__title title-contact white--text pl-0">Artstation</h3>
                        </v-card-text>
                    </a>
                </v-col>
            </v-row>
            </v-card>
    </v-parallax>
    </div>
  <v-divider color="white"/>
  <v-divider color="white"/>
    </v-container>
</div>
</template>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
})
</script>
<style>
.parallax {
    max-height: 10px !important
}
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
.title-contact {
  font-family:'Consolas';
  height: 40px;
  background-color: #2c2b2c;
  background-image: linear-gradient(360deg, #2c2b2c, #2c2b2c);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
.text-decoration-underline {
    color: #2c2b2c;
}
</style>
