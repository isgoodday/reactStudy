import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import store from './store'          //引入Redux的store对象
import {Provider} from 'react-redux' //引入Provider组件
import {BrowserRouter as Router} from 'react-router-dom' 
import 'utils/rem.js'
import './index.css'
// 引入axios
import axios from 'axios'
import { Toast } from 'antd-mobile'


import * as serviceWorker from './serviceWorker';

//axios拦截器
axios.interceptors.request.use(function (config) { //当axios请求时做些什么
    Toast.loading('加载中', 1);
    return config;
  }, function (error) {
  
    return Promise.reject(error);
  });
  
  //当axios请求结束后做些什么
  axios.interceptors.response.use(function (response) {
    Toast.hide()
    return response;
  }, function (error) {
   
    return Promise.reject(error);
  });
  

ReactDOM.render(
<Provider store={store}>
<Router>
<App />
</Router>
</Provider>,
 document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
