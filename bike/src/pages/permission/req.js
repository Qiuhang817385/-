import axios from './../../axios/axios'
/**
 * 初始化
 */
export const Init = () => {
  return axios.ajax({
    url: 'http://www.qiuhang.club:7300/mock/5e8c119b00fbdf09dcf21f9f/bike/role/list',
    data: {
      params: {
      }
    }
  }).then((res) => {
    return res
  })
}
/**
 * 创建角色
 */
export const Create = (roleData) => {
  return axios.ajax({
    url: 'http://www.qiuhang.club:7300/mock/5e8c119b00fbdf09dcf21f9f/bike/role/create',
    data: {
      params: {
        roleData
      }
    }
  }).then((res) => {
    return res
  })
}
/**
 * 修改权限
 */
export const editRole = (editData) => {
  return axios.ajax({
    url: 'http://www.qiuhang.club:7300/mock/5e8c119b00fbdf09dcf21f9f/bike/permission/edit',
    data: {
      params: {
        editData
      }
    }
  }).then((res) => {
    return res
  })
}
/**
 * 修改权限-获取权限
 */
export const accessUser = (id) => {
  return axios.ajax({
    url: 'http://www.qiuhang.club:7300/mock/5e8c119b00fbdf09dcf21f9f/bike/role/user_list',
    data: {
      params: {
        id
      }
    }
  }).then((res) => {
    return res
  })
}
/**
 * 修改权限-修改权限
 */
export const accessUserChange = (data) => {
  return axios.ajax({
    url: 'http://www.qiuhang.club:7300/mock/5e8c119b00fbdf09dcf21f9f/bike/role/user_role_edit',
    data: {
      params: {
        ...data
      }
    }
  }).then((res) => {
    return res
  })
}