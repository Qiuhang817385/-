import React, { useRef, useEffect } from 'react'
import { Form, Select } from 'antd';
const formItemLayout = {
  labelCol: {
    span: 5
  },
  wrapperCol: { span: 19 }
}
const FormItem = Form.Item;
const Option = Select.Option;
export default function OpenCityForm (props) {
  let openCityForm = useRef(null);
  useEffect(() => {
    props.formRef(openCityForm);
  })
  return (
    <>
      <Form
        layout="horizontal"
        initialValues={{ city_id: "", op_mode: "1", mode: "" }}
        ref={openCityForm}
      >
        <FormItem label="选择城市" {...formItemLayout}
          name="city_id"
        >
          <Select style={{ width: 100 }}>
            <Option value="">全部</Option>
            <Option value="1">北京市</Option>
            <Option value="2">天津市</Option>
            <Option value="3">深圳市</Option>
          </Select>
        </FormItem>
        <FormItem label="营业模式" {...formItemLayout} name="op_mode">
          <Select style={{ width: 100 }}>
            <Option value="1">自营</Option>
            <Option value="2">加盟</Option>
          </Select>
        </FormItem>
        <FormItem label="用车模式" {...formItemLayout} name="mode">
          <Select style={{ width: 100 }}>
            <Option value="">全部</Option>
            <Option value="1">指定停车点模式</Option>
            <Option value="2">禁停区模式</Option>
          </Select>
        </FormItem>
      </Form>
    </>
  )
}
