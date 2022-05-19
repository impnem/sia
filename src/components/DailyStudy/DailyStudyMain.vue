<template>
  <v-container color="thirdly">
    <v-row>
      <v-col>
        오늘의 하루공부 365
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        매일 매일 뇌 효율
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      date: state => state.date
    })
  }
}
</script>

<style>

</style>
