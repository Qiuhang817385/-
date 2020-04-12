import React, { useState, useEffect } from 'react'
import { Card, Button, Table, Form, Input, Checkbox, Select, Radio, Icon, message, Modal, DatePicker } from 'antd'
import axios from '../../axios/axios'
import Utils from '../../utils/utils'
import './user.scss'
import { columns } from './data'

// card-wrapper
const FormItem = Form.Item;
const Option = Select.Option;
const RadioGroup = Radio.Group;
const params = {
  page: 1
}
export default function User () {
  const [pagination, setpagination] = useState(null)
  const [list, setList] = useState([]);
  useEffect(() => {
    requestList().then((res) => {
      console.log('res :', res);
      let arrRes = res.result.list;
      arrRes.map((item) => {
        item['key'] = item.id;
      })
      setList([...arrRes])
      setpagination({
        showTotal: () => {
          return `共${arrRes.length}条`
        }
      })
    })
  }, [])
  return (
    <>
      <Card title="员工管理" className="card-wrapper">
        <Table columns={columns}
          dataSource={list}
          pagination={pagination}
        ></Table>
      </Card>
    </>
  )
}
const requestList = () => {
  return axios.ajax({
    url: 'http://www.qiuhang.club:7300/mock/5e8c119b00fbdf09dcf21f9f/bike/table/list',
    data: {
      params: {
        page: params.page
      }
    }
  }).then((res) => {
    return res
  })
}
