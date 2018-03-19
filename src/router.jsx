/**
 * 路由规则
 * Created by tianrenjie on 2017/11/9
 */
import React from 'react';
import { browserHistory, Router, Route, IndexRoute } from 'react-router';
import Index from './user/index/Index';

export const router = (
  <Router history={browserHistory}>
    <Route path="/">
      <IndexRoute component={Index} />
    </Route>
  </Router>
);
