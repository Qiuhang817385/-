import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import App from './App';
import Home from './pages/home/Home'
import Admin from './Admin'
import Login from './pages/login/Login';
import Buttons from './pages/ui/buttons/Button';
import NoMatch from './pages/nomatch/Nomatch';
import Modals from './pages/ui/modals/Modals';
import Loadings from './pages/ui/loadings/Loadings';
import Notification from './pages/ui/notification/Notification';
import Messages from './pages/ui/message/Message';
import Tab from './pages/ui/tab/Tab';
import Gallery from './pages/ui/gallery/Gallery';
import Carousels from './pages/ui/carousel/Carousel';
import Pagination from './pages/ui/pagination/Pagination';
import LoginForm from './pages/form/login/Login';
import RegisterForm from './pages/form/register/Register';
import BasicTable from './pages/table/basicTable/BasicTable';
import HighTable from './pages/table/HighTable/HighTable';
import City from './pages/city/City';
import Order from './pages/order/Order'
import User from './pages/user/User'
import Bar from './pages/echarts/bar'
import Line from './pages/echarts/line'
import Pie from './pages/echarts/pie'
import Common from './Common.js'
export default function router () {
  return (
    <Router>
      {/* 默认打开div,或者主页面 */}
      <App>
        <Switch>
          <Route path='/login' component={Login} />
          <Route path="/common" render={() => {
            return <Common>
              <Route path="/common/order/detail/:orderId" component={Login} />
            </Common>
          }
          }
          />
          <Route path='/' render={() => {
            return (
              <Admin>
                <Switch>
                  <Route exact path="/" component={Home}></Route>
                  <Route exact path="/home" component={Home}></Route>
                  <Route path='/ui/buttons' component={Buttons} />
                  <Route path='/ui/modals' component={Modals} />
                  <Route path='/ui/loadings' component={Loadings} />
                  <Route path='/ui/notification' component={Notification} />
                  <Route path='/ui/messages' component={Messages} />
                  <Route path='/ui/tabs' component={Tab} />
                  <Route path='/ui/gallery' component={Gallery} />
                  <Route path='/ui/carousel' component={Carousels} />
                  <Route path='/ui/pagination' component={Pagination} />
                  <Route path='/form/login' component={LoginForm} />
                  <Route path='/form/reg' component={RegisterForm} />
                  <Route path='/table/basic' component={BasicTable} />
                  <Route path='/table/high' component={HighTable} />
                  <Route path="/city" component={City} />
                  <Route path="/charts/bar" component={Bar} />
                  <Route path="/charts/line" component={Line} />
                  <Route path="/charts/pie" component={Pie} />
                  <Route path="/order" component={Order} />
                  <Route path="/user" component={User} />
                  <Route component={NoMatch} />
                </Switch>
              </Admin>
            )
          }} />
          <Route path='/order/detail' component={Login} />
        </Switch>
      </App>
    </Router>
  )
}
