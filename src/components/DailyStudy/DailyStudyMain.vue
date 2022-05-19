<template>
  <v-container color="thirdly" class="text-center">
    <v-row>
      <v-col>
        오늘의 하루공부<br/>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        {{ ds[dsDate].subject }}
      </v-col>
    </v-row>
    <div>
      <iframe
        :width="youtubeSize.x"
        :height="youtubeSize.y"
        :src="'https://www.youtube.com/embed/' + ds[dsDate].src"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  </v-container>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  data () {
    return {
      youtubeSize: {
        x: 0,
        y: 0
      }
    }
  },
  mounted () {
    this.onResize()
  },
  methods: {
    onResize () {
      this.youtubeSize = { x: window.innerWidth - 20, y: window.innerWidth * 0.625 }
      // 20을 빼준 이유는 약간의 여유공간을 두어 화면에 스크롤이 생기지 않게 하기 위함이고, 0.625를 곱한 건 화면비를 16:10으로 유지하기 위함임
    }
  },
  computed: {
    ...mapState({
      date: state => state.date,
      ds: state => state.data.ds
    }),
    ...mapGetters([
      'dsDate'
    ])
  }
}
</script>

<style>

</style>
