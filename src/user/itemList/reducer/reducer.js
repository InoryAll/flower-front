/**
 * 鲜花销售系统列表页reducer类
 * Created by tianrenjie on 2018/5/16
 * */
import {
  ITEM_VIEW_INIT,
  FILT_ITEM_LIST,
} from '../constant/constant';
import { GET_ITEM } from '../../../user/index/constant/constant';

const initState = {
  code: undefined,
  message: undefined,
  data: undefined,
};

export function itemList(state = initState, action) {
  switch (action.type) {
    case ITEM_VIEW_INIT:
      return state;
    case GET_ITEM:
      return { ...state, ...initState, ...action.payload.data };
    case FILT_ITEM_LIST:
      return { ...state, ...initState, ...action.payload.data };
    default:
      return state;
  }
}
