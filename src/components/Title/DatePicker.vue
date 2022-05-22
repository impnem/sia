<template>
  <div>
    <v-spacer/>
    <v-btn
      color="fourthly"
      depressed
      x-large
      @click="dialog = true"
    >
      {{ date == null ? initDate : date }}
    </v-btn>
    <v-dialog
      v-model="dialog"
      transition="dialog-top-transition"
      max-width="400"
    >
      <v-date-picker
        full-width
        v-model="picker"
        @dblclick:date="clickDate"
        >
        <v-spacer></v-spacer>
        <v-btn text color="primary" @click="dialog = false">Cancel</v-btn>
        <v-btn text color="primary" @click="clickDate(picker)">OK</v-btn>
      </v-date-picker>
    </v-dialog>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex'

export default {
  data () {
    return {
      dialog: false,
      picker: new Date().toISOString().substr(0, 10),
      landscape: false,
      reactive: false
    }
  },
  methods: {
    ...mapMutations([
      'changeDate'
    ]),

    clickDate (selectedDate) { // 클릭이벤트시 date 값 변경
      this.changeDate(selectedDate)
      this.dialog = false
    }
  },
  computed: {
    ...mapState({
      date: state => state.local.date
    }),
    ...mapGetters([
      'initDate'
    ])
  }
}
</script>

<style>

</style>
