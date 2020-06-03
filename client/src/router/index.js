import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import BeforeLAB from '../views/BeforeLAB.vue'
import Solutions from '../views/Solutions.vue'
import LAB1 from '../views/LAB1.vue'
import LAB2 from '../views/LAB2.vue'
import LAB3 from '../views/LAB3.vue'
import LAB4 from '../views/LAB4.vue'
import LAB5 from '../views/LAB5.vue'
import LAB6 from '../views/LAB6.vue'
import LAB7 from '../views/LAB7.vue'
import LAB8 from '../views/LAB8.vue'
import LAB9 from '../views/LAB9.vue'
import LAB10 from '../views/LAB10.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home },
  { path: '/solutions', component: Solutions },
  { path: '/beforelab', component: BeforeLAB },
  { path: '/lab1', component: LAB1 }, 
  { path: '/lab2', component: LAB2 }, 
  { path: '/lab3', component: LAB3 }, 
  { path: '/lab4', component: LAB4 }, 
  { path: '/lab5', component: LAB5 }, 
  { path: '/lab6', component: LAB6 }, 
  { path: '/lab7', component: LAB7 }, 
  { path: '/lab8', component: LAB8 }, 
  { path: '/lab9', component: LAB9 }, 
  { path: '/lab10', component: LAB10 }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router