import axios from '../../axios/axios';

export const login_request = (formData) => {
  return axios.axiosPost({
    url: '/login_request',
    data: Object.assign(formData)
  }).then((res) => res)
}