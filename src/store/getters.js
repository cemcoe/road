export default {
  isFollowingAuthor(state) {
    // 是否已经关注该作者
    const { followingUsers, author } = state
    for (let index = 0; index < followingUsers.length; index++) {
      const element = followingUsers[index];
      if(element._id === author._id) {
        // console.log(element._id)
        return true
      }
    }
    return false
  }
}