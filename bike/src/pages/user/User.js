import React, { useState, useEffect, useRef } from 'react'
import { Card, Button, Modal, Col, Row } from 'antd'
import axios from '../../axios/axios'
import BaseForm from './../../components/BaseForm/BaseForm'
import EtableFun from '../../components/ETable/EtableFun1';
import './user.scss'
import { columns, formList, create, read, update, del } from './data'
import { useHistory } from 'react-router-dom'
import UpdateForm from './updateForm'
// card-wrapper
const params = {
  page: 1
}
export default function User () {
  const [list, setList] = useState([]);
  const [Item, setItem] = useState(null);
  // Model对象
  const [visible, setVisible] = useState(false);
  const [upvisible, setUpVisible] = useState(false);
  const [title, setTitle] = useState('')

  let updateForm = null;

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
      arrRes.forEach((item) => {
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
  /**
   * 创建增加
   */
  let handleC = () => {
    setType('create')
    setVisible(true);
    setTitle('创建');
  }
  let onCreate = values => {
    console.log('create')
    Modal.info({
      title: '创建员工',
      content: '创建成功！'
    })
    setVisible(false);
  };
  /**
   * 查询
   */
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
  //一样不会被调用，没有打开模态框
  let onRead = values => {
    console.log('read')
    setVisible(false);
  };
  /**
   * 更新编辑
   */
  let handleU = () => {
    // console.log('baseForm', baseForm)
    // baseForm.current.formRef.current.resetFields()
    /* 
      //由于form是在modal当中，所以需要给modal加上forcerender来强制渲染，否则拿不到,但是加了强制渲染，表单没有初始值了
    // 只能等表单打开才能拿到数据
    // console.log('baseForm', baseForm)
    // baseForm.current.formRef.current.resetFields()
     */
    if (!Item) {
      Modal.info({
        title: '编辑',
        content: '请先选择一位用户'
      })
      return;
    }
    update.initValue = {
      'username': Item.username,
      'sex': Item.sex,
      // 'date-picker': Item.birthday,
      'address': Item.address,
    }
    // updateForm && updateForm.current.resetFields()
    if (updateForm) {
      updateForm.current.setFieldsValue({
        ...update.initValue
      })
    }
    setUpVisible(true);
  }
  let onUpdate = () => {

  }

  let updataOnOk = () => {
    setItem((prev) => {
      let target = {};
      Object.assign(target, prev, updateForm.current.getFieldsValue())
      return target
    })
    // console.log('list :', list);
    let ids, target = {};
    for (let i = 0; i < list.length; i++) {
      if (list[i].id === Item.id) {
        let old = list[i];
        Object.assign(target, old, updateForm.current.getFieldsValue())
        ids = i;
        console.log(ids)
        break;
      }
    }
    if (ids > -1) {
      console.log('执行了')
      console.log('ids :', ids);
      console.log('obj :', target);
      let newList = list;
      newList[ids] = target;
      setList([...list])
    }
    setUpVisible(false)
  }
  /**
   * 删除
   */
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
      content: `是否删除用户：${Item.username}?`,
      okText: '确认',
      onOk: () => {
        Modal.info({
          title: '删除',
          content: `删除成功`,
          onOk: () => {
            //重新调取接口数据
            requestList().then((res) => {
              console.log('res :', res);
              let arrRes = res.result.list;
              arrRes.forEach((item) => {
                item['key'] = item.id;
              })
              setList([...arrRes])
            })
          }
        })
      }
    })

  }
  // 这个不会调用，不在表单当中
  let onDel = values => {
    console.log('del')
    setVisible(false);
  };
  /**
   * Modal-利用表逻辑来对一个Modal做4份不同的业务任务处理
   * @param {Modal-OK类型} type 
   * @param {获取的表单数据} data 
   */
  let CRUD = (type, data) => {
    console.log('type :', type);
    let crud = {
      create: onCreate,
      read: onRead,
      update: onUpdate,
      del: onDel
    }
    return crud[type](data);
  }


  // .resetFields()
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
          CRUD(type, res)
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

      {/* 更新员工，单独的一个模块 */}
      <Modal
        forceRender
        visible={upvisible}
        title={'编辑'}
        okText='确定'
        cancelText='返回'
        onCancel={() => setUpVisible(false)}
        onOk={() => {
          // 这个对象居然是一个部署了iterator接口的对象
          console.log('updateForm.current.getFieldsValue()', updateForm.current.getFieldsValue())
          updataOnOk()
        }}
      >
        <UpdateForm
          filterSubmit={(res) => {
            console.log('res', res)
            // setItem(res)
          }}
          data={update}
          reset={(formObj) => {
            console.log('formObjc', formObj)
            updateForm = formObj
          }}
        ></UpdateForm>
        {/* filterSubmit */}
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

