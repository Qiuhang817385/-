## 创建项目

```js
create-react-app  bike
```

## 安装sass

```js
npm i sass-loader node-sass sass --save
```

## 安装antd

```js
yarn add antd
```

### 按需加载

```js
$ yarn add react-app-rewired customize-cra
$ yarn add babel-plugin-import
```

```js
/* package.json */
"scripts": {
-   "start": "react-scripts start",
+   "start": "react-app-rewired start",
-   "build": "react-scripts build",
+   "build": "react-app-rewired build",
-   "test": "react-scripts test",
+   "test": "react-app-rewired test",
}
```

```js
config-overrides.js
+ const { override, fixBabelImports } = require('customize-cra');

- module.exports = function override(config, env) {
-   // do stuff with the webpack config...
-   return config;
- };
+ module.exports = override(
+   fixBabelImports('import', {
+     libraryName: 'antd',
+     libraryDirectory: 'es',
+     style: 'css',
+   }),
+ );
```

```js
+ import { Button } from 'antd';
```

## 安装图标字体

```js
npm install --save @ant-design/icons
```

## 安装react-router

```js
npm install react-router-dom
```

## 安装redux

```
yarn add redux
```

## 安装react-redux

```
yarn add react-redux
```

## 安装redux-thunk

```
npm install redux-thunk

- const ReduxThunk = require('redux-thunk')
+ const ReduxThunk = require('redux-thunk').default
```

## 安装redux-saga

```
yarn add redux-saga
```

## 安装axios

```
yarn add axios
```



## 什么是框架  是mvc  mv* 是react库和周边生态共同构成的一个框架

### mv* 框架 只关注视图的View层+数据Model层

MV层是框架自己封装,可以完成V-M的映射和M-V的渲染



生态 Vue:Vue+Vue-Router+vuex+axios+babel+webpack

​		react:react+react-router+redux+axios+babel+webpack



## 自定义主题Antd

### 安装less-loader

```js
yarn add less less-loader
```

### 暴露webpack配置(新的环境下不需要再暴露配置了 跳过)

现在的方式是直接修改配置文件,而不是根据官网使用react-app-rewired

这个后面可能会留坑

```js
yarn eject
```



## import

```js
{"libraryName":"antd"}				加载样式js文件
{"libraryName":"antd",style:"css"}	加载样式css文件		  按需加载
{"libraryName":"antd",style:"true"} 加载组件内部的less原文件 可以修改配置文件
```



# 一/主页结构开发

## 结构层次

分成左右两侧

右侧分为上中下   中间内容变化

flex布局和antd的栅格系统实际上用一个就可以了

后期-动态生成权限菜单列表



时间:第三方插件库

Moment

# 二/React-router

* react-router
  * Router
  * Route
  * Switch
* react-router-dom
  * BrowserRouter
  * HashRouter
  * Route
    * path
    * exact
    * component
    * render
  * Link
  * NavLink
* react-router-dom核心用法

### 配置BrowserRouter

> 为什么使用BrowserRouter

因为一般/开头的都是接口的地址

向服务端发送请求

所以需要再nginx处进行配置以区分开来

> Demo1	基础路由

```js
<Router>
     <Link to="/">Main</Link>
     <Link to="/about">About</Link>
		{/* 	
			两种exact的写法
            两种组件形式的写法
            component是小写的
        */}
          <Route exact={true} path="/" component={Main}></Route>
          <Route exact path="/about" >
            <About></About>
          </Route>
</Router>
```

> Demo2	
>
> 使用配置的方式配置路由+
>
> 路由Home根节点+
>
> 嵌套路由,Main当中进行配置<Link>+<props.children>,		->Link+Props 
>
> ​				Router写根节点<Main>+<子组件>							->path+父+子
>
> 需要去掉exact,如果根节点是/
>
> 或者每一个都加上后缀,不使用/

```js
配置默认的路由  第一次进入页面就看到的路由是怎么配置的
Home组件就是第一次进入页面的配置
也就是根节点,第一次路由加载的组件
//Router.js
<Router>
        <Home>
          <Route path="/main" render={() => {
            // 需要有返回值
            return (
              <Main>
                <Route exact path="/main/a" component={A}></Route>
              </Main>
            )
          }
          }></Route>
          <Route exact path="/about" component={About}></Route>
       </Home>
</Router>

//Home.js
<Link to="/main">Main2</Link>
<Link to="/about">About2</Link>
{this.props.children}
```

