import React, { useState } from 'react'
import { Table } from 'antd'
export default function ETable (props) {
  const [selectedRowKeys, setSelectedRowKeys] = useState([])
  const [selectedItem, setSelectedItem] = useState()
  const [selectedItemCheck, setSelectedItemCheck] = useState([])
  /**
   * 处理行点击事件-
   * 单选没有问题-Done   
   * 复选-?
   */
  let onRowClick = (record, index) => {
    let rowSelection = props.rowSelection;
    //复选框单击操作
    if (rowSelection == 'checkbox') {
      // selectedItem = [];
      let judgeId = selectedRowKeys.indexOf(record.key);
      if (judgeId >= 0) {
        selectedRowKeys.splice(judgeId, 1);
        selectedItemCheck.splice(judgeId, 1);
      } else {
        selectedRowKeys.push(record.key);
        selectedItemCheck.push(record);
      }
      setSelectedItemCheck(selectedItemCheck);
      setSelectedRowKeys([...selectedRowKeys])
    } else
    // 单选框单击操作
    {
      let selectKey = [index + 1];
      // 当前选中和当前点击的如果是同一个,那么直接返回,不做取消的状态
      if (selectedRowKeys && selectedRowKeys[0] == index + 1) {
        return;
      }
      setSelectedRowKeys([...selectKey])
      setSelectedItem(record || {})
    }
  };
  /**
   * 选择框变更,调用原生的,
   * 单选没有问题-Done
   * 复选-Done
   */
  let onSelectChange = (selectedRowKeys, selectedRows) => {
    let rowSelection = props.rowSelection;
    console.log('rowSelection :', typeof rowSelection[0]);
    if (rowSelection == 'checkbox') {
      setSelectedRowKeys([...selectedRowKeys])

      setSelectedItemCheck([...selectedRows])
    } else {
      setSelectedRowKeys(selectedRowKeys)
      setSelectedItem(selectedRows)
    }
  };
  /**
   * 全选按钮
   */
  let onSelectAll = (selected, selectedRows, changeRows) => {
    let selectKey = [];
    selectedRows.forEach((item, i) => {
      selectKey.push(i);
    });
    setSelectedItemCheck(selectedRows[0] || {})
    setSelectedRowKeys([...selectKey])
  }
  /**
   * 基础列表
   */
  let InitTable = () => {
    const rowSelection = {
      type: 'radio',
      selectedRowKeys: selectedRowKeys,
      onChange: onSelectChange,
      // 用户手动选择/取消选择某行的回调
      onSelect: (record, selected, selectedRows) => {
        console.log('手动取消选中的回调..')
      },
      onSelectAll: onSelectAll
    };
    let row_selection = props.rowSelection;
    if (row_selection === false || row_selection === null) {
      row_selection = false;
    } else if (row_selection == 'checkbox') {
      //设置类型未复选框
      rowSelection.type = 'checkbox';
    } else {
      row_selection = 'radio';
    }
    return <Table
      className="card page-table"
      bordered
      {...props}
      rowSelection={row_selection ? rowSelection : null}
      onRow={(record, index) => ({
        onClick: () => {
          if (!row_selection) {
            return;
          }
          onRowClick(record, index)
        }
      })}
    />

  }

  return (
    <>
      {InitTable()}
    </>
  )
}