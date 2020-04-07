import React from 'react';
import { Select } from 'antd'
const Option = Select.Option;
export default {
  /**
   * 
   * @param {日期} date 
   */
  formateDate (date) {
    if (!date) return '';
    let time = new Date(date);
    let getdate;
    let month;
    parseInt(time.getMonth()) < 10 ? month = '0' + (parseInt(time.getMonth()) + 1) : month = (parseInt(time.getMonth()) + 1)
    parseInt(time.getDate()) < 10 ? getdate = '0' + time.getDate() : getdate = time.getDate();
    return time.getFullYear() + '-' +
      (month) + '-' +
      (getdate) + "   " +
      time.getHours() + ":" +
      time.getMinutes() + ":" +
      time.getSeconds();
  },
  pagination (data, callback) {
    let page = {
      onChange: (current) => {
        callback(current)
      },
      current: data.result.page,
      pageSize: data.result.page_size,
      total: data.result.total,
      // 用于显示数据的总量和当前的数据
      showTotal: () => {
        return `共${data.result.total}条`
      },
      // 是否快速跳转到某页
      showQuickJumper: true
    }
    return page;

  },
  getOptionList (data) {
    if (!data) {
      return [];
    }
    let options = [] //[<Option value="0" key="all_key">全部</Option>];
    data.map((item) => {
      options.push(<Option value={item.id} key={item.id}>{item.name}</Option>)
    })
    return options;
  }
}