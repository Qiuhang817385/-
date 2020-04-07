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

