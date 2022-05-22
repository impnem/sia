import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({ // Vuex : 중앙통제관리저장소
  state: { // data의 기능을 함
    local: {
      date: null
    },
    site: {
      title: 'Home',
      footer: 'Copyright 2022. impnem. All RIGHTS RESERVED',
      menu: [
        {
          title: 'Home',
          icon: 'mdi-home',
          to: '/'
        },
        {
          title: 'Daily Study',
          icon: 'mdi-lead-pencil',
          to: '/dailyStudy'
        },
        {
          title: 'Routine',
          icon: 'mdi-order-bool-descending-variant',
          to: '/routine'
        },
        {
          title: 'Polaris',
          icon: 'mdi-circle-slice-1',
          to: '/polaris'
        },
        {
          title: 'Book',
          icon: 'mdi-book-open-page-variant',
          to: '/book'
        },
        {
          title: 'Workout',
          icon: 'mdi-dumbbell',
          to: '/Workout'
        },
        {
          title: 'Financial Ledger',
          icon: 'mdi-calculator-variant-outline',
          to: '/financialLedger'
        },
        {
          title: 'About',
          icon: 'mdi-information',
          to: '/about'
        }
      ]
    },
    user: {
      user1: {
        userId: 'user1',
        userPw: 'abcd1',
        userNickname: 'user11'
      },
      user2: {
        userId: 'user2',
        userPw: 'abcd2',
        userNickname: 'user22'
      }
    },
    data: {
      fs: [
        {
          author: '세종대왕', fSaying: '믿음'
        },
        {
          author: '이순신', fSaying: '경쟁'
        },
        {
          author: '유관순', fSaying: '정의'
        }
      ],
      ds: {
        ds0516: {
          subject: '주가 폭락16',
          src: 'kwtU0TjhyoI'
        },
        ds0517: {
          subject: '주가 폭락17',
          src: 'kwtU0TjhyoI'
        },
        ds0518: {
          subject: '주가 폭락18',
          src: 'kwtU0TjhyoI'
        },
        ds0519: {
          subject: '주가 폭락19',
          src: 'kwtU0TjhyoI'
        },
        ds0520: {
          subject: '주가 폭락20',
          src: 'kwtU0TjhyoI'
        }
      }
    }
  },
  getters: { // computed의 기능을 함 - computed와 다른 점은 함수에게 어떤 것을 쓸 것인지 알려줘야 한다.
    initDate: (state) => { // 초기 날짜 오늘로 변경
      const today = new Date()

      const year = today.getFullYear()
      const month = ('0' + (today.getMonth() + 1)).slice(-2)
      const day = ('0' + today.getDate()).slice(-2)

      const dateString = year + '-' + month + '-' + day
      state.local.date = dateString

      return dateString
    },
    fsIndex: state => { // 명언 인덱스 랜덤으로 가져오기
      const fsIndex = Math.floor(Math.random() * (Object.keys(state.data.fs).length))
      return fsIndex
    },
    dsDate: state => { // 날짜에 해당하는 dsmmss 가져오기
      const selectedDate = state.local.date
      const modifyDate = selectedDate.replaceAll('-', '').substr(4, 7)
      const dsmmdd = 'ds' + modifyDate

      return dsmmdd
    },
    menuCount: state => { // arrow function
      return state.site.menu.length
    },
    countOfHome: state => {
      let count = 0
      state.site.menu.forEach(menu => {
        if (menu.title === 'Home') count++
      })
      return count
    },
    percentOfHome: (state, getters) => {
      return Math.round(getters.countOfHome / getters.menuCount * 100)
    }
  },
  mutations: { // 변화(변이), state를 변화, commit 사용, 통상적으로 payload:짐 사용, 모든 것은 동기로 작동, 비동기 로직은 actions에서 사용
    changeDate: (state, payload) => { // 날짜 변경시 작동
      state.local.date = payload
    },
    changeTitle: (state, payload) => { // 타이틀 변경시 작동
      state.site.title = payload
    },
    changeMenuTitleM: (state, payload) => {
      state.menu.push(payload)
    }
  },
  actions: { // mutations을 동작시키는 비즈니스 로직은 actions에 넣음, dispatch 사용
    // 예) 이메일 검사, 비밀번호 검사 후 -> Mu의 회원가입 로직
    // changeMenuTitle1: (context, payload) => {
    //   context.commit('changeMenuTitle')
    // },
    changeMenuTitleA: ({ commit }, payload) => {
      commit('changeMenuTitleM', payload)
    }
  },
  modules: {
  }
})
