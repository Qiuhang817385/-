import React, { Component } from 'react'
import { Card, Button, notification } from 'antd';
import { SmileOutlined, PlusCircleTwoTone, LeftCircleTwoTone, RightCircleTwoTone, DownCircleTwoTone } from '@ant-design/icons';
import './style.scss'
export default class Notifications extends Component {
  openNotification = (type) => {
    notification[type]({
      message: 'Message',
      description: '描述',
    })
  }
  openNotification2 = (type, dir) => {
    if (dir) {
      notification.config({
        placement: dir
      })
    }
    notification[type]({
      message: '发工资了',
      description: '这里是描述',
      placement: dir
    })
  }
  openNotificationIcon = (Icon) => {
    notification.open({
      message: 'Notification Title',
      description:
        'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
      // icon: <SmileOutlined style={{ color: '#108ee9' }} />,
      icon: Icon,
    });
  }
  render () {
    return (
      <>
        <Card title="通知提醒框" className="card-wrap">
          <Button type="primary" onClick={() => this.openNotification('success')}>success</Button>
          <Button type="primary" onClick={() => this.openNotification('info')}>info</Button>
          <Button type="primary" onClick={() => this.openNotification('warning')}>warning</Button>
          <Button type="primary" onClick={() => this.openNotification('error')}>error</Button>
        </Card>
        <Card title="通知提醒框的方向" className="card-wrap">
          <Button type="primary" onClick={() => this.openNotification2('success', 'topLeft')}>topLeft</Button>
          <Button type="primary" onClick={() => this.openNotification2('info', 'topRight')}>topRight</Button>
          <Button type="primary" onClick={() => this.openNotification2('warning', 'bottomLeft')}>bottomLeft</Button>
          <Button type="primary" onClick={() => this.openNotification2('error', 'bottomRight')}>bottomRight</Button>
        </Card>
        <Card title="自定义图标" className="card-wrap">
          <Button type="primary" onClick={() => { this.openNotificationIcon(<SmileOutlined style={{ color: '#108ee9' }} />) }}>topLeft</Button>
          <Button type="primary" onClick={() => { this.openNotificationIcon(<PlusCircleTwoTone twoToneColor="#52c41a" />) }}>topRight</Button>
          <Button type="primary" onClick={() => { this.openNotificationIcon(<LeftCircleTwoTone twoToneColor="#52c41a" />) }}>bottomLeft</Button>
          <Button type="primary" onClick={() => { this.openNotificationIcon(<RightCircleTwoTone twoToneColor="#52c41a" />) }}>bottomRight</Button>
        </Card>
      </>
    )
  }
}
