import { request } from "@/service/request";
import type { IPost, IResponse } from "@/types";

interface IPostRes {
  post: IPost;
}

// 获取文章详情
export function getPostDetail(postId: any) {
  return request<IResponse<IPostRes>>(`/posts/${postId}`);
}
