<template>
  <v-toolbar-title>
    {{ title }}
  </v-toolbar-title>
</template>

<script>
import { EventBus } from '@/main.js'

export default {
  site: {
    title: 'Home'
  },
  mounted () {
    EventBus.$on('menuCilck', titleName => {
      this.title = titleName
    })
  }
}
</script>

<style>

</style>
