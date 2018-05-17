/**
 * 鲜花销售系统登录action类
 * Created by tianrenjie on 2018/5/15
 */
import { createAction } from 'redux-actions';
import { browserHistory } from 'react-router';
import _ from 'lodash';
import { message } from 'antd';
import { push } from 'react-router-redux';
import Cookie from '../../../common/cookie';
import {
  LOGIN_VIEW_INIT,
  VALIDATE_LOGIN_STATE,
  DO_LOGIN,
  UPDATE_USER,
} from '../constant/constant';
import {
  loginApi,
  updateUserApi,
} from '../../../api/loginApi';

const onViewInitAction = createAction(LOGIN_VIEW_INIT);
const onValidateLoginStateAction = createAction(VALIDATE_LOGIN_STATE);
const onLoginAction = createAction(DO_LOGIN);
const onUpdateUserAction = createAction(UPDATE_USER);

/**
 * 视图初始化
 */
export const onViewInit = () => {
  return (dispatch) => {
    dispatch(onViewInitAction());
  };
};

/**
 * 从cookie中获取用户信息
 */
export const validateLoginState = () => {
  return (dispatch) => {
    if (!_.isEmpty(Cookie.getCookie('username'))) {
      loginApi({ username: Cookie.getCookie('username'), deleteFlag: 0 }, (data) => {
        dispatch(onValidateLoginStateAction({ data }));
      }, (err) => {
        message.error(err);
      });
    }
  };
};

/**
 * 用户登录
 * @param params 用户参数
 * return {*}
 */
export const onLogin = (params) => {
  return (dispatch) => {
    loginApi({ username: params.username, deleteFlag: 0 }, (data) => {
      if (data.code === 1) {
        if (!_.isEmpty(data.data)) {
          if (data.data[0].password === params.password) {
            Cookie.setCookie('_id', data.data[0]._id);
            Cookie.setCookie('username', data.data[0].username);
            dispatch(onLoginAction({ data }));
            message.success('登陆成功！');
            setTimeout(() => {
             browserHistory.push('/');
            }, 300);
          } else {
            message.error('密码错误，请重试！');
          }
        } else {
          message.error('用户名不存在，请重试！');
        }
      } else {
        message.error('登录失败，请重试！');
      }
    }, (err) => {
      message.error(err.message);
    });
  };
};

/**
 * 更新用户
 */
export const updateUser = (params) => {
  return (dispatch) => {
    updateUserApi(JSON.stringify({ condition: { _id: Cookie.getCookie('_id') }, obj: { ...params } }), (data) => {
      if (data.code === 1) {
        dispatch(onUpdateUserAction({ data }));
        validateLoginState()(dispatch);
        message.success('用户信息更新成功！');
      } else {
        message.error('用户信息更新失败！');
      }
    }, (err) => {
      message.error(err);
    });
  };
};
