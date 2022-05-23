<template>
  <div>
    <v-list-item two-line>
      <v-list-item-avatar>
        <img src="https://randomuser.me/api/portraits/women/81.jpg">
      </v-list-item-avatar>

      <v-list-item-content>
        <v-list-item-title>Jane Smith</v-list-item-title>
        <v-list-item-subtitle>Logged In</v-list-item-subtitle>
        <v-list-item-subtitle>메뉴의 수 : {{ count }}</v-list-item-subtitle>
        <v-list-item-subtitle>홈의 갯수 : {{ homes }}({{ percent }}%)</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

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

export default {
  data () {
    return {

    }
  },
  computed: {
    ...mapState(['site']),
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
