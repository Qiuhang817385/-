import React, { Component } from 'react'
import { Card, Carousel } from 'antd';
import './style.scss'
export default class carousel extends Component {
  render () {
    return (
      <>
        <Card title='文字背景轮播' className="card-wrap">
          <Carousel autoplay effect="fade">
            <div><h3>1</h3></div>
            <div><h3>2</h3></div>
            <div><h3>3</h3></div>
            <div><h3>4</h3></div>
          </Carousel>
        </Card>
        <Card title='图片背景轮播' className="slider-wrap card-wrap" >
          <Carousel autoplay effect="fade" >
            <div className="imgwrap">
              <img src="/carousel-img/carousel-1.jpg" alt="1" />
            </div>
            <div className="imgwrap">
              <img src="/carousel-img/carousel-2.jpg" alt="2" />
            </div>
            <div className="imgwrap">
              <img src="/carousel-img/carousel-3.jpg" alt="3" />
            </div>
          </Carousel>
        </Card>
      </>
    )
  }
}
