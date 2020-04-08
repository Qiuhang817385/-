import React, { Component } from 'react'
import './style.scss'
import { Card, message, Button } from 'antd'
export default class Message extends Component {
  showMessage = (type) => {
    message[type]({
      content: '这是内容',
    })
  }
  render () {
    return (
      <>
        <Card title="Message" className="card-wrap">
          <Button type="primary" onClick={() => this.showMessage('success')}>success</Button>
          <Button type="primary" onClick={() => this.showMessage('info')}>info</Button>
          <Button type="primary" onClick={() => this.showMessage('warning')}>warning</Button>
          <Button type="primary" onClick={() => this.showMessage('error')}>error</Button>
          <Button type="primary" onClick={() => this.showMessage('loading')}>loading</Button>
        </Card>
        {/* <Message></Message> */}
      </>
    )
  }
}
