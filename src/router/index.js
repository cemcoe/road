import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () => import('../views/Home/Home')
const HomeActivity = () => import('../views/Home/childComps/HomeActivity/HomeActivity')
const HomeRecommend = () => import('../views/Home/childComps/HomeRecommend/HomeRecommend')
const HomeTopic = () => import('../views/Home/childComps/HomeTopic/HomeTopic')
const HomeSerialization = () => import('../views/Home/childComps/HomeSerialization/HomeSerialization')
const Login = () => import('../views/Login/Login')
const Author = () => import('../views/Author/Author')
const AuthorPosts = () => import('../views/Author/childComps/AuthorPosts/AuthorPosts')
const AuthorMore = () => import('../views/Author/childComps/AuthorMore/AuthorMore')
const Profile = () => import('../views/Profile/Profile')
const Writer = () => import('../views/Writer/Writer')
const Post = () => import('../views/Post/Post')
const Following = () => import('../views/Following/Following')
const Island = () => import('../views/Island/Island')
const Message = () => import('../views/Message/Message')
const Search = () => import('../views/Search/Search')
const ResetUser = () => import('../views/ResetUser/ResetUser')

// meta变量说明
// requireAuth: true 是否登录才能访问
// showFooter: true 是否要展示底部导航


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
        meta: {
          showFooter: true
        },
      },
      {
        path: '/home/recommend',
        component: HomeRecommend,
        meta: {
          showFooter: true
        },
      },
      {
        path: '/home/topic',
        component: HomeTopic,
        meta: {
          showFooter: true
        },
      },
      {
        path: '/home/serialization',
        component: HomeSerialization,
        meta: {
          showFooter: true
        },
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
    component: Login,
    meta: {
      showFooter: false
    }
  },
  {
    path: '/u/:id',
    // name: 'Author',
    component: Author,
    meta: {
      showFooter: false
    },
    children: [
      {
        path: '/u/:id/posts',
        component: AuthorPosts,
        meta: {
          showFooter: true
        },
      },{
        path: '/u/:id/more',
        component: AuthorMore,
        meta: {
          showFooter: true
        },
      },
      {
        path: '',
        redirect: '/u/:id/posts'
      },
    ]
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    meta: {
      showFooter: false,
      showFooter: true,
    }
  },
  {
    path: '/writer',
    name: 'Write',
    component: Writer,
    meta: { requireAuth: true },
  },
  {
    path: '/writer/:id',
    name: 'Edit',
    component: Writer,
    meta: { requireAuth: true },
  },
  {
    path: '/p/:id',
    name: 'Post',
    component: Post,
    meta: {
      showFooter: false
    }
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
    meta: { requireAuth: true, showFooter: true },
  },
  {
    path: '/island',
    name: 'Island',
    component: Island,
    meta: {
      showFooter: true
    },
  },
  {
    path: '/message',
    name: 'Message',
    component: Message,
    meta: { requireAuth: true, showFooter: true },
  },
  {
    path: '/reset/:id',
    name: 'ResetUser',
    component: ResetUser,
    meta: { requireAuth: true, showFooter: true },
  },
  {
    path: '/search',
    name: 'Search',
    component: Search,
    meta: {
      showFooter: false,
    }
  },
  {
    path: '/',
    redirect: '/home'
  },
]

const router = new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes
})

export default router
