<template>
  <div>
    <site-sign></site-sign>
    <v-divider></v-divider>
    <v-list>
      <template
        v-for="(item, i) in site.menu"
      >
        <template v-if="!login">
          <v-list-item
            v-if="i !== (site.menu.length - 1)"
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
        </template>
        <!-- 관리자 메뉴 -->
        <template v-if="login">
          <v-list-item
            v-if="i !== site.menu.length"
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
        </template>
      </template>
    </v-list>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import SiteSign from '@/components/User/SignView.vue'

export default {
  data () {
    return {

    }
  },
  components: {
    SiteSign
  },
  methods: {

  },
  computed: {
    ...mapState({
      site: state => state.server.site,
      login: state => state.fireUser
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
