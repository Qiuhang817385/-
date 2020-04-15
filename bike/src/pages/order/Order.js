import React, { useState, useEffect } from 'react'
import { Card, Button, Table, Form, Select, Modal, message, DatePicker } from 'antd';
import axios from '../../axios/axios';
import BaseForm from './../../components/BaseForm/BaseForm';
import ETable from './../../components/ETable/EtableFun1'
import { columns, formList, params, formItemLayout, rowSelection } from './data'
import './order.scss'
import { useHistory } from 'react-router-dom'


export default function Order () {
  const [list, setList] = useState([]);
  const [pagination, setpagination] = useState(null);
  const [item, setItem] = useState();
  let history = useHistory();

  useEffect(() => {
    requestList().then((res) => {
      let arrRes = res.result.item_list;
      arrRes.map((item, index) => {
        // 这里的id需要单独做处理,而不是自己的Bug
        item['key'] = index + 1;
      })
      setList([...arrRes])
      setpagination({
        showTotal: () => {
          return `共${arrRes.length}条`
        }
      })
    })
  }, [])
  let openOrderDetail = () => {
    if (!item) {
      Modal.info({
        title: '信息',
        content: '请先选择一条订单'
      })
      return;
    }
    // window.open(`/common/order/detail/${item.id}`, '_blank');
    history.push(`/common/order/detail/${item.id}`)
  }
  let handleConfirm = () => {
  }
  /**
   * 父级基础组件的方法
   */
  let handleFilter = (params) => {
    // this.params = params;
    console.log('params', params)
    // 把params传递给本地的params,已经有一个分页了, 然后请求数据
  }
  return (
    <>
      <Card className="card-wrapper">
        <BaseForm
          formList={formList.formList}
          initValue={formList.initValue}
          filterSubmit={handleFilter}
        ></BaseForm>
      </Card>

      <Card className="card-wrapper" style={{ marginTop: 10 }}>
        <Button onClick={openOrderDetail}>
          订单详情
        </Button>
        <Button type="primary" style={{ marginLeft: 10 }} onClick={handleConfirm}>
          结束订单
        </Button>
      </Card>
      <Card className="card-wrapper">
        <div className="content-wrap">
          <ETable
            // rowSelection='checkbox'
            columns={columns}
            dataSource={list}
            pagination={true}
            getItem={
              rec => {
                setItem(rec)
              }
            }
          ></ETable>
        </div>
      </Card>
    </>
  )
}

const requestList = () => {
  return axios.ajax({
    url: 'http://www.qiuhang.club:7300/mock/5e8c119b00fbdf09dcf21f9f/bike/order/list',
    data: {
      params: {
        page: params.page
      }
    }
  }).then((res) => {
    return res
  })
}