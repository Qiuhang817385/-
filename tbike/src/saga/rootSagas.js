import { all } from 'redux-saga/effects'
import { fetchMenuSage } from '../components/NavLeft/store/saga'
function* rootSaga () {
  yield all([
    ...fetchMenuSage
  ])
}
export default rootSaga