<template>
  <div class='catalog-wrapper'>
    <h3>Catalog (<i class="small material-icons">local_grocery_store</i>: {{ CART.length }})</h3>
    <div class="row">
      <CatalogItem
          v-for='item in ITEMS'
          :key='item.article'
          :item='item'
          @addToCart='addToCart'
      />
    </div>

  </div>
</template>

<script>
import CatalogItem from './catalog-item.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'catalog',
  components: { CatalogItem },
  props: {
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters(['ITEMS', 'CART']),
  },
  methods: {
    ...mapActions(['GET_ITEMS_FROM_API', 'ADD_TO_CART']),

    addToCart (itemData) {
      this.ADD_TO_CART(itemData);
    }
  },
  mounted() {
    this.GET_ITEMS_FROM_API()
  }
}
</script>

<style scoped>

</style>
