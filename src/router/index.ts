import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/view/TheMainApp.vue')
    },
    {
      path: '/todo',
      name: 'ToDo',
      component: () => import('@/view/TheToDoList.vue')
    },
  ]
})

export default router
