import React, { Component, createRef } from 'react'
import { notification, Form, Input, Button, Checkbox, Tabs, Select, Row, Col } from 'antd'
import './login.scss'
import { login_request, login_phone_request } from './store/actionCreator'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom';
import axios from 'axios';
const FormItem = Form.Item;
const { TabPane } = Tabs;
const { Option } = Select;
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 10 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 13 },
};

class Login extends Component {
  regForm = createRef()
  send = createRef();
  state = {
    captchaSrc: 'http://localhost:3030/api/captcha',
    sms: '',
  }
  /**
   * 账号密码登录校验
   */
  onFinish = (values) => {
    console.log('Success:', values);
    this.props.login_request(values)
  }
  onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  }
  /**
   * 手机号登录校验
   */
  onFinishPhone = (values) => {
    console.log('values', values);
    // 验证码是不会交给前端校验的,是后端的工作,这里模拟一下
    console.log('values.sms.toString', values.sms.toString())
    console.log('this.state.sms', this.state.sms)

    if (values.sms.toString() === this.state.sms) {
      console.log('ok')
    } else {
      alert('验证码错误')
    }
    this.props.login_phone_request(values)
  }
  /**
   * 前缀
   */
  prefixSelector = (
    <FormItem name="prefix" noStyle>
      <Select style={{ width: 70 }}>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    </FormItem>
  );
  /**
   * 图形验证码
   */
  getCaptcha = () => {
    this.setState({
      captchaSrc: 'http://localhost:3030/api/captcha?r=' + Date.now()
    })
  }
  /**
   * 短信验证码
   */
  getSms = () => {
    let i = 60;
    let timer;
    const btn = this.send.current.buttonNode;
    console.log('this.btn', this.send)
    // 获取验证码
    let phone = this.regForm.current.getFieldsValue().phone
    console.log('phone', phone)
    let reg = /^1[3-8][0-9]{9}$/;   // console.log(reg.test(x))
    // 输入phone
    if (phone) {
      if (reg.test(parseInt(phone))) {
        let countDown = () => {
          if (i === 1) {
            clearInterval(timer);
            btn.disabled = false;
            btn.innerText = `获取验证码`;
            i = 60;
          } else {
            i--;
            btn.disabled = true;
            btn.innerText = `${i}秒后重新发送`;
            timer = setTimeout(countDown, 1000)
          }
        }
        countDown()
        axios
          .get("http://localhost:3030/api/sms?to=" + phone)
          .then(res => res.data)
          .then(({ code, msg }) => {
            console.log('msg', msg)
            this.setState({
              sms: msg.toString()
            })
          });
      } else {
        notification.warning({
          message: '短信校验',
          description: '号码格式不正确'
        })
      }
    } else {
      notification.error({
        message: '短信校验',
        description: '没有输入号码'
      })
    }
  }
  render () {
    const { onFinish, onFinishFailed, onFinishPhone, prefixSelector } = this;
    const { isLogin } = this.props;
    if (!isLogin) {
      return (
        <div className='wrapper'>
          <div className="icon">
            <img src="/logo192.png" alt="1" />
            {/* <img src="/carousel-img/carousel-1.jpg" alt="1" /> */}
          </div>
          <div className='FormWrapper'>
            <Tabs className='tab' defaultActiveKey="1">
              <TabPane tab="用户名密码登录" key="1">
                <Form
                  {...layout}
                  name="basic"
                  initialValues={{ remember: true }}
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                >
                  <FormItem
                    label="Username"
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                  >
                    <Input placeholder='请输入用户名' />
                  </FormItem>
                  <FormItem
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                  >
                    <Input.Password placeholder='请输入密码' />
                  </FormItem>
                  <FormItem
                    {...tailLayout} name="remember" valuePropName="checked"
                    style={{ textAlign: 'left' }}
                  >
                    <Checkbox>Remember me</Checkbox>
                  </FormItem>
                  <FormItem
                    {...tailLayout}
                    style={{ textAlign: 'left' }}
                  >
                    <Button type="primary" htmlType="submit">
                      Submit
                    </Button>
                  </FormItem>
                </Form>
              </TabPane>
              <TabPane tab="手机号验证码登录" key="2">

                {/* 
                手机号
                图形验证码
                短信验证码
                提交 */}
                <Form
                  {...layout}
                  name="basicPhone"
                  initialValues={{ prefix: '86', }}
                  onFinish={onFinishPhone}
                  onFinishFailed={onFinishFailed}
                  ref={this.regForm}
                >
                  {/* 手机号 */}
                  <FormItem
                    name="phone"
                    label="手机号"
                    rules={[{ required: true, message: 'Please input your phone number!' }]}
                  >
                    <Input placeholder={'调用阿里云服务发送短信'} addonBefore={prefixSelector} maxLength={11} style={{ width: '100%' }} />
                  </FormItem>
                  {/* 发送验证码按钮 */}
                  <Form.Item label="短信验证码" >
                    <Row gutter={9}>
                      <Col span={12}>
                        <Form.Item
                          name="sms"
                          noStyle
                          rules={[{ required: true, message: 'Please input the captcha you got!' }]}
                        >
                          <Input placeholder="请输入短信验证码" maxLength={6} />
                        </Form.Item>
                      </Col>
                      <Col span={12}>
                        <Button ref={this.send} onClick={(e) => { this.getSms(e) }}>获取验证码</Button>
                      </Col>
                    </Row>
                  </Form.Item>
                  <Form.Item label="图形验证码" extra="We must make sure that your are a human.">
                    <Row gutter={9}>
                      <Col span={12}>
                        <Form.Item
                          name="captcha"
                          noStyle
                          rules={[{ required: true, message: 'Please input the captcha you got!' }]}
                        >
                          <Input maxLength={4} />
                        </Form.Item>
                      </Col>
                      <Col span={12}>
                        <img style={{ height: '40px' }} src={this.state.captchaSrc} onClick={this.getCaptcha} alt='1' />
                      </Col>
                    </Row>
                  </Form.Item>
                  <FormItem
                    {...tailLayout}
                    style={{ textAlign: 'left' }}
                  >
                    <Button type="primary" htmlType="submit">
                      Submit
                    </Button>
                  </FormItem>
                </Form>

              </TabPane>
            </Tabs>

          </div>
        </div>
      )
    } else {
      return (
        <Redirect to='/'></Redirect>
      )
    }

  }
}

const mapStateToProps = (state, ownProps) => ({
  isLogin: state['login_reducer'].isLogin
})
const mapDispatchToProps = {
  login_request, login_phone_request
}



export default connect(mapStateToProps, mapDispatchToProps)(Login)