/**
 * 路由规则
 * Created by tianrenjie on 2017/11/9
 */
import React from 'react';
import { browserHistory, Router, Route, IndexRoute } from 'react-router';
import Index from './user/index/Index';
import Login from './user/login/Login';
import Regedit from './user/regedit/Regedit';
import ItemList from './user/itemList/ItemList';
import ItemDetail from './user/itemDetail/ItemDeatil';
import ShoppingCart from './user/shoppingCart/ShoppingCart';
import CheckInfo from './user/checkInfo/CheckInfo';
import ShoppingPay from './user/shoppingPay/ShoppingPay';

export const router = (
  <Router history={browserHistory}>
    <Route path="/">
      <IndexRoute component={Index} />
      <Route path="login" component={Login} />
      <Route path="regedit" component={Regedit} />
      <Route path="itemList" component={ItemList} />
      <Route path="itemDetail" component={ItemDetail} />
      <Route path="cart" component={ShoppingCart} />
      <Route path="checkInfo" component={CheckInfo} />
      <Route path="pay" component={ShoppingPay} />
    </Route>
  </Router>
);
