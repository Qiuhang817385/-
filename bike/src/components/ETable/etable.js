import React, { Component } from 'react'
import Utils from '../../utils/utils'
import { Table } from 'antd'
// 表格封装
// 其实就是哪几项
// 数据源，有无边框
// 难的是前面的单选和复选和选择全部
/* 
  <ETable
      updateSelectedItem={Utils.updateSelectedItem.bind(this)}
      selectedRowKeys={this.state.selectedRowKeys}
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
   * 处理行点击事件
   */
  onRowClick = (record, index) => {
    console.log('this.props :', this.props);
    // console.table(this.props);
    let rowSelection = this.props.rowSelection;
    //复选框单击操作
    if (rowSelection == 'checkbox') {
      let selectedRowKeys = this.props.selectedRowKeys;
      let selectedIds = this.props.selectedIds;
      console.log('selectedIds :', selectedIds);
      let selectedItem = this.props.selectedItem || [];
      // Ids是什么?
      if (selectedIds) {
        const i = selectedIds.indexOf(record.id);
        //没有,添加
        if (i == -1) {//避免重复添加
          selectedIds.push(record.id)
          selectedRowKeys.push(index);
          selectedItem.push(record);
        }
        // 有,删除
        else {
          selectedIds.splice(i, 1);
          selectedRowKeys.splice(i, 1);
          selectedItem.splice(i, 1);
        }
      } else {
        console.log('record.id :', record);
        selectedIds = [record.id];
        selectedRowKeys = [index]
        selectedItem = [record];
      }
      this.updateSelectedItem(selectedRowKeys, selectedItem || {}, selectedIds);
    } else
    // 单选框单击操作
    {
      let selectKey = [index];
      const selectedRowKeys = this.props.selectedRowKeys;
      if (selectedRowKeys && selectedRowKeys[0] == index) {
        return;
      }
      this.updateSelectedItem(selectKey, record || {});
    }
  };
  /**
   * 选择框变更,调用原生的
   */
  onSelectChange = (selectedRowKeys, selectedRows) => {
    console.log('selectedRows', selectedRows)
    let rowSelection = this.props.rowSelection;
    console.log('rowSelection :', rowSelection);
    const selectedIds = [];
    if (rowSelection == 'checkbox') {
      selectedRows.map((item) => {
        selectedIds.push(item.id);
      });
      this.setState({
        selectedRowKeys,
        selectedIds: selectedIds,
        selectedItem: selectedRows[0]
      });
    }
    this.updateSelectedItem(selectedRowKeys, selectedRows[0], selectedIds);
  };
  /**
   * 单数据Key
   * 单数据集合/数组形式
   * ids,有无都可以
   */
  updateSelectedItem = (selectedRowKeys, selectedRows, selectedIds) => {
    if (selectedIds) {
      this.setState({
        selectedRowKeys,
        selectedIds: selectedIds,
        selectedItem: selectedRows
      })
    } else {
      console.log('单')
      console.log('selectedRowKeys :', selectedRowKeys);
      console.log('selectedRows :', selectedRows);
      this.setState({
        selectedRowKeys,
        selectedItem: selectedRows
      })
    }
  }
  /**
   * 全选按钮
   */
  onSelectAll = (selected, selectedRows, changeRows) => {
    let selectedIds = [];
    let selectKey = [];
    selectedRows.forEach((item, i) => {
      selectedIds.push(item.id);
      selectKey.push(i);
    });
    this.updateSelectedItem(selectKey, selectedRows[0] || {}, selectedIds);
  }
  /**
   * 基础列表
   */
  getOptions = () => {
    let p = this.props;
    // 业务本身,其实没用
    const name_list = {
      "订单编号": 170,
      "车辆编号": 80,
      "手机号码": 96,
      "用户姓名": 70,
      "密码": 70,
      "运维区域": 300,
      "车型": 42,
      "故障编号": 76,
      "代理商编码": 97,
      "角色ID": 64
    };
    // 列头
    if (p.columns && p.columns.length > 0) {
      p.columns.forEach((item) => {
        //如果没有title,返回
        if (!item.title) {
          return
        }
        if (!item.width) {
          // title包含时间和持续时间--->宽度132
          if (item.title.indexOf("时间") > -1 && item.title.indexOf("持续时间") < 0) {
            item.width = 132
          } else if (item.title.indexOf("图片") > -1) {
            item.width = 86
          } else if (item.title.indexOf("权限") > -1 || item.title.indexOf("负责城市") > -1) {
            item.width = '40%';
            item.className = "text-left";
          } else {
            if (name_list[item.title]) {
              item.width = name_list[item.title];
            }
          }
        }
        item.bordered = true;
      })
    }
    //多选框
    const { selectedRowKeys } = this.props;
    const rowSelection = {
      // 单选
      type: 'radio',
      selectedRowKeys,
      onChange: this.onSelectChange,
      onSelect: (record, selected, selectedRows) => {
        console.log('1221412..')
      },
      onSelectAll: this.onSelectAll
    };


    let row_selection = this.props.rowSelection;
    // 当属性未false或者null时，说明没有单选或者复选列
    if (row_selection === false || row_selection === null) {
      row_selection = false;
    } else if (row_selection == 'checkbox') {
      //设置类型未复选框
      rowSelection.type = 'checkbox';
    } else {
      //默认未单选
      row_selection = 'radio';
    }
    // 初始化selectRowKeys
    // rowSelection.selectedRowKeys = [];

    console.log('row_selection194 :', row_selection);
    console.log('rowSelection195 :', rowSelection);

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
  render () {
    return (
      <div>
        {this.getOptions()}
      </div>
    )
  }
}
