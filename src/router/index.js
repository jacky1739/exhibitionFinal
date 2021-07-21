import { createRouter, createWebHashHistory } from 'vue-router'
// import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Front/Dashboard.vue'),
    children: [
      {
        path: '',
        component: () => import('@/views/Front/Index.vue')
      }
    ]
  },
  {
    path: '/product/:id',
    name: 'product',
    component: () => import('@/views/Front/Product.vue')
  },
  {
    path: '/shopcart',
    component: () => import('@/views/Front/ShopCart.vue')
  },
  {
    path: '/order',
    component: () => import('@/views/Front/Order.vue')
  },
  {
    path: '/checkout/:orderId',
    component: () => import('@/views/Front/Checkout.vue')
  },
  {
    path: '/login',
    component: () => import('@/views/Admin/Login.vue')
  },
  {
    path: '/admin',
    component: () => import('@/views/Admin/Admin.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/views/Front/NotFound.vue')
  },
  {
    path: '/producttest',
    name: 'producttest',
    component: () => import('@/views/Front/ProductTest.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
