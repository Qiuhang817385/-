import * as Types from './actionTypes';

export const getOrderList_action = (payload) => ({
  type: Types.GET_ORDER_LIST,
  payload
})
export const getOrderList_success_action = (payload) => ({
  type: Types.GET_ORDER_LIST_SUCCESS,
  payload
})
export const getOrderList_error_action = (payload) => ({
  type: Types.GET_ORDER_LIST_ERROR,
  payload
})

export const getOrderDetail_action = (payload) => ({
  type: Types.GET_ORDER_DETAIL,
  payload
})
export const getOrderDetail_success_action = (payload) => ({
  type: Types.GET_ORDER_DETAIL_SUCCESS,
  payload
})
export const getOrderDetail_error_action = (payload) => ({
  type: Types.GET_ORDER_DETAIL_ERROR,
  payload
})
