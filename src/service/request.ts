export async function request<T>(input: string, init: Object = {}): Promise<T> {
  const BASE_URL = "https://jian.cemcoe.com/jianshu_api";
  const url = BASE_URL + input;

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
