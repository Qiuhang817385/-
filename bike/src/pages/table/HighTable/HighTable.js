import React, { useState, useEffect } from 'react'
import { Table, Tag, Card, Spin, Badge, Button, Modal, message } from 'antd';
import { columns, columns2, columns3, columns4, handleDelete } from './columns';
import { } from './data'
import axios from '../../../axios/axios'
import './style.scss'
let params = {
  page: 1
}
export default function HighTable () {
  const [dataSource, setDataSource] = useState([]);

  /**
   * 获取数据
   */
  useEffect(() => {
    getData().then((res) => {
      // console.log('res.list :', res.list);
      res.list.map((item, index) => {
        item['key'] = index;
      })
      setDataSource([...res.list])
    })
  }, [])
  /**
   * 表格排序
   * @param {分页} pagination 
   * @param {过滤} filters 
   * @param {排序} sorter 
   */
  const [sortOrder, setSortOrder] = useState("");
  let handleChange = (pagination, filters, sorter) => {
    setSortOrder(sorter.order)
  }

  const columns4 = [
    {
      title: 'id',
      dataIndex: 'id'
    },
    {
      title: '用户名',
      dataIndex: 'userName'
    },
    {
      title: '性别',
      dataIndex: 'sex',
      render (sex) {
        return sex == 1 ? '男' : '女'
      }
    },
    {
      title: '年龄',
      dataIndex: 'age'
    },
    {
      title: '状态',
      dataIndex: 'state',
      render (state) {
        let config = {
          '1': '准备',
          '2': '进行中',
          '3': '结束',
          '4': '付款',
          '5': '付款完成'
        }
        return config[state];
      }
    },
    {
      title: '爱好',
      dataIndex: 'interest',
      render (abc) {
        let config = {
          '1': <Badge status="success" text="成功" />,
          '2': <Badge status="error" text="报错" />,
          '3': <Badge status="default" text="正常" />,
          '4': <Badge status="processing" text="进行中" />,
          '5': <Badge status="warning" text="警告" />
        }
        return config[abc];
      }
    },
    {
      title: '生日',
      dataIndex: 'birthday'
    },
    {
      title: '地址',
      dataIndex: 'address'
    },
    {
      title: '操作',
      render: (text, item) => {
        return <Button size="small"
          onClick={() => { handleDelete(item) }}
        >删除</Button>
      }
    }
  ]
  let handleDelete = (item) => {
    let id = item.id;
    Modal.confirm({
      title: '确认',
      content: '您确认要删除此条数据吗？' + id,
      onOk: () => {
        message.success('删除成功');
        // this.request();
      }
    })
  }

  return (
    <>
      <Card className='card-wrap' title="头部固定" >
        <Table
          bordered
          columns={columns}
          dataSource={dataSource}
          pagination={true}
          scroll={{ y: 240 }}
        />
      </Card>
      <Card className='card-wrap' title="左侧固定" >
        <Table
          bordered
          columns={columns2}
          dataSource={dataSource}
          pagination={true}
          scroll={{ x: 2650 }}
        />
      </Card>
      <Card className='card-wrap' title="表格排序" >
        <Table
          bordered
          columns={columns3}
          dataSource={dataSource}
          pagination={true}
          onChange={handleChange}
        />
      </Card>
      <Card className='card-wrap' title="操作按钮" >
        <Table
          bordered
          columns={columns4}
          dataSource={dataSource}
          pagination={true}
        />
      </Card>
    </>
  )
}

async function getData () {
  let res = await axios.axiosGet({
    url: '/table/high/list',
  }).then((res) => {
    return res
  })
  let result = await res.result;
  return result
}


{/* <Spin spinning={listData.length === 0 ? true : false}>
    <Table onRow={(record, index) => { return { onClick: () => { handleClick(record, index) } } }} columns={columns2} rowSelection={{ ...rowSelection }} pagination={false} dataSource={listData} />
  </Spin> */}
