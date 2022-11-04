import HYRequest from "../request";

// 获取文章详情
export function getPostDetail(id) {
  return HYRequest.get({
    url: `/posts/${id}`,
  });
}

// 创建文章
export function createPost(post) {
  return HYRequest.request({
    // 传一个对象过来，以后如果添加字段时就简单了
    method: "post",
    url: "/posts",
    data: post,
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}` || "",
    },
  });
}

// 更新文章
export function updatePost(id, post) {
  return HYRequest.request({
    method: "patch",
    url: `/posts/${id}`,
    data: post,
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}` || "",
    },
  });
}
