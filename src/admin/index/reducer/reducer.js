/**
 * 鲜花销售系统后台控制台页reducer类
 * Created by tianrenjie on 2018/5/16
 * */
import {
  CONSOLE_INDEX_VIEW_INIT,
  GET_USER_LIST,
  GET_ADMIN_LIST,
} from '../constant/constant';

const initState = {
  code: undefined,
  message: undefined,
  data: undefined,
};


export function userList(state = initState, action) {
  switch (action.type) {
    case CONSOLE_INDEX_VIEW_INIT:
      return state;
    case GET_USER_LIST:
      return { ...state, ...initState, ...action.payload.data };
    default:
      return state;
  }
}

export function adminList(state = initState, action) {
  switch (action.type) {
    case CONSOLE_INDEX_VIEW_INIT:
      return state;
    case GET_ADMIN_LIST:
      return { ...state, ...initState, ...action.payload.data };
    default:
      return state;
  }
}
