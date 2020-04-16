import React from 'react'
import Utils from './../../utils/utils'
import { Badge } from 'antd'
export const columns = [
  {
    title: '角色ID',
    dataIndex: 'id'
  }, {
    title: '角色名称',
    dataIndex: 'role_name'
  }, {
    title: '创建时间',
    dataIndex: 'create_time',
    render: Utils.formatTime
  }, {
    title: '使用状态',
    dataIndex: 'status',
    render (status) {
      if (status == 1) {
        return <Badge status="success" text="启用" />
      } else {
        return <Badge status="error" text="停用" />
      }
    }
  }, {
    title: '授权时间',
    dataIndex: 'authorize_time',
    render: Utils.formatTime
  }, {
    title: '授权人',
    dataIndex: 'authorize_user_name',
  }
];