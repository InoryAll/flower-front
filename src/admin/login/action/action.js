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
  ADD_ADMIN_USER,
} from '../constant/constant';
import { getAdminApi, addAdminApi } from '../../../api/adminApi';
import { getAdminList } from '../../index/action/action';

const onViewInitAction = createAction(ADMIN_LOGIN_VIEW_INIT);
const getAdminUserAction = createAction(GET_ADMIN_USER);
const addAdminUserAction = createAction(ADD_ADMIN_USER);

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

/**
 * 新增管理员
 */
export const addAdminUser = (params, callback) => {
  return (dispatch) => {
    getAdminApi({ username: params.username }, (data) => {
      if (data.data && !_.isEmpty(data.data[0])) {
        message.error('用户名已存在，请重试！');
      } else {
        addAdminApi(JSON.stringify({ ...params }), (res) => {
          if (res.code === 1) {
            getAdminApi({ username: params.username, deleteFlag: 0 }, (back) => {
              if (back.code === 1 && !_.isEmpty(back.data)) {
                dispatch(addAdminUserAction({ data: back }));
                message.success('添加管理员成功!');
                getAdminList({})(dispatch);
                callback && callback(params);
              } else {
                message.error('添加管理员失败，请重试!');
              }
            }, (err) => {
              message.error(err);
            });
          } else {
            message.error('添加管理员失败，请重试!');
          }
        }, (err) => {
          message.error(err);
        });
      }
    }, (err) => {
      message.error(err);
    });
  };
};
