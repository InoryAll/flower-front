/**
 * 根reducer
 * Created by tianrenjie on 2017/11/9
 */
import { combineReducers } from 'redux';
import { user } from './user/login/reducer/reducer';
import { shoppingItems, cart } from './user/index/reducer/reducer';
import { itemList } from './user/itemList/reducer/reducer';

export const rootReducer = combineReducers({
  user,
  shoppingItems,
  cart,
  itemList,
});
