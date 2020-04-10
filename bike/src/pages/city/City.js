import React, { useState, useEffect } from 'react'
import { Table, Card, Button, Modal, Pagination, Form, Select, Col, Row } from 'antd';
import axios from './../../axios/axios';
import utils from './../../utils/utils';
import OpenCityForm from './OpenCityForm'
import FilterForm from './FilterForm';
import { params, columns } from './data'
// const FormItem = Form.Item;
// const Option = Select.Option;
import './City.scss'

const City = () => {
  const [list, setList] = useState([]);
  const [isShowOpenCity, setIsShowOpenCity] = useState(false);
  const [pagination, setpagination] = useState(null)
  const [resF, setRes] = useState(null);
  useEffect(() => {
    requestList().then((res) => {
      console.log('res.result.page :', res);
      /**
       * 获取基本数据,存储到List当中
       */
      setRes(res);
      let Arr = res.result.item_list.map((item, index) => {
        item.key = index;
        return item;
      })
      setList([...Arr])
      /**
       *  分页操作,利用antd的话,直接把数据放到里面,设置分页就直接分好了
       */
      let pageObj = utils.pagination(
        res,                  //参数1,设置基础数据
        (current) => {        //参数2,回调函数,也是分页组件里面的onchange事件,当切换页面的时候调用的函数
          params.page = current;   //设置参数页,用于下面再进行请求指定页面的数据
          console.log('params :', params);
          requestList();
        })
      console.log('pageObj', pageObj)
      setpagination(pageObj)
    });
  }, [])


  let handleSubmit = () => {
    axios.ajax({
      url: 'http://www.qiuhang.club:7300/mock/5e8c119b00fbdf09dcf21f9f/bike/city/open',
      data: {
        // params: cityInfo
      }
    }).then((res) => {
      console.log('res :', res);
    })
    setIsShowOpenCity(false)
  }
  // 开通城市操作
  let handleOpenCity = () => {
    setIsShowOpenCity(true)
  }
  return (
    <>
      <Card className="card-wrapper" style={{ marginTop: 10 }}>
        <FilterForm></FilterForm>
      </Card>
      <Card className="card-wrapper" style={{ marginTop: 10 }}>
        <Col span={2} offset={22}>
          <Button type="primary" className="btn" onClick={handleOpenCity}>开通城市</Button>
        </Col>
      </Card>
      <Card className="card-wrapper" style={{ marginTop: 10 }}>
        <div className="content-wrap">
          <Table columns={columns}
            dataSource={list}
            pagination={pagination}
          >
          </Table>
          {/* <Pagination size="small" total={50} showTotal={(total) => {
            return `Total ${total} items`;
          }} />
          <Pagination {...pagination} /> */}
        </div>
      </Card>
      <Modal
        title="开通城市"
        visible={isShowOpenCity}
        onCancel={() => {
          setIsShowOpenCity(false)
        }}
        onOk={handleSubmit}
      ></Modal>
      <Card className="card-wrapper" style={{ marginTop: 10 }}>
        <OpenCityForm></OpenCityForm>
      </Card>
    </>
  )
}

// 请求数据
const requestList = () => {
  return axios.ajax({
    url: 'http://www.qiuhang.club:7300/mock/5e8c119b00fbdf09dcf21f9f/bike/open_city',
    data: {
      params: {
        page: params.page
      }
    }
  }).then((res) => {
    return res
  })
}
export default City