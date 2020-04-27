import * as Types from './actionTypes';
export const login_request = (payload) => ({
  type: Types.LOGIN_REQUEST,
  payload
})

export const logout_request = (payload) => ({
  type: Types.LOGOUT_REQUEST,
  payload
})

