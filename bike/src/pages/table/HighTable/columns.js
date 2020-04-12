import React from 'react';


export const columns = [
  {
    title: 'id',
    key: 'id',
    width: 80,
    dataIndex: 'id'
  },
  {
    title: '用户名',
    key: 'userName',
    width: 80,
    dataIndex: 'userName'
  },
  {
    title: '性别',
    key: 'sex',
    width: 80,
    dataIndex: 'sex',
    render (sex) {
      return sex == 1 ? '男' : '女'
    }
  },
  {
    title: '状态',
    key: 'state',
    width: 80,
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
  },
  {
    title: '爱好',
    key: 'interest',
    width: 80,
    dataIndex: 'interest',
    render (abc) {
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
      return config[abc];
    }
  },
  {
    title: '生日',
    key: 'birthday',
    width: 120,
    dataIndex: 'birthday'
  },
  {
    title: '地址',
    key: 'address',
    width: 120,
    dataIndex: 'address'
  },
  {
    title: '早起时间',
    key: 'time',
    width: 80,
    dataIndex: 'time'
  }
]

export const columns2 = [
  {
    title: 'id',
    key: 'id',
    width: 80,
    fixed: 'left',
    dataIndex: 'id'
  },
  {
    title: '用户名',
    key: 'userName',
    width: 80,
    fixed: 'left',
    dataIndex: 'userName'
  },
  {
    title: '性别',
    key: 'sex',
    width: 80,
    dataIndex: 'sex',
    render (sex) {
      return sex == 1 ? '男' : '女'
    }
  },
  {
    title: '状态',
    key: 'state',
    width: 80,
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
  },
  {
    title: '爱好',
    key: 'interest',
    width: 80,
    dataIndex: 'interest',
    render (abc) {
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
      return config[abc];
    }
  },
  {
    title: '生日',
    key: 'birthday',
    width: 120,
    dataIndex: 'birthday'
  },
  {
    title: '生日',
    key: 'birthday',
    width: 120,
    dataIndex: 'birthday'
  }, {
    title: '生日',
    key: 'birthday',
    width: 120,
    dataIndex: 'birthday'
  }, {
    title: '生日',
    key: 'birthday',
    width: 120,
    dataIndex: 'birthday'
  }, {
    title: '生日',
    key: 'birthday',
    width: 120,
    dataIndex: 'birthday'
  }, {
    title: '生日',
    key: 'birthday',
    width: 120,
    dataIndex: 'birthday'
  }, {
    title: '生日',
    key: 'birthday',
    width: 120,
    dataIndex: 'birthday'
  }, {
    title: '生日',
    key: 'birthday',
    width: 120,
    dataIndex: 'birthday'
  }, {
    title: '生日',
    key: 'birthday',
    width: 120,
    dataIndex: 'birthday'
  }, {
    title: '生日',
    key: 'birthday',
    width: 120,
    dataIndex: 'birthday'
  }, {
    title: '生日',
    key: 'birthday',
    width: 120,
    dataIndex: 'birthday'
  }, {
    title: '生日',
    key: 'birthday',
    width: 120,
    dataIndex: 'birthday'
  }, {
    title: '生日',
    key: 'birthday',
    width: 120,
    dataIndex: 'birthday'
  }, {
    title: '生日',
    key: 'birthday',
    width: 120,
    dataIndex: 'birthday'
  }, {
    title: '生日',
    key: 'birthday',
    width: 120,
    dataIndex: 'birthday'
  }, {
    title: '生日',
    key: 'birthday',
    width: 120,
    dataIndex: 'birthday'
  }, {
    title: '生日',
    key: 'birthday',
    width: 120,
    dataIndex: 'birthday'
  },
  {
    title: '地址',
    key: 'address',
    width: 120,
    fixed: 'right',
    dataIndex: 'address'
  },
  {
    title: '早起时间',
    key: 'time',
    width: 80,
    fixed: 'right',
    dataIndex: 'time'
  }
]

export const columns3 = [
  {
    title: 'id',
    key: 'id',
    dataIndex: 'id'
  },
  {
    title: '用户名',
    key: 'userName',
    dataIndex: 'userName'
  },
  {
    title: '性别',
    key: 'sex',
    dataIndex: 'sex',
    render (sex) {
      return sex == 1 ? '男' : '女'
    }
  },
  {
    title: '年龄',
    key: 'age',
    dataIndex: 'age',
    sorter: (a, b) => {
      return a.age - b.age;
    },
    // sortOrder:this.state.sortOrder
  },
  {
    title: '状态',
    key: 'state',
    dataIndex: 'state',
    render (state) {
      let config = {
        '1': '准备',
        '2': '进行中',
        '3': '结束',
        '4': '付款',
        '5': '付款完成'
      }
      return config[state];
    }
  },
  {
    title: '爱好',
    key: 'interest',
    dataIndex: 'interest',
    render (abc) {
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
      return config[abc];
    }
  },
  {
    title: '生日',
    key: 'birthday',
    dataIndex: 'birthday'
  },
  {
    title: '地址',
    key: 'address',
    dataIndex: 'address'
  },
  {
    title: '早起时间',
    key: 'time',
    dataIndex: 'time'
  }
]