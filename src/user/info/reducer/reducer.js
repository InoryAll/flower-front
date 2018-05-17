/**
 * 鲜花销售系统资讯页reducer类
 * Created by tianrenjie on 2018/5/16
 * */
import {
  INFO_VIEW_INIT,
  GET_INFO_LIST,
} from '../constant/constant';

const initState = {
  code: undefined,
  messgae: undefined,
  data: undefined,
};

export function infos(state = initState, action) {
  switch (action.type) {
    case INFO_VIEW_INIT:
      return state;
    case GET_INFO_LIST:
      return { ...state, ...initState, ...action.payload.data };
    default:
      return state;
  }
}
