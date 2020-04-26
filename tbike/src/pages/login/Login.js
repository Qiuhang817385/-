import React, { Component } from 'react'
import { Form, Input, Button, Checkbox } from 'antd'
import './login.scss'
import { login_request } from './store/actionCreator'
import { connect } from 'react-redux'

const FormItem = Form.Item;
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

class Login extends Component {
  onFinish = (values) => {
    console.log('Success:', values);
    this.props.login_request(values)
  }
  onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  }
  render () {
    const { onFinish, onFinishFailed } = this;
    return (
      <div className='FormWrapper'>
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
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </FormItem>
        </Form>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({

})
const mapDispatchToProps = {
  login_request
}



export default connect(mapStateToProps, mapDispatchToProps)(Login)