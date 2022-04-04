import axios from "axios";
axios.defaults.baseURL = "http://localhost:3001/";
/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
function mypost(url, params) {
  return new Promise((resolve, reject) => {
    axios
      .post(url, {
        data: params,
      })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
export { mypost };
