/**
 * 鲜花销售系统后台控制台页action类
 * Created by tianrenjie on 2018/5/16
 * */
import { createAction } from 'redux-actions';
import { message } from 'antd';
import {
  CONSOLE_ACTION_VIEW_INIT,
  GET_ACTIONS,
} from '../constant/constant';
import { getActionApi } from '../../../api/adminApi';

const onViewInitAction = createAction(CONSOLE_ACTION_VIEW_INIT);
const getActionsAction = createAction(GET_ACTIONS);

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
