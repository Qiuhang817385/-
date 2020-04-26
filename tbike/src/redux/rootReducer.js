import { combineReducers } from 'redux';
import navLeft_reducer from './../components/NavLeft/store/reducer'
import city_reducer from './../pages/city/store/reducer';
import order_reducer from '../pages/order/store/reducer';
import login_reducer from '../pages/login/store/reducer';
export default combineReducers({
  navLeft_reducer,
  city_reducer,
  order_reducer,
  login_reducer
});