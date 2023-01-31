import { showNotify } from "vant";
import "vant/es/notify/style";

import { BASE_URL } from "./config";

export async function request<T>(input: string, init: Object = {}): Promise<T> {
  const url = BASE_URL + input;

  // 合并init
  init = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}` || "",
    },
    ...init,
  };

  return new Promise((resolve) => {
    fetch(url, init)
      .then((response) => {
        const { ok } = response;
        if (!ok) {
          const { status, url } = response;
          if (status === 500) {
            console.warn("服务端错误，请稍后重新尝试: ", url);
            showNotify("服务端错误，请稍后重新尝试");
          } else {
            console.log("未处理看业务需要: ", url);
          }
        }
        return response.json();
      })
      .then((res) => {
        resolve(res);
      })
      .catch((error: Error) => {
        // 当接收到一个代表错误的 HTTP 状态码时，从 fetch() 返回的 Promise 不会被标记为 reject，
        // 即使响应的 HTTP 状态码是 404 或 500。
        // 相反，它会将 Promise 状态标记为 resolve（如果响应的 HTTP 状态码不在 200 - 299 的范围内，则设置 resolve 返回值的 ok 属性为 false），
        // 仅当网络故障时或请求被阻止时，才会标记为 reject。
        showNotify("请检查网络设置");
        console.warn(error);
      });
  });
}
