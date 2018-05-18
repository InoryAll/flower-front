/**
 * 鲜花销售系统后台登录页reducer类
 * Created by tianrenjie on 2018/5/16
 * */
import { GET_ADMIN_USER, ADMIN_LOGIN_VIEW_INIT } from '../constant/constant';

const initState = {
  _id: undefined,
  username: undefined,
  password: undefined,
  permission: undefined,
  deleteFlag: undefined,
};

export function admin(state = initState, action) {
  switch (action.type) {
    case ADMIN_LOGIN_VIEW_INIT:
      return state;
    case GET_ADMIN_USER:
      return { ...state, ...initState, ...action.payload.data.data[0] };
    default:
      return state;
  }
}
