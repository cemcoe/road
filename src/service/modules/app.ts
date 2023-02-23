import { request } from "@/service/request";

export function getAppInfo() {
  return request<any>(`/app`);
}
