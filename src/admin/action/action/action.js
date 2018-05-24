/**
 * 鲜花销售系统后台控制台页action类
 * Created by tianrenjie on 2018/5/16
 * */
import { createAction } from 'redux-actions';
import { message } from 'antd';
import {
  CONSOLE_ACTION_VIEW_INIT,
  GET_ACTIONS,
  ADD_ACTION,
} from '../constant/constant';
import { getActionApi } from '../../../api/adminApi';
import { addActionApi } from '../../../api/actionApi';

const onViewInitAction = createAction(CONSOLE_ACTION_VIEW_INIT);
const getActionsAction = createAction(GET_ACTIONS);
const addActionAction = createAction(ADD_ACTION);

/**
 * 视图初始化
 */
export const onViewInit = () => {
  return (dispatch) => {
    dispatch(onViewInitAction());
  };
};

/**
 * 获取操作记录
 */
export const getActions = () => {
  return (dispatch) => {
    getActionApi({}, (data) => {
      if (data.code === 1) {
        dispatch(getActionsAction({ data }));
      } else {
        message.error('获取操作记录失败！');
      }
    }, (err) => {
      message.error(err);
    });
  };
};

/**
 * 添加操作记录
 */
export const addAction = (params) => {
  return (dispatch) => {
    addActionApi(JSON.stringify({ ...params }), (data) => {
      if (data.code === 1) {
        dispatch(addActionAction({ data }));
        getActions()(dispatch);
      } else {
        message.error('添加操作记录失败！');
      }
    }, (err) => {
      message.error(err);
    });
  };
};
