import * as Types from './actionTypes';
const initialState = {
  isLogin: localStorage.getItem('token') ? true : false,
  //  { key, userInfo, message, token }
  userInfo: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : {},
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case Types.LOGIN_SUCCESS:
      // console.log('payload', payload)
      return { ...state, isLogin: true, userInfo: payload.userInfo };
    case Types.LOGOUT_SUCCESS:
      return { ...state, isLogin: false, userInfo: {} };
    default:
      return state
  }
}
