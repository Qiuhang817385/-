import React from 'react'
import { useParams } from 'react-router-dom'
export default function Info () {
  let { NEXZID } = useParams();
  return (
    <div>
      商品ID号:{NEXZID}
    </div>
  )
}