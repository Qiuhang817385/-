import React, { Component } from 'react'
import { Link } from 'react-router-dom';
export default class Main extends Component {
  render () {
    return (
      <div>
        <br />
        {
          [1, 2, 3, 4, 5, 6, 7, 8].map((item) => {
            return (
              <div>
                {/* 路由表,path="/main/:id" */}
                <Link to={`/main/${item}`}>商品{item}页面</Link>
                {/* 获取this.props.match.pramps.id */}
              </div>
            )
          })
        }
        {this.props.children}
      </div>
    )
  }
}
