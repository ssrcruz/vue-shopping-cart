import Vuex from 'vuex'
import Vue from 'vue'
import store from '@/store/index'
import cart from './modules/cart'
import products from './modules/products'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    cart,
    products
  },

  state: { // = data available to all components

  },

  getters: { // = computed properties

  },

  actions: { // = makes api calls

  },

  mutations: { // = sets and updates the state

  }
})
