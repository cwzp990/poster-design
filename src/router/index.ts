import { createRouter, createWebHistory, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import config from '@/config'
import hook from './hook'
import base from './base'

const routes: Array<RouteRecordRaw> = [...base]

const router = createRouter({
  history: createWebHistory(config.BASE_URL), // import.meta.env.BASE_URL
  // history: createWebHashHistory(),
  routes,
})

hook(router)

export default router
