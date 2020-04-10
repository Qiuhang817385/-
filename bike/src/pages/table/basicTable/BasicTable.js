import React, { useState, useEffect } from 'react'
import { Table, Tag, Card, Spin, Button, Modal, message } from 'antd';
import { columns, columns2 } from './columns';
import { data } from './data'
import axios from '../../../axios/axios'
import './style.scss'
export default function BasicTable () {
  const [listData, setListData] = useState([])
  /**
   * 单选
   */
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [selectItem, setselectItem] = useState(null);
  const rowSelection = {
    type: 'radio',
    selectedRowKeys,
    onChange: (selectedRowKeys, selectedRows) => {
      rowSelectChange(selectedRowKeys, selectedRows)
    }
  }
  let rowSelectChange = (selectedRowKeys, selectedRows) => {
    setSelectedRowKeys(selectedRowKeys);
    setselectItem(selectedRows)
  }
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
    onChange: (selected, selectedRow22) => {
      console.log('selectedRowKeys :', selected);
      rowSelectChange22(selected, selectedRow22)
    }
  }
  let rowSelectChange22 = (s2, s2Rows) => {
    setSelectedRowKeys22([...s2]);
    setselectItem22([...s2Rows])
  }
  let handleClick22 = (rec) => {
    console.log('rec :', rec);
    if (selectedRowKeys22.indexOf(rec.key) >= 0) {
      selectedRowKeys22.splice(selectedRowKeys22.indexOf(rec.key), 1);
    } else {
      selectedRowKeys22.push(rec.key);
      selectItem22.push(rec)
    }
    setSelectedRowKeys22(() => [...selectedRowKeys22]);
    setselectItem22(selectItem22)
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
    selectItem22.map((item) => {
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
      <Card className='card-wrap' title="基础表格" >
        <Table dataSource={data} columns={columns} pagination={false} />
      </Card>
      <Card className='card-wrap' title="动态表格+Loading状态" >
        <Spin spinning={listData.length === 0 ? true : false}>
          <Table columns={columns2} pagination={false} dataSource={listData} />
        </Spin>
      </Card>
      <Card className='card-wrap' title="单选表格" >
        <Spin spinning={listData.length === 0 ? true : false}>
          <Table onRow={(record, index) => { return { onClick: () => { handleClick(record, index) } } }} columns={columns2} rowSelection={{ ...rowSelection }} pagination={false} dataSource={listData} />
        </Spin>
      </Card>
      <Card className='card-wrap' title="多选表格" >
        <Spin spinning={listData.length === 0 ? true : false}>
          <Button onClick={handleDelete}>删除</Button>
          <Table onRow={(record, index) => { return { onClick: () => { handleClick22(record, index) } } }} columns={columns2} rowSelection={{ ...checkMore }} pagination={false} dataSource={listData} />
        </Spin>
      </Card>
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
