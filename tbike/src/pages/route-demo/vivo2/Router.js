import React, { Component } from 'react'
import { HashRouter, Route } from 'react-router-dom'
import Home from './Home';
import NEX from './pages/NEX系列/NEX';

import NEXZ from './pages/NEX系列-Z/NEXZ';
import NEXY from './pages/NEX系列-Y/NEXY';
import NEXY1 from './pages/NEX系列-Y/NEXY1';
import NEXY2 from './pages/NEX系列-Y/NEXY2';
import X from './pages/X系列/X'
import IQOO from './pages/iQOO专区/IQOO';
import Detail from './pages/Detail/Detail'
import Info from './pages/NEX系列-Z/Info'
export default class Router extends Component {
  render () {
    return (
      <HashRouter>
        <Home>
          <Route exact path="/iQOO" component={IQOO} />
          {/* 只有先进来,才能匹配到嵌套的子路由 */}
          {/* 二级路由不能加exact */}
          <Route path="/NEX" render={() => {
            return (
              <NEX>
                <Route path='/NEX/NEXY' render={() => {
                  return (
                    <NEXY>
                      <Route path='/NEX/NEXY/NEXY1' component={NEXY1} />
                      <Route path='/NEX/NEXY/NEXY2' component={NEXY2} />
                    </NEXY>
                  )
                }} />

                <Route path='/NEX/NEXZ' render={() => {
                  return (
                    <NEXZ>
                      <Route path='/NEX/NEXZ/:NEXZID' component={Info} />
                    </NEXZ>
                  )
                }} />
              </NEX>
            )
          }} />
          <Route path="/X" render={() => {
            return (
              <X>
                <Route path='/X/NEXY1' component={NEXY1} />
                <Route path='/X/NEXY2' component={NEXY2} />
                <Route exact path='/X/:NEXYID' component={Detail} />
              </X>
            )
          }} />
          {/* <Route path='/X' component={X}/> */}
        </Home>
      </HashRouter>
    )
  }
}
