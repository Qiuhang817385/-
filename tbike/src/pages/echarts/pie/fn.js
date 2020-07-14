export const getOption = () => {
  let option = {
    title: {
      text: '用户骑行订单',
      x: 'center'
    },
    legend: {
      orient: 'vertical',
      right: 10,
      top: 20,
      bottom: 20,
      data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    },
    tooltip: {
      trigger: 'item',
      formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    series: [
      {
        name: '订单量',
        type: 'pie',
        radius: '55%',
        center: [
          '50%', '60%'
        ],
        data: [
          {
            value: 1000,
            name: '周一'
          },
          {
            value: 1000,
            name: '周二'
          },
          {
            value: 2000,
            name: '周三'
          },
          {
            value: 1500,
            name: '周四'
          },
          {
            value: 3000,
            name: '周五'
          },
          {
            value: 2000,
            name: '周六'
          },
          {
            value: 1200,
            name: '周日'
          },
        ],
        itemStyle: {
          emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  }
  return option;
}

export const getOption2 = () => {
  let option = {
    title: {
      text: '用户骑行订单',
      x: 'center'
    },
    legend: {
      orient: 'vertical',
      right: 10,
      top: 20,
      bottom: 20,
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
    tooltip: {
      trigger: 'item',
      formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    series: [
      {
        name: '订单量',
        type: 'pie',
        radius: ['50%', '80%'],
        center: [
          '50%', '60%'
        ],
        data: [
          {
            value: 1000,
            name: '周一'
          }, {
            value: 1000,
            name: '周二'
          }, {
            value: 2000,
            name: '周三'
          }, {
            value: 1500,
            name: '周四'
          }, {
            value: 3000,
            name: '周五'
          }, {
            value: 2000,
            name: '周六'
          }, {
            value: 1200,
            name: '周日'
          }
        ],
        itemStyle: {
          emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  }
  return option;
}

export const getOption3 = () => {
  let option = {
    title: {
      text: '用户骑行订单',
      x: 'center'
    },
    legend: {
      orient: 'vertical',
      right: 10,
      top: 20,
      bottom: 20,
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
    tooltip: {
      trigger: 'item',
      formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    series: [
      {
        name: '订单量',
        type: 'pie',
        radius: '55%',
        center: [
          '50%', '50%'
        ],
        data: [
          {
            value: 1000,
            name: '周一'
          },
          {
            value: 1000,
            name: '周二'
          },
          {
            value: 2000,
            name: '周三'
          },
          // 15618399871
          // 
          {
            value: 1500,
            name: '周四'
          },
          {
            value: 3000,
            name: '周五'
          },
          {
            value: 2000,
            name: '周六'
          },
          {
            value: 1200,
            name: '周日'
          }
        ].sort(function (a, b) { return a.value - b.value; }),
        roseType: 'radius',
        animationType: 'scale',
        animationEasing: 'elasticOut',
        animationDelay: function (idx) {
          return Math.random() * 200;
        }
      }
    ]
  }
  return option;
}
