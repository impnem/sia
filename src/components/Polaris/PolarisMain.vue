<template>
  <div>
    <v-row>
      <v-col>
        <v-sheet :height="height">
          <v-calendar
            ref="calendar"
            :now="today"
            :value="today"
            :events="events"
            event-color="memo"
            event-text-color="custom"
            color="memo"
            type="week"
            @click:event="openPolarisDialog"
          ></v-calendar>
          <!-- 이벤트 확인 dialog -->
          <v-dialog
            v-model="polarisDialog"
            width="500"
          >
            <v-card>
              <v-card-title class="text-h6 memo">
                이벤트 제목
              </v-card-title>

              <v-card-text class="mt-6">
                이벤트 내용 부분입니다.
              </v-card-text>

              <v-divider></v-divider>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  color="primary"
                  text
                  @click="closePolarisDialog"
                >
                  OK
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-sheet>
      </v-col>
    </v-row>
    <v-btn
      class="mr-2 mb-12"
      fixed
      bottom
      right
      fab
    >
      <v-icon>mdi-plus</v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  data () {
    return {
      height: 0,
      polarisDialog: false, // polaris dialog
      today: '2022-05-29',
      events: [
        {
          name: '명상',
          start: '2022-05-29 09:00',
          end: '2022-05-29 10:00'
        },
        {
          name: '월말 결산',
          start: '2022-05-31'
        },
        {
          name: '투표',
          start: '2022-06-01 12:30',
          end: '2022-06-01 13:00'
        },
        {
          name: '친구 약속',
          start: '2022-06-02 10:00',
          end: '2022-06-02 14:30'
        }
      ]
    }
  },
  created () {
    this.handlerResize()
  },
  mounted () {
    this.$refs.calendar.scrollToTime('08:00')
    window.addEventListener('resize', this.handlerResize)
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.handlerResize)
  },
  methods: {
    handlerResize () { // 화면 높이에 따른 테이블 높이 변화
      this.height = window.outerHeight - 232
    },
    openPolarisDialog () {
      this.polarisDialog = true
    },
    closePolarisDialog () {
      this.polarisDialog = false
    }
  }
}
</script>

<style scoped>
  .my-event {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    border-radius: 2px;
    background-color: #1867c0;
    color: #000000;
    border: 1px solid #1867c0;
    font-size: 12px;
    padding: 3px;
    cursor: pointer;
    margin-bottom: 1px;
    left: 4px;
    margin-right: 8px;
    position: relative;
  }

  .my-event.with-time {
    position: absolute;
    right: 4px;
    margin-right: 0px;
  }
</style>
