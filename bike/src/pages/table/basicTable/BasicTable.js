import React, { useState, useEffect } from 'react'
import { Table, Card, Spin, Button, Modal, message } from 'antd';
import { columns, columns2 } from './columns';
import ClaTab from './claTab'
import { data } from './data'
import axios from '../../../axios/axios'
import './style.scss'
// ============================================================
/* 
  这个表格的复选框+自身的rowSelect事件  有Bug
  这个表格的复选框+自身的rowSelect事件  有Bug
  这个表格的复选框+自身的rowSelect事件  有Bug
 */
// ============================================================
export default function BasicTable () {
  const [listData, setListData] = useState([]);
  // console.log(Date.now());
  // console.log(new Date().getTime())
  /**
   * 单选
   */
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [selectItem, setselectItem] = useState(null);
  const rowSelection = {
    type: 'radio',
    selectedRowKeys,
    // 单选框自身的方法
    onChange: (selectedRowKeys, selectedRows) => {
      rowSelectChange(selectedRowKeys, selectedRows)
    }
  }
  let rowSelectChange = (selectedRowKeys, selectedRows) => {
    setSelectedRowKeys(selectedRowKeys);
    setselectItem(selectedRows)
  }
  /**
   * 单选表格点击方法
   * @param {记录} record 
   * @param {*} index 
   */
  let handleClick = (record, index) => {
    console.log('index :', index);
    let selectKey = [index + 1];
    console.log('selectKey :', selectKey);
    setSelectedRowKeys([...selectKey]);
    setselectItem(record)
  }
  /**
   * 多选
   */
  const [selectedRowKeys22, setSelectedRowKeys22] = useState([]);
  const [selectItem22, setselectItem22] = useState([]);
  const checkMore = {
    type: 'checkbox',
    // 细节,第一个参数必须是selectedRowKeys
    selectedRowKeys: selectedRowKeys22,
    // 复选框自身的方法
    onChange: (selected, selectedRow22) => {
      console.log('selectedRowKeys :', selected);
      rowSelectChange22(selected, selectedRow22)
    }
  }
  let rowSelectChange22 = (s2, s2Rows) => {
    console.log('123');
    setSelectedRowKeys22([...s2]);
    setselectItem22([...s2Rows])
  }
  /**
   * 复选表格点击方法
   */
  let handleClick22 = (rec) => {
    // console.log('rec :', rec);//{id: 1, username: "赵敏", sex: 2, state: 3, interest: 4, …}
    if (selectedRowKeys22.indexOf(rec.key) >= 0) {
      //删除
      selectedRowKeys22.splice(selectedRowKeys22.indexOf(rec.key), 1);
      selectItem22.splice(selectedRowKeys22.indexOf(rec.key), 1)
    } else {//增加
      //表格内，所有被选中数据的，key的集合
      selectedRowKeys22.push(rec.key);
      //表格内，所有被选中数据的，集合
      selectItem22.push(rec);
    }
    setSelectedRowKeys22([...selectedRowKeys22]);
    setselectItem22(selectItem22);
  }
  //初始化数据
  useEffect(() => {
    getData().then((res) => {
      console.log('res :', res);
      setTimeout(() => {
        setListData([...res.list])
      }, 3000)
    })
  }, [])
  /**
   * 删除操作
   */
  let handleDelete = (() => {
    console.log('selectItem22 :', selectItem22);
    let ids = []
    selectItem22.forEach((item) => {
      ids.push(item.id);
    })
    Modal.confirm({
      title: '删除',
      content: `确定要删除${ids.join(',')}`,
      onOk: () => {
        // 调用接口
        message.success('删除成功');
        //请求新的数据
        setSelectedRowKeys22([]);
        setselectItem22([]);
      }
    })
  })

  return (
    <>
      {/* <Card className='card-wrap' title="基础表格" >
        <Table dataSource={data} columns={columns} pagination={false} />
      </Card> */}
      {/* <Card className='card-wrap' title="动态表格+Loading状态" >
        <Spin spinning={listData.length === 0 ? true : false}>
          <Table columns={columns2} pagination={true} dataSource={listData} />
        </Spin>
      </Card> */}
      {/* <Card className='card-wrap' title="单选表格" >
        <Spin spinning={listData.length === 0 ? true : false}>
          <Table onRow={(record, index) => { return { onClick: () => { handleClick(record, index) } } }}
            columns={columns2}
            // 设置单选还是多选-单选
            rowSelection={{ ...rowSelection }}
            pagination={true} dataSource={listData} />
        </Spin>
      </Card> */}
      <Card className='card-wrap' title="多选表格" >
        <Spin spinning={listData.length === 0 ? true : false}>
          <Button onClick={handleDelete}>删除</Button>
          <Table
            onRow={
              (record, index) => ({ onClick: () => { handleClick22(record, index) } })
            }
            columns={columns2}
            // 设置单选还是多选-多选
            rowSelection={{ ...checkMore }}
            pagination={true} dataSource={listData} />
        </Spin>
      </Card>
      {/* <ClaTab></ClaTab> */}
    </>
  )
}

async function getData () {
  let res = await axios.axiosGet({
    url: '/table/list',
  }).then((res) => {
    return res
  })
  let result = await res.result;
  return result
}

// let request = () => {
//   return 
// }