> Demo3 根据返回来的商品信息动态生成商品的详情页面

```
//Main.js
{
          [1, 2, 3, 4, 5, 6, 7, 8].map((item) => {
            return (
              <div>
                <Link to={`/main/${item}`}>商品{item}页面</Link>
              </div>
            )
          })
}

 {this.props.children}

```

```js
//公用页面Detail.js		Info.js
import React from 'react'
import { useParams } from 'react-router-dom'
export default function Info () {
  let { NEXZID } = useParams();
  return (
    <div>
      商品ID号:{NEXZID}
    </div>
  )
}

```



### switch

```
switch和exact的区别
exact是精准匹配,会匹配最符合的哪一项
switch是从上到下进行匹配,匹配到则下面不再匹配
<switch>
    < path="/" >
    < path="/new" >
    < path="/new/old" >
</switch>
只匹配第一个或者第二个
解决办法
给第一个和第二个加exact
```



### Link

```js
<Link to="/">
<Link to={{pathname:'/three/7'}}>
<Route path="/three/:number" />
取值:this.props.match.params.number
```

```js
{
    pathname:'/',
	search:'',
	hash:'',
	key:'abc12'
	state:{}
}
```

### 重定向Redirect

```js
<Redirect to="/admin/home">
```



# 三/UI(新版本)

## Icon

新版本所有的ICON图标都是从第三方图标库当中引出

## spin(Loading)

```js
  // 两种使用spin的方式
  //  方式一:直接使用icon图标+spin
   			<SyncOutlined spin />
  //  方式二:使用spin图标+icon+spin
  			<Spin indicator={antIcon} />
  //  方式二可以自定义描述文案+大小
```

## Message

```js
计算属性的使用
 showMessage = (type) => {
    message[type]({
          content: '这是内容',
    })
 }

() => this.showMessage('success')
```

## Model 模态框

```js
 // 计算属性--->计算是哪一个被打开??
  handleOpen = (Target) => {
    this.setState({
      // 怎么利用传进来的变量
      [Target]: true
    })
  }
  
  this.handleOpen('showModal1')  //让模态框1显示

 // 计算属性--->计算打开的是那种类型
handleConfirm = (type) => {
    Modal[type]({
      title: '确认',
      content: '这里是内容区域',
      onOk () {
        console.log('ok')
      },
      onCancel () {
        alert('cancel')
      }
    })
  }

this.handleConfirm('confirm')
```

## Notification

```js
通知
this.openNotificationIcon(<SmileOutlined style={{ color: '#108ee9' }} />)}
使用自定义图标
notification.open({
      message: 'Notification Title',
      description:
        'notification.',
      // icon: <SmileOutlined style={{ color: '#108ee9' }} />,
      icon: Icon,
    });
```



## Tab 

需要注意Key的变化

```js
 const panes = this.state.panes.filter(pane => pane.key !== targetKey);
```

## 图片画廊

```js
这个样式不错
```

# 四/表单(新版)

> 新版变化,不需要再用Form.Create方法进行创建,直接导出就可以

