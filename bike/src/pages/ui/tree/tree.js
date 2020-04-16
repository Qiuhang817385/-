import React from 'react'
import { Tree, Card } from 'antd'
import './style.scss';
import Tree1 from './tree1'
import Tree2 from './tree2'
import Tree3 from './tree3'
export default function Trees () {

  return (
    <>
      <Tree1></Tree1>
      <Tree2></Tree2>
      <Tree3></Tree3>
    </>
  )
}
{/* 
何时使用#
文件夹、组织架构、生物分类、国家地区等等，世间万物的大多数结构都是树形结构。
使用 树控件 可以完整展现其中的层级关系，并具有展开收起选择等交互功能 */}
