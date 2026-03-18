console.log('INDEX.JSX EXECUTING AT TOP');
window.process = { env: { NODE_ENV: 'development' } };
import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min';
import ReactDOM from 'react-dom';
// import 'antd/dist/antd.css';
import './styles/index.scss';
import './styles/general.scss';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RecoilRoot } from 'recoil';

console.log('Mounting React App');
ReactDOM.render(
  <RecoilRoot>
    <App />
  </RecoilRoot>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
