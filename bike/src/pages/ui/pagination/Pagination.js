import React, { useState } from 'react'
import { Card, Pagination, Button } from 'antd'
import './style.scss'
export default function Paginations () {
  const [cpage, setCpage] = useState(3);
  function onShowSizeChange (current, pageSize) {
    console.log(current, pageSize);
  }
  // 这个功能默认就有
  function handleOnChange (page, pageSize) {
    console.log(page, pageSize);
    setCpage(page)
  }
  // 快速跳转
  function onChange (pageNumber) {
    console.log('Page: ', pageNumber);
  }
  // 迷你版本
  function showTotal (total) {
    return `Total ${total} items`;
  }
  // 修改上一步和下一步
  function itemRender (current, type, originalElement) {
    if (type === 'prev') {
      return <>Previous</>;
    }
    if (type === 'next') {
      return <>Next</>;
    }
    return originalElement;
  }
  return (
    <>
      <Card title="基础分页" className="card-wrap">
        <Pagination defaultCurrent={1} total={50} />
      </Card>
      <Card title="更多分页" className="card-wrap">
        <Pagination defaultCurrent={6} total={500} />
      </Card>
      <Card title="改变每页显示条目数" className="card-wrap">
        <Pagination
          onChange={handleOnChange}
          showSizeChanger
          onShowSizeChange={onShowSizeChange}
          defaultCurrent={3}
          total={500}
        />
        <br />
        <Pagination
          showSizeChanger
          onShowSizeChange={onShowSizeChange}
          defaultCurrent={3}
          total={500}
          disabled
        />

      </Card>
      <Card title="跳转" className="card-wrap">
        <Pagination showQuickJumper defaultCurrent={2} total={500} onChange={onChange} />
        <br />
        <Pagination showQuickJumper defaultCurrent={2} total={500} onChange={onChange} disabled />
      </Card>
      {/* size:small */}
      <Card title="迷你版本" className="card-wrap">
        <Pagination size="small" total={50} />
        <Pagination size="small" total={50} showSizeChanger showQuickJumper />
        <Pagination size="small" total={50} showTotal={showTotal} />
      </Card>
      {/* simple */}
      <Card title="简单翻页" className="card-wrap">
        <Pagination simple defaultCurrent={2} total={50} />
      </Card>
      <Card title="受控页码" className="card-wrap">
        <Pagination
          onChange={handleOnChange}
          defaultCurrent={3}
          total={50}
          current={cpage}
        />
        <Button onClick={() => { setCpage(2) }}>跳转到第2页</Button>
      </Card>
      <Card title="数据总量" className="card-wrap">
        <Pagination
          total={85}
          showTotal={total => `Total ${total} items`}
          pageSize={20}
          defaultCurrent={1}
        />
        <br />
        <Pagination
          total={85}
          showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}
          pageSize={20}
          defaultCurrent={1}
        />
      </Card>
      <Card title="修改上一步和下一步" className="card-wrap">
        <Pagination total={50} itemRender={itemRender} />
      </Card>
    </>
  )
}
