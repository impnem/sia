<template>
  <v-container
    color="thirdly"
    class="text-center"
    fill-height
    xs="my-auto"
    sm="my-auto"
  >
    <v-row>
      <v-col
        cols="12"
        class="text-h5"
      >
        오늘의 하루공부
      </v-col>
      <v-col
        cols="12"
        class="text-body-1"
      >
        {{ ds[dsDate].subject }}
      </v-col>
      <v-col cols="12" >
        <div>
          <iframe
            :width="iframeSize.width"
            :height="iframeSize.height"
            max-width="1185px"
            :src="ds[dsDate].src"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  data () {
    return {
      iframeSize: {
        width: 0,
        height: 0
      }
    }
  },
  mounted () {
    this.handleResize()
    window.addEventListener('resize', this.handleResize)
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    handleResize () { // 유튜브 동영상 사이즈 반응형
      if (window.innerWidth < 960) { // xs, sm (폰, 미니 & 중간 태블릿)
        this.iframeSize = {
          width: window.innerWidth - 50,
          height: window.innerWidth * 0.5625
        }
      } else if (window.innerWidth < 1264) { // md (큰 태블릿)
        this.iframeSize = {
          width: 876,
          height: 876 * 0.5625
        }
      } else if (window.innerWidth < 1552) { // lg (데스크탑), navi가 나오는 시점
        this.iframeSize = {
          width: 876,
          height: 876 * 0.5625
        }
      } else { // lg, xl(4k & ultra-wide)
        this.iframeSize = {
          width: 1161,
          height: 1161 * 0.5625
        }
      }
    }
  },
  computed: {
    ...mapState({
      date: state => state.local.date,
      ds: state => state.server.data.ds
    }),
    ...mapGetters([
      'dsDate'
    ])
  }
}
</script>

<style scoped>

</style>
