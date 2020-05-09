import * as types from './actionTypes';
import { cityService, cityOpenService } from '../../service/getCityService';
import { takeEvery, call, put, delay } from 'redux-saga/effects'
import { message } from 'antd'

function* getCityList () {
  try {
    let res = yield call(cityService);
    yield put({
      type: types.GET_CITY_LIST_SUCCESS,
      payload: res.result.item_list
    })
  } catch (error) {

  }
}

function* handleCityOpen (action) {
  try {
    let hide1 = message.loading('正在加载', 0);
    yield delay(200)
    let res = yield call(cityOpenService, action.payload);
    hide1()
    // let hide2 = message.loading('加载成功，正在处理', 0);
    // yield delay(200)
    // hide2()
    yield put({ type: types.HANDLE_CITY_OPEN_SUCCESS, payload: res.result })
    message.success('开通成功', 1.5);
  } catch (error) {

  }
}

function* watchFetch () {
  yield takeEvery(types.GET_CITY_LIST, getCityList);
  yield takeEvery(types.HANDLE_CITY_OPEN, handleCityOpen)
}

export const fetchCitySaga = [
  watchFetch()
]