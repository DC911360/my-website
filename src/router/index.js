import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue';
import ProductionAndServiceView from '@/views/productionAndServiceView.vue';
import AboutUsView from '@/views/AboutUsView.vue';
import JoinUsView from '@/views/joinUsView.vue';
import NotFound from '@/views/notFound.vue';


const routes = [
      {
        path: '',
        name: 'home',
        component: HomeView,
      },
      {
        path: '/productionAndService',
        name: 'productionAndServiceView',
        component: () => import('@/views/productionAndServiceView.vue'),
      },
      {
        path: '/aboutUs',
        name: 'aboutUs',
        component: () => import('@/views/AboutUsView.vue'),
      },
      {
        path: '/joinUs',
        name: 'joinUs',
        component: () => import('@/views/joinUsView.vue'),
      },
      // {
      //   path: '/notFound',
      //   name: 'notFound',
      //   component:() => import('@/views/notFound.vue'),
      // },
      {
        path: '/:pathMatch(.*)*',
        redirect:{ name: 'home'},
      },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
