import React from 'react'
import { Card, Timeline } from 'antd';
import { ClockCircleOutlined, CheckCircleTwoTone } from '@ant-design/icons';
import './style.scss'
export default function TimeLine1 () {
  return (
    <>
      {/* blue, red, green, gray，或自定义的色值 */}
      <Card title="时间轴3" className="card">
        <Timeline>
          <Timeline.Item color="red">Create a services site 2015-09-01</Timeline.Item>
          <Timeline.Item dot={<CheckCircleTwoTone className="timeline-clock-icon" />}>Solve initial network problems 2015-09-01</Timeline.Item>
          <Timeline.Item dot={<ClockCircleOutlined className="timeline-clock-icon" />} color="red">
            Technical testing 2015-09-01
          </Timeline.Item>
          <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
        </Timeline>
      </Card>
    </>
  )
}
