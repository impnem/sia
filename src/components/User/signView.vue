<template>
  <v-list dense>
    <v-list-item height="48">
      <v-avatar
        size="32"
      >
        <v-progress-circular v-if="loading" indeterminate></v-progress-circular>
        <v-icon v-else-if="login === null" center>mdi-account</v-icon>
        <v-img v-else :src="login.photoURL"></v-img>
      </v-avatar>
      <v-list-item-content
        class="ml-3"
      >
        <v-list-item-title>{{ login == null ? '' : login.displayName }}</v-list-item-title>
        <v-list-item-subtitle>{{ login == null ? '로그인해주세요.' : '로그인됨' }}</v-list-item-subtitle>
      </v-list-item-content>
      <v-list-item-action>
        <v-btn
          v-if="!login"
          color="red"
          @click="signInWithGoogle"
        >
          <v-icon left>mdi-google</v-icon>
          Login
        </v-btn>
        <v-btn
          v-else-if="login"
          icon
          large
          @click="signOut"
        >
          <v-icon class="pl-1" center>mdi-logout</v-icon>
        </v-btn>
      </v-list-item-action>
    </v-list-item>
  </v-list>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  data () {
    return {
      loading: false
    }
  },
  methods: {
    ...mapMutations([
      'setFireUser'
    ]),
    async signInWithGoogle () { // 로그인
      const provider = new this.$firebaseAuth.GoogleAuthProvider()
      const fbAuth = this.$firebaseAuth

      fbAuth.getAuth().languageCode = 'ko' // 언어는 한국어

      this.loading = true
      try {
        const snapshot = await fbAuth.signInWithPopup(fbAuth.getAuth(), provider)
        this.setFireUser(snapshot.user)
      } finally {
        this.loading = false
      }
    },
    signOut () { // 로그아웃
      const fbAuth = this.$firebaseAuth
      setTimeout(function () { // 0.5초 딜레이
        fbAuth.signOut(fbAuth.getAuth())
      }, 500)
    }
  },
  computed: {
    ...mapState({ // 로그인 정보
      login: state => state.fireUser
    })
  }
}
</script>

<style>

</style>
