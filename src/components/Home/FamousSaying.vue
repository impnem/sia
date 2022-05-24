<template>
  <v-row
    class="fill-height"
    align-content="center"
    justify="center"
  >
    <v-col cols="12">
      <v-card
        class="mx-auto d-flex flex-column justify-center"
        height="350"
        max-width="350"
        color="memo"
      >
        <v-card-text class="my-4 text-center text-h6 font-weight-bold custom--text">
          <div>
            {{ fsOne[fsIndex].fSaying }}
            <br/>
            <br/>
            - {{ fsOne[fsIndex].author }} -
          </div>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  methods: {

  },
  computed: {
    ...mapState({
      fsOne: state => state.local.data.fs
    }),
    ...mapGetters(['fsIndex'])
  }
}
</script>

<style>
</style>
