/**
 * 鲜花销售系统后台控制台页action类
 * Created by tianrenjie on 2018/5/16
 * */
import { createAction } from 'redux-actions';
import { message } from 'antd';
import {
  CONSOLE_INDEX_VIEW_INIT,
  GET_USER_LIST,
  GET_ADMIN_LIST,
} from '../constant/constant';
import { loginApi } from '../../../api/loginApi';
import { getAdminApi } from '../../../api/adminApi';

const onViewInitAction = createAction(CONSOLE_INDEX_VIEW_INIT);
const getUserListAction = createAction(GET_USER_LIST);
const getAdminListAction = createAction(GET_ADMIN_LIST);

/**
 * 视图初始化
 */
export const onViewInit = () => {
  return (dispatch) => {
    dispatch(onViewInitAction());
  };
};

/**
 * 获取用户列表
 */
export const getUserList = () => {
  return (dispatch) => {
    loginApi({}, (data) => {
      if (data.code === 1) {
        dispatch(getUserListAction({ data }));
      } else {
        message.error('获取用户列表失败！');
      }
    }, (err) => {
      message.error(err);
    });
  };
};

/**
 * 获取管理员列表
 */
export const getAdminList = () => {
  return (dispatch) => {
    getAdminApi({}, (data) => {
      if (data.code === 1) {
        dispatch(getAdminListAction({ data }));
      } else {
        message.error('获取管理员列表失败！');
      }
    }, (err) => {
      message.error(err);
    });
  };
};
