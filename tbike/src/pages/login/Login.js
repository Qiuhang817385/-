import React, { Component } from 'react'
import { Form, Input, Button, Checkbox, Tabs, Select, Row, Col } from 'antd'
import './login.scss'
import { login_request } from './store/actionCreator'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom';

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
  state = {
    captchaSrc: 'http://localhost:3030/api/captcha'
  }
  onFinish = (values) => {
    console.log('Success:', values);
    this.props.login_request(values)
  }
  onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  }

  onFinishPhone = (values) => {
    console.log('values', values);
  }
  prefixSelector = (
    <FormItem name="prefix" noStyle>
      <Select style={{ width: 70 }}>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    </FormItem>
  );

  getCaptcha = () => {
    this.setState({
      captchaSrc: 'http://localhost:3030/api/captcha?r=' + Date.now()
    })
  }

  getSms = () => {
    // 获取验证码
    axios
      .get("/api/sms?to=" + this.regForm.phone)
      .then(res => res.data)
      .then(({ code }) => (this.regForm.code = code));
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
                    <Input />
                  </FormItem>
                  <FormItem
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                  >
                    <Input.Password />
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

                {/* 手机号
                图形验证码
                短信验证码
                提交 */}
                <Form
                  {...layout}
                  name="basicPhone"
                  initialValues={{ prefix: '86', }}
                  onFinish={onFinishPhone}
                  onFinishFailed={onFinishFailed}
                >
                  {/* 手机号 */}
                  <FormItem
                    name="phone"
                    label="手机号"
                    rules={[{ required: true, message: 'Please input your phone number!' }]}
                  >
                    <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
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
                          <Input maxLength={6} />
                        </Form.Item>
                      </Col>
                      <Col span={12}>
                        <Button onClick={this.getSms}>获取验证码</Button>
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
  login_request
}



export default connect(mapStateToProps, mapDispatchToProps)(Login)