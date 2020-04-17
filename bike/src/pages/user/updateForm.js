import React, { useEffect, useRef } from 'react'
import { Form, Input, Radio, DatePicker } from 'antd'
import locale from 'antd/es/date-picker/locale/zh_CN';
const FormItem = Form.Item;

export default function UpdateForm (props) {
  let updateForm = useRef(null);
  useEffect(() => {
    props.reset(updateForm);
    props.filterSubmit(updateForm.current.getFieldsValue())
  })
  let options = [
    // <ManOutlined />
    { label: '男', value: 1 },
    { label: '女', value: 2 },
  ]

  let onRadioChange = (e) => {
    console.log(`checkedValues = ${e.target.value}`);
  }
  let onDateChange = (date, dateString) => {
    /**
      * date:moment对象
      * dateString:正常字符串
      */
    console.log(date, dateString);
  }

  console.log('props :', props);

  // let onFinish = (fieldsValue) => {
  //   let values;
  //   // name字段
  //   // 单选时间控件和范围时间控件目前只能二选一
  //   if (fieldsValue['date-picker']) {
  //     const datePicker = fieldsValue['date-picker'];
  //     values = {
  //       ...fieldsValue,
  //       'datePicker':
  //         datePicker.format('YYYY-MM-DD HH:mm:ss'),
  //     };
  //   } else {
  //     values = {
  //       ...fieldsValue
  //     }
  //   }
  //   console.log('Received values of form: ', values);
  //   /**
  //    * 调用父级的方法
  //    */
  //   props.filterSubmit(values)
  // }
  let layout = {
    labelCol: {
      span: 6,
    },
    wrapperCol: {
      span: 15,
    },
  }
  return (
    <>
      <Form ref={updateForm} layout='horizontal' {...layout} initialValues={{ ...props.data.initValue }}>
        <FormItem name='username' label={'姓名'}>
          <Input type="text" />
        </FormItem>
        <FormItem name='sex' label={'性别'}>
          <Radio.Group onChange={onRadioChange} options={options} ></Radio.Group>
          {/* defaultValue={defaultV ? defaultV : null} */}
        </FormItem>
        <FormItem name='date-picker' label={'生日'}>
          <DatePicker showTime locale={locale} format="YYYY-MM-DD HH:mm:ss" onChange={onDateChange} />
        </FormItem>
        <FormItem name='address' label={'联系地址'}>
          <Input type="text" />
        </FormItem>
      </Form>
    </>
  )
}
