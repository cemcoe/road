import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () => import('../views/Home/Home')
const Login = () => import('../views/Login/Login')
const User = () => import('../views/User/User')
const Profile = () => import('../views/Profile/Profile')
const Write = () => import('../views/Write/Write')
const Post = () => import('../views/Post/Post')
const Following = () => import('../views/Following/Following')
const Island = () => import('../views/Island/Island')
const Message = () => import('../views/Message/Message')
const Upload = () => import('../views/Upload/Upload')
const ResetUser = () => import('../views/ResetUser/ResetUser')

Vue.use(VueRouter)


const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/u/:id',
    name: 'User',
    component: User
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/write',
    name: 'Write',
    component: Write,
    meta: { requireAuth: true },
  },
  {
    path: '/p/:id',
    name: 'Post',
    component: Post
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/following',
    name: 'Following',
    component: Following,
    meta: { requireAuth: true },
  },
  {
    path: '/island',
    name: 'Island',
    component: Island,
  },
  {
    path: '/message',
    name: 'Message',
    component: Message,
    meta: { requireAuth: true },
  },
  {
    path: '/upload',
    name: 'Upload',
    component: Upload,
  },
  {
    path: '/reset/:id',
    name: 'ResetUser',
    component: ResetUser,
  },
  {
    path: '/',
    redirect: '/home'
  },
]

const router = new VueRouter({
  mode: 'hash',
  // base: process.env.BASE_URL,
  routes
})

export default router
