import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/Home',
    component: () => import('@/views/HomeIndex'),
    children: [
      {
        path: '/home',
        component: () => import('@/views/Home')
      },
      {
        name: '房屋列表',
        path: '/home/list',
        component: () => import('@/views/List')
      },
      {
        name: '资讯',
        path: '/home/news',
        component: () => import('@/views/News')
      },
      {
        path: '/home/profile',
        component: () => import('@/views/Profile')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/Login')
  },
  {
    path: '/register',
    component: () => import('@/views/Register')
  },
  {
    path: '/map',
    component: () => import('@/views/Map')
  },
  {
    path: '/city',
    component: () => import('@/views/City')
  },
  {
    path: '/detail',
    component: () => import('@/views/Detail')
  },
  {
    path: '/favorate',
    component: () => import('@/views/Favorate')
  },
  {
    path: '/rent',
    component: () => import('@/views/Rent')
  },
  {
    path: '/ceshi',
    component: () => import('@/views/ceshi')
  }
]

const router = new VueRouter({
  routes
})

export default router
