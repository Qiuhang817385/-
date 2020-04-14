import React from 'react'
import { Card, Transfer, Switch } from 'antd';
import './style.scss'
import Trans1 from './trans1'
import Trans2 from './trans2'
import Trans3 from './trans3'

export default class Transfers extends React.Component {

  render () {

    return (
      <>
        <Trans1></Trans1>
        <Trans2></Trans2>
        {/* 难 */}
        <Trans3></Trans3>
      </>
    )
  }
}
