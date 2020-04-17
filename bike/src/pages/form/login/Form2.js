import React from 'react'
import { Card, Form, Input, Button, InputNumber } from 'antd';
// import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { layout, tailLayout } from './sty';
export default function Form2 () {
  /* 
    Form 为验证提供了默认的错误提示信息，
    你可以通过配置 validateMessages 属性，修改对应的提示模板。
    一种常见的使用方式，是配置国际化提示信息：
    修改模板的配置信息
   */
  // const validateMessages = {
  //   required: '请输入${label}!',
  //   types: {
  //     email: '${label} is not validate email!',
  //     number: '${label} is not a validate number!',
  //   },
  //   number: {
  //     range: '${label} must be between ${min} and ${max}',
  //   },
  // };
  const onFinish = values => {
    console.log(values);
    /* 
      user:
        name: "qwq"
        email: "wq@qq.com"
        age: 12
        website: "www.q.com"
        introduction: "neq"
     */
  };
  return (
    <>
      <Card title="嵌套结构与校验信息" className="card-wrap">
        {/* 用户名 */}
        {/* <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}> */}
        <Form {...layout} name="nest-messages" onFinish={onFinish} >
          <Form.Item
            name={['user', 'name']}
            label="用户名"
            rules={[{ required: true, }]}
          >
            <Input />
          </Form.Item>

          {/* 邮箱 */}
          <Form.Item
            name={['user', 'email']}
            label="Email"
            rules={[{ type: 'email', },]}
          >
            <Input />
          </Form.Item>

          {/* 年龄 */}
          <Form.Item
            name={['user', 'age']}
            label="Age"
            rules={[{ type: 'number', min: 0, max: 99, },
            ]}
          >
            <InputNumber />
          </Form.Item>

          {/* 站点信息 */}
          <Form.Item name={['user', 'website']} label="Website">
            <Input />
          </Form.Item>

          {/* 个人简介 */}
          <Form.Item name={['user', 'introduction']} label="Introduction">
            <Input.TextArea />
          </Form.Item>

          {/* 提交按钮 */}
          <Form.Item wrapperCol={tailLayout}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>

        </Form>
      </Card>
    </>
  )
}