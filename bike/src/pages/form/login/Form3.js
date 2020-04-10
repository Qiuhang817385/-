import React from 'react'
import { Card, Form, Input, Button, Tooltip, InputNumber, Select, message, Icon, Checkbox } from 'antd';
// import { UserOutlined, LockOutlined } from '@ant-design/icons';
// import { layout, tailLayout } from './sty';
const { Option } = Select;
export default function Form3 () {
  const onFinish = values => {
    console.log(values);
  };
  return (
    <>
      <Card title="嵌套表单控件" className="card-wrap">
        {/* 校验一 */}
        <Form labelCol={{ span: 9 }} wrapperCol={{ span: 12 }} name="complex-messages" onFinish={onFinish}>
          <Form.Item label="Username">
            {/* 使用noStyle */}
            <Form.Item
              name="username"
              noStyle
              rules={[{ required: true, message: 'Username is required' }]}
            >
              <Input style={{ width: 160 }} placeholder="Please input" />
            </Form.Item>
            {/* 提示信息 */}
            <Tooltip title="Useful information">
              <a href="#API" style={{ margin: '0 8px' }}>
                Need Help?
              </a>
            </Tooltip>
          </Form.Item>

          {/* 校验二 */}
          <Form.Item label="地址">
            <Input.Group compact>
              {/* 校验二.一 */}
              <Form.Item
                name={['address', '省份']}
                noStyle
                rules={[{ required: true, message: 'Province is required' }]}
              >
                <Select placeholder="选择省份">
                  <Option value="浙江">浙江</Option>
                  <Option value="江苏">江苏</Option>
                </Select>
              </Form.Item>
              {/* 校验二.二 */}
              <Form.Item
                name={['address', '街道']}
                noStyle
                rules={[{ required: true, message: 'Street is required' }]}
              >
                <Input style={{ width: '50%' }} placeholder="请输入街道" />
              </Form.Item>
            </Input.Group>
          </Form.Item>

          {/* 校验三 */}
          <Form.Item label="BirthDate" style={{ marginBottom: 0 }}>
            {/* 校验三.一 */}
            <Form.Item
              name="year"
              rules={[{ required: true }]}
              style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}
            >
              <Input placeholder="Input birth year" />
            </Form.Item>
            {/* 校验三.二*/}
            <Form.Item
              name="month"
              rules={[{ required: true }]}
              style={{ display: 'inline-block', width: 'calc(50% - 8px)', margin: '0 8px' }}
            >
              <Input placeholder="Input birth month" />
            </Form.Item>
          </Form.Item>

          {/* 提交 */}
          <Form.Item label=" " colon={false}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </>
  )
}