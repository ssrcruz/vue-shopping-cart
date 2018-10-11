import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

new Vuex.Store({
  state: { // = data available to all components
    products: []
  },

  getters: { // = computed properties
    productsCount () {

    }
  },

  actions: { // make the call to the database
    fetchProducts () {

    }
  },

  mutations: { // sets and updates the state
    setProducts () {
      // update products
    }
  }
})
