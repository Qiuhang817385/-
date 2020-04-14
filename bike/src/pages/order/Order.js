import React, { useState, useEffect } from 'react'
import { Card, Button, Table, Form, Select, Modal, message, DatePicker } from 'antd';
import axios from '../../axios/axios';
import BaseForm from './../../components/BaseForm/BaseForm'
import { columns, formList, params, formItemLayout, rowSelection } from './data'
import './order.scss'
export default function Order () {
  const [list, setList] = useState([]);
  const [pagination, setpagination] = useState(null);
  const initValue = {
    city: '0',
    order_status: '0'
  }

  useEffect(() => {
    requestList().then((res) => {
      console.log('res :', res);
      let arrRes = res.result.item_list;
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
  let openOrderDetail = () => {
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
          formList={formList}
          initValue={initValue}
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
          <Table columns={columns}
            dataSource={list}
            pagination={pagination}
          // pagination={this.state.pagination}
          // 新
          // rowSelection={rowSelection}
          // onRow={(record, index) => {
          //     return {
          //         onClick: () => {
          //             this.onRowClick(record, index);
          //         }
          //     };
          // }}
          >
          </Table>
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