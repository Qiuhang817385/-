import utils from './../../utils/utils';
export const params = {
  page: 1
}
export const columns = [
  {
    title: '城市ID',
    dataIndex: 'id'
  }, {
    title: '城市名称',
    dataIndex: 'name'
  }, {
    title: '用车模式',
    dataIndex: 'mode',
    render (mode) {
      return mode === 1 ? '指定停车点模式' : '禁停区模式';
    }
  }, {
    title: '营运模式',
    dataIndex: 'op_mode',
  }, {
    title: '授权加盟商',
    dataIndex: 'franchisee_name'
  }, {
    title: '城市管理员',
    dataIndex: 'city_admins',
    render (arr) {
      return arr.map((item) => {
        return item.user_name;
      }).join(',');
    }
  }, {
    title: '城市开通时间',
    dataIndex: 'open_time'
  }, {
    title: '操作时间',
    dataIndex: 'update_time',
    render: utils.formateDate //格式化时间戳
  }, {
    title: '操作人',
    dataIndex: 'sys_user_name'
  }
]