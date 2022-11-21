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

  return new Promise((resolve, reject) => {
    fetch(url, init)
      .then((response) => {
        const { ok } = response;
        if (!ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then((res) => {
        resolve(res);
      })
      .catch((error: Error) => {
        reject();
        console.log("logging service"); /* <-- made up logging service */
        throw error; /* <-- rethrow the error so consumer can still catch it */
      });
  });
}
