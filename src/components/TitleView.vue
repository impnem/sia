<template>
  <v-toolbar-title>
    {{ $store.state.site.title }}
  </v-toolbar-title>
</template>

<script>
import { EventBus } from '@/main.js'

export default {
  data () {
    return {

    }
  },
  mounted () {
    EventBus.$on('menuClick', titleName => {
      console.log('on ' + titleName)
      this.$store.state.site.title = titleName
    })
  }
}
</script>

<style>

</style>
