import React, { useState } from 'react'
import { Card, Form, Input, } from 'antd';
// import { UserOutlined, LockOutlined } from '@ant-design/icons';
// import { layout, tailLayout } from './sty';
// const { Option } = Select;
export default function Form4 () {
  const [fields, setFields] = useState([
    {
      name: ['username'],
      value: 'Ant Design',
    },
  ]);
  // 把fields当中的数据渲染到页面当中
  return (
    <>
      <Card title="表单数据存储于上层组件" className="card-wrap">
        <CustomizedForm
          fields={fields}
          onChange={newFields => {
            setFields(newFields);
          }}
        />
        {/* <pre className="language-bash">{JSON.stringify(fields, null, 2)}</pre> */}
      </Card>
    </>
  )
}

const CustomizedForm = ({ onChange, fields }) => (
  <Form
    name="global_state"
    layout="inline"
    fields={fields}
    onFieldsChange={(changedFields, allFields) => {
      onChange(allFields);
    }}
  >
    <Form.Item
      name="username"
      label="用户名"
      rules={[
        {
          required: true,
          message: 'Username is required!',
        },
      ]}
    >
      <Input />
    </Form.Item>
  </Form>
);