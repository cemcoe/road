import HYRequest from "./index";
import { showDialog } from "vant";
import "vant/es/dialog/style";
import router from "@/router/index";

const request = (config) => {
  return new Promise((resolve, reject) => {
    HYRequest.request({
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}` || "",
      },
      ...config,
    })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        const status = err.response.status;
        if (status === 401 || 403) {
          showDialog({ message: "请登录", showCancelButton: true })
            .then(() => {
              // on confirm
              router.push("/login");
            })
            .catch(() => {
              // on cancel
            });
        } else {
          reject(err);
        }
      });
  });
};

export { request };
