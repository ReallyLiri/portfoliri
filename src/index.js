import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './serviceWorker';
import '../node_modules/font-awesome/css/font-awesome.min.css';

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
registerServiceWorker();
