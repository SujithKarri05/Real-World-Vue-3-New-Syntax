import { createRouter, createWebHistory } from 'vue-router'
import ClassicMovies from '../views/ClassicMovies.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Classics',
      component: ClassicMovies,
      props: route => ({ page: parseInt(route.query.page) || 1})
    },
    {
      path: '/new-releases',
      name: 'New Releases',
      component: () => import('../views/NewMovies.vue'),
      props: route => ({ page: parseInt(route.query.page) || 1})
      },
        {
      path: '/event/:category/:id',
      name: 'movie-details',
      props: true,
      component: () => import('../views/MovieDetails.vue')
    }
  ]
})

export default router
