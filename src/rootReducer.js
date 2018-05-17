/**
 * 根reducer
 * Created by tianrenjie on 2017/11/9
 */
import { combineReducers } from 'redux';
import { user } from './user/login/reducer/reducer';
import { shoppingItems, cart } from './user/index/reducer/reducer';
import { itemList } from './user/itemList/reducer/reducer';
import { item, comment } from './user/itemDetail/reducer/reducer';
import { order } from './user/checkInfo/reducer/reducer';
import { recommend } from './user/shoppingFinish/reducer/reducer';
import { orderList } from './user/userInfo/reducer/reducer';
import { infos } from './user/info/reducer/reducer';

export const rootReducer = combineReducers({
  user,
  shoppingItems,
  cart,
  itemList,
  item,
  comment,
  order,
  recommend,
  orderList,
  infos,
});
