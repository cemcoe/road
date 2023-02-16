import { request } from "@/service/request";
import type { IResponse, IUser } from "@/types";

interface loginInfo {
  name: string;
  password: string;
}

interface IResult {
  token: string;
  user: IUser;
}

export function login(loginInfo: loginInfo) {
  return request<IResponse<IResult>>(`/login`, {
    method: "post",
    body: JSON.stringify(loginInfo),
  });
}

// 获取特定用户的信息
export function getUserInfo(id: any) {
  return request<IResponse<IResult>>(`/users/${id}`);
}

// 获取某人文章列表，默认为公开文章
export function getUserPosts(id: any, status = "public") {
  return request<IResponse<any>>(`/users/${id}/posts?status=${status}`);
}

// 获取登录用户的文章列表，包含公开和私密
export function getOwnerPostList(status = "") {
  return request<IResponse<any>>(`/owner/posts?status=${status}`);
}
