import React from 'react'
import './style.scss'
export default function Table () {
  return (
    <div>
      <Card className='card-wrap' title="多选表格" >
        <Spin spinning={listData.length === 0 ? true : false}>
          <Button onClick={handleDelete}>删除</Button>
          <Table
            onRow={
              (record, index) => ({ onClick: () => { handleClick22(record, index) } })
            }
            columns={columns2}
            // 设置单选还是多选-多选
            rowSelection={{ ...checkMore }}
            pagination={true} dataSource={listData} />
        </Spin>
      </Card>
    </div>
  )
}
