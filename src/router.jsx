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
import ShoppingFinish from './user/shoppingFinish/ShoppingFinish';
import UserInfo from './user/userInfo/UserInfo';
import Info from './user/info/Info';
import AdminLogin from './admin/login/Login';
import Console from './admin/console/Console';
import ConsoleIndex from './admin/index/Index';

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
      <Route path="result" component={ShoppingFinish} />
      <Route path="user" component={UserInfo} />
      <Route path="info(/:id)" component={Info} />
    </Route>
    <Route path="/admin">
      <Route path="login" component={AdminLogin} />
      <Route path="console" component={Console}>
        <IndexRoute component={ConsoleIndex} />
      </Route>
    </Route>
  </Router>
);
