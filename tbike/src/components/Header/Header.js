import React, { Component } from 'react'
import { Row, Col, Button } from 'antd'
import axios from '../../axios/axios';
import Util from '../../utils/utils'
import './index.scss'
import { connect } from 'react-redux'
import { logout_request } from './../../pages/login/store/actionCreator';
import { withRouter } from 'react-router-dom';
class Header extends Component {
  state = {
    userName: '',
    sysTime: '',
    dayPictureUrl: '',
    weather: '',
  }

  componentDidMount () {
    // this.setState({
    //   userName: '邱航',
    // })
    setInterval(() => {
      // 传递这个time完全没有必要啊
      let sysTime = Util.formateDate(new Date().getTime());
      this.setState({
        sysTime
      })
    }, 1000)
    // this.getWeatherAPIData();
  }
  getWeatherAPIData () {
    let city = '秦皇岛';
    axios.jsonp({
      url: 'http://api.map.baidu.com/telematics/v3/weather?location=' + encodeURIComponent(city) + '&output=json&ak=3p49MVra6urFRGOT9s8UBWr2'
    }).then((res) => {
      console.log('res :', res);
      if (res.status === 'success') {
        let data = res.results[0].weather_data[0];
        console.log('data :', data);
        this.setState({
          dayPictureUrl: data.dayPictureUrl,
          weather: data.weather
        })
      }
    })
  }
  logout = () => {
    this.props.logout_request();
    window.location.href = '/';
  }
  render () {
    // console.log('this.props', this.props)
    const { menuType, userInfo } = this.props;
    const { sysTime, userName, dayPictureUrl, weather } = this.state;
    return (
      <div className="header">
        <Row className="header-top">
          {
            menuType ? <Col span={6} className="logoIcon">
              <img src="/assets/logo-ant.svg" alt="1" />
              <span>通用管理器</span>
            </Col> : ''
          }
          <Col span={menuType ? 18 : 24}>
            <span>欢迎,{userInfo.username}</span>
            <Button type="primary" onClick={this.logout}>退出</Button>
          </Col>
        </Row>
        {
          menuType ? '' : <Row className="breadcrumb">
            <Col span={4} className="breadcrumb-title">
              {/* 面包屑 */}
              首页
            </Col>
            <Col span={20} className="weather">
              <span className="date">{sysTime}</span>
              <span className="weather-img">
                <img src={dayPictureUrl} alt="" />
              </span>
              <span className="weather-detail">
                {weather}
              </span>
            </Col>
          </Row>
        }
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  userInfo: state['login_reducer'].userInfo
})
const mapDispatchToProps = {
  logout_request
}



export default connect(mapStateToProps, mapDispatchToProps)(Header)