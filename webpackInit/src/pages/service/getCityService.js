import axios from '../../axios/axios';

export const cityService = () => {
  return axios.axiosGet({
    url: '/open_city_copy',
    data: {
      params: {
      }
    }
  }).then((res) => res)
}

export const cityOpenService = (dataForm) => {
  return axios.axiosGet({
    url: '/city/open',
    data: {
      ...dataForm
    }
  }).then(res => res)
}
