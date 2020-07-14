//React 需要的 key，如果已经设置了唯一的 dataIndex，可以忽略这个属性
import React from 'react'
import { Tag, Button } from 'antd'
export const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    render: text => <Button>{text}</Button>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
  // 对Tags做处理
  {
    title: 'Tags',
    dataIndex: 'tags',
    render: tags => (
      <span>
        {
          tags.map(tag => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'loser') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })
        }
      </span>
    ),
  },
  {
    title: 'Action',
    render: (text, record) => (
      <span>
        <Button style={{ marginRight: 16 }}>Invite {record.name}</Button>
        <Button>Delete</Button>
      </span>
    ),
  },
];

export const columns2 = [
  {
    title: '用户名',
    dataIndex: 'username',
  },
  {
    title: '性别',
    dataIndex: 'sex',
    render: sexid => (<span>
      {<span>{sexid === 1 ? '男' : '女'}</span>}
    </span>
    )

  }, {
    title: '状态',
    dataIndex: 'state',
    render: state => {
      let config = {
        '1': '完成',
        '2': '未付款',
        '3': '进行中',
        '4': '付款中',
        '5': '准备开始'
      }
      return config[state]
    }
  },
  {
    title: '爱好',
    dataIndex: 'interest'
  },
  {
    title: '婚否',
    dataIndex: 'isMarried'
  },
  {
    title: '生日',
    dataIndex: 'birthday'
  },
  {
    title: '地址',
    dataIndex: 'address'
  },
  {
    title: '时间',
    dataIndex: 'time'
  }
]