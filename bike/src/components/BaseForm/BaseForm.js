import React from 'react'
import { Input, Select, Form, Button, CheckBox, Radio } from 'antd';
import utils from '../../utils/utils'
const FormItem = Form.Item;
const Option = Select.Option;
export default class BaseForm extends React.Component {
  // 表逻辑封装
  formItemList = (type, name, label, placeholder, list, initialValues, width) => {
    let form = {
      "select": <FormItem
        name={name}
        label={label}>
        <Select
          placeholder={placeholder}
          style={{ width: width }}>
          {/* 获取表逻辑结构 */}
          {utils.getOptionList(list)}
        </Select>
      </FormItem>
      ,
    }
    return form[type];
  }
  initFormList = () => {
    let arr = []
    // getFieldValue
    // getFieldsValue
    // 值
    // const getField = this.props.form;
    // 结构
    const formList = this.props.formList;
    console.log('formList :', formList);
    if (formList && formList.length) {
      formList.forEach((item, index) => {
        let name = item.name || '';
        let type = item.type;
        let label = item.label;
        let placeholder = item.placeholder;
        let list = item.list;
        let initialValues = item.initialValues || '';
        let width = item.width;
        arr.push(this.formItemList(type, name, label, placeholder, list, initialValues, width));
      })
    }
    console.log('arr :', arr);
    return arr;
  }
  render () {
    return (
      <Form initialValues={{ ...this.props.initValue }} layout="inline">
        {/* 动态生成表单 */}
        {
          this.initFormList().map((item) => {
            return item
          })
        }
      </Form>
    )
  }
}
