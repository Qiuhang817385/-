import React, { Component } from 'react';
import { Form, Input, Select } from 'antd';
const Option = Select.Option;
const FormItem = Form.Item;
export default class RoleForm extends Component {
  RoleformRef = React.createRef();
  render () {
    const formItemLayout = {
      labelCol: { span: 5 },
      wrapperCol: { span: 16 }
    };
    return (<>
      <Form ref={this.RoleformRef} layout="horizontal" initialValues={{ state: 1 }}>
        <FormItem label="角色名称" {...formItemLayout} name='role_name'>
          <Input type="text" placeholder="请输入角色名称" />
        </FormItem>
        <FormItem label="状态" {...formItemLayout} name="state">
          <Select>
            <Option value={1}>开启</Option>
            <Option value={0}>关闭</Option>
          </Select>
        </FormItem>
      </Form>
    </>)
  }
}