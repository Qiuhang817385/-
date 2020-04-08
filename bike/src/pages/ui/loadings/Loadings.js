import React, { Component } from 'react'
import { Card, Button, Spin, Alert } from 'antd';
import { LoadingOutlined, PlusCircleTwoTone, SyncOutlined } from '@ant-design/icons';
import './style.scss';
export default class Loadings extends Component {
  // 两种使用span的方式
  //  方式一:直接使用icon图标+spin
  //  方式二:使用spin图标+icon+spin
  //  方式二可以自定义描述文案+大小
  render () {
    const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
    const antIcon2 = <PlusCircleTwoTone twoToneColor="#52c41a" spin />
    // const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
    return (
      <>
        <Card title="Spin的用法" className="card-wrap">
          <Spin size="small" />
          <Spin />
          <Spin size="large" />
          {/* 指定使用什么样子的图标 */}
          <Spin indicator={antIcon} />
          {/* 把spin用在其他组件里面 */}
          <Spin size="large" indicator={antIcon2} />

          <SyncOutlined spin />
        </Card>
        <Card title="内容遮罩" className="card-wrap">
          <Alert
            message="React"
            description="这里是info描述"
            type="info"
          ></Alert>

          <Spin>
            <Alert
              message="React"
              description="这里是warning描述"
              type="warning"
            ></Alert>
          </Spin>

          <Spin tip="这里是提示文字" indicator={antIcon2}>
            <Alert
              message="React"
              description="这里是success描述"
              type="success"
            ></Alert>
          </Spin>

          <Spin>
            <Button>这是一个按钮</Button>
          </Spin>
        </Card>
      </>
    )
  }
}
