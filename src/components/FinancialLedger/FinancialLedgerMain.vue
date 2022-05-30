<template>
  <div>
    <v-card
      v-for="(item, i) in items"
      :key="i"
      max-width="600px"
      class="mx-auto my-2"
    >
      <v-alert
        border="left"
        class="mx-0 my-0 py-0"
      >
        <v-list>
          <v-card-title>{{ item.date }}</v-card-title>
          <v-card
            v-for="(contents, c) in item.contents"
            :key="c"
            color="list"
            class="px-2 mb-2"
          >
            <v-list-item-content>
              <v-list-item-title>{{ contents.title }} <small class="grey--text">( {{ contents.time }} )</small></v-list-item-title>
              <v-list-item-subtitle>
                가격 : {{ contents.amount | comma }}원
              </v-list-item-subtitle>
            </v-list-item-content>
            <v-btn
              class="my-n2 mr-9"
              icon
              absolute
              bottom
              right
              large
              @click="openFinancialDialog"
            >
              <v-icon>mdi-pencil</v-icon>
            </v-btn>
            <v-btn
              class="my-n2 mr-n2"
              icon
              absolute
              bottom
              right
              large
              disabled
            >
              <v-icon>{{ contents.Evaluation }}</v-icon>
            </v-btn>
          </v-card>
        </v-list>
      </v-alert>
    </v-card>
    <v-btn
      class="mr-0 mb-13"
      fixed
      bottom
      right
      fab
      @click="openFinancialDialog"
    >
      <v-icon>mdi-plus</v-icon>
    </v-btn>
    <!-- 이벤트 확인 dialog -->
    <v-dialog
      v-model="financialDialog"
      width="500"
    >
      <v-card>
        <v-card-title>
          <span class="text-h5">지출 내역 추가 & 수정</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col
                cols="12"
              >
                <v-text-field
                  label="카테고리"
                  required
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
              >
                <v-text-field
                  label="지출명"
                  required
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="6"
              >
                <v-text-field
                  label="지출금액(원)"
                  required
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="6"
              >
                <v-select
                  :items="['1 - 최악', '2 - 나쁨', '3 - 별로', '4 - 괜찮음', '5 - 좋음', '6 - 최고']"
                  label="소비평가"
                ></v-select>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1"
            text
            @click="closeFinancialDialog"
          >
            Close
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="closeFinancialDialog"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data () {
    return {
      financialDialog: false,
      items: [
        {
          date: '2022-05-29',
          category: '',
          contents: [
            {
              time: '20:17:32',
              title: '돈까스 배달음식',
              amount: 15000,
              Evaluation: 'mdi-dice-4'
            },
            {
              time: '21:00:12',
              title: '음료수',
              amount: 1200,
              Evaluation: 'mdi-dice-2'
            }
          ]
        },
        {
          date: '2022-05-30',
          category: '',
          contents: [
            {
              time: '20:00:32',
              title: '초밥 배달음식',
              amount: 21000,
              Evaluation: 'mdi-dice-5'
            }
          ]
        },
        {
          date: '2022-05-31',
          category: '',
          contents: [
            {
              time: '19:57:32',
              title: '파스타 배달음식',
              amount: 17000,
              Evaluation: 'mdi-dice-4'
            }
          ]
        }
      ]
    }
  },
  methods: {
    openFinancialDialog () {
      this.financialDialog = true
    },
    closeFinancialDialog () {
      this.financialDialog = false
    }
  },
  filters: {
    comma (val) {
      return String(val).replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    }
  }
}
</script>

<style>

</style>
