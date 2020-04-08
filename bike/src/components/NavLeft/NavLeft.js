import React, { Component } from 'react'
import MenuConfig from '../../config/menuConfig'
import { Menu } from 'antd';
import { Link } from 'react-router-dom'
import "./index.scss";
// import { Link } from 'react-router-dom'
const { SubMenu } = Menu;
function handleClick (e) {
  console.log('click', e);
}
export default class NavLeft extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuTreeNode: null
    }
  }
  componentDidMount () {
    console.log('menuConfig :', MenuConfig);
    const menuTreeNode = this.renderMenu(MenuConfig);
    console.log('menuTreeNode :', menuTreeNode);
    this.setState({
      menuTreeNode
    })
  }
  renderMenu = (data) => {
    return data.map((item) => {
      if (item.children) {
        return (
          // 如果有,首先返回的是一级菜单,在一级菜单里面调用,再返回二级菜单
          <SubMenu title={item.title} key={item.key}>
            {this.renderMenu(item.children)}
          </SubMenu>
        )
      }
      return (<Menu.Item title={item.title} key={item.key}>
        <Link to={item.key}>
          {item.title}
        </Link>
      </Menu.Item>)

    })
  }

  render () {
    return (
      <>
        <div className="logo">
          {/* 图片静态资源放到public底下的assets目录
            这里的/就是public目录了
          */}
          <img src="/assets/logo-ant.svg" alt="" />
          <h1>管理系统</h1>
        </div>
        <Menu onClick={handleClick} mode="vertical">
          {this.state.menuTreeNode}
        </Menu>
      </>
    )
  }
}
