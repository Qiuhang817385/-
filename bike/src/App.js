import React from 'react';
import './App.css';
// import Admin from './Admin'
class App extends React.Component {
  render () {
    return (
      <div className="App">
        {/* <Admin></Admin> */}
        {this.props.children}
      </div>
    );
  }
}

export default App;
