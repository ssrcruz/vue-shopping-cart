<template>
  <div>
    <h1>Product List</h1>
    <img
      v-if="loading"
      src="https://i.imgur.com/JfPpwOA.gif"
    >
    <ul v-else>
      <li v-for="product in products">
        {{product.title}} - {{product.price | currency}} - {{product.inventory}}
        <button
          :disabled="!productIsInStock(product)"
          @click="addProductToCart(product)"
        >Add to cart</button>
      </li>
    </ul>
  </div>
</template>

<script>
  import { mapState, mapGetters, mapActions } from 'vuex' // mapState maps component methods to store dispatch calls

  export default {
    data () {
      return {
        loading: false,
        productIndex: 1
      }
    },

    computed: {
      ...mapState({ // mapState is useful to create new objects based on existing ones
        products: state => state.products
      }),

      ...mapGetters({
        productIsInStock: 'productIsInStock'
      })
    },

    methods: {
      ...mapActions({
        fetchProducts: 'fetchProducts',
        addProductToCart: 'addProductToCart'
      })
    },

    created () {
      this.loading = true
      this.fetchProducts()
        .then(() => this.loading = false)
    }
  }
</script>
