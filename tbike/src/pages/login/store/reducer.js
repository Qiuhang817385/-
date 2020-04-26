import * as Types from './actionTypes';
const initialState = {
  isLogin: false
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

    case Types.LOGIN_SUCCESS:
      return state;

    default:
      return state
  }
}
