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
yarn add less-loader
```

### 暴露webpack配置

```js
yarn eject
```

