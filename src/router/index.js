import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () => import('../views/Home/Home')
const HomeActivity = () => import('../views/Home/childComps/HomeActivity/HomeActivity')
const HomeRecommend = () => import('../views/Home/childComps/HomeRecommend/HomeRecommend')
const HomeTopic = () => import('../views/Home/childComps/HomeTopic/HomeTopic')
const HomeSerialization = () => import('../views/Home/childComps/HomeSerialization/HomeSerialization')
const Login = () => import('../views/Login/Login')
const User = () => import('../views/User/User')
const Profile = () => import('../views/Profile/Profile')
const Write = () => import('../views/Write/Write')
const Post = () => import('../views/Post/Post')
const Following = () => import('../views/Following/Following')
const Island = () => import('../views/Island/Island')
const Message = () => import('../views/Message/Message')
const ResetUser = () => import('../views/ResetUser/ResetUser')

Vue.use(VueRouter)


const routes = [
  {
    path: '/home',
    // name: 'Home',
    // https://segmentfault.com/q/1010000007788495
    // https://github.com/vuejs/vue-router/issues/777
    component: Home,
    children: [
      {
        path: '/home/activity',
        component: HomeActivity,
      },
      {
        path: '/home/recommend',
        component: HomeRecommend,
      },
      {
        path: '/home/topic',
        component: HomeTopic,
      },
      {
        path: '/home/serialization',
        component: HomeSerialization,
      },
      {
        path: '',
        redirect: '/home/recommend'
      },
    ]
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
