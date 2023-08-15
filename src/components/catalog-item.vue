<template>
  <div class="catalog-item-wrapper col s8 m4">
    <h2 class="header">{{ item.name }} - ${{ item.price }}</h2>
    <div class="card horizontal">
      <div class="card-image">
        <img :src="require('../assets/images/' + item.image)" :alt="item.name">
      </div>
      <div class="card-stacked">
        <div class="card-content">
          <p>{{ item.about }}</p>
        </div>
        <div class="card-action">
          <a class="btn-floating halfway-fab waves-effect waves-light red" @click.prevent="addToCart"><i class="material-icons">add</i></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'catalog-item',
  components: {},
  props: {
    item: {
      type: Object,
      default () { return {} }
    }
  },
  data () {
    return {}
  },
  methods: {
    addToCart () {
      return this.$emit('addToCart', this.item)
    }
  }
}
</script>

<style scoped>

</style>
