/**
 * 鲜花销售系统注册action类
 * Created by tianrenjie on 2018/5/15
 */
import {
  REGEDIT_VIEW_INIT,
  DO_REGEDIT,
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
    case REGEDIT_VIEW_INIT:
    case DO_REGEDIT:
    default:
      return state;
  }
}
