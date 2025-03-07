<template>
    <div>
      <form ref="form" @submit.prevent="sendEmail">
        <v-row justify="center">
            <v-col class="FormContact mt-4 mb-3" cols="12" sm="10" md="8" lg="6">
                <h1 class="section-divider TitreH3">{{$t('Contact')}}</h1>
                <span class="HeaderContactDesc">{{ $t("HeaderContactDesc") }}</span>
              <a target="_blank" style="text-decoration: none;" class="mb-12" href="mailto:contact@mazal-mathieu.fr">
                <h4 class="TitreMail">{{ $t("E-mail") }}</h4>
              </a>
              <v-card class="mt-7 mb-10 FormulaireRapideProCadre" outlined>
                <v-card class='rounded-0'>
                  <h3 class="FormulaireRapidePro">{{ $t("SpeedForm.NameForm") }}</h3>
                </v-card>
                <v-card-text>
                  <v-text-field dense v-model="name" :error-messages="nameErrors" :label="$t('SpeedForm.FullName')" required type="text" name="from_name">
                  </v-text-field>
                  <v-text-field dense v-model="societe" :label="$t('SpeedForm.Society')" type="text" name="from_societe">
                  </v-text-field>
                  <v-text-field dense v-model="adresse" :label="$t('SpeedForm.Address')" type="text" name="from_adresse">
                  </v-text-field>
                  <v-text-field dense v-model="email" :error-messages="emailErrors" :label="$t('SpeedForm.E-mail')" required type="email" name="user_email" @input="$v.email.$touch()" @blur="$v.email.$touch()">
                  </v-text-field>
                  <v-select dense v-model="select" :error-messages="selectErrors" :items="items" :label="$t('SpeedForm.Service')" required type="text" name="user_services" @change="$v.select.$touch()" @blur="$v.select.$touch()">
                  </v-select>
                  <v-textarea dense rows="3" v-model="message" :label="$t('SpeedForm.Message')" type="text" name="message" required>
                  </v-textarea>
                </v-card-text>
                <v-card-actions>
                  <v-btn class="custom-btn-formpro" @click="clear">
                    {{ $t("clear") }}
                  </v-btn>
                  <v-spacer></v-spacer>
                  <v-btn class="custom-btn-formpro" type="submit" value="Send" :disabled="invalid">
                    {{ $t("submit") }}
                  </v-btn>
                  <v-overlay :z-index="zIndex" :value="overlay">
                    <v-progress-circular indeterminate size="64"></v-progress-circular>
                  </v-overlay>
                  <v-snackbar class="snackbar-pop" color="#3E3E3E" outlined :timeout="timeout" v-model="snackbar">
                      <p class="text-center">{{ $t("SpeedForm.SendForm") }}</p>
                    <v-btn class="custom-btn-formpro-close" v-bind="attrs" @click="snackbar = false, overlay = false">
                      {{ $t("close") }}
                    </v-btn>
                  </v-snackbar>
                </v-card-actions>
                <h5 class="font-weight-regular font-italic ml-4 text-lg-left" >{{ $t("SpeedForm.Info") }}</h5>
              </v-card>
            </v-col>
        </v-row>
      </form>
    </div>
  </template>
<script>
import Vue from 'vue'
import emailjs from '@emailjs/browser'
import { validationMixin } from 'vuelidate'
import { required, email } from 'vuelidate/lib/validators'
import i18n from '@/i18n'

