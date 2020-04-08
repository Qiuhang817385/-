import React, { Component } from 'react'
import { Card, Button, Radio } from 'antd';
import { PlusCircleTwoTone, LeftCircleTwoTone, RightCircleTwoTone, DownCircleTwoTone, BulbTwoTone, SearchOutlined, DeleteTwoTone, EditTwoTone } from '@ant-design/icons';
import './style.scss'
export default class Buttons extends Component {
  state = {
    loading: true
  }
  handleCloseLoading = () => {
    this.setState((prevState) => {
      return {
        loading: !prevState.loading
      }
    })
  }
  handleChange = (eve) => {
    const e = eve.target.value
    this.setState({
      size: e
    })
  }
  render () {
    return (
      <>
        <Card title="基础按钮" className="card-wrap">
          <Button type="primary">主按钮</Button>
          {/* 增删改一般主按钮
                        负按钮  关闭 */}
          <Button>默认按钮</Button>
          <Button type="dashed">虚线按钮</Button>
          <Button type="danger">危险按钮</Button>
          <Button type="link">链接按钮</Button>
          <Button disabled>不可用按钮</Button>
        </Card>
        <Card title="图形按钮" className="card-wrap">
          <Button><PlusCircleTwoTone twoToneColor="#52c41a" />创建</Button>
          <Button><EditTwoTone twoToneColor="#52c41a" />编辑</Button>
          <Button><DeleteTwoTone twoToneColor="#52c41a" />删除</Button>
          <Button shape="circle" ><SearchOutlined />圆形搜索</Button>
          <Button><BulbTwoTone twoToneColor="#52c41a" />搜索</Button>
          <Button><DownCircleTwoTone twoToneColor="#52c41a" />下载</Button>
        </Card>
        <Card title="Loading按钮" className="card-wrap">
          <Button type="primary" loading={this.state.loading}>加载</Button>
          <Button type="primary" shape="circle" loading={this.state.loading} >加载</Button>
          <Button loading={this.state.loading} >点击加载</Button>
          <Button type="dashed" shape="circle" loading={this.state.loading} ></Button>
          <Button type="primary" onClick={this.handleCloseLoading}>切换状态</Button>
        </Card>
        <Card title="按钮组" className="card-wrap">
          <Button.Group>
            <Button type="primary"  ><LeftCircleTwoTone twoToneColor="#52c41a" />返回</Button>
            <Button type="primary" >前进<RightCircleTwoTone twoToneColor="#52c41a" /></Button>
          </Button.Group>
        </Card>
        <Card title="按钮尺寸" className="card-wrap">
          <Radio.Group value={this.state.size} onChange={this.handleChange}>
            <Radio value="small">小</Radio>
            <Radio value="default">中</Radio>
            <Radio value="large">大</Radio>
          </Radio.Group>
          <Button type="primary" size={this.state.size}>Imooc</Button>
          {/* 增删改一般主按钮
                        负按钮  关闭 */}
          <Button size={this.state.size}>Imooc</Button>
          <Button type="dashed" size={this.state.size}>dashed</Button>
          <Button type="danger" size={this.state.size}>danger</Button>
        </Card>
      </>
    )
  }
}
