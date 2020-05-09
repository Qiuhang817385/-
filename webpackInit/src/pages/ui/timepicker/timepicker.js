import React from 'react'
import { Card, DatePicker } from 'antd'
import moment from 'moment';
import './style.scss'
import locale from 'antd/es/date-picker/locale/zh_CN';
import 'moment/locale/zh-cn';
// 国际化配置
const { RangePicker } = DatePicker;
export default function Timepicker () {
  function onChange (date, dateString) {
    /**
     * date:moment对象
     * dateString:正常字符串
     */
    console.log(date, dateString);
  }
  function onRangeChange (date, dateString) {
    console.log('dateString :', dateString);
    //dateString : (2) ["2020-04-14 11:59:55", "2020-04-22 14:59:50"]
  }
  /**
   * 自定义格式
   */
  const dateFormat = 'YYYY/MM/DD';
  const monthFormat = 'YYYY/MM';
  const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];
  return (
    <>
      <Card title="最简单用法" className="card">
        <DatePicker onChange={onChange} />
        <br />
        <DatePicker onChange={onChange} picker="week" />
        <br />
        <DatePicker onChange={onChange} picker="month" />
        <br />
        <DatePicker onChange={onChange} picker="quarter" />
        <br />
        <DatePicker onChange={onChange} picker="year" />
        <br />无边框
        <DatePicker locale={locale} onChange={onChange} picker="year" bordered={false} />
      </Card>
      <Card title="范围选择器" className="card">
        <RangePicker />
        <br />
        <RangePicker showTime onChange={onRangeChange} />
        <br />
        <RangePicker picker="week" />
        <br />
        <RangePicker picker="month" />
        <br />
        <RangePicker picker="year" />
      </Card>
      <Card title="自定义格式" className="card">
        <DatePicker defaultValue={moment('2015/01/01', dateFormat)} format={dateFormat} />
        <br />
        <DatePicker defaultValue={moment('01/01/2015', dateFormatList[0])} format={dateFormatList} />
        <br />
        <DatePicker defaultValue={moment('2015/01', monthFormat)} format={monthFormat} picker="month" />
        <br />
        <RangePicker
          defaultValue={[moment('2015/01/01', dateFormat), moment('2015/01/01', dateFormat)]}
          format={dateFormat}
        />
      </Card>
      <Card title="不可选日期和时间" className="card">
        <DatePicker
          format="YYYY-MM-DD HH:mm:ss"
          disabledDate={disabledDate}
          disabledTime={disabledDateTime}
          showTime={{ defaultValue: moment('00:00:00', 'HH:mm:ss') }}
        />
        <br />
        <DatePicker picker="month" disabledDate={disabledDate} />
        <br />
        <RangePicker disabledDate={disabledDate} />
        <br />
        {/* 可用 disabledDate 和 disabledTime 分别禁止选择部分日期和时间，
        其中 disabledTime 需要和 showTime 一起使用。 */}
        <RangePicker
          disabledDate={disabledDate}
          disabledTime={disabledRangeTime}
          // 配合showTime使用,当选中日期的时候,会自动给你选择好时间
          showTime={{
            hideDisabledOptions: true,
            defaultValue: [moment('00:00:00', 'HH:mm:ss'), moment('11:59:59', 'HH:mm:ss')],
          }}
          format="YYYY-MM-DD HH:mm:ss"
          onChange={onRangeChange}
        />
      </Card>
      <Card title="定制日期单元格" className="card">
        <DatePicker
          locale={locale}
          dateRender={current => {
            const style = {};
            if (current.date() === 1) {
              style.border = '1px solid #1890ff';
              style.borderRadius = '50%';
            }
            return (
              <div className="ant-picker-cell-inner" style={style}>
                {current.date()}
              </div>
            );
          }}
        />
      </Card>
    </>
  )
}


/**
 * 不可选日期和时间
 */

function range (start, end) {
  const result = [];
  for (let i = start; i < end; i++) {
    result.push(i);
  }
  return result;
}

function disabledDate (current) {
  // current是一个moment对象
  // console.log('current', current)
  // Can not select days before today and today
  return current && current < moment().endOf('day');
}

function disabledDateTime () {
  return {
    disabledHours: () => range(0, 24).splice(4, 20),
    disabledMinutes: () => range(30, 60),
    disabledSeconds: () => [55, 56],
  };
}

function disabledRangeTime (_, type) {
  if (type === 'start') {
    return {
      // 不是,是4点到20点之间都不可选
      disabledHours: () => range(0, 60).splice(4, 20),
      disabledMinutes: () => range(30, 60),
      disabledSeconds: () => [55, 56],
    };
  }
  return {
    disabledHours: () => range(0, 60).splice(20, 4),
    disabledMinutes: () => range(0, 31),
    disabledSeconds: () => [55, 56],
  };
}