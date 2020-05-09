import React, { Component } from 'react'
import { Card, Button, Row, Col, Modal, } from 'antd';
import './permission.scss'
import ETable from './../../components/ETable/EtableFun1'
import { columns } from './data'
import { Init, Create, editRole, accessUser, accessUserChange } from './req'
import RoleForm from './RoleForm'
import PermEditForm from './PermEditForm'
import RoleAuth from './RoleAuth'

export default class Permissions extends Component {
  constructor(props) {
    super(props);
    this.roleForm = React.createRef();
    this.permEditForm = React.createRef();
    this.state = {
      // 创建角色
      item_list: [],
      roleItem: null,
      menuInfo: [],
      isRoleVisible: false,
      // 权限设置
      isPermissionVisible: false,
      //用户授权
      dataSource: [],
      // target: [],
      isUserVisible: false
    }
  }
  //数据初始化
  componentDidMount () {
    Init().then((res) => {
      let items = res.result.item_list;
      items.map((item, index) => { item.key = index + 1; return item })
      this.setState({ item_list: items })
    })
  }
  /**
   * 创建角色--Open
   */
  handleCreateOpen = () => {
    console.log('this.roleForm', this.roleForm)
    this.setState({
      isRoleVisible: true
    })
  }
  /**
   * 创建角色--OnOk
   */
  handleOKRoleSubmit = () => {
    let role = this.roleForm.current.RoleformRef.current.getFieldsValue();
    Create(role).then((res) => {
      if (res.code === '0') {
        Modal.info({
          title: '创建用户',
          content: '创建成功！'
        })
        // 然后刷新页面，然后重置表单，重新加载数据
        this.roleForm.current.RoleformRef.current.resetFields()
      }
    })
    this.setState({
      isRoleVisible: false
    })
  }
  /**
   * 权限设置-Open
   */
  handlePermissionOpen = () => {
    let item = this.state.roleItem;
    if (!item) {
      Modal.info({
        title: '设置权限',
        content: '请先选中一条角色'
      })
      return
    }
    // 可以使用这个的原因是加了forceRender
    this.permEditForm.current.PermformRef.current.resetFields();
    this.setState({
      isPermissionVisible: true,
      /* 17日,这里本来是直接调的真实的接口来进行权限的设置,可以进行一个小优化,每次都从本地副本当中拿到数据,这样就算离线也能显示出来正确数据 */
      menuInfo: item.menus
    })
  }
  /**
   * 权限设置--OnOk
   */
  handleOKPerEditSubmit = () => {
    // 修改状态
    let formData = this.permEditForm.current.PermformRef.current.getFieldsValue();
    let item = this.state.roleItem;
    item.status = formData.status;
    // 如果设置成停用,应该禁用整个树形框,或者整个数组清0
    this.setState({
      isPermissionVisible: false,
      roleItem: item
    })
    let willSendRoleData = formData;
    //获取当前角色id
    willSendRoleData["Id"] = item.id;
    willSendRoleData["menus"] = item.menus;
    editRole(willSendRoleData).then((res) => {
      if (res.code === '0') {
        Modal.info({
          'title': '设置权限',
          'content': '设置成功!'
        })
      }
      // axios.get(/role/list)刷新一下页面,未做
    })
  }
  /**
   * 用户授权--Open //每次打开用户授权,都会获取最新的target,这个当然没有问题
   *                只是这样做,不调用真实的接口,本地的数据无法做到模拟真实的情况
   *                优化的办法是当子组件调用父组件的方法后,直接利用返回的值,修改本身的数据
   *                -->真实的接口少了这一步是没有问题的,这么做,当修改完之后,modal的ok事件再次调用接口可以直接修改
   *    进行优化--->把每次打开获取角色权限这一步操作,放到初始化数据当中
   * 
   *      getEtableItem()-->每次单击到用户的时候就获取-->这样其实不好,用户可能点击多次
   *      或者conponentDidMount当中 -->放到一个数组当中,给每一个用户都有对应的信息,这个好一些
   *      这样可以减少每次的请求次数-->这样可能也不好,因为如果不用到这个功能,那么可能给用户带来不必要的流量耗费
   */
  handleUserAuthOpen = () => {
    let item = this.state.roleItem;
    if (!item) {
      Modal.info({
        title: '设置权限',
        content: '请先选中一条角色'
      })
      return
    }
    // 每次打开都获取当中的最新权限
    // 每次打开都获取当中的最新权限
    // 每次打开都获取当中的最新权限--这里居然是最佳位置
    if (item) {
      console.log('item.id :', item.id);
      // 获取角色下面的用户列表,异步函数,在单击的时候触发一次,初始化触发一次
      accessUser(item.id).then((res) => {
        let List = res.result;
        this.getAuthUserList(List);
      })
    }
    // 打开弹框
    this.setState({ isUserVisible: true })
  }
  /**
  * 用户授权--OnOk
  */
  handleOKUserSubmit = () => {
    let data = {
      id: this.state.roleItem.id,
      targetKeys: this.state.targetKeys || []
    }
    accessUserChange(data).then((res) => {
      Modal.info({
        title: '用户授权',
        content: '授权成功'
      })
    })
    this.setState({ isUserVisible: false })
    //刷新页面接口,获取最新的数据 
  }

