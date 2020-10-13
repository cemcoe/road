import {
  getUserInfo, followingUser, unfollowingUser,
  listfollowingUser, listfollower,
  getUserPosts
} from "network/user";
import { getPostDetail } from 'network/post'
import { search } from 'network/search'
import { getPostComments } from 'network/comment'

export default {
  // 请求用户关注列表
  async listfollowingUser(context) {
    const result = await listfollowingUser(context.state.user._id);
    const followingUsers = result.data.following
    // 触发mutations更改state
    context.commit('receive_following_user', followingUsers)
  },


  //////////// 粉丝经济

  // 用户关注用户
  // 1. 更新用户关注列表
  // 2. 更新作者粉丝列表
  async followingUser(context, id) {
    // 关注当前用户
    const res = await followingUser(id)
    if (res.status === 401) {
      console.log("关注失败，刷新页面");
      return;
    }
    console.log("关注成功，为您刷新数据");

    // 1. 更新用户的关注列表
    const followingUsers = (await listfollowingUser(context.state.user._id)).data.following
    // 触发mutations更改state
    context.commit('receive_following_user', followingUsers)
    console.log("用户关注列表更新成功");


    // 2. 更新作者粉丝列表
    const result = await listfollower(id);
    const followers = result.data.followers
    context.commit('receive_author_following_user', followers)
    console.log("作者粉丝列表更新成功");
  },


  // 用户取消关注
  // 1. 更新用户关注列表
  // 2. 更新作者粉丝列表
  async unfollowingUser(context, id) {
    const res = await unfollowingUser(id)
    if (res.status === 401) {
      console.log("取消关注失败，刷新页面");
      return;
    }
    // TODO 将取消关注的用户移除state
    console.log("取消关注成功，为您刷新数据");

    // 1. 更新用户关注列表
    const followingUsers = (await listfollowingUser(context.state.user._id)).data.following
    // 触发mutations更改state
    context.commit('receive_following_user', followingUsers)
    console.log("用户关注列表更新成功");


    // 2. 更新作者粉丝列表
    const result = await listfollower(id);
    const followers = result.data.followers
    context.commit('receive_author_following_user', followers)
    console.log("作者粉丝列表更新成功");
  },


  // 获取文章信息
  async getPostDetail(context, id, callback) {
    const res = await getPostDetail(id)
    console.log(res)
    if (res.status === 200) {
      const post = res.data.post
      const author = post.author
      // 更新文章信息
      context.commit('set_post', post)
      // 更新作者信息
      context.commit('set_author', author)
    } else if (res.status === 404) {
      console.log('该id没有对应文章')
    }
  },

  // 获取作者信息，通过url获取id
  async getAuthorInfo(context, id) {
    const res = await getUserInfo(id)
    console.log(res, 'vuexxxxxxxxxxxxxxxxxxxxx')
    this.commit('set_author', res.data.user)
  },

  // 获取文章评论
  async getPostComments(context, postId) {
    const result = await getPostComments(postId)
    const postComments = result.data.comments
    // console.log(comments)
    // 触发mutations更改state
    context.commit('receive_post_comments', postComments)
  },


  // 获取作者粉丝列表
  async listAuthorFollowingUser(context, id) {
    // 向服务器要关注的用户列表
    const result = await listfollower(id);
    const followers = result.data.followers
    // 触发mutations更改state
    console.log(result, '33333333333333333333333')
    context.commit('receive_author_following_user', followers)
  },

  // 获取作者文章列表
  async listAuthorPosts(context, id) {
    // 向服务器要作者的文章列表
    const result = await getUserPosts(id)
    const posts = result.data
    // console.log(posts, 'ddddddddddddddddddddddddddddddddddddd')
    // 触发mutations更改state
    context.commit('receive_author_posts', posts)

  },


  // 搜索标题和正文中含有搜索词的文章
  async reqSearchResult(context, q) {
    const result = await search(q)
    console.log(result)
    // 触发mutations更改state
    if (result.status === 200) {
      const searchResult = result.data.post
      context.commit('receive_search_result', searchResult)
    } else {
      return 404
    }
  },




}