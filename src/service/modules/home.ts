import { request } from "@/service/request";
import type { IPost, IResponse } from "@/types";

interface IPostRes {
  post: IPost[];
}

export function getHomePostList(page = 1, per_page = 10) {
  return request<IResponse<IPostRes>>(
    `/posts?page=${page}&per_page=${per_page}`
  );
}
