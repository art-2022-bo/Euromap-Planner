import { createRouter, createWebHistory } from 'vue-router'

import Home from './views/Home.vue'
import WishlistPage from './views/WishlistPage.vue'
import MuseumDetailsPage from './views/MuseumDetailsPage.vue'
import TravelPlannerPage from './views/TravelPlannerPage.vue'

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/wishlist', name: 'wishlist', component: WishlistPage },
  { path: '/museums/:cityName', name: 'MuseumDetailsPage', component: MuseumDetailsPage },
  { path: '/travelPlannerLists', name: 'TravelPlanner', component: TravelPlannerPage }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