```js
API
--------------------------------------------
Input
--------------------------------------------
prefix	带有前缀图标的 input	string|ReactNode
suffix	带有后缀图标的 input	string|ReactNode
<Input.Password />
<Input.TextArea />
    
为什么我动态改变 prefix/suffix 时，Input 会失去焦点？#
当 Input 动态添加或者删除 prefix/suffix 时，React 会重新创建 DOM 结构而新的 input 是没有焦点的。你可以预设一个空的 <span /> 来保持 DOM 结构不变：
prefix={<UserOutlined className="site-form-item-icon" />}
const suffix = condition ? <Icon type="smile" /> : <span />;

<Input suffix={suffix} />;
--------------------------------------------
Form
--------------------------------------------
colon	示是否显示 label 后面的冒号 (只有在属性 layout 为 horizontal 时有效)  true
form	经 Form.useForm() 创建的 form 控制实例，不提供时会自动创建	??
initialValues	表单默认值，只有初始化以及重置时生效		object{{ remember: true }}
labelCol	label 标签布局，同 <Col> 组件，设置 span offset 值，如 {span: 3, offset: 12} 或 sm: {span: 3, offset: 12}
wrapperCol	需要为输入控件设置布局样式时，使用该属性，用法同 labelCol	object

layout	表单布局	horizontal | vertical | inline		horizontal
name	表单名称，会作为表单字段 id 前缀使用	string

onFinish	提交表单且数据验证成功后回调事件	Function(values)
onFinishFailed	提交表单且数据验证失败后回调事件
onFieldsChange	字段更新时触发回调事件
onValuesChange	字段值更新时触发回调事件
--------------------------------------------
Form.Item
--------------------------------------------
noStyle	为 true 时不带样式，作为纯字段控件使用	boolean	false
name	字段名，支持数组
Form--onValuesChange	字段值更新时触发回调事件
valuePropName	子节点的值的属性，如 Switch 的是 'checked'	string	'value'

被设置了 name 属性的 Form.Item 包装的控件，表单控件会自动添加 value（或 valuePropName 指定的其他属性） onChange（或 trigger 指定的其他属性），数据同步将被 Form 接管，这会导致以下结果：

1.不再也不应该用 onChange 来做数据收集同步（可以使用 Form 的 onValuesChange）
但还是可以继续监听 onChange 事件。
2.不能用控件的 value 或 defaultValue 等属性来设置表单域的值，默认值可以用 Form 里的 initialValues 来设置。注意 initialValues 不能被 setState 动态更新，你需要用 setFieldsValue 来更新。(重要)
3.你不应该用 setState，可以使用 form.setFieldsValue 来动态改变表单值(重要)
dependencies
“确认密码”校验依赖于“密码”字段，设置 dependencies 后，“密码”字段更新会重新触发“校验密码”的校验逻辑。
--------------------------------------------
Form.List动态渲染功能
--------------------------------------------

--------------------------------------------
为什么 Form.Item 下的子组件 defaultValue 不生效？#
当你为 Form.Item 设置 name 属性后，子组件会转为受控模式。因而 defaultValue 不会生效。你需要在 Form 上通过 initialValues 设置默认值。
--------------------------------------------

<Button type="primary" htmlType="submit">
          Submit
</Button>
```



```js
1.const [form] = Form.useForm();
  const [, forceUpdate] = useState();
???
    通过 Form.useForm 对表单数据域进行交互。
--------------------------------------------   
2.<Form
      {...layout}
      name="basic"
      initialValues={{ remember: true }}			???	-->name=remember默认勾选
      onFinish={onFinish}							???--->提交成功的回调
      onFinishFailed={onFinishFailed}				???--->失败的回调
    >
```

## 操作表单域的值

```js
const [form] = Form.useForm();
设置
form.setFieldsValue({
     note: 'Hello world!',
      gender: 'male',
});
--------------------
获取
form.getFieldValue('gender')

提交的回调函数onFinsh获取
 <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
     
 <Button type="primary" htmlType="submit">
              Submit
 </Button>
const onFinish = values => {
    console.log('Finish:', values);
      //{note: "Hi, man!", gender: "male"}
};
--------------------
置空
const onReset = () => {
    form.resetFields();
};
--------------------
获取
const handleonValuesChange = (e) => {
    console.log(e)//{note: "1"}{gender: "male"}
    //相当于KeyUp事件 或者 onChange 事件
     let a = form.getFieldValue('note')
    console.log(a)
}
const handleonFieldsChange = (e) => {
    // 触摸事件,使用的机会比较少
    // console.log(e[0])
}

```

## 修改默认提示信息加Demo

```js
1.name={['user', 'name']}
 label="用户名"
输出的是user底下的name,那么获取值的时候,只能获取这个对象.name底下的字段
2.validateMessages会修改默认信息,用以配置国际化
```

## 复杂控件嵌套

```
<Form.Item name="field" /> 只会对它的直接子元素绑定表单功能，
例如直接包裹了 Input/Select。
如果控件前后还有一些文案或样式装点，或者一个表单项内有多个控件，你可以使用内嵌的 Form.Item 完成。
你可以给 Form.Item 自定义 style 进行内联布局，或者添加 noStyle 作为纯粹的无样式绑定组件
在多个子控件上面设置

方式1. style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}
方式2. noStyle
这样才能拿到数据
```

