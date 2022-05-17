import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    dark: true,
    themes: {
      dark: {
        primary: '#ff79c6',
        secondary: '#343746',
        thirdly: '#282a36',
        fourthly: '#21222c',
        memo: '#e6b905'
      }
    }
  }
})
