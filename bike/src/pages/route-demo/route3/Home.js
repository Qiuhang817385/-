import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Home extends Component {
  // Home是根节点
  render () {
    return (
      // 路由的根节点
      <div>
        <ul>
          <li>
            <Link to="/main">Main2</Link>
          </li>
          <li>
            <Link to={{ pathname: '/about', search: `${123}`, state: { name: 'qiu' }, a: { age: 12 } }}>About2</Link>
          </li>
          <li>
            <Link to="/imooc">imooc这个页面实际不存在</Link>
          </li>
        </ul>
        {this.props.children}
      </div>
    )
  }
}
