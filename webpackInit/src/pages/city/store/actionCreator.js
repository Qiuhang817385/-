import * as types from './actionTypes';

export const getCityList = () => ({
  type: types.GET_CITY_LIST
})

export const getCityList_success = (payload) => ({
  type: types.GET_CITY_LIST_SUCCESS,
  payload
})
export const getCityList_error = () => ({
  type: types.GET_CITY_LIST_ERROR,
})


export const handleCityOpen_action = (payload) => ({
  type: types.HANDLE_CITY_OPEN,
  payload
})
export const handleCityOpen_success = (payload) => ({
  type: types.HANDLE_CITY_OPEN_SUCCESS,
  payload
})
export const handleCityOpen_error = (payload) => ({
  type: types.HANDLE_CITY_OPEN_ERROR,
  payload
})

