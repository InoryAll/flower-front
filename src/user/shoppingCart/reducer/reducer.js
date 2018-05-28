/**
 * 鲜花销售系统购物车页reducer类
 * Created by tianrenjie on 2018/5/16
 * */
import { SHOPPING_CART_VIEW_INIT, SELECT_ITEMS } from '../constant/constant';

const initState = [];

export function selectCarts(state = initState, action) {
  switch (action.type) {
    case SHOPPING_CART_VIEW_INIT:
      return state;
    case SELECT_ITEMS:
      return [...action.payload.data];
    default:
      return state;
  }
}
