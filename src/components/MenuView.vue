<template>
  <div>
    <site-sign></site-sign>
    <v-divider></v-divider>
    <v-list>
      <v-list-item
        v-for="(item, i) in site.menu"
        :key="i"
        :to="item.to"
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title >{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import SiteSign from '@/components/User/signView.vue'

export default {
  data () {
    return {

    }
  },
  components: {
    SiteSign
  },
  computed: {
    ...mapState({
      site: state => state.server.site
    }),
    ...mapGetters({
      count: 'menuCount',
      homes: 'countOfHome',
      percent: 'percentOfHome'
    })
  }
}
</script>

<style>

</style>
