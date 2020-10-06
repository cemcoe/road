

export default {
  set_token(state, token) {
    state.token = token;
    localStorage.setItem("token", token);
  },
  del_token(state) {
    state.token = "";
    localStorage.removeItem("token");
  },

  setUser(state, user) {
    // 拿到完整的图片地址
    user.avatar = state.imgBaseUrl + user.avatar

    state.user = user;
    localStorage.setItem('user', JSON.stringify(user));
    // localStorage 注意格式转换
  },
  del_user(state) {
    state.user = {};
    localStorage.removeItem("user");
    localStorage.removeItem("followingUsers");
  },

  // 设置用户关注列表
  receive_following_user(state, followingUsers) {
    state.followingUsers = followingUsers
    localStorage.setItem("followingUsers", JSON.stringify(followingUsers));
  },

  // 设置文章信息
  set_post(state, post) {
    state.post = post;
  },

  // 设置作者信息
  set_author(state, author) {
    // 拿到完整的图片地址
    author.avatar = state.imgBaseUrl + author.avatar
    state.author = author;
  },

  // 收到文章评论，更新
  receive_post_comments(state, postComments) {
    state.postComments = postComments
  },


  // authorFollowers
  receive_author_following_user(state, followers) {
    state.authorFollowers = followers

  },

  // 更改搜索结果
  receive_search_result(state, result) {
    state.searchResult = result

  },



}