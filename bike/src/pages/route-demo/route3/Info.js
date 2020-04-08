// import React, { Component } from 'react'
// export default class Info extends Component {
//   render () {
//     return (
//       <div>
//         这个界面是公共的
//         比如添加到后面的结尾
//         动态路由的参数值是(将来需要根据这个值来动态的查询属性):
//         {this.props.match.params.mainId}
//       </div>
//     )
//   }
// }
import React from 'react'
import { useParams } from 'react-router-dom'
export default function Info () {
  let { mainId } = useParams();
  return (
    <div>
      商品ID号:{mainId}
    </div>
  )
}

