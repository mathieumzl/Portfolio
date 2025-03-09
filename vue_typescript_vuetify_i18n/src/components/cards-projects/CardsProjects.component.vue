<template>
    <v-hover v-slot="{ hover }">
      <a @click="sheet = !sheet">
        <v-card class='rounded-0' :elevation="hover ? 18 : 7" max-width="350px" >
          <v-img align="left" :src="require(`@/assets/${$props.project.thumbnail_name}`)" height="350px" width="350px">
            <span class="text-h5 pl-4 pt-4 d-inline-block">
              <p class="TitreCarteProjets" > {{$props.project.name}} </p>
            </span>
          </v-img>
          <v-fade-transition >
            <v-overlay z-index="1" v-if="hover" opacity="0.9" absolute class="CartesProjets" color='rgba(181, 188, 175, 1)'>
              <v-card-subtitle class="text-h6 pl-4 pt-4" style="color :rgba(62, 62, 62, 1)">{{$props.project.name}}</v-card-subtitle>
              <v-card-title min-height="70">
                <v-row>
                  <!-- Logo Logiciels
                  <v-col v-for="(item, i) in $props.project.softwares" :key="i">
                    <v-img max-width="35px" max-height="35px" :src="require(`@/assets/${item.logo}`)" />
                  </v-col>
                  -->
                </v-row>
              </v-card-title>
            </v-overlay>
          </v-fade-transition>
        </v-card>
        <!-- Sheet -->
        <v-bottom-sheet v-model="sheet">
        <!-- sheet componet -->
          <v-sheet color="#B5BCAF" class="v-sheet-custom-curseur">
            <div align="center" class="sheet_container">
              <v-divider color="#3E3E3E"/>
              <v-divider color="#3E3E3E"/>
              <v-divider color="#3E3E3E"/>
              <v-container fluid class="sheet_item ">
                <v-card class="center justify-center" flat color="transparent">
                  <h1 class="mt-6 mb-6 gradient-text h1-titre-color">
                    {{$props.project.name}}
                  </h1>
                  <v-btn class="mb-5 custom-btn custom-btn-close" outlined @click="sheet = !sheet">
                    {{$t('return')}}
                  </v-btn>
                  <v-divider width="1050px" class="mt-4" color="#3E3E3E"/>
                  <v-divider width="1050px" color="#3E3E3E"/>
                  <v-divider width="1050px" class="mb-6" color="#3E3E3E"/>
                  <v-container class="center justify-center">
                    <v-row class="center justify-center ">
                      <v-col class="mt-4" cols="12">
                        <expandable-image class="expandable-image image expanded" :src="require(`@/assets/${$props.project.v_sheet.src}`)" />
                         <!--  <v-img :src="require(`@/assets/${$props.project.v_sheet.src}`)" /> -->
                      </v-col>
                      <!--<v-col class="mt-5" cols="2" md="auto" v-for="(item, i) in $props.project.softwares" :key="i">
                        <v-tooltip bottom>
                          <template v-slot:activator="{on, attrs}">
                              <v-img width="57px" :src="require(`@/assets/${item.logo}`)" v-on="on" v-bind="attrs"/>
                          </template>
                          <span>
                            {{item.tooltip}}
                          </span>
                        </v-tooltip>
                      </v-col>-->
                      <v-col cols="12">
                        <v-divider width="800px" class="mb-6 mt-5" color="#3E3E3E"/>
                          <v-card-text>
                            <v-col cols="12" md="9" xl="7" v-for="(item, i) in $props.project.v_sheet.description" :key="i">
                              <p>{{ item }}</p>
                            </v-col>
                          </v-card-text>
                          <v-col cols="12" v-for="srcp in $props.project.v_sheet.srcp" :key="srcp">
                            <v-btn class="custom-btn" target="_blank" :href="require(`@/assets/${$props.project.v_sheet.srcp}`)" >{{$t("downloadcdr")}}</v-btn>
                          </v-col>
                          <v-col cols="12" v-for="srcp1 in $props.project.v_sheet.srcp1" :key="srcp1">
                            <v-btn class="custom-btn" target="_blank" :href="require(`@/assets/${$props.project.v_sheet.srcp1}`)" >{{$t("downloadPlanESQ")}}</v-btn>
                          </v-col>
                          <v-col cols="12" v-for="srcp2 in $props.project.v_sheet.srcp2" :key="srcp2">
                            <v-btn class="custom-btn" target="_blank" :href="require(`@/assets/${$props.project.v_sheet.srcp2}`)" >{{$t("downloadPlanAPS")}}</v-btn>
                          </v-col>
                          <v-col cols="12" v-for="srcp3 in $props.project.v_sheet.srcp3" :key="srcp3">
                            <v-btn class="custom-btn" target="_blank" :href="require(`@/assets/${$props.project.v_sheet.srcp3}`)" >{{$t("downloadPlanAPD")}}</v-btn>
                          </v-col>
                          <v-col cols="12" v-for="srcp4 in $props.project.v_sheet.srcp4" :key="srcp4">
                            <v-btn class="custom-btn" target="_blank" :href="require(`@/assets/${$props.project.v_sheet.srcp4}`)" >{{$t("downloadPlanPRODCE")}}</v-btn>
                          </v-col>
                        <v-divider width="800px" class="mt-5 mb-8 mt-1" color="#3E3E3E"/>
                      </v-col>
                      <v-col cols="12" v-for="srcv in $props.project.v_sheet.srcv" :key="srcv">
                            <video controls width="70%" max-height="458" preload="auto" playsinline loop id="headerVideo">
                              <source :src="require(`@/assets/${srcv}`)" type='video/mp4'/>
                            </video>
                      </v-col>
                      <v-col cols="12" v-for="item in $props.project.v_sheet.src1" :key="item">
                        <expandable-image class="expandable-image image expanded" :src="require(`@/assets/${item}`)"  />
                      </v-col>
                    </v-row>
                  <!-- directive -->
                  </v-container>
                </v-card>
              </v-container>
            </div>
          </v-sheet>
            <!--<div :is='$props.project.sheet'>
            </div>-->
        </v-bottom-sheet>
      </a>
    </v-hover>
