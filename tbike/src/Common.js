import React, { Component } from "react";
import Header from "./components/Header/Header";
import { Row, Col } from "antd";
import "./style/common.scss"
export default class Common extends Component {
  render () {
    // 通用界面,新增了Col
    return (
      <>
        <Row className="simple-page" >
          <Col span={24}>
            <Header menuType="second" />
          </Col>
        </Row>
        <Row className="content">
          <Col span={24}>
            {this.props.children}
            {/* longnocom */}
          </Col>
        </Row>
      </>
    );
  }
}