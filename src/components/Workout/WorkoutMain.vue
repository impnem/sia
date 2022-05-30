<template>
  <div>
    <v-row
      class="fill-height"
      align-content="center"
      justify="center"
    >
      <v-col
        cols="12"
        sm="12"
        md="6"
        lg="6"
        xl="6"
      >
        <v-col
          cols="12"
        >
          <v-sheet
            height="600"
          >
            <v-calendar
              ref="calendar"
              v-model="value"
              :weekdays="weekday"
              :type="type"
              :events="events"
              :event-overlap-mode="mode"
              :event-overlap-threshold="30"
              :event-color="getEventColor"
              @change="getEvents"
              @click:event="openWorkoutDialog"
            >
            </v-calendar>
            <!-- 이벤트 확인 dialog -->
            <v-dialog
              v-model="workoutDialog"
              width="500"
            >
              <v-card>
                <v-card-title>
                  <span class="text-h5">이벤트 내용 수정</span>
                </v-card-title>
                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col
                        cols="12"
                        md="6"
                      >
                        <v-text-field
                          label="몸무게(kg)"
                          required
                        ></v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        md="6"
                      >
                        <v-text-field
                          label="운동 시작시간"
                          required
                        ></v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                      >
                        <v-card-title>운동 목록</v-card-title>
                        <v-btn
                          width="100%"
                          height="50px"
                          color="grey darken-1"
                        >
                          <v-icon>mdi-plus</v-icon>
                        </v-btn>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                    color="blue darken-1"
                    text
                    @click="closeWorkoutDialog"
                  >
                    Close
                  </v-btn>
                  <v-btn
                    color="blue darken-1"
                    text
                    @click="closeWorkoutDialog"
                  >
                    Save
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-sheet>
        </v-col>
      </v-col>
      <v-col
        cols="12"
        sm="12"
        md="6"
        lg="6"
        xl="6"
      >
        <v-row>
          <v-col
            v-for="g in graph"
            :key="g"
            cols="12"
            sm="12"
            md="12"
            lg="10"
            xl="8"
          >
            <v-card
              class="mx-3 my-3 pb-4"
              :color="g.color"
            >
              <v-card-title class="text-body-1 font-weight-bold">{{ g.title }}</v-card-title>
              <v-sheet
                class="mx-auto"
                :color="g.color"
                elevation="12"
                max-width="calc(100% - 32px)"
              >
                <v-sparkline
                  :labels="labels"
                  :value="timeValue"
                  color="white"
                  line-width="2"
                  padding="16"
                ></v-sparkline>
              </v-sheet>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      workoutDialog: false, // workout dialog
      type: 'month',
      mode: 'stack',
      weekday: [1, 2, 3, 4, 5, 6, 0],
      value: '',
      events: [],
      colors: ['blue', 'indigo', 'deep-purple', 'cyan', 'green', 'orange', 'grey darken-1'],
      names: ['팔굽혀펴기', '윗몸일으키기', '턱걸이'],
      labels: [
        '12am',
        '3am',
        '6am',
        '9am',
        '12pm',
        '3pm',
        '6pm',
        '9pm'
      ],
      timeValue: [
        200,
        675,
        410,
        390,
        310,
        460,
        250,
        240
      ],
      graph: [
        {
          title: '운동 지속력 그래프',
          color: 'indigo'
        },
        {
          title: '운동 시간대 그래프',
          color: 'cyan'
        },
        {
          title: '몸무게 그래프',
          color: 'deep-purple'
        }
      ]
    }
  },
  methods: {
    getEvents ({ start, end }) {
      const events = []

      const min = new Date(`${start.date}T00:00:00`)
      const max = new Date(`${end.date}T23:59:59`)
      const days = (max.getTime() - min.getTime()) / 86400000
      const eventCount = this.rnd(days, days + 20)

      for (let i = 0; i < eventCount; i++) {
        const allDay = this.rnd(0, 3) === 0
        const firstTimestamp = this.rnd(min.getTime(), max.getTime())
        const first = new Date(firstTimestamp - (firstTimestamp % 900000))
        const secondTimestamp = this.rnd(2, allDay ? 288 : 8) * 900000
        const second = new Date(first.getTime() + secondTimestamp)

        events.push({
          name: this.names[this.rnd(0, this.names.length - 1)],
          start: first,
          end: second,
          color: this.colors[this.rnd(0, this.colors.length - 1)],
          timed: !allDay
        })
      }
      this.events = events
    },
    getEventColor (event) {
      return event.color
    },
    rnd (a, b) {
      return Math.floor((b - a + 1) * Math.random()) + a
    },
    openWorkoutDialog () {
      this.workoutDialog = true
    },
    closeWorkoutDialog () {
      this.workoutDialog = false
    }
  }
}
</script>

<style>
  .v-sheet--offset {
    top: -24px;
    position: relative;
  }
</style>
