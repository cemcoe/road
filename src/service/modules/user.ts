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
