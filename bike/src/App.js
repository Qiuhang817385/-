import React from 'react';
import './App.css';
import zhCN from 'antd/es/locale/zh_CN';
import { ConfigProvider } from 'antd';
// import Admin from './Admin'
class App extends React.Component {
  render () {
    return (
      <ConfigProvider locale={zhCN}>
        <div className="App">
          {/* <Admin></Admin> */}
          {this.props.children}
        </div>
      </ConfigProvider>
    );
  }
}

export default App;
