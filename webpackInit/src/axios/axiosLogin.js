import axios from 'axios';
import { Modal } from 'antd'
export default class Axios {
  /**
    * Post请求
    * @param {参数} options 
    */
  static loginReq (options) {
    let baseApi;
    if (options.isMock) {
      baseApi = "http://localhost:3030/"
    } else {
      baseApi = "http://localhost:3030/"
    }
    return new Promise((resolve, reject) => {
      axios({
        url: options.url,
        method: 'post',
        baseURL: baseApi,
        timeout: 5000,
        data: (options.data) || '',
      }).then((response) => {
        if (response.status === 200) {
          let res = response.data;
          if (res.code === '0') {
            console.log('response成功 :', response);
            resolve(res)
          } else {
            // 简单的错误拦截
            Modal.info({
              title: "提示",
              content: res.msg
            })
          }
        } else {
          reject(response);
        }
      }).catch((e) => {
        console.log(e)
      })
    })
  }
}