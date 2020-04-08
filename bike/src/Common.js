import React, { Component } from "react";
import Header from "./components/Header/Header";
import { Row } from "antd";
import "./style/common.scss"
export default class Common extends Component {
  render () {

    return (
      <div>
        <Row className="simple-page">
          <Header menuType="second" />
        </Row>
        <Row className="content">
          {this.props.children}
          {/* longnocom */}
        </Row>
      </div>
    );
  }
}
