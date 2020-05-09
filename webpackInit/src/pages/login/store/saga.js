import * as Types from './actionTypes';
import { takeEvery, put } from 'redux-saga/effects';
import { login_request, login_request_phone } from './../../service/loginService';
import md5 from 'blueimp-md5';
function* fetchLogin (action) {
  console.log('action.payload', action.payload)
  let dataForm = Object.assign({}, action.payload, { password: md5(action.payload.password) })
  let res = yield login_request(dataForm);
  // console.log('res', res)
  let { token, message, userInfo } = res;
  localStorage.setItem('token', token);
  localStorage.setItem('userInfo', JSON.stringify(userInfo))
  let loginStore = Object.assign({ userInfo, message, token })
  yield put({
    type: Types.LOGIN_SUCCESS,
    payload: loginStore
  })
}

function* fetchLoginPhone (action) {
  let res = yield login_request_phone(action.payload);
  let { token, message, userInfo } = res;
  localStorage.setItem('token', token);
  localStorage.setItem('userInfo', JSON.stringify(userInfo))
  let loginStore = Object.assign({ userInfo, message, token })
  yield put({
    type: Types.LOGIN_SUCCESS,
    payload: loginStore
  })
}

function* fetchLogout () {
  yield put({
    type: Types.LOGOUT_SUCCESS,
  })
  localStorage.removeItem('token')
  localStorage.removeItem('userInfo')
}

function* watchLoginSaga () {
  yield takeEvery(Types.LOGIN_REQUEST, fetchLogin);
  yield takeEvery(Types.LOGIN_PHONE_REQUEST, fetchLoginPhone)
  yield takeEvery(Types.LOGOUT_REQUEST, fetchLogout)
}

export const fetchLoginSaga = [
  watchLoginSaga()
];

/*
{
	"username":"admin",
  "password":"123456"
}


*/