import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from './About';
import A from './A';
import Main from './Main';

import Home from './Home';

export default class router extends Component {
  render () {
    return (
      <Router>
        <Home>
          <Route path="/main" render={() => {
            // 需要有返回值
            return (
              <Main>
                <Route exact path="/main/a" component={A}></Route>
              </Main>
            )
          }
          }></Route>
          <Route exact path="/about" component={About}></Route>
        </Home>
      </Router>
    )
  }
}
// {/* <Route exact={true} path="/" component={Main}></Route>
//           <Route exact path="/about" >
//             <About></About>
//           </Route> */}