</template>

<script>

import VueExpandableImage from 'vue-expandable-image'
import Vue from 'vue'

Vue.use(VueExpandableImage)
export default Vue.extend({
  mounted () {
    const viewportMeta = document.createElement('meta')
    viewportMeta.name = 'viewport'
    viewportMeta.content = 'width=device-width, initial-scale=1'
    document.head.appendChild(viewportMeta)
  },
  data: () => ({
    el: '#webapp',
    sheet: false,
    show: false,
    scrollInvoked: 0,
    offsetTop: 0
  }),
  methods: {
    onclick: function () {
      console.log('click')
    }
  },
  props: ['project', 'v_sheet', 'src1']
})
</script>
<style>
.TitreCarteProjets {
  color: #FFF !important;
  text-shadow:     1px 1px 0px rgba(0, 0, 0, 1),   /* Ombre droite */
  -1px -1px 0px rgba(0, 0, 0, 1),  /* Ombre gauche */
  1px -1px 0px rgba(0, 0, 0, 1),   /* Ombre en haut à droite */
  -1px 1px 0px rgba(0, 0, 0, 1);   /* Ombre en bas à gauche */
}
element.style {
    opacity: 1;
    width: 100px !important;
}
@media (max-width: 1024px) {
  #silentbox-overlay__close-button {
    min-width: 50px !important;
    min-height: 50px !important;
    margin-right: 30px;
  }
  svg {
  filter: drop-shadow(1px 1px 1px rgba(0,0,0,0.5));
}
}
body>.expandable-image.expanded>img {
    width: 100%;
    max-width: 90% !important;
    max-height: 90% !important;
    object-fit: contain;
    margin: 0 auto;
}
.image {
  width: 70%;
  max-width: 100%;
}

.expandable-image {
  position: relative;
  transition: 0.25s opacity;
  cursor: zoom-in;
}

body>.expandable-image.expanded {
  position: fixed;
  z-index: 999999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgb(0, 0, 0) !important;
  display: flex;
  align-items: center;
  opacity: 0;
  padding-bottom: 0 !important;
  cursor: default;
}

body > .expandable-image.expanded > .close-button {
  display: block;
}

.close-button {
  position: fixed;
  top: 10px;
  display: none;
  cursor: pointer;
}
svg {
  filter: drop-shadow(1px 1px 1px rgba(0,0,0,0.5));
}
svg path {
  fill: #FFF;
}
.expand-button {
  position: absolute;
  z-index: 999;
  right: 10px;
  top: 10px;
  padding: 0px;
  align-items: center;
  justify-content: center;
  padding: 3px;
  opacity: 0;
  transition: 0.2s opacity;
}
.close-button svg{
  width: 10vh !important;
  height: 10vh !important;
}

.expandable-image:hover .expand-button {
  opacity: 1;
}
.expand-button svg {
  width: 20px;
  height: 20px;
}
.expand-button path {
  fill: #FFF;
}

.expandable-image img {
  width: 100%;
}

.CartesProjets {
  border: 3px solid rgba(62, 62, 62, 1) !important;
}
.sheet_container {
  max-height: 90vh; /* Ajuste si nécessaire */
  overflow-y: auto;

}

/* Boutons stylisés */
.custom-btn {
  background: rgba(245, 241, 235, 1) !important;
  color: rgba(62, 62, 62, 1) !important;
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
  border: 2px solid rgba(62, 62, 62, 1) !important;
}
.custom-btn-close {
  position: sticky;
  top: 10px;
  z-index: 1000;
  background: white;
  padding: 10px 20px;
  border: 2px solid rgba(62, 62, 62, 1) !important;
}

.h1-titre-color {
  color: #3E3E3E;
}
</style>
