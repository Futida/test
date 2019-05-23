import VueRouter from 'vue-router'
import CreateUser from '../components/CreateUser.vue'
import ListUsers from '../components/ListUsers.vue'
import Home from '../components/Home.vue'
import User from '../components/User.vue'

const routes = [
  { path: '/create', component: CreateUser },
  { path: '/list-users', component: ListUsers },
  { path: '/', component: Home },
  { path: '/users/:id', component: User, props: true },
  { path: '/*', redirect: '/' }
]

export default new VueRouter({
  mode: 'history',
  routes
})
