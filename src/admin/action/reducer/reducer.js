/**
 * 鲜花销售系统后台控制台页action类
 * Created by tianrenjie on 2018/5/16
 * */
import {
  CONSOLE_ACTION_VIEW_INIT,
  GET_ACTIONS,
} from '../constant/constant';

const initState = {
  code: undefined,
  message: undefined,
  data: undefined,
};

export function actions(state = initState, action) {
  switch (action.type) {
    case CONSOLE_ACTION_VIEW_INIT:
      return state;
    case GET_ACTIONS:
      return { ...state, ...initState, ...action.payload.data };
    default:
      return state;
  }
}
