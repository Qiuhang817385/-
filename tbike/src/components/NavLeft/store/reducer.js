import * as Types from './actionType';
const initialState = {
  MenuConfig: []
}
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case Types.GET_MENULIST_SUCCESS:
      return {
        MenuConfig: payload
      }
    case Types.GET_MENULIST_ERROR:
      return {
        MenuConfig: []
      }
    default:
      return state
  }
}
