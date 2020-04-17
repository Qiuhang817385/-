import React, { useState, useEffect } from 'react'
import { Card, Col, Row, Transfer } from 'antd';
export default function RoleAuth (props) {
  const [role_name, setRole_name] = useState('')
  const [targetKeys, setTargetKeys] = useState([]);

  let handleChange = (nextTargetKeys, direction, moveKeys) => {
    // this.setState({ targetKeys: nextTargetKeys });
    // setTargetKeys(nextTargetKeys)
    props.patchUserInfo(nextTargetKeys)
    console.log('targetKeys: ', nextTargetKeys);
    console.log('direction: ', direction);
    console.log('moveKeys: ', moveKeys);
  };


  let filterOption = (inputValue, option) => option.description.indexOf(inputValue) > -1;


  return (
    <>
      <Card title={"角色"} style={{ width: '100%', textAlign: 'left', marginBottom: '20px' }}>
        <Row>
          <Col span={5}>角色名称：</Col>
          <Col span={19}>{props.AuthName}</Col>
        </Row>
      </Card>
      <Card title={"选择用户："} style={{ width: '100%', textAlign: 'left' }}>
        <Transfer
          dataSource={props.mockData}
          targetKeys={props.targetKeys}
          titles={['Source', 'Target']}
          // selectedKeys={selectedKeys}
          onChange={handleChange}
          render={item => item.title}
          showSearch
          filterOption={filterOption}
        />
      </Card>
    </>
  )
}
