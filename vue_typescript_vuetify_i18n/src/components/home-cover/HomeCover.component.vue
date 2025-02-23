<template>
  <v-container fluid pa-0 class="video-container">
    <video width="100%" disablePictureInPicture preload="auto" muted playsinline autoplay loop id="headerVideo">
      <source src="@/assets/carousel/carousel.mp4" type="video/mp4" />
    </video>
    <div class="video-overlay">
      <p class="video-caption static-caption">{{$t('VideoTitre')}}</p>
      <p class="VideoLegende animated-caption">{{ currentCaption }}</p>
    </div>
    <v-divider class="mt-n1" opacity="0" color="rgba(109,91,58,0)" />
    <v-divider class="mt-n1" color="white" />
  </v-container>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      captions: [
        'Créer des intérieurs qui vous ressemblent',
        'L’harmonie parfaite entre esthétique et fonctionnalité.',
        'Architecture intérieure sur-mesure, pour un cadre de vie exceptionnel.'
      ],
      currentCaptionIndex: 0,
      currentCaption: ''
    }
  },
  mounted () {
    this.currentCaption = this.captions[this.currentCaptionIndex]

    setInterval(() => {
      this.currentCaptionIndex = (this.currentCaptionIndex + 1) % this.captions.length
      this.currentCaption = this.captions[this.currentCaptionIndex]
    }, 4000) // Change toutes les 4 secondes
  }
})
</script>

<style lang="css" scoped>
.video-container {
  position: relative;
  width: 100%;
  height: 100vh; /* Assurez-vous que le conteneur prend toute la hauteur */
}

video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.video-overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  background: rgba(0, 0, 0, 0); /* Fond */
  border-radius: 5px;
  text-align: center;
  z-index: 1; /* texte est au-dessus de la vidéo */
}
/* Titre video */
.VideoLegende {
  font-size: 2em; /* Taille de la police ajustée à la largeur de l'écran */
  margin: 0;
  font-style: italic;
}
/* Legende video */
.video-caption {
  font-size: 4em; /* Taille de la police ajustée à la largeur de l'écran */
  margin: 0;
}
</style>
