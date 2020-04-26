import * as Types from './actionTypes';
import { takeEvery, put, call, delay } from 'redux-saga/effects';
import { login_request } from './../../service/loginService';
function* fetchLogin (action) {
  console.log('action.payload', action.payload)
  let res = yield login_request(action.payload);
  console.log('res', res)
}

function* watchLoginSaga () {
  yield takeEvery(Types.LOGIN_REQUEST, fetchLogin)
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