  /**
   * 筛选目标用户
   */
  getAuthUserList = (data) => {
    if (data && data.length > 0) {
      // console.log('data :', data);
      let MockData = [];
      for (const iterator of data) {
        MockData.push({
          key: iterator.user_id,
          title: iterator.user_name,
          status: iterator.status
        })
      }
      let target = [];
      // concat的用法和filter的用法
      // dataSource = dataSource.concat(MockData.filter((item) => item.status === 1))
      target = target.concat(MockData.filter((item) => item.status === 1)).map(item => item.key)
      // console.log('target :', target);
      this.setState({ dataSource: MockData, target })
    }
  }


  /**
   *  ETable返回来的数据
   */
  getEtableItem = (rec) => {
    this.setState({
      roleItem: rec,
    })
  }
  componentWillUnmount () {
    this.setState = (state, callback) => {
      return;
    };
  }
  render () {
    const { item_list, roleItem, target, menuInfo, isUserVisible, isPermissionVisible, isRoleVisible } = this.state;
    return (
      <>
        <Card className='card-wrap' >
          <Row>
            <Col span={3}><Button type='primary' onClick={this.handleCreateOpen}>创建角色</Button></Col>
            <Col span={3}><Button type='primary' onClick={this.handlePermissionOpen}>设置权限</Button></Col>
            <Col span={3}> <Button type='primary' onClick={this.handleUserAuthOpen}>用户授权</Button></Col>
          </Row>
        </Card>
        <Card className='card-wrap'>
          <ETable
            // Bug,不可读取属性,返回来的rec是一个hook属性
            getItem={rec => { this.getEtableItem(rec) }}
            columns={columns}
            dataSource={item_list}
            pagination={false}
          />
        </Card>
        {/* 创建角色弹框 */}
        <Modal
          title="创建角色"
          visible={isRoleVisible}
          onOk={this.handleOKRoleSubmit}
          onCancel={() => {
            this.roleForm.current.RoleformRef.current.resetFields();//重置
            this.setState({ isRoleVisible: false })
          }}
        >
          <RoleForm ref={this.roleForm} />
        </Modal>
        {/* 设置角色的权限 */}
        <Modal
          forceRender
          title='设置权限'
          visible={isPermissionVisible}
          onOk={this.handleOKPerEditSubmit}
          onCancel={() => {
            this.setState({ isPermissionVisible: false })
          }}>
          <PermEditForm
            ref={this.permEditForm}
            detailInfo={roleItem || {}}
            menuInfo={menuInfo}
            // 子组件调用父组件的方法,进行传值
            patchMenuInfo={(checkedKeys) => {
              // 优化点,先修改掉roleItem副本的数组内容,
              // 因为此时还没有关闭掉页面,所以依然需要修改menuInfo
              // -->然后render-->获得最新的menuInfo--->再次传递到子组件渲染页面
              let roleItem = this.state.roleItem;
              roleItem.menus = checkedKeys
              this.setState({
                menuInfo: checkedKeys,
                roleItem
              })
            }}
          ></PermEditForm>
        </Modal>
        {/* 用户授权 */}
        <Modal
          forceRender
          title='设置权限'
          visible={isUserVisible}
          onOk={this.handleOKUserSubmit}
          onCancel={() => { this.setState({ isUserVisible: false }) }}>
          <RoleAuth
            AuthName={roleItem && roleItem.role_name}
            mockData={this.state.dataSource}
            targetKeys={target ? target : []}
            patchUserInfo={(res) => this.setState({ target: res })}
          />
        </Modal>
      </>
    )
  }
}