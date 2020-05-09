import React, { Component } from 'react'
// import Utils from './../../../utils/utils';
import ETable from '../../../components/ETable/EtableFun1.js';
import axios from '../../../axios/axios';
import { Card, } from 'antd';
import { columns2 } from './columns';
export default class Cll extends Component {
  constructor(props) {
    super(props);
    this.Etable = React.createRef();
  }
  state = {
    selectedRowKeys22: [],
    listData: [],
    item: []
  }
  checkMore = {
    type: 'checkbox',
    // 细节,第一个参数必须是selectedRowKeys
    selectedRowKeys: this.state.selectedRowKeys22,
    // 复选框自身的方法
    onChange: (selected, selectedRow22) => {
      console.log('selectedRowKeys :', selected);
      // rowSelectChange22(selected, selectedRow22)
    }
  }

  componentDidMount () {
    getData().then((res) => {
      console.log('res :', res);
      this.setState({
        listData: res.list
      })
    })
  }
  /**
   * 
   */
  handleClick = (item) => {
    console.log(item)
    this.setState({
      item
    })
  }

  render () {
    console.log('object :', this.state.listData);
    return (
      <>
        <Card className="card-wrap" title="自定义">
          <ETable
            rowSelection='checkbox'
            dataSource={this.state.listData}
            columns={columns2}
            getList={func => {
              console.log('func', func);
              // this.setState({
              //   item: func
              // })
              // 调用方法
              this.handleClick(func)
            }}
          />
        </Card>
      </>
    )
  }
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