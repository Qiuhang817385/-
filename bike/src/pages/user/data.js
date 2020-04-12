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
    return sex == 1 ? '男' : '女'
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