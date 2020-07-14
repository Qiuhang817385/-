import React from 'react'
import { Card, Timeline } from 'antd';
import { ClockCircleOutlined, CheckCircleTwoTone } from '@ant-design/icons';
import './style.scss'
export default function TimeLine1 () {
  const data = [
    { content: 'Create a services site 2015-09-01', done: true },
    { content: 'Solve initial network problems 2015-09-01', done: true },
    { content: 'Technical testing 2015-09-01', done: false },
    { content: 'Network problems being solved 2015-09-01', done: false }
  ]
  return (
    <>
      {/* blue, red, green, gray，或自定义的色值 */}
      <Card title="时间轴3" className="card">
        <Timeline>
          {
            data.map((item) => {
              if (item.done) {
                return <Timeline.Item dot={<CheckCircleTwoTone className="timeline-clock-icon" />}>{item.content}</Timeline.Item>
              } else {
                return <Timeline.Item color="red">{item.content}</Timeline.Item>
              }
            })
          }
          {/* <Timeline.Item dot={<CheckCircleTwoTone className="timeline-clock-icon" />}>Solve initial network problems 2015-09-01</Timeline.Item>
          <Timeline.Item dot={<CheckCircleTwoTone className="timeline-clock-icon" />} >
            Technical testing 2015-09-01
          </Timeline.Item>
          <Timeline.Item dot={<CheckCircleTwoTone className="timeline-clock-icon" />}>Network problems being solved 2015-09-01</Timeline.Item> */}
        </Timeline>
      </Card>
    </>
  )
}
