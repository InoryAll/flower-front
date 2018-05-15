/**
 * 鲜花销售系统reducer类
 * Created by tianrenjie on 2018/5/15
 */
import {
  LOGIN_VIEW_INIT,
  VALIDATE_LOGIN_STATE,
  DO_LOGIN,
} from '../constant/constant';

const initState = {
  _id: undefined,
  username: undefined,
  password: undefined,
  name: undefined,
  sex: undefined,
  birthday: undefined,
  tel: undefined,
  email: undefined,
  permission: undefined,
  qq: undefined,
  place: undefined,
  deleteFlag: undefined,
};

export function user(state = initState, action) {
  switch (action.type) {
    case LOGIN_VIEW_INIT:
      return state;
    case VALIDATE_LOGIN_STATE :
      return { ...state, ...action.payload.data.data[0] };
    case DO_LOGIN:
      return { ...state, ...action.payload.data.data[0] };
    default:
      return state;
  }
}
