import { request } from "@/service/request";
import type { IPost, IResponse } from "@/types";

interface IPostRes {
  post: IPost;
}

// 获取文章详情
export function getPostDetail(postId: any) {
  return request<IResponse<IPostRes>>(`/posts/${postId}`);
}

// 创建文章
export function createPost(post: any) {
  return request<IResponse<any>>("/posts", {
    // 传一个对象过来，以后如果添加字段时就简单了
    method: "post",
    body: JSON.stringify(post),
  });
}

// 更新文章
export function updatePost(id: any, post: any) {
  return request<IResponse<any>>(`/posts/${id}`, {
    method: "PATCH",
    body: JSON.stringify(post),
  });
}
