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
          <v-card-title>Introduce</v-card-title>
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
          <v-card-title>Tech Stacks</v-card-title>
        </v-card>
      </v-col>
      <v-col
        v-for="i in img"
        :key="i"
        sm="auto"
        md="auto"
        lg="auto"
      >
        <v-card
          class=""
        >
          <v-img
            width="130px"
            height="130px"
            class="mx-auto align-center"
            :src="i.src"
          >
            <v-card-title
              class="text-button justify-center"
              :style="color == 'light' ? skillText.light : skillText.dark"
            >
              {{ i.title }}
            </v-card-title>
          </v-img>
        </v-card>
      </v-col>
      <v-col
        cols="12"
      >
        <v-card>
          <v-card-title>links</v-card-title>
          <v-divider class="mx-4"></v-divider>
          <v-btn
            v-for="l in link"
            :key="l"
            :href="l.src"
            target="_blank"
            class="ml-4 my-4"
          >
            <v-icon>{{ l.icon }}</v-icon>
            {{ l.title }}
          </v-btn>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
      skillText: {
        dark: 'text-shadow: rgb(0 0 0 / 100%) 1px 1px 1px',
        light: 'text-shadow: rgb(255 255 255 / 100%) 1px 1px 1px'
      },
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
      ],
      link: [
        {
          icon: 'mdi-github',
          title: 'Github',
          src: 'https://github.com/impnem/sia'
        },
        {
          icon: 'mdi-alpha-t-circle',
          title: 'Tistory',
          src: 'https://impnem.tistory.com/'
        }
      ]
    }
  },
  computed: {
    ...mapState({
      color: state => state.local.mode.color
    })
  }
}
</script>

<style>

</style>
