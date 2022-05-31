<template>
  <v-row
    class="fill-height"
    align-content="center"
    justify="center"
  >
    <v-progress-circular
      v-if="loading"
      :size="50"
      id="loading"
      color="amber"
      indeterminate
    >
    </v-progress-circular>
    <v-col
      id="memo"
      class="d-none"
      cols="12"
    >
      <v-card
        class="mx-auto d-flex flex-column justify-center"
        height="350"
        max-width="350"
        color="memo"
      >
        <!-- 로그인 되었을 경우 명언 메모 -->
        <v-card-text
          v-if="login !== null"
          class="my-4 text-center text-h6 font-weight-bold custom--text"
        >
          <div>
            {{ fsList[fsIndex].fSaying }}
          <br/>
          <br/>
            - {{ fsList[fsIndex].author }} -
          </div>
        </v-card-text>
        <!-- 로그인 안되었을 경우 명언 메모 -->
        <v-card-text
          v-else
          class="my-4 text-center text-h6 font-weight-bold custom--text"
        >
          <div>
            {{ fsLocalList[fsIndexRand].fSaying }}
            <br/>
            <br/>
            - {{ fsLocalList[fsIndexRand].author }} -
          </div>
        </v-card-text>
      </v-card>
    </v-col>
    <!-- 명언 추가 & 목록 버튼 -->
    <v-col
      v-if="login"
    >
      <!-- 명언 100개일때 추가버튼 안보이게 -->
      <v-btn
        v-if="fsList.length < 101"
        class="mb-13 mr-15"
        absolute
        bottom
        right
        icon
        x-large
        outlined
        color="icon"
        @click="openAddModFsDialog(-1)"
      >
        <v-icon>mdi-plus</v-icon>
      </v-btn>
      <v-btn
        class="mb-13 mr-n1"
        absolute
        bottom
        right
        icon
        x-large
        outlined
        color="icon"
        @click="openFsListDialog"
      >
        <v-icon>mdi-format-list-bulleted-square</v-icon>
      </v-btn>
    </v-col>
    <!-- 명언 추가 & 수정 dialog -->
    <v-dialog
      v-model="addModFsDialog"
      max-width="400"
    >
      <v-card>
        <v-card-title>
          {{ addModFsTitle }}
          <v-spacer/>
          <v-btn
            icon
            color="success"
            @click="saveFs"
          >
            <v-icon>mdi-content-save</v-icon>
          </v-btn>
          <v-btn
            icon
            @click="closeAddModFsDialog"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <v-card-text>
          <v-form
            ref="form"
            lazy-validation
          >
            <v-row>
              <v-col cols="12">
                <v-text-field
                  v-model="fsForm.fSaying"
                  label="명언"
                  :rules="rules"
                  outlined
                  clearable
                  required
                  hide-details="auto"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  v-model="fsForm.author"
                  label="저자"
                  :rules="rules"
                  outlined
                  clearable
                  required
                  hide-details="auto"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>
    <!-- 명언 목록 dialog (로그인 사용자만 보임) -->
    <v-dialog
      v-model="fsListDialog"
      z-index="100"
      max-width="75%"
    >
      <v-card>
        <v-card-title>
          명언 목록
          <v-spacer/>
          <v-btn
            v-if="fsList.length < 101"
            class="mr-2"
            icon
            color="green lighten-1"
            title="추가하기"
            @click="openAddModFsDialog(-1)"
          >
            <v-icon>mdi-plus</v-icon>
          </v-btn>
          <v-btn
            class="mr-2"
            icon
            color="red lighten-1"
            title="모두 삭제하기"
            @click="openAskAgain(-1)"
          >
            <v-icon>mdi-collapse-all</v-icon>
          </v-btn>
          <v-btn
            icon
            title="창 닫기"
            @click="closeFsListDialog"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <v-divider class="mx-4"></v-divider>
        <template
          v-for="(fsOne, i, j) in fsList"
        >
          <v-list-item
            v-if="i > 0"
            :key="i"
            two-line
          >
            <v-list-item-content>
              <v-list-item-content>
                {{ fsOne.fSaying }}
              </v-list-item-content>
              <v-list-item-subtitle
                class="mt-1"
              >
                {{ fsOne.author }}
              </v-list-item-subtitle>
            </v-list-item-content>
            <v-card-actions>
              <v-btn
                icon
                title="수정하기"
                @click="openAddModFsDialog(i)"
              >
                <v-icon>mdi-pencil</v-icon>
              </v-btn>
              <v-btn
                icon
                title="삭제하기"
                @click="openAskAgain(i)"
              >
                <v-icon>mdi-trash-can</v-icon>
              </v-btn>
            </v-card-actions>
          </v-list-item>
          <v-list-item
            v-else-if="fsList.length === 1"
            :key="j"
            two-line
          >
            <v-list-item-content>
              <v-list-item-content>
                {{ fsOne.fSaying }}
              </v-list-item-content>
              <v-list-item-subtitle
                class="mt-1"
              >
                {{ fsOne.author }}
              </v-list-item-subtitle>
            </v-list-item-content>
            <v-card-actions>
              <!-- <v-btn
                icon
                title="수정하기"
                @click="openAddModFsDialog(i)"
              >
                <v-icon>mdi-pencil</v-icon>
              </v-btn>
              <v-btn
                icon
                title="삭제하기"
                @click="openAskAgain(i)"
              >
                <v-icon>mdi-trash-can</v-icon>
              </v-btn> -->
            </v-card-actions>
          </v-list-item>
        </template>
      </v-card>
    </v-dialog>
    <!-- 되묻기 dialog -->
    <v-dialog
      v-model="askAgain"
      z-index="101"
      max-width="350px"
    >
      <v-card height="155px">
        <v-card-title
          class="text-h6"
        >
          명언 {{ delFsTitle }}
          <v-btn
            icon
            absolute
            right
            @click="closeAskAgain"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <v-card-text
          class="text-body-1"

        >
          정말로 {{ delFsTitle }}하시겠습니까?
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            text
            color="red lighten-1 accent-4"
            depressed
            @click="deleteFs"
          >
            Yes
          </v-btn>
          <v-btn
            text
            color="grey lighten-1 accent-4"
            depressed
            @click="askAgain=false"
          >
            No
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex'

