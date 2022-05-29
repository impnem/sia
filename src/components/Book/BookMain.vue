<template>
  <v-card
    max-width="100%"
    class="mx-auto fill-height"
  >
    <v-container>
      <v-row dense>
        <v-col
          v-for="(item, i) in items"
          :key="i"
          cols="12"
          md="6"
          lg="4"
          xl="3"
        >
          <v-card
            :color="item.color"
            dark
          >
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title
                  class="text-h6"
                  v-text="item.title"
                ></v-card-title>

                <v-card-subtitle v-text="item.author"></v-card-subtitle>

                <v-card-actions>
                  <v-btn
                    v-if="item.src !== ''"
                    class=""
                    absolute
                    left
                    bottom
                    outlined
                    rounded
                    small
                    @click="openBookDialog(i)"
                  >
                    내용 보기
                  </v-btn>
                </v-card-actions>
              </div>
              <v-avatar
                class="ma-3"
                min-width="125"
                height="160"
                tile
              >
                <v-img
                  v-if="item.src !== ''"
                  :src="item.src"
                  contain
                >
                  <template v-slot:placeholder>
                    <v-row
                      class="fill-height ma-0"
                      align="center"
                      justify="center"
                    >
                      <v-progress-circular
                        indeterminate
                        color="grey lighten-5"
                      ></v-progress-circular>
                    </v-row>
                  </template>
                </v-img>
                <v-img
                  v-else
                >
                  <v-btn
                    icon
                    x-large
                    outlined
                    class="mx-auto my-auto"
                    @click="openBookDialog(-1)"
                  >
                    <v-icon>mdi-plus</v-icon>
                  </v-btn>
                </v-img>
              </v-avatar>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <!-- 책 내용 수정 dialog -->
    <v-dialog
      v-model="bookDialog"
      max-width="600px"
    >
      <v-card>
        <v-card-title>
          <span class="text-h5">책 내용 추가 & 수정</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-select
                  :items="['0-17', '18-29', '30-54', '54+']"
                  label="대분류"
                ></v-select>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-select
                  :items="['0-17', '18-29', '30-54', '54+']"
                  label="중분류"
                ></v-select>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-select
                  :items="['0-17', '18-29', '30-54', '54+']"
                  label="소분류"
                ></v-select>
              </v-col>
              <v-col
                cols="12"
              >
                <v-text-field
                  label="책 제목*"
                  required
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
              >
                <v-text-field
                  label="저자*"
                  required
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-text-field
                  label="출판사"
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-text-field
                  label="출간일"
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-text-field
                  label="구매일"
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-text-field
                  label="구매가"
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-text-field
                  label="쪽수"
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-text-field
                  label="다 읽은 날"
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
              >
                <v-text-title>난이도</v-text-title>
                <v-rating
                  v-model="rating"
                  background-color="purple lighten-3"
                  color="purple"
                ></v-rating>
              </v-col>
              <v-col
                cols="12"
                sm="6"
              >
                <v-text-title>별점</v-text-title>
                <v-rating
                  v-model="rating"
                  background-color="orange lighten-3"
                  color="orange"
                ></v-rating>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Email*"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Password*"
                  type="password"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
          <small>*필수작성</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1"
            text
            @click="closeBookDialog"
          >
            Close
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="closeBookDialog"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-card>
</template>

