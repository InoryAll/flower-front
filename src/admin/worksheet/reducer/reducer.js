/**
 * 鲜花销售系统后台登录页action类
 * Created by tianrenjie on 2018/5/16
 * */
import {
  CONSOLE_WORKSHEET_VIEW_INIT,
  GET_WORKSHEET,
} from '../constant/constant';

const initState = {
  code: undefined,
  message: undefined,
  data: undefined,
};

export function worksheets(state = initState, action) {
  switch (action.type) {
    case CONSOLE_WORKSHEET_VIEW_INIT:
      return state;
    case GET_WORKSHEET:
      return { ...state, ...initState, ...action.payload.data };
    default:
      return state;
  }
}
