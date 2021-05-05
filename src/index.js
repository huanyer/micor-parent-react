import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {registerApplication, start } from 'single-spa';
import "systemjs/dist/system";
import "./utils/named-exports";
import "./utils/named-register";
import "./utils/use-default";
window.SystemJS = window.System;

registerApplication('app2-app2_app',
  // async ()=>{
  //   console.log('加载react-child！');
  //   await loadScript('http://localhost:8080/react-app-react-app.js');
  //   return window['react-app']
  // },
  async () =>  await window.SystemJS.import("http://localhost:3001/react-child/app2-app2.js"),
    // async () => await window.SystemJS.import("http://localhost:8080/react-app-react-app.js"),

  location=> location.pathname.startsWith('/react-child')
)

start();


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
