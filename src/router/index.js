import { createRouter, createWebHistory } from 'vue-router'
import MovieReleases from '../views/MovieReleases.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Classics',
      component: MovieReleases,
      props: { category: 'classic' },
    },
    {
      path: '/new-releases',
      name: 'New Releases',
      component: MovieReleases,
      props: { category: 'new-release' },
    },
        {
      path: '/event/:id',
      name: 'movie-details',
      props: true,
      component: () => import('../views/MovieDetails.vue')
    }
  ]
})

export default router
