import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({ // Vuex : 중앙통제관리저장소
  state: { // data의 기능을 함
    fireUser: null,
    local: {
      date: null,
      mode: {
        color: null
      },
      data: {
        fs: [
          {
            author: '명언 없음', fSaying: '명언을 입력해주세요.'
          },
          {
            author: '생텍쥐페리', fSaying: '사람은 오로지 가슴으로만 올바로 볼 수 있다. 본질적인 것은 눈에 보이지 않는다.'
          },
          {
            author: '이디스 워튼', fSaying: '빛을 퍼뜨릴 수 있는 두 가지 방법이 있다. 촛불이 되거나 또는 그것을 비추는 거울이 되는 것이다.'
          },
          {
            author: '카뮈', fSaying: '두려움 때문에 갖는 존경심만큼 비열한 것은 없다.'
          },
          {
            author: '러셀', fSaying: '당신이 잘 하는 일이라면 무엇이나 행복에 도움이 된다.'
          },
          {
            author: '에릭 프롬', fSaying: '스스로를 신뢰하는 사람만이 다른 사람들에게 성실할 수 있다.'
          },
          {
            author: 'J.레이놀즈', fSaying: '큰 재주를 가졌다면 근면은 그 재주를 더 낫게 해줄 것이며 보통의 능력밖에 없다면 근면은 부족함을 보충해 줄 것이다.'
          },
          {
            author: '가정집', fSaying: '부지런함에도 의와 이의 구분이 있다. 닭이 울 때부터 부지런하기로는 순임금이나 도적이나 한가지이기 때문이다.'
          },
          {
            author: '조지 오웰', fSaying: '과거를 지배하는 자가 마래를 지배하며 현재를 지배하는 자가 과거를 지배한다.'
          },
          {
            author: '괴테', fSaying: '노동은 세개의 큰 악, 즉, 지루함, 부도덕, 그리고 가난을 제거한다.'
          },
          {
            author: '버나드 쇼', fSaying: '지성을 소유하고 또 그렇다는 것을 아는 사람은 그렇지 못한 열 사람에게 언제나 승리한다.'
          },
          {
            author: '버나드 쇼', fSaying: '재물을 스스로 만들지 않는 사람에게는 쓸 권리가 없듯이 행복도 스스로 만들지 않는 사람에게는 누릴 권리가 없다.'
          },
          {
            author: '헨리 애덤스', fSaying: '힘 있을 때 친구는 친구가 아니다.'
          },
          {
            author: '헬렌 켈러', fSaying: '세상은 고통으로 가득하지만 한편 그것을 이겨내는 일로도 가득차 있다.'
          },
          {
            author: '소학', fSaying: '사람은 부지런하면 생각하고, 생각하면 착한 마음이 일어나는데, 놀면 음탕하고, 음탕하면 착함을 잊으며 착함을 잊으면 악한 마음이 생긴다.'
          },
          {
            author: '힐티', fSaying: '미래는 일하는 사람의 것이다. 권력과 명예도 일하는 사람에게 주어진다. 게으름뱅이의 손에 누가 권력이나 명예를 안겨줄까'
          },
          {
            author: '존 F. 케네디', fSaying: '배움이 없는 자유는 언제나 위험하며 자유가 없는 배움은 언제나 헛된 일이다.'
          },
          {
            author: '존 F. 케네디', fSaying: '당신이 자신은 2위로 만족한다고 일단 말하면, 당신의 인생은 그렇게 되기 마련이라는 것을 나는 깨달았다.'
          },
          {
            author: '공자', fSaying: '무례한 사람의 행위는 내 행실을 바로 잡게 해주는 스승이다.'
          },
          {
            author: '명심보감', fSaying: '군자가 예절이 없으면 역적이 되고, 소인이 예절이 없으면 도적이 된다.'
          },
          {
            author: 'J.버넌', fSaying: '쓰러진 자 망할까 두렵지 않고, 낮춘 자 거만할까 두렵지 않다.'
          },
          {
            author: '논어', fSaying: '예의는 남과 화목함을 으뜸으로 삼는다.'
          },
          {
            author: '에머슨', fSaying: '겸손한 자만이 다스릴 것이요, 애써 일하는 자만이 가질 것이다.'
          },
          {
            author: '공자', fSaying: '가난하면서 원망하지 않기는 어렵고, 부자이면서 교만하지 않기는 쉬운 일이다'
          },
          {
            author: 'T.풀러', fSaying: '산이 높을수록 골은 낮다.'
          },
          {
            author: 'O.메러디드', fSaying: '우선 겸손을 배우려 하지 않는 자는 아무것도 배우지 못한다.'
          },
          {
            author: 'B.프랭클린', fSaying: '백권의 책에 쓰인 말보다 한 가지 성실한 마음이 더 크게 사람을 움직인다.'
          },
          {
            author: 'E.리스', fSaying: '말도 아름다운 꽃처럼 그 색깔을 지니고 있다.'
          },
          {
            author: '베를리오즈', fSaying: '시간은 위대한 스승이기는 하지만 불행히도 자신의 모든 제자를 죽인다.'
          },
          {
            author: '생텍쥐페리', fSaying: '사랑은 두 사람이 마주 쳐다보는 것이 아니라 함께 같은 방향을 바라보는 것이다.'
          },
          {
            author: '스피노자', fSaying: '자신은 할 수 없다고 생각하고 있는 동안은 사실은 그것을 하기 싫다고 다짐하고 있는 것이다 그러므로 그것은 실행되지 않는 것이다.'
          },
          {
            author: '유대인 격언', fSaying: '가장 하기 힘든 일은 아무 일도 안하는 것이다.'
          }
        ]
      }
    },
    server: {
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
            to: '/workout'
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
          },
          {
            title: 'Administrator',
            icon: 'mdi-account-key',
            to: '/admin'
          }
        ]
      },
      users: {

      },
      data: {
        ds: {
          ds0601: {
            subject: '넘어질 것인가 넘어설 것인가',
            src: '2lDUBRp4HKw'
          },
          ds0602: {
            subject: '부정적 마인드에서 벗어나는 비결',
            src: 'mZFLQcmw4GM'
          },
          ds0603: {
            subject: '평생 가져야 할 단 하나의 습관',
            src: 'Fvb35ynxfE8'
          },
          ds0604: {
            subject: '인생을 바꾸는 인간관계를 만드는 3가지 방법',
            src: 'yOR6OUUhUSg'
          },
          ds0605: {
            subject: '진짜 실력을 갖춰라',
            src: '3FMF31h-JDI'
          }
        }
      }
    }
  },
  getters: { // computed의 기능을 함 - computed와 다른 점은 함수에게 어떤 것을 쓸 것인지 알려줘야 한다.
    initDate: state => { // 초기 날짜 오늘로 변경
      const today = new Date()

      const year = today.getFullYear()
      const month = ('0' + (today.getMonth() + 1)).slice(-2)
      const day = ('0' + today.getDate()).slice(-2)

      const dateString = year + '-' + month + '-' + day
      state.local.date = dateString

      return dateString
    },
    fsIndexRand: (state, payload) => { // 명언 인덱스 랜덤으로 가져오기 // 0 제외
      const fsIndex = Math.floor(Math.random() * (Object.keys(state.local.data.fs).length - 1)) + 1
      return fsIndex
    },
    dsDate: state => { // 날짜에 해당하는 dsmmss 가져오기
      const selectedDate = state.local.date
      const modifyDate = selectedDate.replaceAll('-', '').substr(4, 7)
      const dsmmdd = 'ds' + modifyDate
      // 임시
      // const dsmmdd = 'ds0516'
      return dsmmdd
    },
    menuCount: state => { // arrow function
      return state.server.site.menu.length
    },
    countOfHome: state => {
      let count = 0
      state.server.site.menu.forEach(menu => {
        if (menu.title === 'Home') count++
      })
      return count
    },
    percentOfHome: (state, getters) => {
      return Math.round(getters.countOfHome / getters.menuCount * 100)
    }
  },
  mutations: { // 변화(변이), state를 변화, commit 사용, 통상적으로 payload:짐 사용, 모든 것은 동기로 작동, 비동기 로직은 actions에서 사용
    setMode: (state, payload) => { // 라이트 & 다크 모드 현재값 입력
      state.local.mode.color = payload
    },
    changeMode: (state, payload) => { // 라이트 & 다크 모드 토글
      let color = null
      if (payload === 'light') {
        color = 'dark'
      } else if (payload === 'dark') {
        color = 'light'
      } else {
        color = 'light'
      }
      localStorage.setItem('mode', color)
      state.local.mode.color = color
    },
    changeDate: (state, payload) => { // 날짜 변경시 작동
      state.local.date = payload
    },
    changeTitle: (state, payload) => { // 타이틀 변경시 작동
      // if (payload.substr(0, 1) === '/') { // 라우팅된 주소로 들어올 때 이벤트
      //   for (let i = 0; i < state.site.menu.length; i++) {
      //     if (state.site.menu[i].to === payload) {
      //       state.site.title = state.site.menu[i].title
      //       break
      //     }
      //   }
      // } else { // 메뉴를 클릭할 때 이벤트 - 더 이상 사용되지 않음
      //   state.site.title = payload
      // }
      for (let i = 0; i < state.server.site.menu.length; i++) {
        if (state.server.site.menu[i].to === payload) {
          state.server.site.title = state.server.site.menu[i].title
          break
        }
      }
    },
    addFamousSaying: (state, payload) => { // 명언 추가하기
      state.local.data.fs.push(payload)
    },
    deleteFamousSaying: (state, payload) => { // 명언 삭제하기
      console.log('del')
      delete state.local.data.fs[payload]
    },
    setFireUser: (state, payload) => { // 로그인 정보
      state.fireUser = payload
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
