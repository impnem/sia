<template>
  <div>
    <v-spacer/>
    <v-btn
      color="fourthly"
      depressed
      x-large
      @click="dialog=true"
    >
      {{ getDate }}
    </v-btn>
    <v-dialog
      v-model="dialog"
      transition="dialog-top-transition"
      max-width="500"
      max-height="500"
    >
      <v-date-picker
        v-model="picker"
        :landscape="landscape"
        :reactive="reactive"

        full-width>
      </v-date-picker>
    </v-dialog>
  </div>
</template>

<script>
export default {
  computed: {
    getDate: () => { // 오늘 날짜 yyyy-mm-dd
      const today = new Date()

      const year = today.getFullYear()
      const month = ('0' + (today.getMonth() + 1)).slice(-2)
      const day = ('0' + today.getDate()).slice(-2)

      const dateString = year + '-' + month + '-' + day

      return dateString
    }
  },
  data () {
    return {
      dialog: false,
      picker: new Date().toISOString().substr(0, 10),
      landscape: false,
      reactive: false
    }
  },
  mount () {

  }
}
</script>

<style>

</style>
