import React, { useState, useEffect } from 'react'
import './style.scss'
import { columns2 } from './columns';
import { Card, Spin, Table, Button, Modal, message } from 'antd'
import axios from '../../../axios/axios'
export default function TableFix () {
  const [listData, setListData] = useState([]);
  //初始化数据
  useEffect(() => {
    getData().then((res) => {
      setTimeout(() => {
        setListData([...res.list])
      }, 3000)
    })
  }, [])
  /**
    * 多选
    */
  const [selectedRowKeys, setSelectedRowKeys] = useState([]); //keys
  const [selectItem, setselectItem] = useState([]); //Item
  console.log('selectedRowKeys', selectedRowKeys)
  console.log('selectItem', selectItem)
  const checkMore = {
    type: 'checkbox',
    // 细节,第一个参数必须是selectedRowKeys
    selectedRowKeys: selectedRowKeys,
    // 复选框自身的方法
    onChange: (selected, selectedRow) => {
      setSelectedRowKeys([...selected]);
      setselectItem([...selectedRow]);
    }
  }
  /**
  * 复选表格点击方法
  */
  let handleClick = (rec, index) => {
    // console.log('rec :', rec);//{id: 1, username: "赵敏", sex: 2, state: 3, interest: 4, …}
    let existIdx = selectedRowKeys.indexOf(rec.key)
    if (existIdx >= 0) {
      //删除
      setSelectedRowKeys(pre => {
        const dep = JSON.parse(JSON.stringify(pre));
        return dep.splice(existIdx, 1)
      });
      setselectItem(pre => {
        const dep = JSON.parse(JSON.stringify(pre));
        return dep.splice(existIdx, 1)
      });
    } else {//增加
      //表格内，所有被选中数据的，key的集合
      setSelectedRowKeys(pre => pre.push(rec.key));
      setselectItem(pre => pre.push(rec));
      //表格内，所有被选中数据的，集合
    }
  }
  /**
   * 删除操作
   */
  let handleDelete = (() => {
    console.log('selectItem :', selectItem);
    let ids = []
    selectItem.forEach((item) => {
      ids.push(item.id);
    })
    Modal.confirm({
      title: '删除',
      content: `确定要删除${ids.join(',')}`,
      onOk: () => {
        // 调用接口
        message.success('删除成功');
        //请求新的数据
        setSelectedRowKeys([]);
        setselectItem([]);
      }
    })
  })

  return (
    <>
      <Card className='card-wrap' title="多选表格" >
        <Spin spinning={listData.length === 0 ? true : false}>
          <Button onClick={handleDelete}>删除</Button>
          <Table
            onRow={
              (record, index) => ({ onClick: () => { handleClick(record, index) } })
            }
            columns={columns2}
            // 设置单选还是多选-多选
            rowSelection={{ ...checkMore }}
            pagination={true} dataSource={listData} />
        </Spin>
      </Card>
    </>
  )
}

async function getData () {
  let res = await axios.axiosGet({
    url: '/table/list',
  }).then((res) => {
    return res
  })
  let result = await res.result;
  return result
}

