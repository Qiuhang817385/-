import axios from '../../axios/axios';
export const getMenuList = (keys) => {
  return axios.axiosGet({
    url: '/roles',
    data: {
      params: {
        key: keys
      }
    }
  }).then((res) => {
    return res
  })
}