import React, { useState, useEffect, useRef } from 'react'
import { Table, Card, Button, Modal, Col, message } from 'antd';
import OpenCityForm from './OpenCityForm'
import FilterForm from './FilterForm';
import { params, columns } from './data'
import { connect } from 'react-redux'
import { getCityList, handleCityOpen_action } from './store/actionCreator'

import './City.scss'

const City = (props) => {
  let { City_List, handleCityOpen_action, getCityList } = props;
  let formObj = null;
  const [list, setList] = useState([]);
  const [isShowOpenCity, setIsShowOpenCity] = useState(false);
  const [pagination, setpagination] = useState(null)

  useEffect(() => {
    let Arr = City_List.map((item, index) => {
      item.key = index;
      return item;
    })
    /**
     * 获取基本数据,存储到List当中
     */
    setList([...Arr]);
    // 分页自己带了,但是还需要自己实现一下思路
    setpagination({
      showTotal: () => {
        return `共${City_List.length}条`
      }
    })
  }, [City_List])

  useEffect(() => {
    getCityList();
  }, []);
  /**
   * 开通城市-OnOk
   */
  let handleSubmit = () => {
    let data = formObj.current.getFieldsValue();
    handleCityOpen_action(data)
    setIsShowOpenCity(false);
  }

  /**
   * 开通城市操作-Open
   */
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
        </div>
      </Card>
      <Modal
        title="开通城市"
        visible={isShowOpenCity}
        onCancel={() => {
          setIsShowOpenCity(false)
        }}
        onOk={handleSubmit}
      >
        <OpenCityForm
          formRef={(form) => {
            formObj = form
          }}
        ></OpenCityForm>
      </Modal>
    </>
  )
}

const mapStateToProps = (state, ownProps) => ({
  City_List: state['city_reducer'].cityRes,
})
const mapDispatchToProps = {
  getCityList, handleCityOpen_action
}



export default connect(mapStateToProps, mapDispatchToProps)(City)