import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import Home from './pages/route-demo/route1/Home';
// import Home from './pages/route-demo/route2/router';
// import Home from './pages/route-demo/route3/router';
// import Home from './pages/route-demo/vivo/router';
// import Home from './pages/route-demo/vivo2/Router';

import Router from './router'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  // <React.StrictMode>
  // <Home />
  <Router />
  // </React.StrictMode>
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
