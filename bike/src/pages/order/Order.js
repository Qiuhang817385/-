import React, { useState, useEffect } from 'react'
import { Card, Button, Modal, message, } from 'antd';
import axios from '../../axios/axios';
import BaseForm from './../../components/BaseForm/BaseForm';
import ETable from './../../components/ETable/EtableFun1'
import { columns, formList, params, } from './data'
import './order.scss'
import { useHistory } from 'react-router-dom'


export default function Order () {
  const [list, setList] = useState([]);
  const [pagination, setpagination] = useState(null);
  const [item, setItem] = useState();
  let history = useHistory();
  console.log('pagination', pagination)
  useEffect(() => {
    requestList().then((res) => {
      let arrRes = res.result.item_list;
      arrRes.forEach((item, index) => {
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
    if (!item) {
      Modal.info({
        title: '信息',
        content: '请选择一条订单进行结束'
      })
      return;
    }
    Modal.info({
      title: '结束订单',
      content: `是否要结束订单{${item.order_sn}},用户名(${item.user_name})`,
      okText: '确定',
      onOk: () => {
        //调取接口
        // 调取删除订单的接口
        // 结束成功
        message["success"]({
          content: '结束成功',
        })
        // 刷新页面
        // 调取刷新页面数据的接口
      }
    })
    console.log('item :', item);
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