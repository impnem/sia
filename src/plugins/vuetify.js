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
  timeout: 5000, // default
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
        primary: '#343746',
        secondary: '#ffffff',
        thirdly: '#f2f4f7',
        fourthly: '#eaedf1',
        icon: '#343746',
        custom: '#21222c',
        memo: '#e6b905',
        list: '#dfdfdf',
        background: '#7c7c7c'
      },
      dark: {
        primary: '#eaedf1',
        secondary: '#343746',
        thirdly: '#282a36',
        fourthly: '#21222c',
        icon: '#ffffff',
        custom: '#21222c',
        memo: '#e6b905',
        list: '#343434',
        background: '#7c7c7c'
      }
    }
  }
})
