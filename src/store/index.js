import Vue from 'vue'
import Vuex from 'vuex'
import { getLocal, setLocal } from '@/utils/storage'

Vue.use(Vuex)
const userKeys = 'user-token'
export default new Vuex.Store({
  state: {
    user: getLocal(userKeys),
    currentCity: {
      label: '北京',
      pinyin: 'beijing',
      short: 'bj',
      value: 'AREA|88cff55c-aaa4-e2e0'
    }
  },
  getters: {},
  mutations: {
    // 修改token 并存储token
    setUser(state, user) {
      state.user = user
      setLocal(userKeys, user)
    },
    setCurrentCity(state, city) {
      state.currentCity = city
    }
  },
  actions: {},
  modules: {}
})
