<template>
  <div>
    <v-btn
      color="icon"
      depressed
      icon
      large
      @click="changeTheme(color)"
    >
      <v-icon>{{ color == 'light' ? icon.dark : icon.light}}</v-icon>
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
        this.$vuetify.theme.light = false
        this.$vuetify.theme.dark = true
      } else {
        this.$vuetify.theme.dark = false
        this.$vuetify.theme.light = true
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
