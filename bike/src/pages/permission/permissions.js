import React, { Component } from 'react'
import { Card, Button, Row, Col, Modal, Form, Input, Select } from 'antd';
import './permission.scss'
import ETable from './../../components/ETable/EtableFun1'
import { columns } from './data'
import { Init, Create } from './req'
import RoleForm from './RoleForm'
const FormItem = Form.Item;
const Option = Select.Option;
export default class Permissions extends Component {
  constructor(props) {
    super(props);
    this.roleForm = React.createRef();
    this.permEditForm = React.createRef();
    this.state = {
      // 创建角色
      item_list: [],
      roleItem: null,
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
  handleCreate = () => {
    this.setState({
      isRoleVisible: true
    })
  }
  /**
   * 创建角色--->确定提交
   */
  handleRoleSubmit = () => {
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
   * 权限设置-按钮
   */
  handlePermission = () => {
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
    })
    // isPermissionVisible
  }
  /**
   * 权限设置-modal框
   */
  handlePerEditSubmit = () => {
    this.setState({
      isPermissionVisible: false
    })
  }


  render () {
    const { item_list, roleItem } = this.state;
    return (
      <>
        <Card className='card-wrap' >
          <Row>
            <Col span={3}><Button type='primary' onClick={this.handleCreate}>创建角色</Button></Col>
            <Col span={3}><Button type='primary' onClick={this.handlePermission}>设置权限</Button></Col>
            <Col span={3}> <Button type='primary'>用户授权</Button></Col>
          </Row>
        </Card>
        <Card className='card-wrap'>
          <ETable
            getItem={rec => this.setState({ roleItem: rec })}
            columns={columns}
            dataSource={item_list}
            pagination={false}
          />
        </Card>
        {/* 创建角色弹框 */}
        <Modal
          title="创建角色"
          visible={this.state.isRoleVisible}
          onOk={this.handleRoleSubmit}
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
          onOk={this.handlePerEditSubmit}
          onCancel={() => {
            this.setState({
              isPermissionVisible: false
            })
          }}
        >
          <PermEditForm
            ref={this.permEditForm}
            detailInfo={roleItem || {}}
          ></PermEditForm>
        </Modal>
      </>
    )
  }
}


class PermEditForm extends Component {
  PermformRef = React.createRef();
  render () {
    // 选中的单行数据
    const { detailInfo } = this.props
    console.log('detailInfo :', detailInfo);
    // console.table(detailInfo);
    console.log('detailInfo.status :', detailInfo.status);
    // detailInfo.role_name/status/authorize_user_name/authorize_time/create_time/menus
    const formItemLayout = {
      labelCol: { span: 5 },
      wrapperCol: { span: 18 }
    };
    return (<>
      {/* shouldUpdate={(prevValues, currentValues) => prevValues.gender !== currentValues.gender} */}
      <Form ref={this.PermformRef} layout="horizontal" initialValues={{
        status: detailInfo.status
      }}>
        <FormItem label="角色名称：" {...formItemLayout}>
          {/* 详情里面的角色信息名称 */}
          <Input disabled maxLength="8" placeholder={detailInfo.role_name} />
        </FormItem>
        <FormItem label="状态" {...formItemLayout} name='status'>
          <Select>
            <Option value={1}>启用</Option>
            <Option value={0}>停用</Option>
          </Select>
        </FormItem>
      </Form>
    </>)
  }
}