/**
 * 鲜花销售系统注册action类
 * Created by tianrenjie on 2018/5/15
 */
import { createAction } from 'redux-actions';
import { browserHistory } from 'react-router';
import _ from 'lodash';
import { message } from 'antd';
import { push } from 'react-router-redux';
import Cookie from '../../../common/cookie';
import {
  REGEDIT_VIEW_INIT,
  DO_REGEDIT,
} from '../constant/constant';
import { regeditApi } from '../../../api/regeditApi';
import { loginApi } from '../../../api/loginApi';
import { getUserList } from '../../../admin/index/action/action';

const onViewInitAction = createAction(REGEDIT_VIEW_INIT);
const onRegeditAction = createAction(DO_REGEDIT);

/**
 * 视图初始化
 */
export const onViewInit = () => {
  return (dispatch) => {
    dispatch(onViewInitAction());
  };
};

/**
 * 用户注册
 * @param params 用户对象
 * return {*}
 */
export const onRegedit = (params) => {
  return (dispatch) => {
    loginApi({ username: params.username }, (data) => {
      if (data.data && !_.isEmpty(data.data[0])) {
        message.error('用户名已存在，请重试！');
      } else {
        regeditApi(JSON.stringify({ ...params }), (res) => {
          if (res.code === 1) {
            loginApi({ username: params.username, deleteFlag: 0 }, (back) => {
              if (back.code === 1 && !_.isEmpty(back.data)) {
                Cookie.setCookie('_id', back.data[0]._id);
                Cookie.setCookie('username', back.data[0].username);
                dispatch(onRegeditAction({ data: back }));
                message.success('注册成功!');
                setTimeout(() => {
                  browserHistory.push('/login');
                }, 300);
              } else {
                message.error('注册失败，请重试!');
              }
            }, (err) => {
              message.error(err);
            });
          } else {
            message.error('注册失败，请重试!');
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

/**
 *  添加用户
 */
export const addUser = (params) => {
  return (dispatch) => {
    loginApi({ username: params.username }, (data) => {
      if (data.data && !_.isEmpty(data.data[0])) {
        message.error('用户名已存在，请重试！');
      } else {
        regeditApi(JSON.stringify({ ...params }), (res) => {
          if (res.code === 1) {
            loginApi({ username: params.username, deleteFlag: 0 }, (back) => {
              if (back.code === 1 && !_.isEmpty(back.data)) {
                dispatch(onRegeditAction({ data: back }));
                message.success('添加用户成功!');
                getUserList({})(dispatch);
              } else {
                message.error('添加用户失败，请重试!');
              }
            }, (err) => {
              message.error(err);
            });
          } else {
            message.error('添加用户失败，请重试!');
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
