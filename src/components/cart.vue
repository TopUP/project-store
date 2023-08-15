<template>
  <div class="cart-wrapper">
    <h1><i class="small material-icons">local_grocery_store</i>: {{ CART.length }}</h1>
    <p v-if="!CART.length">Empty</p>
    <div class="row">
    <CartItem v-for="(cartItem, index) in CART"
              :key="cartItem.article"
              :cartItem="cartItem"
              @deleteFromCart="deleteFromCart(index)"
    />
    </div>
  </div>
</template>

<script>
import CartItem from './cart-item.vue';
import {mapActions, mapGetters} from 'vuex'

export default {
  name: 'cart',
  components: { CartItem },
  props: {
    cartData: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data () {
    return {}
  },
  computed: {
    ...mapGetters(['CART'])
  },
  methods: {
    ...mapActions(['DELETE_FROM_CART']),

    deleteFromCart: function (index) {
      this.DELETE_FROM_CART(index);
    }
  }
}
</script>

<style scoped>

</style>
