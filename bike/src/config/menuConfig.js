/**
 * 用于配置左侧菜单栏
 */
const menuList = [
  {
    title: '首页',
    key: '/home'
  },
  {
    title: 'UI',
    key: '/ui',
    children: [
      {
        title: '按钮',
        key: '/ui/buttons',
      },

      {
        title: '弹框',
        key: '/ui/modals',
      },
      {
        title: 'Loading',
        key: '/ui/loadings',
      },
      {
        title: '通知提醒',
        key: '/ui/notification',
      },
      {
        title: '全局Message',
        key: '/ui/messages',
      },
      {
        title: 'Tab页签',
        key: '/ui/tabs',
      },
      {
        title: '图片画廊',
        key: '/ui/gallery',
      },
      {
        title: '轮播图',
        key: '/ui/carousel',
      },
      {
        title: '分页',
        key: '/ui/pagination',
      },
      {
        title: '复选框',
        key: '/ui/checkboxs',
      },
      {
        title: '时间控件',
        key: '/ui/timepicker',
      },
      {
        title: '穿梭框',
        key: '/ui/transfer',
      },
      {
        title: '树形结构',
        key: '/ui/tree',
      },
      {
        title: '描述列表',
        key: '/ui/description',
      },
      {
        title: '时间轴',
        key: '/ui/timeLine',
      },
    ]
  },
  {
    title: '表单',
    key: '/form',
    children: [
      {
        title: '登录',
        key: '/form/login',
      },
      {
        title: '注册',
        key: '/form/reg',
      }
    ]
  },
  {
    title: '表格',
    key: '/table',
    children: [
      {
        title: '基础表格',
        key: '/table/basic',
      },
      {
        title: '高级表格',
        key: '/table/high',
      },
      {
        title: 'Bug修复表格',
        key: '/table/bugFix',
      },
    ]
  },
  {
    title: '富文本',
    key: '/rich'
  },
  {
    title: '城市管理',
    key: '/city'
  },
  {
    title: '订单管理',
    key: '/order',
    btnList: [
      {
        title: '订单详情',
        key: 'detail'
      },
      {
        title: '结束订单',
        key: 'finish'
      }
    ]
  },
  {
    title: '员工管理',
    key: '/user'
  },
  {
    title: '银行表单',
    key: '/bankForm'
  },
  {
    title: '图标',
    key: '/charts',
    children: [
      {
        title: '柱形图',
        key: '/charts/bar'
      },
      {
        title: '饼图',
        key: '/charts/pie'
      },
      {
        title: '折线图',
        key: '/charts/line'
      },
    ]
  },
  {
    title: '权限设置',
    key: '/permission'
  }
]
export default menuList;