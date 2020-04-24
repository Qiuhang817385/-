import React, { useEffect } from 'react'
import { Card } from 'antd'
import { getOption, getOption2 } from './fn'
import ReactEcharts from 'echarts-for-react';
import echartTheme from '../echartTheme'
// import echarts from 'echarts'
// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts'
// 引入饼图和折线图
import 'echarts/lib/chart/bar'
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/markPoint';
import '../style.scss'
export default function Bar () {
  useEffect(() => {
    echarts.registerTheme('mock', echartTheme);
  }, [])
  return (
    <>
      <Card title="柱形图表之一" className="card-wrap">
        <ReactEcharts option={getOption()} theme="mock" notMerge={true} lazyUpdate={true} style={{ height: 500 }} />
      </Card>
      <Card title="柱形图表之二" className="card-wrap">
        <ReactEcharts option={getOption2()} theme="Imooc" notMerge={true} lazyUpdate={true} style={{ height: 500 }} />
      </Card>
    </>
  )
}
