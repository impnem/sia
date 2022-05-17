<template>
  <div>
    <v-spacer/>
    <v-btn
      color="fourthly"
      depressed
      x-large
      @click="dialog = true"
    >
      {{ date == null ? getDate : date }}
    </v-btn>
    <v-dialog
      v-model="dialog"
      transition="dialog-top-transition"
      max-width="400"
    >
      <v-date-picker
        full-width
        v-model="picker"
        @dblclick:date="dateClick"
        >
        <v-spacer></v-spacer>
        <v-btn text color="primary" @click="dialog = false">Cancel</v-btn>
        <v-btn text color="primary" @click="dateClick(picker)">OK</v-btn>
      </v-date-picker>
    </v-dialog>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

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
    ...mapMutations(['changeDate']),
    dateClick (selectedDate) {
      this.changeDate(selectedDate)
      this.dialog = false
    }
  },
  computed: {
    ...mapState({
      date: state => state.date
    }),
    getDate: () => { // 오늘 날짜 yyyy-mm-dd
      const today = new Date()

      const year = today.getFullYear()
      const month = ('0' + (today.getMonth() + 1)).slice(-2)
      const day = ('0' + today.getDate()).slice(-2)

      const dateString = year + '-' + month + '-' + day

      return dateString
    }
  }
}
</script>

<style>

</style>
