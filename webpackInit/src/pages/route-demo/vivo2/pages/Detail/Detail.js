import React from 'react'
import { useParams } from 'react-router-dom'
export default function Detail () {
  let { NEXYID } = useParams();
  return (
    <div>
      <hr />
      详情
      选择的是{NEXYID}类型
    </div>
  )
}