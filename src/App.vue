<template>
  <v-app>
    <v-app-bar
      app
      color="fourthly"
      dark
    >
      <v-app-bar-nav-icon v-on:click="drawer = !drawer"></v-app-bar-nav-icon>
      <site-title></site-title>
      <v-spacer/>
    </v-app-bar>
    <v-navigation-drawer app v-model="drawer" width="400" color="secondary">
      <site-menu></site-menu>
    </v-navigation-drawer>
    <v-main>
      <router-view/>
    </v-main>
    <site-footer></site-footer>
  </v-app>
</template>

<script>
import SiteTitle from '@/components/titleView.vue'
import SiteFooter from '@/components/footerView.vue'
import SiteMenu from '@/components/menuView.vue'

export default {
  components: { SiteTitle, SiteFooter, SiteMenu },
  name: 'App',

  data () {
    return {
      drawer: false
    }
  }
}
</script>
