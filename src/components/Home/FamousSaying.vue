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
        <v-card-text class="my-4 text-center text-h6 font-weight-bold custom--text">
          <div>
            {{ fsOne[fsIndex].fSaying }}
            <br/>
            <br/>
            - {{ fsOne[fsIndex].author }} -
          </div>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col>
      <v-btn
        class="mb-11"
        absolute
        bottom
        right
        fab
        @click="addModDialog=true"
      >
      <v-icon>mdi-plus</v-icon>
      </v-btn>
    </v-col>
    <!-- 명언 추가 dialog -->
    <v-dialog v-model="addModDialog" max-width="400">
      <v-card>
        <v-card-title>
          명언 추가
          <v-spacer></v-spacer>
          <v-btn @click="addModFs" icon color="success"><v-icon>mdi-content-save</v-icon></v-btn>
          <v-btn @click="addModDialog=false" icon><v-icon>mdi-close</v-icon></v-btn>
        </v-card-title>
        <v-card-text>
          <v-row psadles>
            <v-col cols="12">
              <v-text-field
                v-model="fsForm.author"
                label="명언"
                outlined
                clearable
                required
                hide-details
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                v-model="fsForm.fSaying"
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
  </v-row>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  data () {
    return {
      addModDialog: false,
      dialogSubItem: false,
      selectedItemIndex: 0, // 메인 아이템 제어용 변수
      selectedSubItemIndex: 0, // 서브 아이템 제어용 변수
      fsForm: {
        author: '',
        fSaying: ''
      }
    }
  },
  methods: {
    async addModFs () { // 명언 추가 & 수정
      if (this.selectedItemIndex < 0) {
        this.items.push(this.formItem) // 현재 작성한 내용을 추가
      } else {
        this.items[this.selectedItemIndex].icon = this.formItem.icon // 현재 아이콘 가져오기
        this.items[this.selectedItemIndex].title = this.formItem.title // 현재 제목 가져오기
      }
      this.save()
    }
  },
  computed: {
    ...mapState({
      fsOne: state => state.local.data.fs
    }),
    ...mapGetters(['fsIndex'])
  }
}
</script>

<style>
</style>
