import { all } from 'redux-saga/effects'
import { fetchMenuSaga } from '../components/NavLeft/store/saga'
import { fetchCitySaga } from '../pages/city/store/saga';
import { ftechOrderSaga } from '../pages/order/store/saga'
import { fetchLoginSaga } from '../pages/login/store/saga';
function* rootSaga () {
  yield all([
    ...fetchMenuSaga,
    ...fetchCitySaga,
    ...ftechOrderSaga,
    ...fetchLoginSaga
  ])
}
export default rootSaga