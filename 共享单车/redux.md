## redux 的 API

https://www.zhihu.com/question/344347848/answer/813556755

其实thunk+async/await就可以解决大部分的需求

**安装测试**

```js
yarn add redux-devtools-extension
```

### redux的API

```js
createStore, 
applyMiddleware
combineReducers
```

### react-redux的API

```js
Provider 
connect 
```

### 一/创建全局store+配置saga

```js
import { rootReducer } from './rootReducer'
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootSaga from '../saga/rootSagas'
const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(rootSaga)

export default store

```

### 二/创建rootSagas

```js
import { all } from 'redux-saga/effects'
function* rootSaga () {
  yield all([])
}
export default rootSaga
```

### 三/rootReducer

```js
import { combineReducers } from 'redux';
export default combineReducers({

});
```

### 四/设置入口文件

```js
import Router from './router'
import { Provider } from 'react-redux';
import store from './redux/store'


<Provider store={store}>
    <Router />
 </Provider>
```

### 五/菜单-saga

```js

```



### 异步代码分割

```js
import React from 'react';
import Loadable from 'react-loadable';

const LoadableComponent = Loadable({
  loader: () => import('./'),
  loading:()=>{
    return <div>正在加载</div>
  }
});

export default ()=> <LoadableComponent />
```

## dva技巧和高级写法

```js
const mapStateToProps = (state) => {
   const { loading } = state['NAMESPACE'];
   return {
       loading
   };
}
```

dva

```js
export default {

  namespace: '',

  state: {},

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {
      yield put({ type: 'save' });
    },
  },

  subscriptions: {
   init({dispatch}){
      dispatch({ });
   }
  },

};
```

effects

```js
effects: {
    *NAME({ payload }, { call, put }) {
      yield put({ type: 'save' });
    },
}
```

### 快速请求模板--重要

```js
adcs 快速创建services模板
import request from '../utils/request';
import qs from 'qs';

export async const getMethods = () => {
  return request('URL');
};
export async const postQuery = (params) => {
  return request('URL', {
    method: 'post',
    data: qs.stringify(params),
  });
}
export async const jsonPost = (params) => {
  return request('URL', {
    method: 'post',
    contentType: 'application/json; charset=UTF-8',
    data: JSON.stringify(params),
  });
}
```

### adcsfp 快速创建form post 方法--重要

```js
export async const postQuery = (params) => {
    return request('URL', {
        method: 'post',
        data: qs.stringify(params),
    });
}
```

### adcsfp 快速创建 coontentType 为json的post请求方法

```js
export async const jsonPost = (params) => {
  return request('URL', {
    method: 'post',
    contentType: 'application/json; charset=UTF-8',
    data: JSON.stringify(params),
 });
}

```

adcmss 快速创建model subscriptions 对象

```js
subscriptions: {
  setup({ dispatch, history }) {

  },
}
```









### useReducer原理

## 原理

```

let memoizedState;	
function useReducer(reducer, initialArg, init) {	
	let initState = void 0;	
	if (typeof init !== 'undefined') {	
		initState = init(initialArg)	
	} else {	
		initState = initialArg	
	}	
function dispatch(action) {	
	memoizedState = reducer(memoizedState, action)	
	render()	
}	
memoizedState = memoizedState || initState	
	return [memoizedState, dispatch]	
}	
function useState(initState) {	
	return useReducer((oldState, newState) => newState, initState)	
}
```