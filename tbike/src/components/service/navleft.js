import axios from '../../axios/axios';
export const getMenuList = () => {
  return axios.axiosGet({
    url: '/roles',
    data: {
      params: {
        key: 1
      }
    }
  }).then((res) => {
    return res
  })
}