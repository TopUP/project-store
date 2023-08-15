<template>
  <div class="cart-item-wrapper">
    <div class="catalog-item-wrapper col s8 m4">
      <h2 class="header">{{ cartItem.name }} - ${{ cartItem.price }}</h2>
      <div class="card horizontal">
        <div class="card-image">
          <img :src="require('../assets/images/' + cartItem.image)" :alt="cartItem.name">
        </div>
        <div class="card-stacked">
          <div class="card-content">
            <p>{{ cartItem.about }}</p>
          </div>
          <div class="card-action">
            <a class="btn-floating halfway-fab waves-effect waves-light red" @click.prevent="deleteFromCart"><i class="material-icons">clear</i></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'cart-item',
  components: {},
  props: {
    cartItem: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data () {
    return {}
  },
  methods: {
    deleteFromCart: function () {
      this.$emit('deleteFromCart')
    }
  }
}
</script>

<style scoped>

</style>
