import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'Home',
      path: '/',
      component: ()=> import('@/views/home.vue'),
    },
    {
      name: 'Distance',
      path: '/distance',
      component: ()=> import('@/views/distance.vue'),
    },
    {
      name: 'Menu',
      path: '/menu',
      component: ()=> import('@/views/menu.vue'),
    }, 
    {
      name: 'Volume',
      path: '/volume',
      component: ()=> import('@/views/volume.vue'),
    },
    {
      name: 'Mass',
      path: '/mass',
      component: ()=> import('@/views/mass.vue'),
    },
  ]
})

export default router
