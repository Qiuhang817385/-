// import {} from './service';
import { takeEvery, fork, call, put } from 'redux-saga/effects';
import { getMenuList } from '../../service/navleft';
import * as Types from './actionType';
function* fetchMenu () {
  try {
    let res = yield call(getMenuList);
    yield put({
      type: Types.GET_MENULIST_SUCCESS,
      payload: res.menuList
    })
  } catch (error) {
    yield put({
      type: Types.GET_MENULIST_ERROR,
    })
  }
}

function* watchFetch () {
  yield takeEvery(Types.GET_MENULIST, fetchMenu);
}

export const fetchMenuSaga = [
  watchFetch()
]
