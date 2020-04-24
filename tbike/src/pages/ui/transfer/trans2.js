import React, { Component } from 'react'
import { Card, Transfer, Button } from 'antd';
export default class trans2 extends Component {
  state = {
    mockData: [],
    targetKeys: [],
  };

  componentDidMount () {
    this.getMock();
  }

  getMock = () => {
    const targetKeys = [];
    const mockData = [];
    for (let i = 0; i < 20; i++) {
      const data = {
        key: i.toString(),
        title: `第${i + 1}项`,
        description: `描述description of content${i + 1}`,
        chosen: Math.random() * 2 > 1,
      };
      if (data.chosen) {
        targetKeys.push(data.key);
      }
      mockData.push(data);
    }
    this.setState({ mockData, targetKeys });
  };

  handleChange = targetKeys => {
    this.setState({ targetKeys });
  };
  // 自定义搜索函数

  handleSearch = (dir, value) => {
    console.log('search:', dir, value);
  };

  renderFooter = () => (
    <Button size="small" style={{ float: 'right', margin: 5 }} onClick={this.getMock}>
      reload
    </Button>
  );
  render () {
    return (
      <>
        <Card title="带搜索的" className='card'>
          <Transfer
            dataSource={this.state.mockData}
            showSearch
            listStyle={{
              width: 250,
              height: 300,
            }}
            operations={['to right', 'to left']}
            targetKeys={this.state.targetKeys}
            onChange={this.handleChange}
            render={item => `${item.title}-${item.description}`}
            footer={this.renderFooter}
            onSearch={this.handleSearch}
          />
        </Card>
      </>
    )
  }
}