<script>
export default {
  data () {
    return {
      bookDialog: false, // 책 내용 수정 dialog 기본값
      bookIndex: 0,
      items: [
        {
          color: 'secondary',
          src: '',
          title: '',
          author: ''
        },
        {
          color: 'red darken-3',
          src: 'https://simage.kyobobook.co.kr/images/book/large/789/l9791188612789.jpg',
          title: 'Do it! Vue.js 입문',
          author: '장기효'
        },
        {
          color: 'pink darken-3',
          src: 'https://image.kyobobook.co.kr/images/book/large/792/l9788931465792.jpg',
          title: '한 권으로 배우는 Vue.js 3',
          author: '김동혁'
        },
        {
          color: 'purple darken-3',
          src: 'https://image.kyobobook.co.kr/images/book/large/760/l9791165920760.jpg',
          title: 'Vue.js 프로젝트 투입 일주일 전',
          author: '고승원'
        },
        {
          color: 'deep-purple darken-3',
          src: 'https://image.kyobobook.co.kr/images/book/large/545/l9791188621545.jpg',
          title: '고양이도 할 수 있는 Vue.js',
          author: 'mio'
        },
        {
          color: 'indigo darken-3',
          src: 'https://image.kyobobook.co.kr/images/book/large/897/l9791161750897.jpg',
          title: 'Vue.js 2 Cookbook',
          author: '안드레아 파살리아'
        },
        {
          color: 'blue darken-3',
          src: 'https://image.kyobobook.co.kr/images/book/large/197/l9791186710197.jpg',
          title: '빠르게 배워서 바르게 적용하는 Vue.js 퀵 스타트',
          author: '원형섭'
        },
        {
          color: 'light-blue darken-3',
          src: 'https://image.kyobobook.co.kr/images/book/large/578/l9788997924578.jpg',
          title: '백견불여일타 Vue.js 입문',
          author: 'Yoshinao Mori'
        },
        {
          color: 'cyan darken-3',
          src: 'https://image.kyobobook.co.kr/images/book/large/229/l9791160509229.jpg',
          title: 'Vue.js 코딩 공작소',
          author: '에릭 한쳇'
        },
        {
          color: 'teal darken-3',
          src: 'https://image.kyobobook.co.kr/images/book/large/397/l9791190014397.jpg',
          title: '커피 한 잔 마시며 끝내는 Vue.JS',
          author: '김영훈, 문동욱'
        },
        {
          color: 'green darken-3',
          src: 'https://image.kyobobook.co.kr/images/book/large/546/l9791161753546.jpg',
          title: '예제로 배우는 Vue.js',
          author: '원철연'
        },
        {
          color: 'light-green darken-3',
          src: 'https://image.kyobobook.co.kr/images/book/large/618/l9791162240618.jpg',
          title: 'Vue.js 첫걸음',
          author: '이지호'
        },
        {
          color: 'lime darken-3',
          src: 'https://image.kyobobook.co.kr/images/book/large/443/l9791186697443.jpg',
          title: 'Vue.js 이 정도는 알아야지',
          author: '김지환, 이선협'
        },
        {
          color: 'yellow darken-3',
          src: 'https://image.kyobobook.co.kr/images/book/large/754/l9791158390754.jpg',
          title: '쉽고 빠르게 배우는 Vue.js 2 프로그래밍',
          author: '알렉스 키리아키디스'
        },
        {
          color: 'amber darken-3',
          src: 'https://image.kyobobook.co.kr/images/book/large/876/l9791165920876.jpg',
          title: '실시간 모니터링 시스템을 만들며 정복하는 MEVN',
          author: '주홍철'
        },
        {
          color: 'orange darken-3',
          src: 'https://image.kyobobook.co.kr/images/book/large/934/l9788956747934.jpg',
          title: '프론트엔드 개발 첫걸음',
          author: 'Hara Kazuhiro'
        },
        {
          color: 'deep-orange darken-3',
          src: 'https://image.kyobobook.co.kr/images/book/large/212/l9791163032212.jpg',
          title: 'Do it! HTML+CSS+자바스크립트 웹 표준의 정석',
          author: '고경희'
        },
        {
          color: 'brown darken-3',
          src: 'https://image.kyobobook.co.kr/images/book/large/671/l9791162243671.jpg',
          title: '혼자 공부하는 자바스크립트',
          author: '윤인성'
        },
        {
          color: 'blue-grey darken-3',
          src: 'http://image.kyobobook.co.kr/images/book/large/274/l9791158393274.jpg',
          title: '생활코딩! HTML+CSS+자바스크립트',
          author: '이고잉'
        },
        {
          color: 'grey darken-3',
          src: 'https://image.kyobobook.co.kr/images/book/large/080/l9791163033080.jpg',
          title: 'Do it! 자바스크립트 입문',
          author: '고경희'
        }
      ]
    }
  },
  methods: {
    openBookDialog (index) {
      this.bookIndex = index
      this.bookDialog = true
    },
    closeBookDialog () {
      this.bookDialog = false
    }
  }
}
</script>

<style>

</style>
