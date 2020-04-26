import JsonP from 'jsonp';
import axios from 'axios';
import { Modal } from 'antd'
export default class Axios {
  // 封装JSONP
  static jsonp (options) {
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
  /**
   * axios-get
   * @param {参数选项} options 
   */
  static axiosGet (options) {
    let baseApi;
    if (options.isMock) {
      baseApi = "http://www.qiuhang.club:7300/mock/5e8c119b00fbdf09dcf21f9f/bike/"
    } else {
      baseApi = "http://www.qiuhang.club:7300/mock/5e8c119b00fbdf09dcf21f9f/bike/"
    }
    return new Promise((resolve, reject) => {
      axios({
        url: options.url,
        method: 'get',
        baseURL: baseApi,
        timeout: 5000,
        params: (options.data && options.data.params) || '',
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


  /**
   * Post请求
   * @param {参数} options 
   */
  static axiosPost (options) {
    let baseApi;
    if (options.isMock) {
      baseApi = "http://www.qiuhang.club:7300/mock/5e8c119b00fbdf09dcf21f9f/bike/"
    } else {
      baseApi = "http://www.qiuhang.club:7300/mock/5e8c119b00fbdf09dcf21f9f/bike/"
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




  /**
   * 业务逻辑请求封装
   * 可以把this传递给这个函数,这样这个函数就可以是this里面的setState方法了
   * 我的组件使用的是useHook,所以可以新增一个参数判断是函数组件还是类组件,然后进行数据存储
   */
  static requestList (_this, url, params, isMock) {
    let data = {
      params, isMock
    }
    this.ajax({
      url, data
    }).then((data) => {
      if (data && data.result) {
        let list = data.result.item_list.map((item, index) => {
          item.key = index;
          return item;
        });
        _this.setState({
          list
          // 分页
        })
      }
    })
  }

}