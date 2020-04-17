import React, { Component } from 'react'
import { Card, Row, Col } from 'antd';
export default class gallery extends Component {
  render () {
    const imgs = [
      ['1.png', '2.png', '3.png', '4.jpg', '5.png'],
      ['21.png', '13.png', '18.png', '9.jpg', '10.png'],
      ['11.png', '12.png', '7.jpg', '14.png', '15.png'],
      ['16.png', '17.png', '8.jpg', '19.png', '20.png'],
      ['6.jpg', '22.png', '23.png', '24.png', '25.jpg'],
    ]
    const imgList = imgs.map((list) => {
      return list.map((item, index) => {
        return (
          <Card
            key={index}
            style={{ marginBottom: 10 }}
            cover={<img alt="n" src={'/gallery/' + item}
              onClick={() => this.oppenGallery(item)}
            />}
          >
            <Card.Meta
              title="react Admin"
              description="content"
            />
          </Card>
        )
      })
    })
    return (
      <>
        <Row gutter={10}>
          <Col span={5}>
            {imgList[0]}
          </Col>
          <Col span={5}>
            {imgList[1]}
          </Col>
          <Col span={5}>
            {imgList[2]}
          </Col>
          <Col span={5}>
            {imgList[3]}
          </Col>
          <Col span={4}>
            {imgList[4]}
          </Col>
        </Row>
      </>
    )
  }
}
