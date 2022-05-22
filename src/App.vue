<template>
  <v-app>
    <v-app-bar
      app
      color="fourthly"
    >
      <v-app-bar-nav-icon
        @click="drawer = !drawer"
      >
      </v-app-bar-nav-icon>
      <site-title></site-title>
      <v-spacer/>
      <date-picker></date-picker>
      <dark-mode></dark-mode>
    </v-app-bar>
    <v-navigation-drawer
      app
      v-model="drawer"
      width="350"
      color="secondary"
    >
      <site-menu></site-menu>
    </v-navigation-drawer>
    <v-main>
      <router-view/>
    </v-main>
    <site-footer></site-footer>
  </v-app>
</template>

<script>
import SiteTitle from '@/components/TitleView.vue'
import SiteFooter from '@/components/FooterView.vue'
import SiteMenu from '@/components/MenuView.vue'
import DatePicker from '@/components/Title/DatePicker.vue'
import DarkMode from '@/components/Title/DarkMode.vue'
import { mapState, mapMutations } from 'vuex'

export default {
  components: {
    SiteTitle,
    SiteFooter,
    SiteMenu,
    DatePicker,
    DarkMode
  },
  data () {
    return {
      drawer: false
    }
  },
  created () {
    // 라이트 & 다크 모드 초기값 입력 및 로컬 저장
    const nowMode = localStorage.getItem('mode')
    if (nowMode === null) {
      localStorage.setItem('mode', 'light')
      this.setMode('light')
      this.$vuetify.theme.light = true
    } else if (nowMode === 'light') {
      localStorage.setItem('mode', nowMode)
      this.setMode(nowMode)
      this.$vuetify.theme.dark = false
      this.$vuetify.theme.light = true
    } else if (nowMode === 'dark') {
      localStorage.setItem('mode', nowMode)
      this.setMode(nowMode)
      this.$vuetify.theme.light = false
      this.$vuetify.theme.dark = true
    } else {
      localStorage.setItem('mode', 'light')
      this.setMode('light')
      this.$vuetify.theme.dark = false
      this.$vuetify.theme.light = true
    }
  },
  methods: {
    ...mapMutations([
      'setMode'
    ])
  },
  computed: {
    ...mapState({
      color: state => state.local.mode.color
    })
  }
}
</script>
