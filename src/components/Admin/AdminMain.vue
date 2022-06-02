<template>
  <div>
    <span>로그인 해야만 보이는 페이지 입니다.</span><br/>
    <!-- <v-btn @click="save"><v-icon>mdi-pencil</v-icon>현재 server db 올리기</v-btn> -->
    <!-- <v-btn @click="checkfs"><v-icon>mdi-pencil</v-icon>현재 fs db 보기</v-btn> -->
    <!-- <v-btn @click="checkLogin"><v-icon>mdi-pencil</v-icon>현재 login 정보 보기</v-btn> -->
    <!-- <v-btn @click="check"><v-icon>mdi-pencil</v-icon>사용자 첫 명언넣기</v-btn> -->
    <!-- <v-btn @click="saveDs"><v-icon>mdi-pencil</v-icon>현재 등록된 하루공부 넣기</v-btn> -->
  </div>
</template>

<script>
// import { onValue } from '@firebase/database'
import { mapState } from 'vuex'

export default {
  data () {
    return {

    }
  },
  methods: {
    async save () {
      try {
        const db = this.$firebaseDB.getDatabase()
        await this.$firebaseDB.set(this.$firebaseDB.ref(db, 'server/'), {
          site: this.server.site,
          users: this.server.users,
          data: this.server.data
        })
      } finally { // catch 삭제함
        this.dialog = false
      }
    },
    async checkfs () {
      const onValue = this.$firebaseDB.onValue
      const ref = this.$firebaseDB.ref
      const db = this.$firebaseDB.getDatabase()
      const userId = this.login.uid
      onValue(ref(db, 'server/users/' + userId + '/fs'), (snapshot) => {
        console.log(snapshot.val())
      })
    },
    async checkLogin () {
      console.log(this.login)
      console.log(this.login.email)
    },
    check () {
      // 첫 로그인시 명언 저장하기
      if (this.login !== null) {
        const onValue = this.$firebaseDB.onValue
        const ref = this.$firebaseDB.ref
        const db = this.$firebaseDB.getDatabase()
        const userId = this.login.uid
        return onValue(ref(db, 'server/users/' + userId), (snapshot) => {
          if (snapshot.val() === null) {
            this.$firebaseDB.set(ref(db, 'server/users/' + userId), {
              fs: this.fs
            })
          }
        })
      }
    },
    async saveDs () {
      const ref = this.$firebaseDB.ref
      const db = this.$firebaseDB.getDatabase()
      await this.$firebaseDB.set(ref(db, 'server/data/'), {
        ds: this.server.data.ds
      })
    }
  },
  computed: {
    ...mapState({
      server: state => state.server,
      login: state => state.fireUser,
      fs: state => state.local.data.fs
    })
  }
}
</script>

<style>

</style>
