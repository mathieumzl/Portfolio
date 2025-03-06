<template >
    <div>
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
            <v-card-actions class="section-divider justify-center">
                <v-btn class="custom-btn" @click="sheet = true" elevation="5">
                    {{$t("PresentationHomePage.button")}}
                </v-btn>
            </v-card-actions>
        </v-card>
        <v-bottom-sheet v-model="sheet" >
            <v-sheet class="text-center SheetPresentation" min-height="300px">
                <div align="center" class="sheet_container">
                    <v-divider color="#3E3E3E"/>
                    <v-divider color="#3E3E3E"/>
                    <v-divider color="#3E3E3E"/>
                    <v-divider color="#3E3E3E"/>
                    <v-container fluid class="sheet_item">
                    <v-card class="mobile-card" flat color="transparent">
                        <v-btn class="mt-5 mb-6 custom-btn custom-btn-close" outlined @click="sheet = !sheet">
                            {{$t("close")}}
                        </v-btn>
                        <pf-TextAnim class="TextAnim" style="color:#3E3E3E !important;"/>
                        <h3 class="TitreH3">{{ $t("PresentationHomePage.Titre") }}</h3>
                        <br />
                        <v-card class="VCardComp" color="">
                            <v-card class="mt-0 rounded-0" color="#3E3E3E">
                                <h3 class="ColorWhiteTitre">{{$t("PreSkills")}}</h3>
                                <v-card-text min-height="70" align="center" class="text--primary">
                                    <v-row justify="center">
                                        <v-col color="" cols="2" md="auto">
                                            <v-tooltip bottom>
                                                <template v-slot:activator="{on, attrs}">
                                                    <v-img class="LogoLogi" width="57px" src="@/assets/logo-soft/rhino_50px_50px.png" v-on="on" v-bind="attrs"/>
                                                </template>
                                                <span>Rhino</span>
                                            </v-tooltip>
                                        </v-col>
                                        <v-col color="" cols="2" md="auto">
                                            <v-tooltip bottom>
                                                <template v-slot:activator="{on, attrs}">
                                                    <v-img class="LogoLogi" width="57px" src="@/assets/logo-soft/archicad_50px_50px.png" v-on="on" v-bind="attrs"/>
                                                </template>
                                                <span>Archicad</span>
                                            </v-tooltip>
                                        </v-col>
                                        <v-col cols="2" md="auto">
                                            <v-tooltip bottom>
                                                <template v-slot:activator="{on, attrs}">
                                                    <v-img class="LogoLogi" width="57px" src="@/assets/logo-soft/enscape_50px_50px.png" v-on="on" v-bind="attrs"/>
                                                </template>
                                                <span>Enscape</span>
                                            </v-tooltip>
                                        </v-col>
                                        <v-col cols="2" md="auto">
                                            <v-tooltip bottom>
                                                <template v-slot:activator="{on, attrs}">
                                                    <v-img class="LogoLogi" src="@/assets/logo-soft/autocad_50px_50px.png" v-on="on" v-bind="attrs"/>
                                                </template>
                                                <span>Autocad</span>
                                            </v-tooltip>
                                        </v-col>
                                        <v-col cols="2" md="auto" >
                                            <v-tooltip bottom>
                                                <template v-slot:activator="{on, attrs}">
                                                    <v-img class="LogoLogi" src="@/assets/logo-soft/revit_50px_50px.png" v-on="on" v-bind="attrs"/>
                                                </template>
                                                <span>Revit</span>
                                            </v-tooltip>
                                        </v-col>
                                        <v-col cols="2" md="auto">
                                            <v-tooltip bottom>
                                                <template v-slot:activator="{on, attrs}">
                                                    <v-img class="LogoLogi" src="@/assets/logo-soft/vray_50px_50px.png" v-on="on" v-bind="attrs"/>
                                                </template>
                                                <span>V-Ray</span>
                                            </v-tooltip>
                                        </v-col>
                                        <v-col cols="2" md="auto">
                                            <v-tooltip bottom>
                                                <template v-slot:activator="{on, attrs}">
                                                    <v-img class="LogoLogi" src="@/assets/logo-soft/photoshop_50px_50px.png" v-on="on" v-bind="attrs"/>
                                                </template>
                                                <span>Photoshop</span>
                                            </v-tooltip>
                                        </v-col>
                                        <v-col cols="2" md="auto">
                                            <v-tooltip bottom>
                                                <template v-slot:activator="{on, attrs}">
                                                    <v-img class="LogoLogi" src="@/assets/logo-soft/indesign_50px_50px.png" v-on="on" v-bind="attrs"/>
                                                </template>
                                                <span>InDesign</span>
                                            </v-tooltip>
                                        </v-col>
                                        <v-col cols="2" md="auto" >
                                            <v-tooltip bottom>
                                                <template v-slot:activator="{on, attrs}">
                                                    <v-img class="LogoLogi" src="@/assets/logo-soft/pencil_50px_50px.png" v-on="on" v-bind="attrs"/>
                                                </template>
                                                <span>{{$t("PreHandDrawn")}}</span>
                                            </v-tooltip>
                                        </v-col>
                                        <v-col cols="2" md="auto" >
                                            <v-tooltip bottom>
                                                <template v-slot:activator="{on, attrs}">
                                                    <v-img class="LogoLogi" src="@/assets/logo-soft/build_50px_50px.png" v-on="on" v-bind="attrs"/>
                                                </template>
                                                <span>{{$t("PreModel")}}</span>
                                            </v-tooltip>
                                        </v-col>
                                    </v-row>
                                </v-card-text>
                            </v-card>
                        </v-card>
                        <v-timeline class="text-center">
                            <v-timeline-item class="mt-3" icon="mdi-school" color="#B5BCAF" fill-dot>
                                <span class="font-weight-bold " slot="opposite">{{$t("PreTimelineDate06")}}</span>
                                <v-card class="VCardComp">
                                    <v-card class='rounded-0' color="#3E3E3E">
                                        <h3 class="ColorWhiteTitre">{{$t("PreTimelineTitre06")}}</h3>
                                        <v-card-text class="text--primary">
                                            <p>{{$t("PreTimelineDescr06")}}</p>
                                        </v-card-text>
                                    </v-card>
                                </v-card>
                            </v-timeline-item>
                            <v-timeline-item class="mt-3" icon="mdi-briefcase-variant" color="#B5BCAF" fill-dot>
                                <span class="font-weight-bold" slot="opposite">{{$t("PreTimelineDate07")}}</span>
                                <v-card class="VCardComp" >
                                    <v-card class='rounded-0' color="#3E3E3E">
                                        <h3 class="ColorWhiteTitre">{{$t("PreTimelineTitre07")}}</h3>
                                        <v-card-text class="text--primary">
                                            <p>
                                                {{$t("PreTimelineDescr07")}}<br />
                                                {{$t("PreTimelineDescr07_1")}}
                                            </p>
                                        </v-card-text>
                                    </v-card>
                                </v-card>
                            </v-timeline-item>
                            <v-timeline-item class="mt-3" icon="mdi-school" color="#B5BCAF" fill-dot>
                                <span class="font-weight-bold" slot="opposite">{{$t("PreTimelineDate01")}}</span>
                                <v-card class="VCardComp" >
                                    <v-card class='rounded-0' color="#3E3E3E">
                                        <h3 class="ColorWhiteTitre">{{$t("PreTimelineTitre01")}}</h3>
                                        <v-card-text class="text--primary">
                                            <p>{{$t("PreTimelineDescr01")}}</p>
                                        </v-card-text>
                                    </v-card>
                                </v-card>
                            </v-timeline-item>
                            <v-timeline-item class="mt-3" icon="mdi-briefcase-variant" color="#B5BCAF" fill-dot>
                                <span class="font-weight-bold" slot="opposite">{{$t("PreTimelineDate05")}}</span>
                                <v-card class="VCardComp" >
                                    <v-card class='rounded-0' color="#3E3E3E">
                                        <h3 class="ColorWhiteTitre">{{$t("PreTimelineTitre05")}}</h3>
                                        <v-card-text class="text--primary">
                                            <p>
                                                {{$t("PreTimelineDescr05")}}<br />
                                                {{$t("PreTimelineDescr05_1")}}
                                            </p>
                                        </v-card-text>
                                    </v-card>
                                </v-card>
                            </v-timeline-item>
                             <v-timeline-item icon="mdi-account-tie" color="#B5BCAF" fill-dot>
                                <span class="font-weight-bold" slot="opposite">{{$t("PreTimelineDate02")}}</span>
                                <v-card class="VCardComp">
                                    <v-card class='rounded-0' color="#3E3E3E">
                                        <h3 class="ColorWhiteTitre">{{$t("PreTimelineTitre02")}}</h3>
                                        <v-card-text class="text--primary">
                                            <p>
                                                {{$t("PreTimelineDescr02")}}<br />
                                                {{$t("PreTimelineDescr02_1")}}<br />
                                                {{$t("PreTimelineDescr02_2")}}
                                            </p>
                                        </v-card-text>
                                    </v-card>
                                </v-card>
                            </v-timeline-item>
                            <v-timeline-item icon="mdi-account-tie" color="#B5BCAF" fill-dot>
                                <span class="font-weight-bold" slot="opposite">{{$t("PreTimelineDate03")}}</span>
                                <v-card class="VCardComp">
                                    <v-card class='rounded-0' color="#3E3E3E">
                                        <h3 class="ColorWhiteTitre">{{$t("PreTimelineTitre03")}}</h3>
                                        <v-card-text class="text--primary">
                                            <p>
                                                {{$t("PreTimelineDescr03")}}<br />
                                                {{$t("PreTimelineDescr03_1")}}<br />
                                                {{$t("PreTimelineDescr03_2")}}
                                            </p>
                                        </v-card-text>
                                    </v-card>
                                </v-card>
                            </v-timeline-item>
                            <v-timeline-item icon="mdi-briefcase-variant" color="#B5BCAF" fill-dot>
                                <span class="font-weight-bold" slot="opposite">{{$t("PreTimelineDate04")}}</span>
                                <v-card class="VCardComp">
                                    <v-card class='rounded-0' color="#3E3E3E">
                                        <h3 class="ColorWhiteTitre">{{$t("PreTimelineTitre04")}}</h3>
                                        <v-card-text class="text--primary">
                                            <p>
                                                {{$t("PreTimelineDescr04")}}<br>
                                                {{$t("PreTimelineDescr04_1")}}
                                            </p>
                                        </v-card-text>
                                    </v-card>
                                </v-card>
                            </v-timeline-item>
                            <v-col cols="12">
                                <span class="font-weight-bold">{{$t("downloadcv")}}</span>
                            </v-col>
                                <v-btn icon="" elevation="5" rounded class="ma-0" target="_blank" :href="require('@/assets/cv/MAZAL_Mathieu.pdf')"><v-timeline-item class="mt-5" icon="mdi-cloud-download-outline" color="#B5BCAF" fill-dot></v-timeline-item></v-btn>
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
  color: rgba(62, 62, 62, 1);
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
.TitreH3 {
  color: rgb(190, 39, 39) !important;
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
