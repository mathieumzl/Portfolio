<template >
    <div>
        <!-- PARTIE PRESENTATION -->
        <v-card flat color="transparent" class="mt-5 mb-14">
            <v-row class="presentation" justify="center">
                <v-col class="mt-4 mb-3" cols="12" lg="8">
                <h3 class="section-divider TitreH3">{{ $t("PresentationHomePage.Titre") }}</h3>
                <br />
                <pf-TextAnim class="TextAnim"/>
                <p>
                    <span class="DescriptionSsTitre">{{ $t("PresentationHomePage.Description.paragraph0") }}</span>
                    <br />{{ $t("PresentationHomePage.Description.paragraph1") }}
                    <br /><br />{{ $t("PresentationHomePage.Description.paragraph2") }}
                </p>
                </v-col>
            </v-row>
            <v-card-actions class="section-divider-HC justify-center">
                <v-btn class="custom-btn" @click="sheet = true" elevation="5">
                    {{$t("PresentationHomePage.button")}}
                </v-btn>
            </v-card-actions>
        </v-card>
        <!-- DEBUT SHEET HISTOIRE -->
        <v-bottom-sheet v-model="sheet" >
            <v-sheet class="text-center SheetPresentation" min-height="300px">
                <div align="center" class="sheet_container">
                    <v-divider color="#3E3E3E"/>
                    <v-divider color="#3E3E3E"/>
                    <v-divider color="#3E3E3E"/>
                    <v-divider color="#3E3E3E"/>
                    <v-container fluid class="sheet_item">
                    <v-card class="mobile-card" flat color="transparent">
                        <!-- BOUTON QUITTER -->
                        <v-btn class="mt-5 mb-6 custom-btn custom-btn-close" outlined @click="sheet = !sheet">
                            {{$t("close")}}
                        </v-btn>
                        <pf-TextAnim class="TextAnim" style="color:#3E3E3E !important;"/>
                        <h3 class="TitreH3">{{ $t("PresentationHomePage.Titre") }}</h3>
                        <br />
                        <!-- 1ER INFORMATION -->
                        <v-card class="VCardComp" color="">
                            <v-card class="mt-0 rounded-0" color="#3E3E3E">
                                <h3 class="ColorWhiteTitre">{{$t("TexteHistoireMZL.TitreHistoire")}}</h3>
                                <v-card-text min-height="70" align="left" class="text--primary indented-text">
                                    <v-row justify="center">
                                        <v-col color="" cols="12" md="auto">
                                            <p class="mb-4 text-body-1">{{$t("TexteHistoireMZL.ParaHistoire")}}</p>
                                            <p class="mb-4 text-body-1">{{$t("TexteHistoireMZL.ParaHistoire1")}}</p>
                                            <p class="text-body-1">{{$t("TexteHistoireMZL.ParaHistoire2")}}</p>
                                        </v-col>
                                    </v-row>
                                </v-card-text>
                            </v-card>
                        </v-card>
                        <!-- 2EME INFORMATION -->
                         <v-timeline class="text-center">
                        <v-card class="VCardComp" color="">
                            <v-card class="mt-0 rounded-0" color="#3E3E3E">
                                <h3 class="ColorWhiteTitre">{{$t("TexteCompMZL.TitreComp")}}</h3>
                                <v-card-text min-height="70" align="left" class="text--primary indented-text">
                                    <v-row justify="center">
                                        <v-col color="" cols="12" md="auto">
                                            <h1 class="mb-4 text-body-1 ParaCompTitre">{{$t("TexteCompMZL.ParaCompTitre1")}}</h1>
                                            <p class="mb-4 text-body-1">{{$t("TexteCompMZL.ParaComp1")}}</p>
                                            <br />

                                            <h1 class="mb-4 text-body-1 ParaCompTitre">{{$t("TexteCompMZL.ParaCompTitre2")}}</h1>
                                            <p class="mb-4 text-body-1">{{$t("TexteCompMZL.ParaComp2")}}</p>
                                            <br />

                                            <h1 class="mb-4 text-body-1 ParaCompTitre">{{$t("TexteCompMZL.ParaCompTitre3")}}</h1>
                                            <p class="mb-4 text-body-1">{{$t("TexteCompMZL.ParaComp3")}}</p>
                                            <br />

                                            <h1 class="mb-4 text-body-1 ParaCompTitre">{{$t("TexteCompMZL.ParaCompTitre4")}}</h1>
                                            <p class="mb-4 text-body-1">{{$t("TexteCompMZL.ParaComp4")}}</p>
                                            <br />

                                            <h1 class="mb-4 text-body-1 ParaCompTitre">{{$t("TexteCompMZL.ParaCompTitre5")}}</h1>
                                            <p class="mb-4 text-body-1">{{$t("TexteCompMZL.ParaComp5")}}</p>
                                            <br />

                                            <i class="text-body-1">{{$t("TexteCompMZL.ParaCompFin")}}</i>
                                        </v-col>
                                    </v-row>
                                </v-card-text>
                            </v-card>
                        </v-card>
                        <br />
                        <!-- 3EME INFORMATION -->
                        </v-timeline>
                        </v-card>
                    </v-container>
                </div>
            </v-sheet>
        </v-bottom-sheet>
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

