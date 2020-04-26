import * as types from './actionTypes';
const initialState = {
  cityRes: [],
  cityOpenMessage: '',
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case types.GET_CITY_LIST_SUCCESS:
      return { cityRes: payload }
    case types.HANDLE_CITY_OPEN_SUCCESS:
      console.log(payload)
      return { ...state, cityOpenMessage: payload }
    default:
      return state
  }
}
