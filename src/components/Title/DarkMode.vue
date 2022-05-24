<template>
  <div>
    <v-btn
      color="icon"
      depressed
      icon
      large
      @click="changeTheme(color)"
    >
      <v-icon>{{ color == 'light' ? icon.light : icon.dark }}</v-icon>
    </v-btn>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  data () {
    return {
      modeText: null,
      icon: {
        light: 'mdi-white-balance-sunny',
        dark: 'mdi-weather-night'
      }
    }
  },
  methods: {
    ...mapMutations([
      'changeMode'
    ]),
    changeTheme (color) {
      if (color === 'light') {
        console.log('1')
        this.$vuetify.theme.light = false
        this.$vuetify.theme.dark = true
      } else if (color === 'dark') {
        console.log('2')
        this.$vuetify.theme.dark = false
        this.$vuetify.theme.light = true
      } else {
        console.log('3')
        this.$vuetify.theme.light = false
        this.$vuetify.theme.dark = true
      }
      this.changeMode(color)
    }
  },
  computed: {
    ...mapState({
      color: state => state.local.mode.color
    })
  }
}
</script>

<style>

</style>
