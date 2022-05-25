import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import DailyStudyView from '@/views/DailyStudyView.vue'
import RoutineView from '@/views/RoutineView.vue'
import PolarisView from '@/views/PolarisView.vue'
import BookView from '@/views/BookView.vue'
import WorkoutView from '@/views/WorkoutView.vue'
import FinancialLedgerView from '@/views/FinancialLedgerView.vue'
import AboutView from '@/views/AboutView.vue'
import AdminView from '@/views/AdminView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      title: 'Self-Improvement App'
    }
  },
  {
    path: '/dailyStudy',
    name: 'dailyStudy',
    component: DailyStudyView
  },
  {
    path: '/routine',
    name: 'routine',
    component: RoutineView
  },
  {
    path: '/polaris',
    name: 'polaris',
    component: PolarisView
  },
  {
    path: '/book',
    name: 'book',
    component: BookView
  },
  {
    path: '/workout',
    name: 'workout',
    component: WorkoutView
  },
  {
    path: '/financialLedger',
    name: 'financialLedger',
    component: FinancialLedgerView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/admin',
    name: 'admin',
    component: AdminView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
