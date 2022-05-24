import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'
import { VSnackbar, VBtn, VIcon } from 'vuetify/lib'
import VuetifyToast from 'vuetify-toast-snackbar-ng'

Vue.use(Vuetify, {
  components: {
    VSnackbar,
    VBtn,
    VIcon
  }
})

Vue.use(VuetifyToast, {
  x: 'right', // default
  y: 'bottom', // default
  color: 'info', // default
  icon: 'mdi-information', // 수정함
  iconColor: '', // default
  classes: [
    'body-2'
  ],
  timeout: 3000, // default
  dismissable: true, // default
  multiLine: false, // default
  vertical: false, // default
  queueable: false, // default
  showClose: false, // default
  closeText: '', // default
  closeIcon: 'close', // default
  closeColor: '', // default
  slot: [], // default
  shorts: {
    custom: {
      color: 'purple'
    }
  },
  property: '$toast' // default
})

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#ff79c6',
        secondary: '#ffffff',
        thirdly: '#f2f4f7',
        fourthly: '#eaedf1',
        button: '#343746',
        custom: '#21222c',
        memo: '#e6b905'
      },
      dark: {
        primary: '#ff79c6',
        secondary: '#343746',
        thirdly: '#282a36',
        fourthly: '#21222c',
        button: '#ffffff',
        custom: '#21222c',
        memo: '#e6b905'
      }
    }
  }
})
