<template>
    <v-container class="text-center mt-10">
<!-- Logo -->
        <a href="/" @click="scrollTo('#home')">
            <v-img
                src="@/assets/logo_c.png"
                alt="Logo Mathieu Mazal"
                contain
                max-width="300"
                class="ConnectLogo mx-auto"
            />
        </a>
<!-- Message de bienvenue -->
        <a href="/" @click="scrollTo('#home')" class="TitreSiteHP TitreTexte">
            {{$t('MAZAL Mathieu')}}
            <br/>
            {{ $t("PresentationHomePage.Titre") }}
        </a><br/>
                <v-btn
                class="custom-btn mt-4"
                href="https://www.mazal-mathieu.fr/"
                target="_blank"
                rel="noopener"
                >
            <div class="reseau-nom">
                {{ $t("ButtonCarte") }}
            </div>
        </v-btn>
        <h1 class="mb-4 section-divider bienvenue">{{ $t("FollowTitre") }}</h1>
<!-- Réseaux sociaux -->
        <v-row class="ConnectLogo" justify="center" align="center">
            <v-col
                v-for="network in networks"
                :key="network.url"
                cols="12"
            >
                <v-card
                :href="network.url"
                target="_blank"
                class="reseau-card d-flex align-center justify-center flex-row"
                elevation="4"
                >
                    <!-- Logo -->
                    <div class="reseau-icon mr-4">
                        <v-icon v-if="!network.isSvg" size="40" color="#3E3E3E">{{ network.icon }}</v-icon>
                        <img v-else :src="network.icon" alt="icon" class="reseau-svg" />
                    </div>

                    <!-- Texte -->
                    <div class="reseau-nom">
                        {{ network.name }}
                    </div>
                </v-card>
            </v-col>
        </v-row>
        <h1 class="mb-4 section-divider bienvenue">{{ $t("LocalisationTitre") }}</h1>
        <div class="map-container">
            <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4161.05319437357!2d3.900732377330988!3d43.597972671104884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b6afdd82b8353f%3A0x6ee1d9240d6d400!2sArchitecte%20d&#39;int%C3%A9rieur%20-%20MZL%20Home%20Design!5e1!3m2!1sfr!2sfr!4v1751732009129!5m2!1sfr!2sfr"
            width="100%"
            height="400"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
        <v-btn
        class="custom-btn mt-6 mb-5"
        href="https://www.mazal-mathieu.fr/"
        target="_blank"
        rel="noopener"
        >
            <div class="reseau-nom">
                {{ $t("ButtonCarte") }}
            </div>
        </v-btn>
    </v-container>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data: () => ({
    networks: [
      {
        icon: 'mdi-linkedin',
        url: 'https://www.linkedin.com/in/mathieu-mazal-51b130124/',
        name: 'LinkedIn'
      },
      {
        icon: 'mdi-instagram',
        url: 'https://www.instagram.com/mathieumzl/',
        name: 'Instagram'
      },
      {
        icon: 'mdi-artstation',
        url: 'https://www.artstation.com/mathieu_mazal',
        name: 'ArtStation'
      },
      {
        icon: require('@/assets/logo-soft/behance.svg'), // Charge le fichier SVG
        url: 'https://www.behance.net/mathieu_mzl',
        name: 'Behance',
        isSvg: true // Indique que c'est un SVG
      }
    ]
  })
})
</script>

<style scoped>
/* Boutons stylisés */
.custom-btn {
  background: rgba(245, 241, 235, 1) !important;
  color: rgba(62, 62, 62, 1);
  transition: background-color 0.2s, transform 0.2s !important;
  border-radius: 12px !important;
  border: 2px solid rgba(62, 62, 62, 1) !important;
  cursor: pointer !important;
  text-decoration: none !important;

  width: 100% !important;
  max-width: 500px !important;
  margin: 12px auto !important; /* marge verticale + centrage */

  display: flex !important;
  flex-direction: row !important;
  align-items: center !important;
  padding: 1rem !important;
}
.custom-btn:hover {
  transform: scale(1.1);  /* Effet d'agrandissement */
}
.bienvenue {
  font-size: 1.6rem !important;
  font-weight: bold !important;
  color: #3E3E3E !important;
  margin-top: 40px !important;
}
.map-container {
  width: 100% !important;
  max-width: 600px !important;
  margin: 20px auto !important;
  border-radius: 12px !important;
  overflow: hidden !important;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1) !important;
  border: 2px solid rgba(62, 62, 62, 1) !important;
}

.ConnectLogo {
  margin-top: 40px !important;
}
.TitreTexte {
  margin-top: 10px !important; /* réduit l’espace avec le logo */
}
.v-icon {
  color: rgba(62, 62, 62, 1) !important;
  visibility: visible !important;
  font-size: 60px !important;
}
.reseau-svg {
  width: 60px !important;
  height: 60px !important;
  filter: invert(21%) sepia(6%) saturate(144%) hue-rotate(49deg) brightness(97%) contrast(87%) !important;
}
.reseau-card {
  transition: background-color 0.2s, transform 0.2s !important;
  border-radius: 12px !important;
  border: 2px solid rgba(62, 62, 62, 1) !important;
  cursor: pointer !important;
  text-decoration: none !important;
  background-color: rgba(181, 188, 175, 1) !important;

  width: 100% !important;
  max-width: 500px !important;
  margin: 12px auto !important; /* marge verticale + centrage */

  display: flex !important;
  flex-direction: row !important;
  align-items: center !important;
  justify-content: flex-start !important;
  padding: 1rem !important;
}

.reseau-nom {
  font-size: 1.3rem !important; /* Taille moyenne */
  font-weight: 500 !important;
}
.reseau-card:hover {
  background-color: #A36A4A !important;
  transform: scale(1.05) !important;  /* Effet d'agrandissement */
}
.reseau-icon {
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  min-width: 50px !important;
}
/* Survol de la carte : texte et icône en blanc */
.reseau-card:hover .reseau-nom,
.reseau-card:hover .v-icon,
.reseau-card:hover .reseau-svg {
  color: white !important;
  filter: brightness(0) invert(1) !important; /* Pour les SVG */
}
</style>