export default {
  data () {
    return {
      fsList: [{ // firebase 명언 리스트
        author: '명언 없음',
        fSaying: '명언을 입력해주세요.'
      }],
      fsList2: [], // 임시 명언 리스트
      fsIndex: 0, // firebase 명언 랜덤 인덱스
      fsForm: {
        author: '',
        fSaying: ''
      },
      fsListDialog: false, // 명언 목록 dialog 여닫기
      addModFsDialog: false, // 명언 추가 & 수정 dialog 여닫기
      askAgain: false, // 명언 삭제시 되묻기 dialog 여닫기
      addModFsTitle: null, // 명언 추가 & 수정 dialog의 title
      delFsTitle: null, // 명언 추가 & 수정 dialog의 title
      selectedFsIndex: 0, // 선택된 명언의 인덱스
      fsNullMemory: true,
      loading: true, // 로딩
      rules: [
        value => !!value || '최소 1자이상 입력하여야 합니다!'
      ]
    }
  },
  mounted () {
    this.memoDisplay()
    this.subscribeInit()
  },
  beforeUpdate () {
    this.updateFs()
  },
  methods: {
    ...mapMutations([
      'addFamousSaying',
      'deleteFamousSaying'
    ]),
    async memoDisplay () { // 메모 보이기 & 로딩 딜레이
      const memo = document.getElementById('memo')
      if (memo.classList[0] === 'd-none') {
        setTimeout(function () { // 1.5초 딜레이
          memo.classList.remove('d-none')
        }, 1800)
      }
    },
    async subscribeInit () {
      if (this.login !== null) { // 로그인 되었을 경우 사용자의 firebase DB에 명언이 없다면 넣어주기
        const onValue = this.$firebaseDB.onValue
        const ref = this.$firebaseDB.ref
        const db = this.$firebaseDB.getDatabase()
        const userId = this.login.uid
        onValue(ref(db, 'server/users/' + userId), (snapshot) => {
          if (snapshot.val() === null) {
            this.$firebaseDB.set(ref(db, 'server/users/' + userId), {
              fs: this.fsLocalList
            })
          } else {
            this.updateFs()
          }
        })
      }
    },
    async updateFs () {
      const onValue = this.$firebaseDB.onValue
      const ref = this.$firebaseDB.ref
      const db = this.$firebaseDB.getDatabase()
      const userId = this.login.uid
      onValue(ref(db, 'server/users/' + userId), (snapshot) => {
        if (snapshot.val().fs.length > 1) { // 명언이 1개라도 남아있을 경우
          console.log('leng' + snapshot.val().fs.length)
          this.fsList = snapshot.val().fs
          this.fsIndex = Math.floor(Math.random() * (Object.keys(this.fsList).length - 1)) + 1
        } else { // 명언이 모두 삭제되었을 경우
          this.fsList = [
            {
              author: '명언 없음',
              fSaying: '명언을 입력해주세요.'
            }
          ]
          this.fsIndex = 0
        }
      })
    },
    async openAddModFsDialog (index) { // 명언 추가 & 수정 dialog 열기
      this.selectedFsIndex = index // 클릭한 명언에 대한 index 기억하기
      if (index < 0) { // 새로 작성시 비워두기
        this.fsForm.fSaying = ''
        this.fsForm.author = ''
        this.addModFsTitle = '명언 추가'
      } else { // if : 비었을 경우
        if (index === 0 && this.fsList[index].fSaying === '명언을 입력해주세요.' && this.fsList[index].author === '명언 없음') {
          this.fsForm.fSaying = ''
          this.fsForm.author = ''
          this.addModFsTitle = '명언 추가'
        } else {
          this.fsForm.fSaying = this.fsList[index].fSaying // 현재 명언 가져오기
          this.fsForm.author = this.fsList[index].author // 현재 저자 가져오기
          this.addModFsTitle = '명언 수정'
        }
      }
      this.addModFsDialog = true
    },
    async closeAddModFsDialog () { // 명언 리스트 dialog 닫기 이벤트
      this.selectedFsIndex = 0 // 창 닫을 때 인덱스 초기화
      this.addModFsDialog = false
    },
    async openFsListDialog () { // 명언 리스트 dialog 닫기 이벤트
      this.fsListDialog = true
    },
    async closeFsListDialog () { // 명언 리스트 dialog 닫기 이벤트
      this.selectedFsIndex = 0 // 창 닫을 때 인덱스 초기화
      this.fsListDialog = false
    },
    async openAskAgain (index) { // 삭제 되묻기 dialog 열기 이벤트
      this.selectedFsIndex = index // 삭제할 명언 인덱스 저장
      if (this.selectedFsIndex < 0) {
        this.delFsTitle = '모두 삭제'
      } else {
        this.delFsTitle = '삭제'
      }
      this.askAgain = true
    },
    async closeAskAgain () { // 삭제 되묻기 dialog 닫기 이벤트
      this.selectedFsIndex = 0 // 창 닫을 때 인덱스 초기화
      this.askAgain = false
    },
    async saveFs () { // DB에 명언 추가 & 수정하기
      if (this.fsForm.fSaying === '' && this.fsForm.author === '') {
        alert('명언 혹은 저자에 최소 1자이상 입력하여야 합니다!')
      } else {
        const index = this.selectedFsIndex
        if (index <= 0) { // 새로 작성한 명언 추가
          this.fsList.push(this.fsForm)
        // } else if (index === 0) { // index가 0일 경우
        //   this.fsList[1].fSaying = this.fsForm.fSaying
        //   this.fsList[1].author = this.fsForm.author
        } else { // index가 0보다 클 때
          this.fsList[index].fSaying = this.fsForm.fSaying // 현재 명언 덮어쓰기
          this.fsList[index].author = this.fsForm.author // 현재 저자 덮어쓰기
        }
      }
      this.saveFsList()
    },
    async saveFsList () { // 기존 명언 덮어쓰기
      try {
        const ref = this.$firebaseDB.ref
        const db = this.$firebaseDB.getDatabase()
        const userId = this.login.uid
        await this.$firebaseDB.set(ref(db, 'server/users/' + userId), {
          fs: this.fsList
        })
      } finally {
        this.addModFsDialog = false
      }
    },
    async deleteFs () { // 명언 삭제 이벤트
      try {
        // const onValue = this.$firebaseDB.onValue
        const remove = this.$firebaseDB.remove
        const ref = this.$firebaseDB.ref
        const db = this.$firebaseDB.getDatabase()
        const userId = this.login.uid
        console.log('del i : ' + this.selectedFsIndex)
        if (this.selectedFsIndex < 0) { // 모두 삭제
          remove(ref(db, 'server/users/' + userId + '/fs/')) // 모두 삭제
          await this.$firebaseDB.set(ref(db, 'server/users/' + userId), { // 기본 세팅
            fs: [
              {
                author: '명언 없음',
                fSaying: '명언을 입력해주세요.'
              }
            ]
          })
        } else { // 하나만 삭제
          // await remove(ref(db, 'server/users/' + userId + '/fs/' + this.selectedFsIndex))
          delete this.fsList[this.selectedFsIndex]
          for (let i = 0; i < this.fsList.length; i++) { // 명언 인덱스 재배열
            if (i !== this.selectedFsIndex) {
              this.fsList2.push(this.fsList[i])
            }
          }
          this.fsList = this.fsList2
          this.fsList2 = [] // 임시 명언 리스트 비우기
          await this.$firebaseDB.set(ref(db, 'server/users/' + userId), {
            fs: this.fsList
          })
        }
      } finally {
        this.askAgain = false
      }
    }
  },
  computed: {
    ...mapState({
      fsLocalList: state => state.local.data.fs,
      login: state => state.fireUser
    }),
    ...mapGetters(['fsIndexRand'])
  },
  watch: {
    addModFsDialog (visible) { // 명언 추가 & 수정 form reset
      if (visible) {
        this.$nextTick(() => {
          this.$refs.form.resetValidation()
        })
      }
    }
    // $route (to) { // 화면 라우팅 될 때 명언 목록 다시 불러오기
    //   console.log(to)
    //   if (to.path === '/') {
    //     console.log('here')
    //     this.subscribeInit()
    //   }
    // }
  }
}
</script>

<style scope>
  /* 스크롤바 숨기기 */
  /* .v-card {
    overflow-y: hidden !important;
  } */

  /* loading 위치 고정 */
  #loading {
    position: absolute !important;
    bottom: 50% !important;
  }
</style>
