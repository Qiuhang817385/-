import React from 'react'
import About from './About';
import Main from './Main';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
export default function Home () {
  return (
    <>
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Main</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>

          </ul>

          {/* 小写的c */}
          {/* 两种exact的写法
              两种组件形式的写法
           */}
          <Route exact={true} path="/" component={Main}></Route>
          <Route exact path="/about" >
            <About></About>
          </Route>

        </div>
      </Router>
    </>
  )
}
