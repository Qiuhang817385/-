```js
<ReactEcharts
  option={getOption()}
  theme="mock"
  notMerge={true}
  lazyUpdate={true}
  style={{ height: 500 }}
/>
```

option (required, object)
这个是核心，是必须的，包含 echarts 图表的配置项和数据，如标题 title、图例 legend、提示框 tooltip、x 轴 xAxis、y 轴 yAxis、series 等，详见 http://echarts.baidu.com/option.html#title.

notMerge (optional, object)
可选，是否不跟之前设置的 option 进行合并，默认为 false，即合并。

lazyUpdate (optional, object)
可选，在设置完 option 后是否不立即更新图表，默认为 false，即立即更新。

style (optional, object)
包含 echarts 图表的 div 的样式，默认是{height: '300px'}.

className (optional, string)
包含 echarts 图表的 div 的类名. 可以根据需要自行配置类名，不同类配置不同的 css。

theme (optional, string)
应用的主题。可以是一个主题的配置对象，也可以是使用已经通过 echarts.registerTheme 注册的主题名称。
onChartReady (optional, function)
当图表准备好时，将图表作为参数传给回调函数

loadingOption (optional, object)

showLoading (optional, bool, default: false)

是否加载动画效果

onEvents (optional, array(string=>function) )
为图表绑定事件
