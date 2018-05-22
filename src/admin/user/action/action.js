/**
 * 鲜花销售系统后台控制台产品页action类
 * Created by tianrenjie on 2018/5/16
 * */
import { createAction } from 'redux-actions';
import { message } from 'antd';
import {
  CONSOLE_USER_VIEW_INIT,
  UPDATE_ADMIN_USER,
  UPDATE_NORMAL_USER,
} from '../constant/constant';
import { getAdminList, getUserList } from '../../index/action/action';
import { updateAdminApi } from '../../../api/adminApi';
import { updateUserApi } from '../../../api/loginApi';

const onViewInitAction = createAction(CONSOLE_USER_VIEW_INIT);
const updateAdminUserAction = createAction(UPDATE_ADMIN_USER);
const updateNormalUserAction = createAction(UPDATE_NORMAL_USER);

/**
 * 视图初始化
 */
export const onViewInit = () => {
  return (dispatch) => {
    dispatch(onViewInitAction());
  };
};

/**
 * 修改管理员
 */
export const updateAdminUser = (params) => {
  return (dispatch) => {
    updateAdminApi(JSON.stringify({ condition: { username: params.username }, obj: { ...params } }), (data) => {
      if (data.code === 1) {
        message.success('修改用户成功！');
        dispatch(updateAdminUserAction({ data }));
        getAdminList()(dispatch);
      } else {
        message.error('修改用户失败！');
      }
    }, (err) => {
      message.error(err);
    });
  };
};

/**
 * 修改用户
 */
export const updateNormalUser = (params) => {
  return (dispatch) => {
    updateUserApi(JSON.stringify({ condition: { username: params.username }, obj: { ...params } }), (data) => {
      if (data.code === 1) {
        message.success('修改用户成功！');
        dispatch(updateNormalUserAction({ data }));
        getUserList()(dispatch);
      } else {
        message.error('修改用户失败！');
      }
    }, (err) => {
      message.error(err);
    });
  };
};