## 自定义表单控件

未做

## 表单数据存储于上层组件

不经常用,并且动态渲染不了,当然可以改造

## 动态增加、减少表单项。

> 官网例子

## 设置默认值 initValue

```js
<Form
        layout="horizontal"
        initialValues={{ city: "", business: "1", use: "" }}
      >
        <FormItem 
          name="city"
        >
          <Select style={{ width: 100 }}>
            <Option value="">全部</Option>
            <Option value="1">北京市</Option>
            <Option value="2">天津市</Option>
            <Option value="3">深圳市</Option>
          </Select>
```



## 多表单联动+模态框

```js
在模态框当中使用form
为何在 Modal 中调用 form 控制台会报错？
这是因为你在调用 form 方法时，Modal 还未初始化导致 form 没有关联任何 Form 组件。你可以通过给 Modal 设置 forceRender 将其预渲染
forceRender
 <Modal forceRender visible={visible} onOk={onClose} onCancel={onClose}>
    <Form form={form}>
      <Form.Item name="user">
        <Input />
      </Form.Item>
    </Form>
 </Modal>
```





## login

## register



# 五/分页

```js
<Pagination onChange={onChange} total={50} />
    
-------------------------
onChange	页码改变的回调，参数是改变后的页码及每页条数	Function(page, pageSize)	noop
onShowSizeChange	pageSize 变化的回调	Function(current, size)	noop
-------------------------
current			当前页数	number
defaultCurrent	默认的当前页数	number	1
------------
pageSize		每页条数	number
defaultPageSize	默认的每页条数	number	10
pageSizeOptions	指定每页可以显示多少条	string[]	['10', '20', '50', '100']
showQuickJumper	是否可以快速跳转至某页	boolean | { goButton: ReactNode }	false
showSizeChanger	是否展示 pageSize 切换器，当 total 大于 100 时默认为 true	boolean
------------
showTotal		用于显示数据总量和当前数据顺序	Function(total, range)
total			数据总数	number	0
------------
size	当为「small」时，是小尺寸分页	'default' | 'small'	""	
responsive	当 size 未指定时，根据屏幕宽度自动调整尺寸	boolean
hideOnSinglePage	只有一页时是否隐藏分页器	boolean	false
------------
disabled		禁用分页	boolean



```

```js
初始设置
const params = {
  page: 1
}
---------------------------------
分页功能Html
 <Table columns={columns}  dataSource={list} >
     <Pagination {...pagination} />
 </Table>
---------------------------------
请求
requestList().then((res) => {
      /**
       * 获取基本数据,存储到List当中
       */
      setRes(res);
      let Arr = res.result.item_list.map((item, index) => {
        item.key = index;
        return item;
      })
      setList([...Arr])
      /**
       *  分页操作,利用antd的话,直接把数据放到里面,设置分页就直接分好了
       */
      let pageObj = utils.pagination(
        res,                  //参数1,设置基础数据
        (current) => {        //参数2,回调函数,也是分页组件里面的onchange事件,当切换页面的时候调用的函数
          params.page = current;   //设置参数页,用于下面再进行请求指定页面的数据
          requestList();
        })
      console.log('pageObj', pageObj)
      setpagination(pageObj)
 });
---------------------------------



```

# 六/表格

```js
1/title
dataIndex
dataSource
pagination = {false}
key:React 需要的 key，如果已经设置了唯一的 dataIndex，可以忽略这个属性

2/Mock Axios的封装,Loading处理,错误拦截
http://www.qiuhang.club:7300/mock/5e8c119b00fbdf09dcf21f9f/bike/table/list
axios有baseUrl参数

3.axios的封装

4.数据字典的使用
 render: state => {
      let config = {
        '1': '完成',
        '2': '未付款',
        '3': '进行中',
        '4': '付款中',
        '5': '准备开始'
      }
      return config[state]
 }
 
 动态渲染Key
 获取到res res.map((item,index)=>{
     item.key = index
 })
5.单选rowSelection
	type	多选/单选，checkbox or radio
    selectRowKeys
   
  多选框
   const checkMore = {
    type: 'checkbox',
    // 细节,第一个参数必须是selectedRowKeys
    selectedRowKeys: selectedRowKeys22,
  }
   调用useState方法,一定会渲染DOM
```



