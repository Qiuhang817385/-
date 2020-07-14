export const getOption = () => {
  let option = {
    title: {
      text: '用户骑行订单'
    },
    tooltip: {
      /* 
        'axis'
        坐标轴触发，主要在柱状图，折线图等会使用类目轴的图表中使用。
       */
      trigger: 'axis'
    },
    xAxis: {
      data: [
        '周一',
        '周二',
        '周三',
        '周四',
        '周五',
        '周六',
        '周日'
      ]
    },
    yAxis: {
      // 'value' 数值轴，适用于连续数据。
      type: 'value'
    },
    series: [
      {
        // name:系列名称，用于tooltip的显示
        name: '订单量',
        type: 'bar',
        data: [
          1000,
          2000,
          1500,
          3000,
          2000,
          1200,
          6900
        ]
      }
    ]
  }
  return option;
}

export const getOption2 = () => {
  let option = {
    title: {
      text: '用户骑行订单'
    },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['OFO', '摩拜', '小蓝']
    },
    xAxis: {
      data: [
        '周一',
        '周二',
        '周三',
        '周四',
        '周五',
        '周六',
        '周日'
      ]
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        name: 'OFO',
        type: 'bar',
        data: [
          2000,
          3000,
          5500,
          7000,
          8000,
          12000,
          20000
        ]
      },
      {
        name: '摩拜',
        type: 'bar',
        data: [
          1500,
          3000,
          4500,
          6000,
          8000,
          10000,
          15000
        ]
      },
      {
        name: '小蓝',
        type: 'bar',
        data: [
          1000,
          2000,
          2500,
          4000,
          6000,
          7000,
          8000
        ]
      },
    ]
  }
  return option;
}
