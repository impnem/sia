<template>
  <v-footer color="fourthly" padless>
    <v-col class="text-center text-overline" cols="12">
      {{ footer }}
    </v-col>
  </v-footer>
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
      footer: state => state.site.footer
    })
  }
}
</script>

<style>

</style>
