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



# 三/UI

## Tab 

需要注意Key的变化

```js
 const panes = this.state.panes.filter(pane => pane.key !== targetKey);
```

## 图片画廊

```js

```



## Axios使用JsonP跨域

安装

```js
yarn add jsonp --save
```

> 模式:通常我们会使用promise再对函数做进一步的封装用以控制错误

# Bug

### 一,antdUI如果在暗模式下,使用弹出menu出现Bug,走马灯

需要给图片加onload，设置高度为auto才行

### 二,react的严格模式会报警告

