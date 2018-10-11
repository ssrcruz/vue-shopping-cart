import Vuex from 'vuex'
import Vue from 'vue'
import shop from '@/api/shop'
import store from '@/store/index'
Vue.use(Vuex)

export default new Vuex.Store({
  state: { // = data available to all components
    products: []
  },

  getters: { // = computed properties
    availableProducts (state, getters) {
      return state.products.filter(product => product.inventory > 0)
    }
  },

  actions: { // = methods that make calls to the database
    fetchProducts ({commit}) {
      return new Promise((resolve, reject) => {
        shop.getProducts(products => {
          commit('setProducts', products)
          resolve()
        })
      })
    }
  },

  mutations: { // sets and updates the state
    setProducts (state, products) {
      // update products
      state.products = products
    }
  }
})
