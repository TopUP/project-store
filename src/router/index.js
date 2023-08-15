import { createRouter, createWebHistory } from 'vue-router'

import Catalog from "../components/catalog.vue";
import Cart from "../components/cart.vue";

const routes = [
  {
    path: '/',
    name: 'catalog',
    component: Catalog
  },
  {
    path: '/cart',
    name: 'cart',
    component: Cart,
    props: true
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
