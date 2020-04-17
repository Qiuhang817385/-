import React, { Component } from 'react';
import { Form, Select, Input, Tree } from 'antd'
import menuList from './../../config/menuConfig';
// import menuList2 from './../../config/menuConfig2';
const FormItem = Form.Item;
const Option = Select.Option;
export default class PermEditForm extends Component {
  state = {
    treeData: [
      {
        title: '权限设置',
        key: 'auth',
        children: []
      }
    ]
  }
  componentDidMount () {
    // treeData = menuList;
    let treeDatas = this.state.treeData;
    treeDatas[0].children = menuList;
    console.log('treeDatas :', treeDatas);
    this.setState({
      treeData: treeDatas
    }, () => {
      console.log('this.state.treeData :', this.state.treeData);
    })
  }

  PermformRef = React.createRef();
  // 树结构的勾选和选中事件
  onTreeCheck = checkedKeys => {
    console.log('onCheck', checkedKeys);
    // setCheckedKeys(checkedKeys);
    // 调用父组件的方法,把改变后的值传递回去
    // 父组件的方法
    this.props.patchMenuInfo(checkedKeys)
  };
  onTreeSelect = (selectedKeys, info) => {
    console.log('onSelect', info);
    // setSelectedKeys(selectedKeys);
  };
  selectOnChange = (value) => {
    console.log('value', value)
  }
  tree = () => {
    let treeDatas = this.state.treeData;
    treeDatas[0].children = menuList;
    return treeDatas;
  }
  render () {
    // 这里的Bug未修复
    // const { treeData } = this.state;
    // console.log('render-treeData:', treeData);
    // 选中的单行数据
    const { detailInfo } = this.props
    // console.log('detailInfo :', detailInfo);
    // console.table(detailInfo);
    // console.log('detailInfo.status :', detailInfo.status);
    // detailInfo.role_name/status/authorize_user_name/authorize_time/create_time/menus
    const formItemLayout = {
      labelCol: { span: 5 },
      wrapperCol: { span: 18 }
    };
    return (<>
      <Form ref={this.PermformRef} layout="horizontal" initialValues={{
        status: detailInfo.status
      }}>
        <FormItem label="角色名称：" {...formItemLayout}>
          {/* 详情里面的角色信息名称 */}
          <Input disabled maxLength="8" placeholder={detailInfo.role_name} />
        </FormItem>
        <FormItem label="状态" {...formItemLayout} name='status'>
          <Select onChange={this.selectOnChange}>
            <Option value={1}>启用</Option>
            <Option value={0}>停用</Option>
          </Select>
        </FormItem>
      </Form>
      <Tree
        // treeData={treeData}
        // 为什么这里拿不到数据???
        // 试试调用一个方法？？？OK,解决，为什么通过didmount的方式就拿不到数据？？？
        //视频里面也一样
        treeData={this.tree()}
        checkable
        defaultExpandAll
        onCheck={this.onTreeCheck}
        // 当更改权限列表之后，需要再传递回去父组件，再又父组件传递回来
        onSelect={this.onTreeSelect}
        // 默认勾选中的权限列表，从权限接口当中读取
        checkedKeys={this.props.menuInfo}
      // selectedKeys={selectedKeys}
      />
    </>)
  }
}
