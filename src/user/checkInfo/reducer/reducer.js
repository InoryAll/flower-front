/**
 * 鲜花销售系统订单页reducer类
 * Created by tianrenjie on 2018/5/16
 * */
import {
  CHECK_INFO_VIEW_INIT,
  GET_ORDER,
  ADD_ORDER,
  UPDATE_ORDER
} from '../constant/constant';

const initState = {
  code: undefined,
  message: undefined,
  data: undefined,
};

export function order(state = initState, action) {
  switch (action.type) {
    case CHECK_INFO_VIEW_INIT:
    case ADD_ORDER:
    case UPDATE_ORDER:
      return state;
    case GET_ORDER:
      return { ...state, ...initState, ...action.payload.data };
    default:
      return state;
  }
}
