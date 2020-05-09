import axios from '../../axios/axiosLogin';

export const login_request = (formData) => {
  return axios.loginReq({
    url: '/login',
    data: Object.assign(formData)
  }).then((res) => res)
}
export const login_request_phone = (formData) => {
  return axios.loginReq({
    url: '/login_phone',
    data: Object.assign(formData)
  }).then((res) => res)
}