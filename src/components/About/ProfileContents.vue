<template>
  <v-container
    color="thirdly"
    class="text-center">
    <v-row></v-row>
    <v-row
      :justify="center"
    >
      <v-col
        v-for="k in img"
        :key="k"
        md="2"
        class="justify-center"
      >
        <v-card
          class="pa-4 mx-auto d-flex flex-column justify-center"
          outlined
          tile
        >
          <v-img
            width="100px"
            height="100px"
            :src="k.src"
          >
            <div class="text-h6">{{ k.title }}</div>
          </v-img>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      justify: [
        'start',
        'center',
        'end',
        'space-around',
        'space-between'
      ],
      img: [
        {
          title: 'HTML5',
          src: require('@/assets/About/html5.png')
        },
        {
          title: 'CSS3',
          src: require('@/assets/About/css3.png')
        },
        {
          title: 'Javascript',
          src: require('@/assets/About/javascript.png')
        },
        {
          title: 'Vue.js',
          src: require('@/assets/About/vuejs.png')
        },
        {
          title: 'Vuex',
          src: require('@/assets/About/vuex.png')
        },
        {
          title: 'Vuetify',
          src: require('@/assets/About/vuetify.png')
        },
        {
          title: 'Firebase',
          src: require('@/assets/About/firebase.png')
        }
      ]
    }
  }
}
</script>

<style>

</style>
