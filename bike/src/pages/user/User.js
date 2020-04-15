import React, { useState, useEffect, useRef } from 'react'
import { Card, Button, Table, Form, Select, Radio, Icon, message, Modal, Col, Row } from 'antd'
import axios from '../../axios/axios'
import BaseForm from './../../components/BaseForm/BaseForm'
import EtableFun from '../../components/ETable/EtableFun1';
import './user.scss'
import { columns, formList, create, read, update, del } from './data'
import { useHistory } from 'react-router-dom'

// card-wrapper
const FormItem = Form.Item;
const Option = Select.Option;
const RadioGroup = Radio.Group;
const params = {
  page: 1
}
export default function User () {
  const [list, setList] = useState([]);
  const [Item, setItem] = useState(null);
  // Model对象
  const [visible, setVisible] = useState(false);
  const [title, setTitle] = useState('')

  const [type, setType] = useState('create')
  let obj = {
    create, read, update, del
  }

  let history = useHistory()
  let baseForm = useRef(null)
  useEffect(() => {
    requestList().then((res) => {
      console.log('res :', res);
      let arrRes = res.result.list;
      arrRes.map((item) => {
        item['key'] = item.id;
      })
      setList([...arrRes])
    })
  }, [])

  let handleFilter = (params) => {
    // this.params = params;
    console.log('params', params)
    // 把params传递给本地的params,已经有一个分页了, 然后请求数据
  }
  // 创建增加
  let handleC = () => {
    setVisible(true);
    setType('create')
    setTitle('创建');
  }
  // 查询
  let handleR = () => {
    // setVisible(true);
    // setType('read')
    // setTitle('查询');
    if (!Item) {
      Modal.info({
        title: '详情信息',
        content: '请先选择一位用户'
      })
      return;
    }
    history.push(`/common/user/detail/${Item.id}`)
  }
  // 更新编辑
  let handleU = () => {
    setVisible(true);
    setType('update')
    setTitle('编辑');
  }
  // 删除
  let handleD = () => {
    if (!Item) {
      Modal.info({
        title: '删除信息',
        content: '请先选择一位用户'
      })
      return;
    }
    // history.push(`/common/user/detail/${Item.id}`)
    Modal.info({
      title: '删除',
      content: '是否删除?'
    })
  }
  let onCreate = values => {
    console.log('Received values of form: ', values);
    // setVisible(false);
  };

  return (
    <>
      <Card title="员工管理" className="card-wrapper">
        <BaseForm
          submit={formList.submit}
          formList={formList.formList}
          initValue={formList.initValue}
          filterSubmit={handleFilter}
        ></BaseForm>
      </Card>
      <Card className="card-wrapper">
        <Row>
          <Col span={2}><Button type="primary" onClick={() => handleC()}>创建员工</Button></Col>
          <Col span={2}><Button type="primary" onClick={() => handleU()}>编辑员工</Button></Col>
          <Col span={2}><Button type="primary" onClick={() => handleR()}>员工详情</Button></Col>
          <Col span={2}><Button type='danger' onClick={() => handleD()}>删除员工</Button></Col>
        </Row>
      </Card>
      <Card title="详情菜单" className="card-wrapper">
        <EtableFun
          columns={columns}
          dataSource={list}
          getItem={
            val => {
              console.log('Userval', val)
              setItem(val)
            }
          }
          pagination={true}
        />
      </Card>
      <Modal
        visible={visible}
        title={title}
        okText='确定'
        cancelText='返回'
        onCancel={() => setVisible(false)}
        onOk={() => {
          //怎么获取到最新的数据???????
          //函数组件怎么使用到类组件最新的数据--->直接使用ref,太强了
          let res = baseForm.current.formRef.current.getFieldsValue();
          onCreate(res)
        }}
      >
        <BaseForm
          formList={obj[type].formList}
          initValue={obj[type].initValue}
          formLayout={obj[type].formLayout}
          layout={obj[type].layout}
          ref={baseForm}
          filterSubmit={onCreate}
        ></BaseForm>
      </Modal>
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
