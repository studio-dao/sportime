import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Authentification from '../views/Authentification.vue'
import Inscription from '../views/Inscription.vue'
import Profil from '../views/Profil.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Authentification',
    component: Authentification
  
  },

  {
    path: '/Home',
    name: 'Home',
    component: Home
  },

  {
    path: '/Inscription',
    name: 'Inscription',
    component: Inscription
  },

  {
    path: '/Profil',
    name: 'Profil',
    component: Profil
  },
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
