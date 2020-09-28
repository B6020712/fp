import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// import Lab from '../components/Lab.vue'
import BeforeLAB from '../components/BeforeLAB.vue'
import Solutions from '../components/Solutions.vue'
import LAB1 from '../components/LAB1.vue'
import LAB2 from '../components/LAB2.vue'
import LAB3 from '../components/LAB3.vue'
import LAB4 from '../components/LAB4.vue'
import LAB5 from '../components/LAB5.vue'
import LAB6 from '../components/LAB6.vue'
import LAB7 from '../components/LAB7.vue'
import LAB8 from '../components/LAB8.vue'
import LAB9 from '../components/LAB9.vue'
import LAB10 from '../components/LAB10.vue'
import firebase from 'firebase'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home },
  // { path: '/lab', component: Lab , meta: {requireAuth: true}},
  { path: '/solutions', component: Solutions , meta: {requireAuth: true}},
  { path: '/beforelab', component: BeforeLAB , meta: {requireAuth: true}},
  { path: '/lab1', component: LAB1 , meta: {requireAuth: true}}, 
  { path: '/lab2', component: LAB2 , meta: {requireAuth: true}}, 
  { path: '/lab3', component: LAB3 , meta: {requireAuth: true}}, 
  { path: '/lab4', component: LAB4 , meta: {requireAuth: true}}, 
  { path: '/lab5', component: LAB5 , meta: {requireAuth: true}}, 
  { path: '/lab6', component: LAB6 , meta: {requireAuth: true}}, 
  { path: '/lab7', component: LAB7 , meta: {requireAuth: true}}, 
  { path: '/lab8', component: LAB8 , meta: {requireAuth: true}}, 
  { path: '/lab9', component: LAB9 , meta: {requireAuth: true}}, 
  { path: '/lab10', component: LAB10 , meta: {requireAuth: true}}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


router.beforeEach((to, from, next) => {
  const requireAuth = to.matched.some(record => record.meta.requireAuth);
  const isAuthenticated = firebase.auth().currentUser;
  if(requireAuth && !isAuthenticated){
    next("/");
  } else {
    next();
  }
})

export default router