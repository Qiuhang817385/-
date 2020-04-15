export const columns = [
  {
    title: '订单编号',
    dataIndex: 'order_sn'
  }, {
    title: '车辆编号',
    dataIndex: 'bike_sn'
  }, {
    title: '用户名',
    dataIndex: 'user_name',
  }, {
    title: '手机号',
    dataIndex: 'mobile'
  }, {
    title: '里程',
    dataIndex: 'distance',
    render (distance) {
      return distance / 1000 + 'Km';
    }
  }, {
    title: '行驶时长',
    dataIndex: 'total_time'
  }, {
    title: '状态',
    dataIndex: 'status',
  }, {
    title: '开始时间',
    dataIndex: 'start_time'
  }, {
    title: '结束时间',
    dataIndex: 'end_time'
  }, {
    title: '订单金额',
    dataIndex: 'total_fee'
  }, {
    title: '实付金额',
    dataIndex: 'user_pay'
  }
]
export const formList2 = [
  {
    type: 'SELECT',
    label: '城市',
    field: 'city',
    placeholder: '全部',
    initialValue: '1',
    width: 80,
    list: [{ id: '0', name: '全部' }, { id: '1', name: '北京' }, { id: '2', name: '天津' }, { id: '3', name: '上海' }]
  },
  {
    type: '时间查询'
  },
  {
    type: 'SELECT',
    label: '订单状态',
    field: 'order_status',
    placeholder: '全部',
    initialValue: '1',
    width: 80,
    list: [{ id: '0', name: '全部' }, { id: '1', name: '进行中' }, { id: '2', name: '结束行程' }]
  }
]
export const params = {
  page: 1
}
export const formItemLayout = {
  labelCol: { span: 5 },
  wrapperCol: { span: 19 }
}
export const rowSelection = {
  type: 'radio',
  // selectedRowKeys
}
export const formList = {
  initValue: {
    city: '0',
    order_status: '0'
  },
  formList: [

    {
      name: 'city',
      type: 'select',
      label: '城市',
      placeholder: '全部',
      list: [
        { id: '0', name: '全部' },
        { id: '1', name: '北京' },
        { id: '2', name: '河北' }
      ],
      width: 100
    },
    {
      type: 'rangepicker',
      label: '订单时间',
      name: 'range-picker',
      width: 250
    },
    // {
    //   type: 'datepicker',
    //   label: '订单时间2',
    //   name: 'date-picker'
    // },
    {
      name: 'order_status',
      type: 'select',
      label: '订单状态',
      placeholder: '全部',
      list: [
        { id: '0', name: '全部' },
        { id: '1', name: '进行中' },
        { id: '2', name: '结束' }
      ],
      width: 100
    },
    // {
    //   name: 'check',
    //   type: 'checkbox',
    //   label: '复选',
    //   placeholder: '',
    //   list: [
    //   ],
    //   width: 100,
    //   options: ['Apple', 'Pear', 'Orange']
    // },
  ]
}