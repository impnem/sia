import Vue from 'vue'
import store from '../store'
import * as firebase from 'firebase/app'
import * as firebaseAuth from 'firebase/auth'
import * as firebaseDB from 'firebase/database'
import firebaseConfig from '../../firebaseConfig'

firebase.initializeApp(firebaseConfig)

const auth = firebaseAuth.getAuth()
firebaseAuth.onAuthStateChanged(auth, (fu) => store.commit('setFireUser', fu))

Vue.prototype.$firebase = firebase
Vue.prototype.$firebaseAuth = firebaseAuth
Vue.prototype.$firebaseDB = firebaseDB
