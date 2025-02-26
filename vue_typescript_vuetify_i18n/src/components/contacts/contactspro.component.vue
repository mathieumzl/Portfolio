<template>
  <div>
    <form ref="form" @submit.prevent="sendEmail">
      <v-row justify="center">
        <v-col>
          <v-col cols="10" md="6">
            <v-card-title class="justify-center mt-4">
              <h1 class="gradient-text">{{$t('HeaderContact')}}</h1>
            </v-card-title>
            <v-divider width="200px" class="mt-n2" color="#cf9b58"/>
            <v-divider width="200px" color="#cf9b58"/>
            <v-divider width="200px" class="mb-12" color="#cf9b58"/>
            <a target="_blank" style="text-decoration: none;" class="mb-12 white--text" href="mailto:contact@mazal-mathieu.fr">
              <h4>{{ $t("E-mail") }}</h4>
            </a>
            <br />
            <v-card class="mt-7 mb-10" outlined>
              <v-card class='rounded-0' color="teal darken-2 !important" >
                <h3>{{ $t("SpeedForm.NameForm") }}</h3>
              </v-card>
              <v-card-text>
                <v-text-field v-model="name" :error-messages="nameErrors" :label="$t('SpeedForm.FullName')" required type="text" name="from_name">
                </v-text-field>
                <v-text-field v-model="societe" :label="$t('SpeedForm.Society')" type="text" name="from_societe">
                </v-text-field>
                <v-text-field v-model="adresse" :label="$t('SpeedForm.Address')" type="text" name="from_adresse">
                </v-text-field>
                <v-text-field v-model="email" :error-messages="emailErrors" :label="$t('SpeedForm.E-mail')" required type="email" name="user_email" @input="$v.email.$touch()" @blur="$v.email.$touch()">
                </v-text-field>
                <v-select v-model="select" :error-messages="checkboxErrors" :items="items" :label="$t('SpeedForm.Service')" required type="text" name="user_services" @change="$v.select.$touch()" @blur="$v.select.$touch()">
                </v-select>
                <v-textarea rows="3" v-model="message" :label="$t('SpeedForm.Message')" type="text" name="message" required>
                </v-textarea>
              </v-card-text>
              <v-card-actions>
                <v-btn @click="clear">
                  {{ $t("clear") }}
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn @click="sendEmail()" type="submit" value="Send" :disabled="invalid">
                  {{ $t("submit") }}
                </v-btn>
                <v-overlay :z-index="zIndex" :value="overlay">
                  <v-progress-circular indeterminate size="64"></v-progress-circular>
                </v-overlay>
                <v-snackbar :timeout="timeout" color="light-green darken-1" v-model="snackbar">
                  <p class="text-center">{{ $t("SpeedForm.SendForm") }}</p>
                  <v-btn :style="{left: '50%', transform:'translateX(-50%)'}" v-bind="attrs" @click="snackbar = false, overlay = false">
                    {{ $t("close") }}
                  </v-btn>
                </v-snackbar>
              </v-card-actions>
              <h5 class="font-weight-regular font-italic ml-4 text-lg-left" >{{ $t("SpeedForm.Info") }}</h5>
            </v-card>
          </v-col>
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
    this.items = i18n.t('SpeedForm.Services')
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
      !this.$v.select.required && errors.push('Service is required')
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
      return this.name !== '' && this.email !== '' && this.message !== '' && this.select && this.valid
    },
    sendEmail () {
      if (!this.isValid()) return
      this.overlay = true
      emailjs.sendForm('service_ypx70qi', 'template_w6w5j2r', this.$refs.form, 'O8Bauw8Gs7ykLrpHH')
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
</style>
