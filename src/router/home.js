const Home = () => import('../views/Home/Home')
const HomeActivity = () => import('../views/Home/childComps/HomeActivity/HomeActivity')
const HomeRecommend = () => import('../views/Home/childComps/HomeRecommend/HomeRecommend')
const HomeTopic = () => import('../views/Home/childComps/HomeTopic/HomeTopic')
const HomeSerialization = () => import('../views/Home/childComps/HomeSerialization/HomeSerialization')

export default {
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
}
