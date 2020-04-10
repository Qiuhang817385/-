import JsonP from 'jsonp';
import axios from 'axios';
import { Modal } from 'antd'
export default class Axios {
  // 封装JSONP
  static jsonp (options) {
    // 再封装一层promise用来做错误处理
    // 调用方式
    // axios.jsonp({
    //   url: ''
    // }).then
    return new Promise((resolve, reject) => {
      JsonP(
        options.url,
        { param: 'callback' },
        function (err, response) {
          //to-do
          console.log('response :', response);
          if (response.status === 'success') {
            resolve(response);
          } else {
            reject(response.message);
          }
        })
    })
  }
  // 封装API
  // 调用方式
  // axios.ajax({
  //   url: ''
  // }).then
  static ajax (options) {
    // 使用loading
    let loading;
    //如果有的接口不希望loading,做判断
    // if (options.data && options.data.isShowLoading !== false) {
    //   loading = document.getElementById('ajaxLoading');
    //   loading.style.display = 'block'
    // }
    return new Promise((resolve, reject) => {
      // axios的api写法
      axios({
        url: options.url,
        method: 'get',
        baseURL: '',
        timeout: 5000,
        params: (options.data && options.data.params) || '',
        // then开始
      }).then((res) => {
        // 进度条
        // if (options.data && options.data.isShowLoading !== false) {
        //   loading = document.getElementById('ajaxLoading');
        //   loading.style.display = 'none'
        // }
        // 进度条
        // 状态判断
        if (res.status === 200) {
          let response = res.data;
          if (response.code === "0") {
            // resolve(response.result)
            resolve(response)
          } else {
            Modal.info({
              title: '提示',
              content: response.msg
            })
          }
        } else {
          reject(res.data);
        }
        // 状态判断
      })
      // then结束
    });
  }
}