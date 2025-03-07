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
        {{$t('HomePageBtnProjet')}}
      </v-btn>
    </div>
        <!-- ✅ POPUP pour choisir entre Particulier et Pro -->
    <v-dialog v-model="showDialog" max-width="50em" transition="none" eager>
      <v-card class="v-card-pop-choix" >
        <v-card-title class="minimal-btn-titre-choix">{{$t('HomePageBtnProjetVous')}}</v-card-title>
        <v-card-text class="v-card-text-choix">
            <v-btn href="/particuliers"  class="minimal-btn-choix" outlined large @click="redirect('/particuliers')">
              {{$t('HomePageBtnParticulier')}}
            </v-btn>
            <v-btn href="/pro" class="minimal-btn-choix" outlined large @click="redirect('/pro')">
              {{$t('HomePageBtnParofessionnel')}}
            </v-btn>
        </v-card-text>
        <v-card-actions class="justify-end">
          <v-btn text @click="showDialog = false">{{$t('return')}}</v-btn>
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
.minimal-btn-titre-choix {
  flex-direction: column !important;
  font-size: 14px 2em 20px!important;
  margin-bottom: 0.4em;
  white-space: nowrap;
}
.v-card-pop-choix {
  background: rgba(245, 241, 235, 0.9) !important;
}
.v-card-text-choix {
  display: flex !important;
  flex-direction: row; /* Pour aligner les boutons sur la même ligne */
  justify-content: center !important; /* Centre horizontalement */
  align-items: center !important; /* Centre verticalement */
  gap: 15px !important;
}
.minimal-btn-choix {
  flex: 1; /* Permet aux boutons de prendre toute la largeur disponible */
  width: 100%;
  font-size: 10px 2vh 20px !important;
  max-width: 250px !important; /* Évite que ça s'étire trop */
  padding: 1em 3em !important;
  text-align: center !important;
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
  border: 2px solid rgba(62, 62, 62, 1); /* Bordure fine et élégante */
  color: rgba(62, 62, 62, 1); /* Texte couleur douce */
}
.minimal-btn-choix:hover {
  border: 2px solid rgba(62, 62, 62, 1); /* Bordure fine et élégante */
  color: rgba(62, 62, 62, 1); /* Texte couleur douce */
  background: rgba(181, 188, 175, 1);
  transform: scale(1.1); /* Agrandissement */
}
.minimal-btn {
  font-size: 1.5rem;
  font-weight: 500;
  max-width: 300px !important; /* Évite que ça s'étire trop */
  text-transform: none;
  margin-top: 1em;

  padding: 1em 1em !important;
  border: 2px solid white; /* Bordure fine et élégante */
  color: white; /* Texte couleur douce */
  background: transparent;
  transition: all 0.3s ease-in-out;
}

.minimal-btn:hover {
  background: rgba(181, 188, 175, 0.6); /* Effet de hover subtil */
  color: white;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
  transform: scale(1.1); /* Agrandissement */
}
/* Effet bouton */
.minimal-btn::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 150%;
  height: 200%;
  background: rgba(255, 255, 255, 0.2);
  transition: width 0.4s ease-in-out, height 0.4s ease-in-out, top 0.4s ease-in-out, left 0.4s ease-in-out;
  transform: translate(-50%, -50%);
  opacity: 0;
}

.minimal-btn:hover::before {
  width: 100%;
  height: 100%;
  opacity: 1;
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
  font-size: 2em; /* Ajuste dynamiquement la taille du texte */
  white-space: nowrap; /* Empêche le texte de passer à la ligne */
  overflow: hidden; /* Cache le dépassement */
  text-overflow: ellipsis; /* Ajoute "..." si besoin */
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 90vw; /* Empêche que le titre dépasse trop */
  font-style: italic;
}
/* Legende video */
.video-caption {
  font-size: 4em; /* Ajuste dynamiquement la taille du texte */
  white-space: nowrap; /* Empêche le texte de passer à la ligne */
  overflow: hidden; /* Cache le dépassement */
  text-overflow: ellipsis; /* Ajoute "..." si besoin */
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 90vw; /* Empêche que le titre dépasse trop */
}

body, html {
  overflow-x: hidden; /* Cache tout dépassement horizontal */
}

.video-container {
  width: 100vw; /* Force la largeur à 100% de l’écran */
  overflow: hidden; /* Empêche le débordement horizontal */
}

video {
  width: 100vw !important; /* Prend toute la largeur de l’écran */
  height: 100vh;
  object-fit: cover; /* Assure un bon ajustement */
}
@media (max-width: 1200px) {
  .VideoLegende {
    font-size: 3vw !important;
  }
  .video-caption {
    font-size: 5vw;
  }
}

@media (max-width: 900px) {
  .VideoLegende {
    font-size: 3vw !important;
  }
  .video-caption {
    font-size: 5vw;
  }
}

@media (max-width: 600px) {
  .VideoLegende {
    font-size: 3vw !important;
  }
  .video-caption {
    font-size: 5vw;
  }
}

@media (max-width: 400px) {
  .VideoLegende {
    font-size: 2.5vw !important;
  }
  .video-caption {
    font-size: 5vw; /* Augmente un peu pour les petits écrans */
  }
}
</style>
