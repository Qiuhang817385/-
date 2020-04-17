import React, { Fragment } from 'react'
import { Input, Select, Form, Button, Checkbox, Radio, DatePicker } from 'antd';
import locale from 'antd/es/date-picker/locale/zh_CN';
// import moment from 'moment';
const FormItem = Form.Item;
const Option = Select.Option;
const { RangePicker } = DatePicker;
/**
 * 获取表单数据的集合
 *  getFieldValue
 *  getFieldsValue
 */
// const [form] = Form.useForm();

export default class BaseForm extends React.Component {
  // 怎么直接获取到表单的字段,并且返回去?-->利用ref
  // 每次修改的时候,获取最新的表单值
  formRef = React.createRef();
  // 提交表单且数据验证成功后回调事件
  onFinish = (fieldsValue) => {
    let values;
    // name字段
    // 单选时间控件和范围时间控件目前只能二选一
    if (fieldsValue['range-picker']) {
      const rangeValue = fieldsValue['range-picker'];
      values = {
        ...fieldsValue,
        'rangePicker': [
          rangeValue[0].format('YYYY-MM-DD HH:mm:ss'),
          rangeValue[1].format('YYYY-MM-DD HH:mm:ss'),
        ],
      };
    } else if (fieldsValue['date-picker']) {
      const datePicker = fieldsValue['date-picker'];
      values = {
        ...fieldsValue,
        'datePicker':
          datePicker.format('YYYY-MM-DD HH:mm:ss'),
      };
    } else {
      values = {
        ...fieldsValue
      }
    }
    console.log('Received values of form: ', values);
    /**
     * 调用父级的方法
     */
    this.props.filterSubmit(values)
  }
  /**
   * 正常点击按钮
   */
  onClick = () => {
    console.log('点击')
  }
  /**
   * 重置按钮
   */
  onReset = () => {
    console.log('重置');
    this.formRef.current.resetFields();
  }
  initFormList = () => {
    let arr = []
    // const getField = this.props.form;
    // 结构
    const formList = this.props.formList;
    if (formList && formList.length) {
      formList.forEach((item) => {
        let name = item.name || '';
        let type = item.type;
        let label = item.label;
        let placeholder = item.placeholder;
        let list = item.list;
        let width = item.width;
        let options = item.options;
        let defaultV = item.defaultV;
        arr.push(formItemList(type, name, label, placeholder, list, width, options, defaultV));
        // arr.push(formItemList({ ...item }));
      })
    }
    return arr;
  }
  render () {
    return (
      <Form ref={this.formRef}
        onFinish={this.onFinish}
        initialValues={{ ...this.props.initValue }}
        layout={this.props.formLayout ? this.props.formLayout : 'inline'}
        {...this.props.layout}
      >
        {/* 动态生成表单 */}
        {
          this.initFormList().map((item, index) => {
            return <Fragment key={index}>{item}</Fragment>
          })
        }
        {this.props.submit ? <FormItem>
          <Button type="primary" htmlType="submit" style={{ marginLeft: '30px' }}>
            submit提交按钮
            </Button>
          {/* <Button htmlType="button" onClick={this.onClick}>
            正常点击按钮
              </Button> */}
          <Button style={{ marginLeft: '30px' }} htmlType="button" onClick={this.onReset}>
            重置
          </Button>
        </FormItem> : ''}
      </Form>
    )
  }
}

/**
 * 封装option集合
 * @param {option表数据} data 
 */
let getOptionList = (data) => {
  if (!data) {
    return [];
  }
  let options = [] //[<Option value="0" key="all_key">全部</Option>];
  data.forEach((item) => {
    options.push(<Option value={item.id} key={item.id}>{item.name}</Option>)
  })
  return options;
}
/**
 * 表逻辑封装
 * @param {表单类型}} type 
 * @param {唯一标识id} name 
 * @param {文字提示} label 
 * @param {默认值} placeholder 
 * @param {表单数据} list 
 * @param {宽度} width 
 */
let formItemList = (type, name, label, placeholder, list, width, options, defaultV) => {
  let form = {
    "select": <FormItem name={name} label={label}>
      <Select placeholder={placeholder} style={{ width: width }}>
        {getOptionList(list)}
      </Select>
    </FormItem>,
    'input': <FormItem name={name} label={label}>
      <Input type="text" placeholder={placeholder} style={{ width: width }} />
    </FormItem>,
    'password': <FormItem name={name} label={label}>
      <Input type="password" placeholder={placeholder} style={{ width: width }} />
    </FormItem>,
    'checkbox': <FormItem name={name} label={label}>
      <Checkbox.Group onChange={onCheckBoxChange} options={options} defaultChecked={defaultV} ></Checkbox.Group>
    </FormItem>,
    'radiogroup': <FormItem name={name} label={label}>
      <Radio.Group onChange={onRadioChange} options={options} defaultValue={defaultV} ></Radio.Group>
    </FormItem>,
    'rangepicker': <FormItem name={name} label={label}>
      <RangePicker style={{ width: width }} showTime locale={locale} format="YYYY-MM-DD HH:mm:ss" onChange={onRangeChange} />
    </FormItem>,
    'datepicker': <FormItem name={name} label={label}>
      <DatePicker style={{ width: width }} showTime locale={locale} format="YYYY-MM-DD HH:mm:ss" onChange={onDateChange} />
    </FormItem>,
  }
  return form[type];
}
/**
 * checkBox逻辑
 * @param {事件对象} e 
 */
let onCheckBoxChange = (checkedValues) => {
  console.log(`checkedValues = ${checkedValues}`);
}
/**
 * Radio逻辑
 * @param {事件对象} e 
 */
let onRadioChange = (e) => {
  console.log(`checkedValues = ${e.target.value}`);
}
/**
 * 范围时间控件回调
 * @param {moment} date 
 * @param {正常时间} dateString 
 */
let onRangeChange = (date, dateString) => {
  console.log('dateString :', dateString);
}
/**
 * 单个时间控件
 */
let onDateChange = (date, dateString) => {
  /**
    * date:moment对象
    * dateString:正常字符串
    */
  console.log(date, dateString);
}