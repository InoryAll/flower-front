/**
 * 鲜花销售个人中心页reducer类
 * Created by tianrenjie on 2018/5/15
 */
import {
  USER_INFO_VIEW_INIT,
  GET_ALL_ORDERS,
} from '../constant/constant';

const initState = {
  code: undefined,
  message: undefined,
  data: undefined,
};

export function orderList(state = initState, action) {
  switch (action.type) {
    case USER_INFO_VIEW_INIT:
      return state;
    case GET_ALL_ORDERS:
      return { ...state, ...initState, ...action.payload.data };
    default:
      return state;
  }
}
