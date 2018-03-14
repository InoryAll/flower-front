/**
 * 路由规则
 * Created by tianrenjie on 2017/11/9
 */
import React from 'react';
import { browserHistory, Router, Route, IndexRoute } from 'react-router';

export const router = (
  <Router history={browserHistory}>
    <Route path="/">
      <IndexRoute />
    </Route>
  </Router>
);
