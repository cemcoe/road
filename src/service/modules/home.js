import HYRequest from "../request";

// 获取文章列表
// http://localhost:3000/posts?per_page=10&page=1
export function getHomePostList(page = 1, per_page = 10) {
  return HYRequest.get({
    url: "/posts",
    params: {
      page,
      per_page,
    },
  });
}
