import React, { Component } from 'react'
import { Card, Button, Row, Col, Modal, Form, Input, Select, Tree } from 'antd';
import './permission.scss'
import ETable from './../../components/ETable/EtableFun1'
import { columns } from './data'
import { Init, Create, editRole } from './req'
import RoleForm from './RoleForm'
import PermEditForm from './PermEditForm'

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
   * 点击创建角色按钮，显示modal框
   */
  handleCreateOpen = () => {
    this.setState({
      isRoleVisible: true
    })
  }
  /**
   * 创建角色--->确定提交
   */
  handleOKRoleSubmit = () => {
    let role = this.roleForm.current.formRef.current.getFieldsValue();
    Create(role).then((res) => {
      if (res.code == '0') {
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
   * 权限设置-打开按钮
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
      //  17日,这里是直接掉的真实的接口来进行权限的设置,
      // 可以进行一个小优化,每次都从本地的一个副本当中来拿到数据,这样就算离线也能显示出来数据
      // menuInfo: item.menus
      // 优化---->
      menuInfo: item.menus
    })
  }
  /**
   * 权限设置-modal框确定
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
      if (res.code == '0') {
        Modal.info({
          'title': '设置权限',
          'content': '设置成功!'
        })
      }
      // axios.get(/role/list)刷新一下页面,未做
    })
  }
  // ETable返回来的数据
  getEtableItem = (rec) => {
    this.setState({
      roleItem: rec,
    })
  }
  render () {
    const { item_list, roleItem, menuInfo } = this.state;
    return (
      <>
        <Card className='card-wrap' >
          <Row>
            <Col span={3}><Button type='primary' onClick={this.handleCreateOpen}>创建角色</Button></Col>
            <Col span={3}><Button type='primary' onClick={this.handlePermissionOpen}>设置权限</Button></Col>
            <Col span={3}> <Button type='primary'>用户授权</Button></Col>
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
          visible={this.state.isRoleVisible}
          onOk={this.handleOKRoleSubmit}
          onCancel={() => {
            this.roleForm.current.RoleformRef.current.resetFields();//重置
            this.setState({
              isRoleVisible: false
            })
          }}
        >
          <RoleForm ref={this.roleForm} />
        </Modal>
        <Modal
          forceRender
          title='设置权限'
          visible={this.state.isPermissionVisible}
          onOk={this.handleOKPerEditSubmit}
          onCancel={() => {
            this.setState({
              isPermissionVisible: false
            })
          }}
        >
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
      </>
    )
  }
}