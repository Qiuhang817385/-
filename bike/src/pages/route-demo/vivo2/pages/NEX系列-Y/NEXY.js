import React, { Component } from 'react'
// import { HashRouter, Link, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
// import NEXY1 from './NEXY1';
// import NEXY2 from './NEXY2';
export default class NEXY extends Component {
  render () {
    return (
      <div>
        NEXY系列
        <br />
        <Link to='/NEX/NEXY/NEXY1'>NEX/Y系列1期</Link>
        <br />
        <Link to='/NEX/NEXY/NEXY2'>NEX/Y系列2期</Link>
        <br />
        {this.props.children}
      </div>
    )
  }
}
