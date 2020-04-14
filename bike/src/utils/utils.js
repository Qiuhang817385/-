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
    console.log('data :', data);
    console.log('callback', callback)
    let curr = parseInt(data.result.page);
    let cur = curr;
    console.log('curr :', curr);
    console.log('cur :', cur);
    let page = {
      // 当前页的回调
      onChange: (current) => {
        cur = current;
        callback && callback(current)
        // 展示的问题,已经调整切换页面了
      },
      // 当前页
      current: parseInt(cur),
      // 每页条数
      pageSize: data.result.page_size,
      // 总数
      total: data.result.item_list.length,
      // 修改显示
      showTotal: (total) => {
        console.log('total :', total);
        return `共${data.result.item_list.length}条`
        // return `共${total}条`
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
  },


  /**
    * ETable 行点击通用函数
    * @param {*选中行的索引} selectedRowKeys
    * @param {*选中行对象} selectedItem
    */
  updateSelectedItem (selectedRowKeys, selectedRows, selectedIds) {
    if (selectedIds) {
      this.setState({
        selectedRowKeys,
        selectedIds: selectedIds,
        selectedItem: selectedRows
      })
    } else {
      this.setState({
        selectedRowKeys,
        selectedItem: selectedRows
      })
    }
  },
}