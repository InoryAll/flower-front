/**
 * 鲜花销售系统后台登录页action类
 * Created by tianrenjie on 2018/5/16
 * */
import { createAction } from 'redux-actions';
import { message } from 'antd';
import { browserHistory } from 'react-router';
import _ from 'lodash';
import {
  ADMIN_LOGIN_VIEW_INIT,
  GET_ADMIN_USER,
} from '../constant/constant';
import { getAdminApi } from '../../../api/adminApi';

const onViewInitAction = createAction(ADMIN_LOGIN_VIEW_INIT);
const getAdminUserAction = createAction(GET_ADMIN_USER);

/**
 * 视图初始化
 */
export const onViewInit = () => {
  return (dispatch) => {
    dispatch(onViewInitAction());
  };
};

/**
 * 获取管理员
 */
export const getAdminUser = (params) => {
  return (dispatch) => {
    getAdminApi({ ...params, deleteFlag: 0 }, (data) => {
      if (data.code === 1 && !_.isEmpty(data.data)) {
        dispatch(getAdminUserAction({ data }));
        message.success('登陆成功！');
        browserHistory.push('/admin/console');
      } else {
        message.error('获取用户信息失败!');
      }
    }, (err) => {
      message.error(err);
    });
  };
};
