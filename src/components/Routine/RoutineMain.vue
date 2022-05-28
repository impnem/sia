<template>
  <v-card
    color="background"
    flat
    class="fill-height"
  >
    <v-tabs
      v-model="tab"
      background-color="fourthly"
      show-arrows
      centered
    >
      <v-tab
        v-for="item in items"
        :key="item.tab"
      >
        {{ item.tab }}
      </v-tab>
    </v-tabs>

    <v-tabs-items
      id="tabsContents"
      v-model="tab"
      color="background"
    >
      <v-tab-item
        v-for="item in items"
        :key="item.tab"
      >
        <v-card
          v-for="(content, c) in item.content"
          :key="c"
          flat
          color="white--dark"
          class="my-1"
        >
          <v-card-text
            class="black--text"
          >
            <v-checkbox
              v-model="content.check"
              class="my-0 py-0"
              :label="`${ content.title }`"
              hide-details
            >
            </v-checkbox>
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>

<script>
export default {
  data () {
    return {
      tab: null,
      items: [
        {
          tab: 'MON',
          content: [
            {
              time: '0700',
              title: '7시 기상',
              check: true
            },
            {
              time: '0800',
              title: '8시 아침식사',
              check: true
            },
            {
              time: '0900',
              title: '9시 출근',
              check: true
            },
            {
              time: '1200',
              title: '12시 점심식사',
              check: true
            },
            {
              time: '1800',
              title: '18시 퇴근',
              check: false
            },
            {
              time: '1900',
              title: '19시 저녁식사',
              check: false
            },
            {
              time: '2000',
              title: '20시 자기계발',
              check: false
            },
            {
              time: '2200',
              title: '22시 취침준비',
              check: false
            },
            {
              time: '2300',
              title: '23시 취침',
              check: false
            }
          ]
        },
        {
          tab: 'TUE',
          content: [
            {
              time: '0700',
              title: '7시 기상',
              check: true
            },
            {
              time: '0800',
              title: '8시 아침식사',
              check: true
            },
            {
              time: '0900',
              title: '9시 출근',
              check: true
            },
            {
              time: '1200',
              title: '12시 점심식사',
              check: true
            },
            {
              time: '1800',
              title: '18시 퇴근',
              check: false
            },
            {
              time: '1900',
              title: '19시 저녁식사',
              check: false
            },
            {
              time: '2000',
              title: '20시 자기계발',
              check: false
            },
            {
              time: '2200',
              title: '22시 취침준비',
              check: false
            },
            {
              time: '2300',
              title: '23시 취침',
              check: false
            }
          ]
        },
        {
          tab: 'WED',
          content: [
            {
              time: '0700',
              title: '7시 기상',
              check: true
            },
            {
              time: '0800',
              title: '8시 아침식사',
              check: true
            },
            {
              time: '0900',
              title: '9시 출근',
              check: true
            },
            {
              time: '1200',
              title: '12시 점심식사',
              check: true
            },
            {
              time: '1800',
              title: '18시 퇴근',
              check: false
            },
            {
              time: '1900',
              title: '19시 저녁식사',
              check: false
            },
            {
              time: '2000',
              title: '20시 자기계발',
              check: false
            },
            {
              time: '2200',
              title: '22시 취침준비',
              check: false
            },
            {
              time: '2300',
              title: '23시 취침',
              check: false
            }
          ]
        },
        {
          tab: 'THUR',
          content: [
            {
              time: '0700',
              title: '7시 기상',
              check: true
            },
            {
              time: '0800',
              title: '8시 아침식사',
              check: true
            },
            {
              time: '0900',
              title: '9시 출근',
              check: true
            },
            {
              time: '1200',
              title: '12시 점심식사',
              check: true
            },
            {
              time: '1800',
              title: '18시 퇴근',
              check: false
            },
            {
              time: '1900',
              title: '19시 저녁식사',
              check: false
            },
            {
              time: '2000',
              title: '20시 자기계발',
              check: false
            },
            {
              time: '2200',
              title: '22시 취침준비',
              check: false
            },
            {
              time: '2300',
              title: '23시 취침',
              check: false
            }
          ]
        },
        {
          tab: 'FRI',
          content: [
            {
              time: '0700',
              title: '7시 기상',
              check: true
            },
            {
              time: '0800',
              title: '8시 아침식사',
              check: true
            },
            {
              time: '0900',
              title: '9시 출근',
              check: true
            },
            {
              time: '1200',
              title: '12시 점심식사',
              check: true
            },
            {
              time: '1800',
              title: '18시 퇴근',
              check: false
            },
            {
              time: '1900',
              title: '19시 저녁식사',
              check: false
            },
            {
              time: '2000',
              title: '20시 자기계발',
              check: false
            },
            {
              time: '2200',
              title: '22시 취침준비',
              check: false
            },
            {
              time: '2300',
              title: '23시 취침',
              check: false
            }
          ]
        },
        {
          tab: 'SAT',
          content: [
            {
              time: '0800',
              title: '8시 기상',
              check: true
            },
            {
              time: '0900',
              title: '9시 아침식사',
              check: true
            },
            {
              time: '1000',
              title: '10시 빨래',
              check: true
            },
            {
              time: '1100',
              title: '11시 독서',
              check: true
            },
            {
              time: '1200',
              title: '12시 점심식사',
              check: false
            },
            {
              time: '1300',
              title: '13시 블로그 글 올리기',
              check: false
            },
            {
              time: '1600',
              title: '16시 자기계발',
              check: false
            },
            {
              time: '1800',
              title: '18시 저녁식사',
              check: false
            },
            {
              time: '1900',
              title: '19시 영화보기',
              check: false
            },
            {
              time: '2100',
              title: '21시 독서',
              check: false
            },
            {
              time: '2200',
              title: '22시 취침준비',
              check: false
            },
            {
              time: '2300',
              title: '23시 취침',
              check: false
            }
          ]
        },
        {
          tab: 'SUN',
          content: [
            {
              time: '0800',
              title: '8시 기상',
              check: true
            },
            {
              time: '0900',
              title: '9시 아침식사',
              check: true
            },
            {
              time: '1000',
              title: '10시 빨래',
              check: true
            },
            {
              time: '1100',
              title: '11시 독서',
              check: true
            },
            {
              time: '1200',
              title: '12시 점심식사',
              check: false
            },
            {
              time: '1300',
              title: '13시 블로그 글 올리기',
              check: false
            },
            {
              time: '1600',
              title: '16시 자기계발',
              check: false
            },
            {
              time: '1800',
              title: '18시 저녁식사',
              check: false
            },
            {
              time: '1900',
              title: '19시 영화보기',
              check: false
            },
            {
              time: '2100',
              title: '21시 독서',
              check: false
            },
            {
              time: '2200',
              title: '22시 취침준비',
              check: false
            },
            {
              time: '2300',
              title: '23시 취침',
              check: false
            }
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>
  /* 내용 메뉴 길이와 맞게 조정, 배경색 변경 */
  #tabsContents {
    max-width: 630px;
    margin: auto;
    background-color: #7c7c7c;
  }
</style>
