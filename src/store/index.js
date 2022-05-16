import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({ // Vuex : 중앙통제관리저장소
  state: { // data의 기능을 함
    site: {
      title: 'Home',
      footer: 'Copyright 2022. impnem. All RIGHTS RESERVED',
      menu: [
        {
          title: 'Home',
          icon: 'mdi-home',
          to: '/',
          data: {
            text: [
              '명언1',
              '명언2',
              '명언3'
            ]
          }
        },
        {
          title: 'Daily Study',
          icon: 'mdi-book-open-page-variant',
          to: '/dailyStudy',
          data: {
            date: {
              M01_D01: {
                subject: '실패를 받아들이는',
                link: 'https://string.tistory.com/88'
              },
              M01_D02: {
                subject: '성공를 받아들이는',
                link: 'https://string.tistory.com/87'
              }
            }
          }
        }
      ]
    }
  },
  getters: { // computed의 기능을 함 - computed와 다른 점은 함수에게 어떤 것을 쓸 것인지 알려줘야 한다.
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
