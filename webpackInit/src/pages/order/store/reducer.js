import * as Types from './actionTypes';
const initialState = {
  item_list: [],
  orderInfo: []
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

    case Types.GET_ORDER_LIST_SUCCESS:
      return { item_list: payload }
    case Types.GET_ORDER_LIST_SUCCESS:
      return { ...state, item_list: payload }

    default:
      return state
  }
}
