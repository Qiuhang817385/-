import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import "./NormalLoginForm.scss"
export default class NormalLoginForm extends Component {
  handleSubmit = e => {
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
    e.preventDefault();
  };
  tailLayout = {
    wrapperCol: {
      offset: 8,
      span: 16,
    },
  };

  render () {
    return (
      <Form onSubmit={this.handleSubmit} className="login-form" style={this.props.style}>
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input
            id="Username"
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your Password!' }]}
        >
          <Input
            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
            type="password"
            placeholder="Password"
            id="Password"
          />
        </Form.Item>
        <Form.Item
          {...this.tailLayout}
          name="remember"
          valuePropName="checked"
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
          {/* Or <a href="">register now!</a> */}
        </Form.Item>
      </Form>
    );
  }
}

// const WrappedRegistrationForm = Form.create()(NormalLoginForm);
// ReactDOM.render(<WrappedRegistrationForm />, mountNode);
// export default WrappedRegistrationForm;
// 现在这个Bug修复了,需要再创建了
