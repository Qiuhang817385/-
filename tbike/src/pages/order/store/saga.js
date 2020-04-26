import * as Types from './actionTypes';
import { takeEvery, put, call, all } from 'redux-saga/effects';
import { getOrderListService, getDetailInfoService } from './../../service/orderService';

function* getOrderDetail (action) {
  console.log('12')
  let res = yield getDetailInfoService(action.payload);
  console.log(res);
}

function* getOrderList (action) {
  let res = yield getOrderListService(action.payload);
  yield put({
    type: Types.GET_ORDER_LIST_SUCCESS,
    payload: res.result.item_list
  })
}

function* watchOrderSaga () {
  yield takeEvery(Types.GET_ORDER_LIST, getOrderList);
  yield takeEvery(Types.GET_ORDER_DETAIL, getOrderDetail)
}

export const ftechOrderSaga = [
  watchOrderSaga()
]