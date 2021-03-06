/**
 * 鲜花销售系统产品页reducer类
 * Created by tianrenjie on 2018/5/16
 * */
import {
  ITEM_DETAIL_VIEW_INIT,
  GET_SINGLE_ITEM,
  GET_ITEM_COMMENT,
  ADD_ITEM_COMMENT,
} from '../constant/constant';

const initState = {
  code: undefined,
  message: undefined,
  data: undefined,
};

export function item(state = initState, action) {
  switch (action.type) {
    case ITEM_DETAIL_VIEW_INIT:
      return state;
    case GET_SINGLE_ITEM:
      return { ...state, ...initState, ...action.payload.data };
    default:
      return state;
  }
}

export function comment(state = initState, action) {
  switch (action.type) {
    case ITEM_DETAIL_VIEW_INIT:
    case ADD_ITEM_COMMENT:
      return state;
    case GET_ITEM_COMMENT:
      return { ...state, ...initState, ...action.payload.data };
    default:
      return state;
  }
}
