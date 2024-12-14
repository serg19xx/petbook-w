import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProfileView from '../views/ProfileView.vue'
import AboutView from '../views/AboutView.vue'
import PetGalleryView from '../views/PetGalleryView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), // import.meta.env.BASE_URL
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: AboutView,
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfileView,
    },
    {
      path: '/petgallery',
      name: 'petgallery',
      component: PetGalleryView,
    },    
  ],
})

export default router
