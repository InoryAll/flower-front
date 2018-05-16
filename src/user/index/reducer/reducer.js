/**
 * 鲜花销售系统主页reducer类
 * Created by tianrenjie on 2018/5/15
 */
import { combineReducers } from 'redux';
import {
  INDEX_VIEW_INIT,
  GET_ITEM,
  GET_HOT_SALE,
  GET_FIRST_FLOOR,
  GET_SECOND_FLOOR,
  GET_THIRD_FLOOR,
  GET_FORTH_FLOOR,
  GET_DAILY_SALE,
  GET_CART,
  DELETE_GOOD,
} from '../constant/constant';
import {
  ITEM_VIEW_INIT,
} from '../../itemList/constant/constant';

const initState = {
  code: undefined,
  message: undefined,
  data: undefined,
};

export function items(state = initState, action) {
  switch (action.type) {
    case INDEX_VIEW_INIT:
    case ITEM_VIEW_INIT:
      return state;
    case GET_ITEM:
      return { ...state, ...initState, ...action.payload.data };
    default:
      return state;
  }
}

export function hotSale(state = initState, action) {
  switch (action.type) {
    case INDEX_VIEW_INIT:
    case ITEM_VIEW_INIT:
      return state;
    case GET_HOT_SALE:
      return { ...state, ...initState, ...action.payload.data };
    default:
      return state;
  }
}

export function firstFloor(state = initState, action) {
  switch (action.type) {
    case INDEX_VIEW_INIT:
    case ITEM_VIEW_INIT:
      return state;
    case GET_FIRST_FLOOR:
      return { ...state, ...initState, ...action.payload.data };
    default:
      return state;
  }
}

export function secondFloor(state = initState, action) {
  switch (action.type) {
    case INDEX_VIEW_INIT:
    case ITEM_VIEW_INIT:
      return state;
    case GET_SECOND_FLOOR:
      return { ...state, ...initState, ...action.payload.data };
    default:
      return state;
  }
}

export function thirdFloor(state = initState, action) {
  switch (action.type) {
    case INDEX_VIEW_INIT:
    case ITEM_VIEW_INIT:
      return state;
    case GET_THIRD_FLOOR:
      return { ...state, ...initState, ...action.payload.data };
    default:
      return state;
  }
}

export function forthFloor(state = initState, action) {
  switch (action.type) {
    case INDEX_VIEW_INIT:
    case ITEM_VIEW_INIT:
      return state;
    case GET_FORTH_FLOOR:
      return { ...state, ...initState, ...action.payload.data };
    default:
      return state;
  }
}

export function dailySale(state = initState, action) {
  switch (action.type) {
    case INDEX_VIEW_INIT:
    case ITEM_VIEW_INIT:
      return state;
    case GET_DAILY_SALE:
      return { ...state, ...initState, ...action.payload.data };
    default:
      return state;
  }
}

export function cart(state = initState, action) {
  switch (action.type) {
    case INDEX_VIEW_INIT:
    case ITEM_VIEW_INIT:
      return state;
    case GET_CART:
      return { ...state, ...initState, ...action.payload.data };
    case DELETE_GOOD:
    default:
      return state;
  }
}

export const shoppingItems = combineReducers({
  items,
  hotSale,
  firstFloor,
  secondFloor,
  thirdFloor,
  forthFloor,
  dailySale,
});
