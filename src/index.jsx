/**
 * 项目入口
 * Created by tianrenjie on 2017/11/9
 */
import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import App from './App';
import store from './store';
import { router } from './router';

ReactDOM.render(
  <Provider store={store}>
    <App>
      { router }
    </App>
  </Provider>
  // eslint-disable-next-line
  , document.getElementById('root'),
);
