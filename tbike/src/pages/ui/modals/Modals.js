import React, { Component } from 'react'
import { Card, Button, Modal } from 'antd'
import './style.scss'
import '../ui.scss';
export default class Modals extends Component {
  state = {
    showModal1: false,
    showModal2: false,
    showModal3: false,
    showModal4: false
  }
  // 计算属性
  handleOpen = (Target) => {
    console.log('Target :', Target);
    this.setState({
      // 怎么利用传进来的变量
      [Target]: true
    })
  }

  handleConfirm = (type) => {
    Modal[type]({
      title: '确认',
      content: '这里是内容区域',
      onOk () {
        // alert('ok')
        console.log('ok')
      },
      onCancel () {
        alert('cancel')
      }
    })
  }
  render () {
    return (
      <>
        {/* 直接使用模态框组件 */}
        <Card title="基础模态框" className="card-wrap">
          <Button type="primary" onClick={() => this.handleOpen('showModal1')}>Open</Button>
          <Button type="primary" onClick={() => this.handleOpen('showModal2')}>自定义页脚</Button>
          <Button type="primary" onClick={() => this.handleOpen('showModal3')}>顶部20px弹框</Button>
          <Button type="primary" onClick={() => this.handleOpen('showModal4')}>水平垂直居中</Button>
        </Card>
        {/* 使用模态框行内代码 */}
        <Card title="信息确认框" className="card-wrap">
          <Button type="primary" onClick={() => this.handleConfirm('confirm')}>Confirm</Button>
          <Button type="primary" onClick={() => this.handleConfirm('info')}>Info</Button>
          <Button type="primary" onClick={() => this.handleConfirm('success')}>Success</Button>
          <Button type="primary" onClick={() => this.handleConfirm('warning')}>warning</Button>
        </Card>
        {/* Open */}
        <Modal
          title="标题"
          visible={this.state.showModal1}
          onOk={() => { this.setState({ showModal1: false }); console.log('OK') }}
          onCancel={() => { this.setState({ showModal1: false }) }}
        >
          <p>内容</p>
        </Modal>
        {/* 自定义页脚 */}
        <Modal
          title="标题"
          visible={this.state.showModal2}
          okText="这是确定文本"
          cancelText="这是否定文本"
          onOk={() => { this.setState({ showModal2: false }); console.log('OK') }}
          onCancel={() => { this.setState({ showModal2: false }) }}
        >
          <p>内容</p>
        </Modal>
        {/* 顶部20px弹框 */}
        <Modal
          title="React"
          visible={this.state.showModal3}
          // 我还没有引入就可以修改???
          style={{ top: '20px' }}
          onOk={() => { this.setState({ showModal3: false }); console.log('OK') }}
          onCancel={() => { this.setState({ showModal3: false }) }}
        >
          <p>React</p>
        </Modal>
        {/* 水平垂直居中,centered */}
        <Modal
          title="React"
          visible={this.state.showModal4}
          // 对话框外层容器的类名
          centered
          // wrapClassName="vertical-center-modal"
          onOk={() => { this.setState({ showModal4: false }); console.log('OK') }}
          onCancel={() => { this.setState({ showModal4: false }) }}
        >
          <p>React</p>
        </Modal>
      </>
    )
  }
}
