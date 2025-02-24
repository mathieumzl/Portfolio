<template>
  <v-container fluid pa-0 class="video-container">
    <video width="100%" disablePictureInPicture preload="auto" muted playsinline autoplay loop id="headerVideo">
      <source src="@/assets/carousel/carousel.mp4" type="video/mp4" />
    </video>
    <div class="video-overlay">
      <p class="video-caption static-caption">{{$t('VideoTitre')}}</p>
      <p class="VideoLegende animated-caption">{{ currentCaption }}</p>
      <!-- ✅ Bouton qui ouvre le popup -->
      <v-btn class="minimal-btn" outlined large @click="showDialog = true">
        Découvrir
      </v-btn>
    </div>
        <!-- ✅ POPUP pour choisir entre Particulier et Pro -->
    <v-dialog v-model="showDialog" max-width="400" transition="none" eager>
      <v-card>
        <v-card-title class="headline">Vous êtes :</v-card-title>
        <v-card-text>
          <v-btn class="minimal-btn" outlined large @click="redirect('/particuliers')">
            Un Particulier
          </v-btn>
          <v-btn block color="secondary" @click="redirect('/pro')">
            Un Professionnel
          </v-btn>
        </v-card-text>
        <v-card-actions>
          <v-btn text @click="showDialog = false">Annuler</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-divider class="mt-n1" opacity="0" color="rgba(109,91,58,0)" />
    <v-divider class="mt-n1" color="white" />
  </v-container>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      showDialog: false, // Ajout pour que le popup soit réactif immédiatement
      captions: [
        'Créer des intérieurs qui vous ressemblent',
        'L’harmonie parfaite entre esthétique et fonctionnalité',
        'Des intérieurs pensés pour vous, conçus avec passion',
        'Des lieux pensés pour vous, conçus pour durer',
        'Imaginer, créer, personnaliser',
        'Concevons ensemble un lieu qui vous ressemble',
        'Chaque espace a une âme, donnons-lui la vôtre'
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
.minimal-btn {
  font-family: "Poppins", sans-serif; /* Typo moderne */
  font-size: 1rem;
  font-weight: 500;
  text-transform: none;
  padding: 12px 24px;
  border: 2px solid #798478; /* Bordure fine et élégante */
  color: #798478; /* Texte couleur douce */
  background: transparent;
  transition: all 0.3s ease-in-out;
}

.minimal-btn:hover {
  background: #798478; /* Effet de hover subtil */
  color: white;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
}
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
