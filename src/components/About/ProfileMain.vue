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
            자기계발 앱들을 하나의 앱에서 관리할 수 있으면 좋겠다고 생각하여 만들게 되었다.
          </v-card-text>
        </v-card>
      </v-col>
      <v-col
        cols="12"
      >
        <v-card>
          <v-card-title>Period of Development</v-card-title>
          <v-divider class="mx-4"></v-divider>
          <v-card-text>
            2022-05-16 ~ <br/>
            지속적으로 업데이트 중!
          </v-card-text>
        </v-card>
      </v-col>
      <v-col
        cols="12"
      >
        <v-card>
          <v-card-title>Tech Stacks</v-card-title>
          <v-divider class="mx-4 mb-4"></v-divider>
          <v-row>
            <v-col
              v-for="(img, i) in imgs"
              :key="i"
              sm="auto"
              md="auto"
              lg="auto"
            >
              <v-card
                class="mx-1"
                color="techStacks"
              >
                <v-img
                  width="130px"
                  height="130px"
                  class="mx-auto align-center"
                  :src="img.src"
                >
                  <v-card-title
                    class="text-button justify-center"
                    :style="color == 'light' ? skillText.light : skillText.dark"
                  >
                    {{ img.title }}
                  </v-card-title>
                </v-img>
              </v-card>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
      <v-col
        cols="12"
      >
        <v-card>
          <v-card-title>links</v-card-title>
          <v-divider class="mx-4"></v-divider>
          <v-btn
            v-for="(link, l) in links"
            :key="l"
            :href="link.src"
            target="_blank"
            class="ml-4 my-4"
          >
            <v-icon>{{ link.icon }}</v-icon>
            {{ link.title }}
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
      imgs: [
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
      links: [
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
