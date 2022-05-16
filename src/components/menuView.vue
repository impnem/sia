<template>
  <div>
    <v-list-item two-line>
      <v-list-item-avatar>
        <img src="https://randomuser.me/api/portraits/women/81.jpg">
      </v-list-item-avatar>

      <v-list-item-content>
        <v-list-item-title>Jane Smith</v-list-item-title>
        <v-list-item-subtitle>Logged In</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <v-list>
      <v-list-item
        v-for="(item, i) in site.menu"
        v-bind:key="i"
        v-bind:to="item.to"
        v-on:click="menuClick(item.title)"
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
import { EventBus } from '@/main.js'

export default {
  site: {
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
  },
  methods: {
    menuClick (titleName) {
      EventBus.$on('menuClick', titleName)
    }
  }
}
</script>

<style>

</style>
