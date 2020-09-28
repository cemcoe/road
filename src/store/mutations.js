

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
  },

  // 设置用户关注列表
  receive_following_user(state, followingUsers) {
    state.followingUsers = followingUsers
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

  // authorFollowers
  receive_author_following_user(state, followers) {
    state.authorFollowers = followers

  }
}