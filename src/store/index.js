import Vuex from 'vuex'
import Vue from 'vue'

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

  actions: { // make the call to the database
    fetchProducts () {

    }
  },

  mutations: { // sets and updates the state
    setProducts (state, products) {
      // update products
      state.products = products
    }
  }
})
