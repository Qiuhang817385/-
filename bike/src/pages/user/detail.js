import React, { useEffect, useState } from 'react'
import { Card, Descriptions, Badge, Button } from 'antd'
import './user.scss';
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
  const [result, setResult] = useState()
  let { userId } = useParams();
  let history = useHistory();
  useEffect(() => {
    axios.axiosGet({
      url: '/table/list',
      data: {
        params: {
          userId: userId
        }
      }
    }).then((res) => {
      console.log('object :', res.result.list);
      if (res.code === '0') {
        // setResult(res.result)
        // 是在模态框
        // 获取了不能？？？
        let obj = res.result.list.find(item => +item.id === +userId)
        console.log('obj', obj)
        setResult(obj)
      }
    })
  }, [userId])
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
      {result ? <>
        <Card title="" className='card'>
          <Button type="primary" onClick={() => { history.goBack() }}>返回</Button>
        </Card>
        <Card title="用户详情">
          <Descriptions title='' bordered>
            <Item label='用户名' span={12}>
              {result.username}
            </Item>
            <Item label='性别' span={2}>
              {result.sex === 1 ? <Badge status="processing" text="男" /> : <Badge status="success" text="女" />}
            </Item>
            <Item label='地址' span={2}>
              {result.address}
            </Item>
            <Item label='生日' span={2}>
              {result.total_time}
            </Item>
            <Item label='状态' span={2}>
              {result.status === 1 ? <Badge status="processing" text="男" /> : <Badge status="success" text="女" />}
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
        </Card></> : (<></>)}
    </div>
  )
}
export default Detail
// 这个详情页面其实应该是父组件传递过来的值，但是这个由于是路由组件的跳转，所以只能进入页面之后再调用一次API接口进行用户查询
// 但是由于进入这个页面之后又调用了一次API接口，由于是mock的，所以每次进来之后都不一样