export default Vue.extend({
  mixins: [validationMixin],
  validations: {
    name: { required },
    email: { required, email },
    select: { required },
    checkbox: {
      checked (val) {
        return val
      }
    }
  },
  data: () => ({
    invalid: false,
    timeout: 10000,
    dialog: false,
    validate: '',
    overlay: false,
    zIndex: 0,
    valid: true,
    snackbar: false,
    name: '',
    adresse: '',
    societe: '',
    email: '',
    message: '',
    select: null,
    items: [],
    checkbox: false,
    return: {
      text: null
    }
  }),
  created: function () {
    // Récupérer les prestations
    const prestations = i18n.t('PrestationsPart') // Récupère toutes les prestations
    if (Array.isArray(prestations)) {
      // Si PrestationsPro est un tableau, on récupère les titres
      this.items = prestations.map((item) => item.title) // Extrait les titres des prestations
    }
  },
  computed: {
    checkboxErrors () {
      const errors = []
      if (!this.$v.checkbox.$dirty) return errors
      !this.$v.checkbox.checked && errors.push('You must agree to continue!')
      return errors
    },
    selectErrors () {
      const errors = []
      if (!this.$v.select.$dirty) return errors
      if (!this.select) errors.push('Service is required')
      return errors
    },
    nameErrors () {
      const errors = []
      if (!this.$v.name.$dirty) return errors
      !this.$v.name.required && errors.push('Name is required.')
      return errors
    },
    emailErrors () {
      const errors = []
      if (!this.$v.email.$dirty) return errors
      !this.$v.email.email && errors.push('Must be valid e-mail')
      !this.$v.email.required && errors.push('E-mail is required')
      return errors
    }
  },
  methods: {
    isValid () {
      return this.name !== '' && this.email !== '' && this.message !== '' && this.select !== null && this.valid
    },
    sendEmail () {
      this.$v.$touch() // Force la validation des champs avant d'envoyer
      if (!this.isValid()) return
      this.overlay = true
      emailjs.sendForm('service_gd7g9by', 'template_713c125', this.$refs.form, 'O8Bauw8Gs7ykLrpHH')
        .then((result) => {
          console.log('SUCCESS!', this.snackbar = true, result.text)
          this.overlay = false
          this.clear()
        }, (error) => {
          console.log('FAILED...', error.text)
        })
    },
    clear () {
      this.$v.$reset()
      this.name = ''
      this.email = ''
      this.message = ''
      this.adresse = ''
      this.societe = ''
      this.select = null
      this.valid = true
    }
  }
})
</script>
<style>
.HeaderContactDesc {
  font-size: 0.7em !important; /* Réduit la taille du texte */
  color: rgba(62, 62, 62, 1) !important; /* Couleur du texte */
  font-style: italic !important; /* Met le texte en italique */
  margin-bottom: 5px !important;
  max-width: 550px !important; /* Fixe la largeur du texte à 100px */
  overflow: hidden; /* Cache le texte qui dépasse de 100px */
  text-overflow: ellipsis; /* Affiche "..." si le texte dépasse la largeur définie */
  display: inline-block !important; /* Assure un comportement de type bloc tout en permettant une largeur définie */
}

.snackbar-pop {
  position: fixed !important;
  left: 0% !important;
  bottom: 40% !important;
}
/* Boutons stylisés */
.custom-btn-formpro {
  background: rgba(245, 241, 235, 1) !important;
  color: rgba(62, 62, 62, 1) !important;
  font-size: 1.1em !important;
  font-weight: bold !important;
  padding: 12px 24px !important;
  border: 2px solid rgba(62, 62, 62, 1) !important;
  transition: all 0.3s ease-in-out !important;
  text-transform: uppercase !important;
}
.custom-btn-formpro-close:hover,
.custom-btn-formpro:hover {
  transform: scale(1.08) !important;
}
.custom-btn-formpro-close {
  background: rgba(245, 241, 235, 1) !important;
  color: rgba(62, 62, 62, 1) !important;
  font-size: 1.1em !important;
  font-weight: bold !important;
  padding: 12px 24px !important;
  border: 2px solid rgba(62, 62, 62, 1) !important;
  transition: all 0.3s ease-in-out !important;
  text-transform: uppercase !important;
  margin: 0 auto;
  display: flex;
}

.custom-btn-formpro-overlay {
  background: rgba(245, 241, 235, 1) !important; /* Couleur de fond */
  color: rgba(62, 62, 62, 1) !important; /* Couleur du texte */
  border: 2px solid rgba(62, 62, 62, 1) !important;
}

.FormulaireRapidePro {
  color: rgba(62, 62, 62, 1) !important;
  background-color: rgba(181, 188, 175, 1) !important;
  border-bottom: 4px solid rgba(62, 62, 62, 1) !important;
}
.FormulaireRapideProCadre {
  border: 4px solid #3e3e3e !important;
}
.FormContact {
  width: 100%;  /* Utilise toute la largeur disponible */
  max-width: 800px; /* Limite la largeur maximale */
  margin: auto; /* Centre le formulaire */
  padding: 20px; /* Ajoute un peu d'espace */
}
.TitreMail,
.TitreH3 {
  color:rgba(62, 62, 62, 1) !important;
}
.TitreMail:hover {
  color:rgba(163, 106, 74, 1) !important;
  transform: scale(1.02) !important;
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
  max-width: 170px !important;
}

.section-divider span {
  font-size: 1.2rem !important;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding: 0 30px; /* Espace autour du texte */
  background: white; /* Pour cacher la ligne derrière le texte */
}
</style>