# 项目工程化

模块化 require.js就是模块化

组件化 比如轮播,表单,列表

表格

模块化是更加细小的颗粒度,比如起止时间的组合

表格是一个组件,

里面的分页可以做一个模块,

轮播是一个组件,里面的内容效果是一个模块



接口规范

​	错误拦截,loading处理

<img src="C:\Users\Artificial\AppData\Roaming\Typora\typora-user-images\image-20200409213726838.png" alt="image-20200409213726838" style="zoom: 67%;" />

公共机制

时间格式化

公共样式

背景颜色,sass变量



# Axios使用JsonP跨域

安装

```js
yarn add jsonp --save
```

> 模式:通常我们会使用promise再对函数做进一步的封装用以控制错误

```js
static jsonp (options) {
    // 再封装一层promise用来做错误处理
    return new Promise((resolve, reject) => {
      JsonP(
        options.url,
        { param: 'callback' },
        function (err, response) {
          //to-do
          if (response.status === 'success') {
            resolve(response);
          } else {
            reject(response.message);
          }
        })
    })
  }
	// 调用方式
    // axios.jsonp({
    //   url: ''
    // }).then((res)=>{})
```

## 抽取多层Promise

```js
定义在函数组件外部
const requestList = () => {
    //返回的是一个promise对象,只要有promise,就可以一直then下去
  return axios.ajax({
    url: 'http://www.qiuhang.club:7300/mock/5e8c119b00fbdf09dcf21f9f/bike/open_city',
    data: {
      params: {
        page: params.page
      }
    }
  }).then((res) => {
    return res
  })
}
函数组件调用
requestList().then((res) => {
      console.log('resa :', res);
});


```

## get带参数请求

```js
axios.get('/open_city_copy', {
    params: {
      page: 1
    }
  }).then((res) => {
    console.log('res :', res);
  })
```



# Bug

### 一,antdUI如果在暗模式下,使用弹出menu出现Bug,

走马灯需要给图片加onload，设置高度为auto才行

### 二,react的严格模式会报警告

## 三/react-Hook存储对象的话,最多可以访问两层

## 四/ReactHooks

```js
Bug  使用Hooks
当存储对象的时候,使用null,或者直接不填
const [resF, setRes] = useState({});
解决方式一		const [resF, setRes] = useState();
解决方式二		const [resF, setRes] = useState(null);
  useEffect(() => {
    let obj = {
      a: {
        b: {
          c: 'cccccc',
          f: [1, 2, 3, 4]
        }
      }
    }
    setRes(obj)
  }, [])
  if (resF) {
    console.log('resF :', resF.a.b.c);
    resF.a.b.f.map((item) => {
      console.log(item)
    })
  }
  
  
如果使用class组件
那么两种方式都可以
objs: {}
objs: null
--------------------------------------------------------------------

Hooks获取到最新的值
console.log(count);
setCount(12);
console.log(count);
这样获取的仍然是旧值

解决办法
1.放到promise当中
2.setParams({ mockData: 2333333 });
// 如何让getData里params是最新的？？？
getData();

setParams({ mockData: 2333333 });
setParams(currParams => {
    getData(currParams)
    return currParams
})

3.setParams(()=>{
    const nextParams = { mockData: 2333333 }
    getData(nextParams)
    return nextParams
});
--------------------------------------------------------------------
react-Hook只运行在react顶层使用
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      setSelectedRowKeys(selectedRowKeys);
      setselectItem(selectedRows)
    }
  }
这样使用会报错
------解决办法,定义一个顶层的函数并且调用它
const rowSelection = {
    // type: 'checkbox',
    type: 'radio',
    selectedRowKeys,
    onChange: (selectedRowKeys, selectedRows) => {
        //顶层函数
      rowSelectChange(selectedRowKeys, selectedRows)
    }
  }
```

# 持续优化

> 1.完成了city城市业务模块 数据的代码拆分,使用hooks来完成模块