<style scoped>
.TitreH3 {
  color:rgba(62, 62, 62, 1) !important;
}
.ParaCompTitre {
  font-size: 1.3em !important;
  font-weight: bold;
}
.indented-text p {
  text-indent: 2em !important;
}
.text--primary {
    background: #B5BCAF;
}
.ColorWhiteTitre {
  color: #F5F1EB;
}
.VCardComp {
  border: 2px solid #3E3E3E !important;
}
.VCardComp:hover {
    transform: scale(1.01) !important;
    outline: auto #3E3E3E;
}
.LogoLogi:hover {
  transform: scale(1.1) !important;
}
.SheetPresentation {
  background: rgba(245, 241, 235, 1);
}
.TextAnim {
  font-size: 1.2em;
}
.TextAnim:hover {
  color: #A36A4A !important;
  transform: scale(1.1);
  text-decoration: underline;
}
.DescriptionSsTitre {
  font-size: 0.9em !important;
  font-style: italic !important;
}
/* Boutons stylisés */
.custom-btn {
  background: rgba(245, 241, 235, 1) !important;
  color: rgba(62, 62, 62, 1) ;
  font-size: 1.1em;
  font-weight: bold;
  padding: 12px 24px;
  border: 2px solid rgba(62, 62, 62, 1);
  transition: all 0.3s ease-in-out;
  text-transform: uppercase;
}
.custom-btn:hover {
  transform: scale(1.1);  /* Effet d'agrandissement */
}
.custom-btn-close {
  position: sticky;
  top: 10px;
  z-index: 1000;
  background: white;
  padding: 10px 20px;
  border: 2px solid rgba(62, 62, 62, 1);
}

.section-divider {
  background: rgba(245, 241, 235, 1) !important;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  position: relative;
  padding: 10 10px; /* Espace de 10px de chaque côté */
  box-sizing: border-box;
}

.section-divider::before,
.section-divider::after {
  content: "";
  height: 2px;
  background: #333;
  flex-grow: 1;
  margin-left: 5px !important;
  margin-right: 5px !important;
  max-width: 70px !important;
}

.section-divider-HC {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  position: relative;
  padding: 10 10px; /* Espace de 10px de chaque côté */
  box-sizing: border-box;
}

.section-divider-HC::before,
.section-divider-HC::after {
  content: "";
  height: 2px;
  background: #333;
  flex-grow: 1;
  margin-left: 5px !important;
  margin-right: 5px !important;
  max-width: 70px !important;
}

.section-divider span {
  font-size: 1.2rem !important;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding: 0 30px; /* Espace autour du texte */
  background: white; /* Pour cacher la ligne derrière le texte */
}

.presentation {
  text-align: center;
}

.presentation h3 {
  font-size: 1.5em; /* Titre principal plus grand */
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-bottom: -0.2em;
}

.presentation h4 {
  font-size: 1.1em;
  font-weight: 400;
  font-style: italic;
  color: #7A7A7A; /* Gris élégant */
  margin-top: 5px;
}

.presentation p {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #333;
  margin-top: 15px;
  max-width: 750px; /* Pour éviter que le texte ne soit trop large */
  margin-left: auto;
  margin-right: auto;
}

.italic-text {
    font-style: italic;
    transform: translateY(-12px);
}
.sheet_container{
position:relative;
max-width: 100vw !important;
border-right: 1px #f8f7f3 solid;
/* background-image:url(images/bubble.png); */
/* background-color: black; */
}

.sheet_item
{
height:90vh;
overflow-y:auto;
position:relative;
}
.v-application .white {
    background-color: #e2e2e200 !important
}
.theme--dark.v-sheet--outlined {
    border: thin solid #008080 !important
}
.v-card .v-card--flat .v-sheet .theme--dark {
    max-width: 100vw !important;
}
element.style {
    max-width: 100vw !important;
}
.mobile-card {
    max-width:50vw;
}
@media (max-width: 800px) {
  .mobile-card {
    max-width:70vw;
  }
}
@media (max-width: 500px) {
  .mobile-card {
    max-width:100vw;
  }
}
</style>
