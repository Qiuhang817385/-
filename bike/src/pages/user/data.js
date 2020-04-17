export const columns = [{
  title: 'id',
  dataIndex: 'id'
}, {
  title: '用户名',
  dataIndex: 'username'
}, {
  title: '性别',
  dataIndex: 'sex',
  render (sex) {
    return sex === 1 ? '男' : '女'
  }
}, {
  title: '状态',
  dataIndex: 'state',
  render (state) {
    let config = {
      '1': '开始',
      '2': '进行中',
      '3': '结束',
      '4': '付款',
      '5': '付款完成'
    }
    return config[state];
  }
}, {
  title: '爱好',
  dataIndex: 'interest',
  render (interest) {
    let config = {
      '1': '游泳',
      '2': '打篮球',
      '3': '踢足球',
      '4': '跑步',
      '5': '爬山',
      '6': '骑行',
      '7': '桌球',
      '8': '麦霸'
    }
    return config[interest];
  }
}, {
  title: '婚否',
  dataIndex: 'isMarried',
  render (isMarried) {
    return isMarried ? '已婚' : '未婚'
  }
}, {
  title: '生日',
  dataIndex: 'birthday'
}, {
  title: '联系地址',
  dataIndex: 'address'
}, {
  title: '早起时间',
  dataIndex: 'time'
}
];



export const formList = {
  initValue: {
  },
  submit: true,
  formList: [
    {
      name: 'username',
      type: 'input',
      label: '用户名',
      placeholder: '请输入用户名',
      width: 100
    },
    {
      name: 'pwd',
      type: 'password',
      label: '密码',
      placeholder: '请输入密码',
      width: 100
    },
    {
      type: 'datepicker',
      label: '入职时间',
      name: 'date-picker'
    }
  ]
}
/**
 * 增加
 */
/* 
  const options = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange' },
];
 */
export const create = {
  formLayout: 'horizontal',
  layout: {
    labelCol: {
      span: 6,
    },
    wrapperCol: {
      span: 15,
    },
  },
  initValue: {
    sex: 'man'
  },
  formList: [
    {
      name: 'username',
      type: 'input',
      label: '姓名',
      placeholder: '请输入姓名',
    },
    {
      name: 'sex',
      type: 'radiogroup',
      label: '性别',
      options: [
        { label: '男', value: '1' },
        { label: '女', value: '2' },
      ]
    },
    {
      type: 'datepicker',
      label: '入职时间',
      name: 'date-picker'
    }
  ]
}
/**
 * 查询
 */
export const read = {
  initValue: {
  },
  formList: [
    {
      name: 'username',
      type: 'input',
      label: '用户名',
      placeholder: '请输入用户名',
      width: 100
    },
    {
      name: 'pwd',
      type: 'password',
      label: '密码',
      placeholder: '请输入密码',
      width: 100
    },
    {
      type: 'datepicker',
      label: '入职时间',
      name: 'date-picker'
    }
  ]
}
/**
 * 删除
 */
export const del = {
  initValue: {
  },
  formList: [
    {
      name: 'username',
      type: 'input',
      label: '用户名',
      placeholder: '请输入用户名',
      width: 100
    },
    {
      name: 'pwd',
      type: 'password',
      label: '密码',
      placeholder: '请输入密码',
      width: 100
    },
    {
      type: 'datepicker',
      label: '入职时间',
      name: 'date-picker'
    }
  ]
}
/**
 * 修改
 */
export const update = {
  formLayout: 'horizontal',
  layout: {
    labelCol: {
      span: 6,
    },
    wrapperCol: {
      span: 15,
    },
  },
  initValue: {
  },
  formList: [
    {
      name: 'username',
      type: 'input',
      label: '姓名',
      width: 100
    },
    {
      name: 'sex',
      type: 'radiogroup',
      label: '性别',
      options: [
        { label: '男', value: 1 },
        { label: '女', value: 2 },
      ]
    },
    {
      type: 'datepicker',
      label: '生日',
      name: 'date-picker'
    },
    {
      type: 'input',
      label: '联系地址',
      name: 'address',
    },
  ]
}