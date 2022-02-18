import { createRouter, createWebHistory } from 'vue-router'
import Map from '../views/Map.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Home.vue')

    },
    {
      path: "/map/:parada",
      name: "Map",
      component: Map
    }
  ]
})

export default router
