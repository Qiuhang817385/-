import React, { useEffect } from 'react'
import { Card } from 'antd'
import '../style.scss'
import { getOption, getOption2, getOption3 } from './fn'
import ReactEcharts from 'echarts-for-react';
import echartTheme from '../echartTheme'
// import themeLight from '../themeLight'
import echarts from 'echarts/lib/echarts'
// 引入饼图和折线图
import 'echarts/lib/chart/line'
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/markPoint';
export default function Line () {
  useEffect(() => {
    echarts.registerTheme('mock', echartTheme);
  }, [])
  return (
    <>
      <Card title="折线图表之一" className="card-wrap">
        <ReactEcharts
          option={getOption()}
          theme="mock"
          notMerge={true}
          lazyUpdate={true}
          style={{
            height: 500
          }} />
      </Card>
      <Card title="折线图表之二" className="card-wrap" >
        <ReactEcharts
          option={getOption2()}
          theme="mock"
          notMerge={true}
          lazyUpdate={true}
          style={{
            height: 500
          }} />
      </Card>
      <Card title="折线图表之三" className="card-wrap">
        <ReactEcharts
          option={getOption3()}
          theme="mock"
          notMerge={true}
          lazyUpdate={true}
          style={{
            height: 500
          }} />
      </Card>
    </>
  )
}
