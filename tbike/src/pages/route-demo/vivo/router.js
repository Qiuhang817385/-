import React, { Component } from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import NEX from './pages/NEX系列/NEX';
import X from './pages/X系列/X'
import IQOO from './pages/iQOO专区/IQOO';
import './Home.scss';
import Home from './Home'

export default class router extends Component {
  render () {
    return (
      <Router>
        <Home>
          <Route exact path="/iQOO" component={IQOO}></Route>
          <Route exact path="/NEX" component={NEX}></Route>
          <Route exact path="/X" component={X}></Route>
        </Home>
      </Router>
    )
  }
}
