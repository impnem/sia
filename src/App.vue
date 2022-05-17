<template>
  <v-app>
    <v-app-bar
      app
      color="fourthly"
      dark
    >
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <site-title></site-title>
      <v-spacer/>
      <date-picker></date-picker>
    </v-app-bar>
    <v-navigation-drawer app v-model="drawer" width="350" color="secondary">
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

export default {
  components: { SiteTitle, SiteFooter, SiteMenu, DatePicker },
  name: 'App',

  data () {
    return {
      drawer: false
    }
  }
}
</script>
