<template>
  <v-container
    justify-center
    fill-Height
    fluid
  >
    <v-row>
      <v-col
        cols="12"
      >
        <v-card>
          <v-card-title>앱 소개</v-card-title>
          <v-divider class="mx-4"></v-divider>
          <v-card-text>
            자기계발을 하나의 앱에서 관리할 수 있으면 좋겠다고 생각하여 만들게 되었다.
          </v-card-text>
        </v-card>
      </v-col>
      <v-col
        cols="12"
      >
        <v-card>
          <v-card-title>사용 기술 스택</v-card-title>
        </v-card>
      </v-col>
      <v-col
        v-for="i in img"
        :key="i"
        class=""
        sm="auto"
        md="auto"
        lg="auto"
      >
        <v-card
          outlined
        >
          <v-img
            width="130px"
            height="130px"
            class="mx-auto align-center"
            :src="i.src"
          >
            <v-card-title
              class="text-button justify-center"
              style="text-shadow: rgb(0 0 0 / 100%) 1px 1px 1px"
            >
              {{ i.title }}
            </v-card-title>
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
