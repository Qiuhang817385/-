import React, { Component, PureComponent } from 'react'
import { Table } from 'antd'
/**
 * 注意,用于复选框的数据,需要有一个key值
 */
// 表格封装
// 其实就是哪几项
// 数据源，有无边框
// 难的是前面的单选和复选和选择全部
/* 
  <ETable
      dataSource={this.state.list}
      columns={columns}
  />
 */
/**
 *  this.props
 *        rowSelection:Obj 设置单选还是多选 
 *        updateSelectedItem
 *        columns
 */
export default class ETable extends Component {
  state = {
    selectedRowKeys: [],
    selectedItem: null
  }
  /**
   * 处理行点击事件-
   * 单选没有问题-Done   
   * 复选-?
   */
  onRowClick = (record, index) => {
    console.log('onRowClick-record :', record, index);
    // console.table(this.props);
    let rowSelection = this.props.rowSelection;
    //复选框单击操作
    if (rowSelection == 'checkbox') {
      let checkboxSelectedRowKeys = this.state.selectedRowKeys;
      let checkBoxSelectedItem = this.state.selectedItem || [];
      let judgeId = checkboxSelectedRowKeys.indexOf(record.key)
      if (judgeId >= 0) {
        checkboxSelectedRowKeys.splice(judgeId, 1);
        checkBoxSelectedItem.splice(judgeId, 1);
      } else {
        checkboxSelectedRowKeys.push(record.key);
        checkBoxSelectedItem.push(record);
      }
      console.log('checkboxSelectedRowKeys', checkboxSelectedRowKeys)
      console.log('checkBoxSelectedItem :', checkBoxSelectedItem);
      this.setState({
        selectedRowKeys: checkboxSelectedRowKeys,
        selectedItem: checkBoxSelectedItem,
      })
    } else
    // 单选框单击操作
    {
      let selectKey = [index + 1];
      console.log('onRowClick--- :', selectKey);
      console.log('object', this.state.selectedRowKeys)
      // 当前选中和当前点击的如果是同一个,那么直接返回,不做取消的状态
      if (this.state.selectedRowKeys && this.state.selectedRowKeys[0] == index + 1) {
        return;
      }
      this.updateSelectedItem(selectKey, record || {});
    }
  };
  /**
   * 选择框变更,调用原生的,
   * 单选没有问题-Done
   * 复选-Done
   */
  onSelectChange = (selectedRowKeys, selectedRows) => {
    console.log('object', selectedRows)
    console.log('selectedRowKeys', selectedRowKeys)
    console.log('this.state.selectedItem :', this.state.selectedItem);
    let rowSelection = this.props.rowSelection;
    console.log('rowSelection :', typeof rowSelection[0]);
    if (rowSelection == 'checkbox') {
      this.setState({
        selectedRowKeys,
        selectedItem: selectedRows
      });
    } else {
      console.log('这里会执行?')
      this.updateSelectedItem(selectedRowKeys, selectedRows[0]);
    }
  };
  /**
   * 单数据Key
   * 单数据集合/数组形式
   * ids,有无都可以
   */
  updateSelectedItem = (selectedRowKeys, selectedRows) => {
    this.setState({
      selectedRowKeys,
      selectedItem: selectedRows
    })
  }
  /**
   * 全选按钮
   */
  onSelectAll = (selected, selectedRows, changeRows) => {
    let selectKey = [];
    selectedRows.forEach((item, i) => {
      selectKey.push(i);
    });
    this.updateSelectedItem(selectKey, selectedRows[0] || {});
  }
  /**
   * 基础列表
   */
  InitTable = () => {
    /* 
            rowSelection='checkbox'
            selectedRowKeys={this.state.selectedRowKeys22}
            dataSource={this.state.listData}
            columns={columns2}
     */
    // 初始化赋值,之后全部对本身的state进行操作
    // this.setState({
    //   selectedRowKeys
    // })
    console.log(' 刷新之后:', this.state.selectedRowKeys);
    const rowSelection = {
      // 单选
      type: 'radio',
      selectedRowKeys: this.state.selectedRowKeys,
      onChange: this.onSelectChange,
      // 用户手动选择/取消选择某行的回调
      onSelect: (record, selected, selectedRows) => {
        console.log('手动取消选中的回调..')
      },
      onSelectAll: this.onSelectAll
    };

    let row_selection = this.props.rowSelection;
    // 判断表格类型
    // 当属性未false或者null时，说明没有传递值,这个时候没有单选复选框
    // 是一个单纯的表格
    if (row_selection === false || row_selection === null) {
      row_selection = false;
    } else if (row_selection == 'checkbox') {
      //设置类型未复选框
      rowSelection.type = 'checkbox';
    } else {
      //默认是单选
      row_selection = 'radio';
    }
    return <Table
      className="card page-table"
      bordered
      {...this.props}
      rowSelection={row_selection ? rowSelection : null}
      onRow={(record, index) => ({
        onClick: () => {
          if (!row_selection) {
            return;
          }
          this.onRowClick(record, index)
        }
      })}
    />

  }
  // node = null;
  // componentDidMount () {
  //   this.node = this.InitTable()
  // }

  render () {
    return (
      <div>
        {/* {this.node} */}
        {this.InitTable()}
      </div>
    )
  }
}