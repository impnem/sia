<template>
    <v-tabs
      v-model="currentItem"
      fixed-tabs
      slider-color="white"
    >
      <v-tab
        v-for="item in items"
        :key="item"
        :href="'#tab-' + item"
      >
        {{ item }}
      </v-tab>
    </v-tabs>
</template>

<script>
export default {
  data: () => ({
    currentItem: 'tab-Web',
    items: [
      'Web', 'Shopping', 'Videos', 'Images', 'Web', 'Shopping', 'Videos', 'Images'
    ],
    more: [
      'News', 'Maps', 'Books', 'Flights', 'Apps'
    ],
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  }),

  methods: {
    addItem (item) {
      const removed = this.items.splice(0, 1)
      this.items.push(
        ...this.more.splice(this.more.indexOf(item), 1)
      )
      this.more.push(...removed)
      this.$nextTick(() => { this.currentItem = 'tab-' + item })
    }
  }
}
</script>

<style>

</style>
