import React, { useEffect, useState } from 'react'
import { Card, Descriptions, Badge, Button } from 'antd'
import './order.scss';
import axios from '../../axios/axios'
import moment from 'moment';
// 现在的问题是,不是直接通过传递prop来传递那个id的吗???
// 流程---->父--->传递给详情页面proper--->页面进入,根据proper拿到更加详细的数据
// 那我直接从url当中拿到的??,不应该这么拿
//应该是父组件传递过来子组件,不对
//路由这里,是不存在父组件嵌套子组件的,
//父组件是--->打开相应的id号的页面-->这样url里面就有响应数据了-->这样就拿到更详细的数据
import { useParams, useHistory } from 'react-router-dom'
const Item = Descriptions.Item;
function Detail (props) {
  const [result, setResult] = useState([])
  let { orderId } = useParams();
  let history = useHistory();
  useEffect(() => {
    axios.axiosGet({
      url: '/order/detail',
      data: {
        params: {
          orderId: orderId
        }
      }
    }).then((res) => {
      console.log('res :', res);
      if (res.code == '0') {
        setResult(res.result)
      }
    })
  }, [])
  let startTime = () => {
    let a = new Date().setTime(result.start_time);
    return <>{moment(a).format('YY年MM月DD日 /  HH点mm分ss')}</>
  }
  let endTime = () => {
    let a = new Date().setTime(result.end_time);
    return <>{moment(a).format('YY年MM月DD日 /  HH点mm分ss')}</>
  }
  return (
    <div className="contentOrder">
      <Card title="" className='card'>
        <Button type="primary" onClick={() => { history.goBack() }}>返回</Button>
      </Card>
      <Card title="订单详情">
        <Descriptions title='' bordered>
          <Item label='订单编号' span={12}>
            {result.order_sn}
          </Item>
          <Item label='用户名' span={12}>
            {result.user_name}
          </Item>
          <Item label='手机号' span={2}>
            {result.mobile}
          </Item>
          <Item label='里程' span={2}>
            {result.distance}
          </Item>
          <Item label='行驶时长' span={2}>
            {result.total_time}
          </Item>
          <Item label='状态' span={2}>
            {result.status == 1 ? <Badge status="processing" text="进行中" /> : <Badge status="success" text="完成" />}
          </Item>
          <Item label='开始时间' span={2}>
            {
              result.start_time ? startTime() : ''
            }
          </Item>
          <Item label='结束时间' span={2}>
            {result.start_time ? endTime() : ''}
          </Item>
          <Item label='订单金额' span={2}>
            {1000}
          </Item>
          <Item label='实付金额' span={2}>
            {300}
          </Item>
        </Descriptions>
      </Card>
    </div>
  )
}

export default Detail
