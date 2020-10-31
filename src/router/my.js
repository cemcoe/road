const MyPost = () => import('../views/My/MyPost/MyPost')


export default [
  {
    path: '/mypost',
    // name: 'Author',
    component: MyPost,
    meta: {
      showFooter: false
    },
  },
]