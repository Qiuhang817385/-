import React from 'react'
import { Row, Col } from "antd";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import NavLeft from "./components/NavLeft/NavLeft";
import './style/common.scss'
export default function admin (props) {
  return (
    <>
      <Row className="container">
        <Col span={4} className="nav-left">
          <NavLeft />                          {/* 左侧 */}
        </Col>
        <Col span={20} className="main">       {/* 右侧 */}
          <Header />                           {/* 上 */}
          <Row className="content">            {/* 中 */}
            {props.children}
          </Row>
          <Footer />                           {/* 下 */}
        </Col>
      </Row>
    </>
  )
}
