import React, { Component } from 'react'
// import NEXY from '../NEX系列-Y/NEXY';
// import  NEXZ from '../NEX系列-Z/NEXZ';
import { Link } from 'react-router-dom'
import { Menu } from 'antd';
import './NEXstyle.scss';
export default class NEX extends Component {
  render () {
    const style = {
      backgroundColor: 'aquamarine',
      textDecoration: 'none',
      border: 'none',
      display: 'inline-block',
    }
    return (
      <div className="NEXWrapper">
        <span>
          系列选择:
                </span>
        <Menu onClick={this.handleClick} mode="horizontal" style={style}>
          <Menu.Item key="iQOO">
            <Link to="/NEX/NEXY">NEXY</Link>
          </Menu.Item>
          <Menu.Item key="NEX">
            <Link to="/NEX/NEXZ">NEXZ</Link>
          </Menu.Item>
        </Menu>
        {this.props.children}
      </div>
    )
  }
}
