<template>
  <v-toolbar-title>
    {{ title }}
  </v-toolbar-title>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {

    }
  },
  computed: {
    ...mapState({
      title: state => state.site.title
    })
  }
}
</script>

<style>

</style>
