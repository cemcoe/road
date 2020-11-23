const UserFollowing = () => import('../views/User/UserFollowing/UserFollowing')
const UserFollowers = () => import('../views/User/UserFollowers/UserFollowers')


export default [
  {
    path: '/users/:uid/following',
    component: UserFollowing,
    meta: {
      showFooter: false
    },
  },
  {
    path: '/users/:uid/followers',
    component: UserFollowers,
    meta: {
      showFooter: false
    },
  },
]