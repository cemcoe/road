const Login = () => import('../views/Login/Login')
const Profile = () => import('../views/Profile/Profile')
const Writer = () => import('../views/Writer/Writer')
const Post = () => import('../views/Post/Post')
const Following = () => import('../views/Following/Following')
const Island = () => import('../views/Island/Island')
const IslandDetail = () => import('../views/Island/IslandDetail')
const Message = () => import('../views/Message/Message')
const NoteBook = () => import('../views/NoteBook/NoteBook')
const Search = () => import('../views/Search/Search')
const ResetUser = () => import('../views/ResetUser/ResetUser')
const Scan = () => import('../views/Scan/Scan')
const Room = () => import('../views/Room/Room')


export default [
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      showFooter: false
    }
  }, {
    path: '/nb/:id',
    name: 'NoteBook',
    component: NoteBook,
    meta: {
      showFooter: false
    }
  },
  {
    path: '/room/:id',
    name: 'Room',
    component: Room,
    meta: {
      showFooter: false
    }
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
    path: '/island/:islandId',
    name: 'IslandDetail',
    component: IslandDetail,
    meta: {
      showFooter: false
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
    path: '/scan',
    name: 'Scan',
    component: Scan,
    meta: {
      showFooter: false,
    }
  },
  {
    path: '/',
    redirect: '/home'
  },
]