import React, { useState, useEffect } from 'react'
import { Card, Form, Input, Button, Select } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { layout, tailLayout } from './sty';
export default function Form1 () {
  const { Option } = Select;
  // 对表单域的数据进行交互
  const [form] = Form.useForm();
  const [, forceUpdate] = useState(); // To disable submit button at the beginning.

  useEffect(() => {
    forceUpdate({});
  }, []);

  const onFinish = values => {
    console.log('Finish:', values);
  };
  const onReset = () => {
    form.resetFields();
  };


  const onFill = () => {
    form.setFieldsValue({
      note: 'Hello world!',
      gender: 'male',
    });
  };
  // 作用域进行交互,多选
  const onGenderChange = value => {
    switch (value) {
      case 'male':
        form.setFieldsValue({
          note: 'Hi, man!',
        });
        return;
      case 'female':
        form.setFieldsValue({
          note: 'Hi, lady!',
        });
        return;
      case 'other':
        form.setFieldsValue({
          note: 'Hi there!',
        });
    }
  };
  const handleonValuesChange = (e) => {
    //console.log(e)//{note: "1"}{gender: "male"}
    //相当于KeyUp事件 或者 onChange 事件
    let a = form.getFieldValue('note')
    // console.log(a)
  }
  const handleonFieldsChange = (e) => {
    // 触摸事件,使用的机会比较少
    // console.log(e[0])
  }

  return (
    <>
      <Card title="交互表单1" className="card-wrap">
        {/* 通过 Form.useForm 对表单数据域进行交互。 */}
        <Form {...layout} form={form} name="control-hooks" onFinish={onFinish} onFieldsChange={handleonFieldsChange} onValuesChange={handleonValuesChange}>
          {/* 姓名 */}
          <Form.Item
            name="note"
            label="Note"
            rules={[{ required: true }]}
          >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="note" />
          </Form.Item>

          {/* 性别下拉选项 */}
          <Form.Item
            name="gender"
            label="Gender"
            rules={[{ required: true, },
            ]}
          >
            <Select
              placeholder="Select a option and change input text above"
              onChange={onGenderChange}
              allowClear
            >
              <Option value="male">male</Option>
              <Option value="female">female</Option>
              <Option value="other">other</Option>
            </Select>
          </Form.Item>

          {/* 待渲染 */}
          <Form.Item
            noStyle
            shouldUpdate={(prevValues, currentValues) => prevValues.gender !== currentValues.gender}
          >
            {({ getFieldValue }) =>
              getFieldValue('gender') === 'other' ? (
                <Form.Item
                  name="customizeGender"
                  label="Customize Gender"
                  rules={[{ required: true, },]}
                >
                  <Input />
                </Form.Item>
              ) : null
            }
          </Form.Item>
          {/* 按钮组 */}
          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
            <Button htmlType="button" onClick={onReset}>
              Reset
              </Button>
            <Button type="link" htmlType="button" onClick={onFill}>
              Fill form
              </Button>
          </Form.Item>
        </Form>
      </Card>
    </>
  )
}
