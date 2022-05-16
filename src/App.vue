<template>
  <v-app>
    <v-app-bar
      app
      color="fourthly"
      dark
    >
      <v-app-bar-nav-icon v-on:click="drawer = !drawer"></v-app-bar-nav-icon>
      <site-title v-bind:title="site.title"></site-title>
      <v-spacer/>
    </v-app-bar>
    <v-navigation-drawer app v-model="drawer" width="400" color="secondary">
      <site-menu v-bind:items="site.menu"></site-menu>
    </v-navigation-drawer>
    <v-main>
      <router-view/>
    </v-main>
    <site-footer v-bind:footer="site.footer"></site-footer>
  </v-app>
</template>

<script>
import SiteTitle from '@/components/title.vue'
import SiteFooter from '@/components/footer.vue'
import SiteMenu from '@/components/menu.vue'

export default {
  components: { SiteTitle, SiteFooter, SiteMenu },
  name: 'App',

  data () {
    return {
      drawer: false,
      site: {
        title: 'Home',
        footer: 'Copyright 2022. impnem. All RIGHTS RESERVED',
        menu: [
          {
            title: 'Home',
            icon: 'mdi-home',
            to: '/'
          },
          {
            title: 'Daily Study',
            icon: 'mdi-book-open-page-variant',
            to: '/dailyStudy'
          }
        ]
      }
    }
  }
}
</script>
