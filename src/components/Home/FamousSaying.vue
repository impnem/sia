<template>
  <v-row
    class="fill-height"
    align-content="center"
    justify="center"
  >
    <v-col cols="12">
      <v-card
        class="mx-auto d-flex flex-column justify-center"
        height="350"
        max-width="350"
        color="memo"
      >
        <v-card-text
          v-if="login === null"
          class="my-4 text-center text-h6 font-weight-bold custom--text"
        >
          <div>
            {{ fsList[fsIndex].fSaying }}
            <br/>
            <br/>
            - {{ fsList[fsIndex].author }} -
          </div>
        </v-card-text>
        <v-card-text
          v-else
          class="my-4 text-center text-h6 font-weight-bold custom--text"
        >
          <div>
            {{ fsListDB[fsListDBIndex].fSaying }}
            <br/>
            <br/>
            - {{ fsListDB[fsListDBIndex].author }} -
          </div>
        </v-card-text>
      </v-card>
    </v-col>
    <!-- 명언 추가 & 목록 버튼 -->
    <v-col
      v-if="login"
    >
      <v-btn
        class="mb-11"
        absolute
        bottom
        right
        fab
        @click="openAddModFsDialog(-1)"
      >
        <v-icon>mdi-plus</v-icon>
      </v-btn>
      <v-btn
        class="mr-16 mb-11"
        absolute
        bottom
        right
        fab
        @click="fsListDialog = true"
      >
        <v-icon>mdi-format-list-bulleted-square</v-icon>
      </v-btn>
    </v-col>
    <!-- 명언 추가 dialog -->
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
            @click="addModFsDialog=false"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <v-card-text>
          <v-row>
            <v-col cols="12">
              <v-text-field
                v-model="fsForm.fSaying"
                label="명언"
                outlined
                clearable
                required
                hide-details
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                v-model="fsForm.author"
                label="저자"
                outlined
                clearable
                required
                hide-details
              ></v-text-field>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-dialog>
    <!-- 명언 목록 dialog -->
    <v-dialog
      v-model="fsListDialog"
      z-index="100"
      max-width="70%"
    >
      <v-card>
        <v-card-title>
          명언 목록
          <v-spacer/>
          <v-btn
            class="mr-2"
            icon
            color="red lighten-1"
            title="모두 삭제하기"
            @click="openAskAgain"
          >
            <v-icon>mdi-collapse-all</v-icon>
          </v-btn>
          <v-btn
            icon
            title="창 닫기"
            @click="fsListDialog=false"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <v-divider class="mx-4"></v-divider>
        <v-list-item
          v-for="(fsOne, i) in fsList"
          :key="i"
          two-line
        >
          <v-list-item-content>
            <v-list-item-text>
              {{ fsOne.fSaying }}
            </v-list-item-text>
            <v-list-item-subtitle
              class="mt-1"
            >{{ fsOne.author }}</v-list-item-subtitle>
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
              @click="deleteFs(i)"
            >
              <v-icon>mdi-trash-can</v-icon>
            </v-btn>
          </v-card-actions>
        </v-list-item>
      </v-card>
    </v-dialog>
    <!-- 되묻기 dialog -->
    <v-dialog
      v-model="askAgain"
      z-index="101"
      max-width="350px"
    >
      <v-card height="150px">
        <v-card-title
          class="text-subtitle-1"
        >
          모두 삭제하기
          <v-btn
            icon
            absolute
            right
            @click="askAgain=false"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <v-card-text
          class="text-body-1"

        >
          정말로 {{ }}하시겠습니까?
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            text
            color="red lighten-1 accent-4"
            depressed
            flat
          >
            Yes
          </v-btn>
          <v-btn
            text
            color="grey lighten-1 accent-4"
            depressed
            flat
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
      addModFsDialog: false,
      fsListDialog: false,
      askAgain: false,
      selectedFsIndex: 0,
      addModFsTitle: null,
      fsListDB: null,
      fsListDBIndex: null,
      fsForm: {
        author: '',
        fSaying: ''
      }
    }
  },
  created () {
    this.subscribe()
  },
  methods: {
    ...mapMutations([
      'addFamousSaying',
      'deleteFamousSaying'
    ]),
    subscribe () {
      if (this.login !== null) {
        const onValue = this.$firebaseDB.onValue
        const ref = this.$firebaseDB.ref
        const db = this.$firebaseDB.getDatabase()
        const userId = this.login.uid
        console.log('userId: ' + userId)
        onValue(ref(db, 'server/users/' + userId + '/fs/'), (snapshot) => {
          this.fsListDB = snapshot.val()
          this.fsListDBIndex = Math.floor(Math.random() * (Object.keys(this.fsListDB).length))
          console.log(this.fsListDB)
          console.log(this.fsListDB.length)
          console.log(this.fsListDBIndex)
        })
      }
    },
    async openAddModFsDialog (index) { // 명언 추가 & 수정 dialog 열기
      this.selectedFsIndex = index // 클릭한 명언에 대한 index 기억하기
      if (index < 0) { // 새로 작성시 비워두기
        this.fsForm.fSaying = ''
        this.fsForm.author = ''
        this.addModFsTitle = '명언 추가'
      } else {
        this.fsForm.fSaying = this.fsList[index].fSaying // 현재 명언 가져오기
        this.fsForm.author = this.fsList[index].author // 현재 저자 가져오기
        this.addModFsTitle = '명언 수정'
      }
      this.addModFsDialog = true
    },
    async saveFs () { // DB에 명언 추가 & 수정하기
      const index = this.selectedFsIndex
      if (index < 0) {
        this.addFamousSaying(this.fsForm) // 새로 작성한 명언 추가
      } else {
        this.fsList[index].fSaying = this.fsForm.fSaying // 현재 명언 덮어쓰기
        this.fsList[index].author = this.fsForm.author // 현재 저자 덮어쓰기
      }
      this.addModFsDialog = false
    },
    openAskAgain () {
      this.askAgain = true
    },
    async deleteFs (index) {
      this.deleteFamousSaying(index)
    },
    async deleteAllFs (index) {
      this.deleteFamousSaying(index)
    }
  },
  computed: {
    ...mapState({
      fsList: state => state.local.data.fs,
      login: state => state.fireUser
    }),
    ...mapGetters(['fsIndex'])
  }
}
</script>

<style scope>
  /* 스크롤바 숨기기 */
  /* .v-card {
    overflow-y: hidden !important;
  } */
</style>
