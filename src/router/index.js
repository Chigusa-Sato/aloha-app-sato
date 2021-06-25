import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Cart from '../views/Cart.vue'
import OrderLog from '../views/OrderLog.vue'
import OrderComp from '../views/Ordercomp.vue'
import ItemDetail from '../views/ItemDetail.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/:itemid?/itemdetail',
    name: 'ItemDetail',
    component: ItemDetail,
    props:true
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/orderlog',
    name: 'OrderLog',
    component: OrderLog
  },
  {
    path: '/ordercomp',
    name: 'OrderComp',
    component: OrderComp
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
