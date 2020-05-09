import React, { Component } from 'react'
import { Card, Transfer, Switch } from 'antd';
const mockData = [];

for (let i = 0; i < 20; i++) {
  mockData.push({
    key: i.toString(),
    title: `第${i + 1}项`,
    description: `这个属性在哪呢?description of content${i + 1}`,
    disabled: i % 3 < 1,
  });
}

const oriTargetKeys = mockData.filter(item => {
  // 字符串转换成数字的方法
  // console.log('+item.key :', typeof +item.key);
  return +item.key % 3 > 1
}).map(item => item.key);

export default class trans1 extends Component {
  state = {
    targetKeys: oriTargetKeys,
    selectedKeys: [],
    disabled: false,
  };
  handleChange = (nextTargetKeys, direction, moveKeys) => {
    this.setState({ targetKeys: nextTargetKeys });

    console.log('targetKeys: ', nextTargetKeys);
    console.log('direction: ', direction);
    console.log('moveKeys: ', moveKeys);
  };

  handleSelectChange = (sourceSelectedKeys, targetSelectedKeys) => {
    this.setState({
      // 就这样存??
      selectedKeys: [...sourceSelectedKeys, ...targetSelectedKeys]
    }, () => {
      console.log('this.state.selectedKeys', this.state.selectedKeys)
    });
    //左侧
    console.log('sourceSelectedKeys-左侧: ', sourceSelectedKeys);
    //右侧
    console.log('targetSelectedKeys-右侧: ', targetSelectedKeys);
  };

  handleScroll = (direction, e) => {
    console.log('direction:', direction);
    // 滚动,打印事件对象,是一个ul列表
    console.log('target:', e.target);
  };

  handleDisable = disabled => {
    this.setState({ disabled });
  };
  render () {
    const { targetKeys, selectedKeys, disabled } = this.state;
    return (
      <>
        <Card title="穿梭框" className='card'>
          <Transfer
            // 数据源，其中的数据将会被渲染到左边一栏中,定义在类外面的数据直接使用
            dataSource={mockData}
            // titles		标题集合，顺序从左至右	['', '']
            titles={['Source', 'Target']}
            // 显示在右侧框数据的 key 集合
            targetKeys={targetKeys}
            // 设置哪些项应该被选中
            selectedKeys={selectedKeys}
            // 选项在两栏之间转移时的回调函数
            onChange={this.handleChange}
            // 选中项发生改变时的回调函数
            onSelectChange={this.handleSelectChange}
            onScroll={this.handleScroll}
            render={item => item.title}
            disabled={disabled}
          />
          <Switch
            unCheckedChildren="disabled"
            checkedChildren="disabled"
            checked={disabled}
            onChange={this.handleDisable}
            style={{ marginTop: 16 }}
          />
        </Card>
      </>
    )
  }
}
