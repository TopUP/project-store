<template>
  <div class="main-wrapper">
    <ul>
      <li><router-link to="/">Catalog</router-link></li>
      <li><router-link :to="{name: 'cart', props: {cartData: CART}}">Cart</router-link></li>
    </ul>

    <router-view></router-view>

<!--    <Cart v-if="CART.length"-->
<!--          :cartData="CART"-->
<!--    />-->
<!--    <Catalog />-->
  </div>
</template>

<script>
// import Catalog from './catalog.vue'
// import Cart from './cart.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'main-wrapper',
  // components: { Catalog, Cart },
  props: { },

  data () {
    return {

    }
  },

  computed: {
    ...mapGetters(['CART'])
  }
}
</script>

<style>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
