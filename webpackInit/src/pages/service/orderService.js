import axios from '../../axios/axios';
export const getOrderListService = (param) => {
  return axios.axiosGet({
    url: '/order/list',
    data: {
      params: {
        page: param && param.page
      }
    }
  }).then((res) => {
    return res
  })
}

export const getDetailInfoService = (orderId) => {
  axios.axiosGet({
    url: '/order/detail',
    data: {
      params: {
        orderId: orderId
      }
    }
  }).then((res) => {
    return res
  })
}